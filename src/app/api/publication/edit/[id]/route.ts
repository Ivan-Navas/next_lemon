import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "@/libs/prisma";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const PUT = async (req: any, { params }: any) => {
  const data = await req.formData();
  const publicationId = params.id;
  const file: any = data.get("file");
  if (!file) {
    return NextResponse.json({
      status: "error",
      message: "No se encontró imagen",
    });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const response: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({
        folder: "red_social/publication"
      }, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
      .end(buffer);
  });

  const exist = await prisma.post.findUnique({
    where: {
      id: parseInt(publicationId),
      // authorId: userId
    },
  });
  if (exist) {
    const publiImage = await prisma.post.update({
      where: {
        id: parseInt(publicationId),
        // authorId: userId,
      },
      data: {
        image: response.secure_url,
      },
      include: {
        author: true,
        comment: true,
        like: true,
        share: true,
        view: true,
      }
    });

    return NextResponse.json({
      status: "success",
      message: "imagen subida",
      publication: publiImage,
    });
  } else {
    return NextResponse.json({
      status: "error",
      message: "La publicacin no existe",
    });
  }
};

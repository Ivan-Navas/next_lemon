import { prisma } from "@/libs/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: Request, { params }: any) => {
  const userId = params.id;
  //recojer informacion
  const { data } = await req.json();
  //comprobar si existe el usuario
  try {
    const exist = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
    if (exist) {
      //agregar la publicacion
      const publication = await prisma.post.create({
        data: {
          data: data,
          authorId: exist.id,
        },
      });
      //devolver la respuesta
      return NextResponse.json({
        status: "success",
        message: "Publicado",
        publication,
      });
    } else {
      return NextResponse.json({
        status: "error",
        message: "El usuario no existe",
      });
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      status: "success",
      message: "error al crear la publicación",
    });
  }
};

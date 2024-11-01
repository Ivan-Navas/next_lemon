import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: any, { params }: any) => {
  const { id, userId } = params;
  //verificar existe el like
  const exist = await prisma.like.findFirst({
    where: {
      AND: [{ authorId: parseInt(userId) }, { postId: parseInt(id) }],
    },
  });
  if (exist) {
    return NextResponse.json({
      status: "error",
      message: "El like existe",
    });
  }
  //guardar el like
  try {
    const like = await prisma.like.create({
      data: {
        authorId: parseInt(userId),
        postId: parseInt(id),
      },
    });
    //repuesta
    return NextResponse.json({
      status: "success",
      message: "liked",
      like,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Ocurrió un error",
    });
  }
};

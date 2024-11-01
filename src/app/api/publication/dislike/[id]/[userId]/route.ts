import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const DELETE = async (req: any, { params }: any) => {
  const { id, userId } = params;

  //verificar existe el like
  const exist = await prisma.like.findFirst({
    where: {
      authorId: parseInt(userId),
      postId: parseInt(id),
    },
  });
  if (!exist) {
    return NextResponse.json({
      status: "error",
      message: "El like no existe",
    });
  }
  //eliminar el like
  try {
    const dislike = await prisma.like.delete({
      where: {
        id: exist.id,
        authorId: parseInt(userId),
        postId: parseInt(id),
      },
    });
    //repuesta
    return NextResponse.json({
      status: "success",
      message: "disliked",
      dislike,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Ocurrió un error",
    });
  }
};

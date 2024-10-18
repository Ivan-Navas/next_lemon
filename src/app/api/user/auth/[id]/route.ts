import { prisma } from "@/libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, { params }: any) => {
  try {
    const userId = params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      include: {
        post: true,
        followers: true,
        following: true,
      },
    });

    if (user) {
      return NextResponse.json({
        status: "success",
        message: "Usuario",
        user: {
          id: user?.id,
          name: user?.name,
          email: user?.email,
          nickName: user?.nickName,
          image: user?.image,
          bio: user?.bio,
          date: user?.date,
          post: user?.post,
          follower: user?.followers,
          following: user?.following,
        },
      });
    }else{

    return NextResponse.json({
      status: "error",
      message: "El usuario no existe",
    });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: "error",
      message: "Ocurrio un error",
      error,
    });
  }
};

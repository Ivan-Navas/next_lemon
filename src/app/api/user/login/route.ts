import { User } from "@/helpers/interfaces/user";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: any, res: any) => {
  const user: User = await req.json();

  try {
    const exist = await prisma.user.findFirst({
      where: {
        email: user.email,
        password: user.password,
      },
    });
    const post = await prisma.post.findMany({
      where: {
        authorId: exist?.id
      }
    })
    
    if(exist){
    return NextResponse.json({
      status: "success",
      message: "Logeado con exito",
      user: {
       id: exist.id,
       name: exist.name,
       nickName: exist.nickName,
       email: exist.email,
       image: exist.image,
       post
      },
    });

    }else{
    return NextResponse.json({
      status: "error",
      message: "Correo o contraseña incorrectos",
    });

    }


  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Ha ocurrido un error",
      error,
    });
  }
};

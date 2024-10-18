import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export const POST = async (req: Request) => {
  try {
    const { name, nickName, email, password, confirm } = await req.json();
    const exist = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (exist) {
      return NextResponse.json({
        status: "error",
        message: "El usuario ya existe",
      });
    }
    if (name && nickName && email && password && confirm) {
      if (password === confirm) {
        const userRegister = await prisma.user.create({
          data: {
            name: name,
            nickName: nickName,
            email: email,
            password: password,
            image:
              "https://res.cloudinary.com/ivannavas/image/upload/v1729010512/red_social/perfil_images/q9g7sccte7pgwqli74dy.jpg",
          },
        });
        const token = jwt.sign(
          {
            id: userRegister.id,
            name: userRegister.name,
            nickName: userRegister.nickName,
            email: userRegister.email,
            image: userRegister.image,
          },
          process.env.SECRET,
          { expiresIn: "30d" }
        );
        return NextResponse.json({
          status: "success",
          message: "Regístrado con exito",
          token,
          user: userRegister,
        });
      } else {
        return NextResponse.json({
          status: "error",
          message: "Las contraseñas no coinciden",
        });
      }
    } else {
      return NextResponse.json({
        status: "error",
        message: "Faltan datos por llenar",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: "Ocurrio un error",
      error: error.message,
      stack: error.stack,
    });
  }
};

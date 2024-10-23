import { User } from "@/helpers/interfaces/user";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

export const POST = async (req: any, res: any) => {
  const user: User = await req.json();
  try {
    const exist = await prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });
    const post = await prisma.post.findMany({
      where: {
        authorId: exist?.id,
      },
    });

    if (exist) {
      const passwordValid = await bcrypt.compare(
        user.password,
        exist?.password
      );
      const token = jwt.sign(
        {
          id: exist.id,
          name: exist.name,
          nickName: exist.nickName,
          email: exist.email,
          image: exist.image,
        },
        process.env.SECRET,
        { expiresIn: "30d" }
      );
      if (passwordValid) {
        return NextResponse.json({
          status: "success",
          message: "Logeado con exito",
          token: token,
          user: {
            id: exist.id,
            name: exist.name,
            nickName: exist.nickName,
            email: exist.email,
            image: exist.image,
            post,
          },
        });
      } else {
        return NextResponse.json({
          status: "error",
          message: "Correo o contraseña incorrecta",
        });
      }
    } else {
      return NextResponse.json({
        status: "error",
        message: "Correo o contraseña incorrectos",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: "Ha ocurrido un error",
      error: error.message,
    });
  }
};

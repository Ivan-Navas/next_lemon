import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const userList = await prisma.user.findMany();
    if (userList) {
      return NextResponse.json({
        status: "success",
        message: "Lista de usuarios",
        list: userList,
      });
    }
    return NextResponse.json({
      status: "success",
      message: "No hay usuarios para mostrar",
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Ocurrió un error",
    });
  }
};

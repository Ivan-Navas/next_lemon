import { prisma } from "@/libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest)=>{
  try {
  const feed = await prisma.post.findMany(
    {include: {
      author: true,
    }}
  )
  return NextResponse.json({
    status: "success",
    message: "Feed",
    feed
  })
  } catch (error) {
    return NextResponse.json({
      status: "success",
      message: "ocurrioó un error",
      error
    })
  }
}
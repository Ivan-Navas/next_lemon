import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: any)=>{
  const data = await req.formData();

  return NextResponse.json({
    status:"success",
    message: "publicacion creada",
  })
}
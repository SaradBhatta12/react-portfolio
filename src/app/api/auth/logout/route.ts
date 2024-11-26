import { connectDb } from "@/utils/connectDB";
import { getIdfromToken } from "@/utils/getCookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDb();
  // make a loogut functionlaity
  const email = await getIdfromToken();
  if (!email || typeof email !== "string") {
    return NextResponse.json({
      message: "Already logged out",
      status: 400,
      success: false,
    });
  }
  //delete token
  cookies().delete("admin");
  return NextResponse.json({
    message: "Successfully logged out",
    status: 200,
    success: true,
  });
};

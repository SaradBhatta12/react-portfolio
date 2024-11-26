import { connectDb, prisma } from "@/utils/connectDB";
import { getIdfromToken } from "@/utils/getCookie";
import { setCookie } from "@/utils/setCookie";
import { uploadImage } from "@/utils/upload";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  await connectDb();
  const { email, password } = await req.json();
  const UserAlreadyExist = await prisma.admin.findFirst({
    where: {
      email,
    },
  });
  if (UserAlreadyExist) {
    await setCookie(UserAlreadyExist.email);
    return NextResponse.json({
      UserAlreadyExist,
      message: "successfully logged in ",
      status: 400,
      success: true,
    });
  }
  if (!email || !password) {
    return NextResponse.json({
      message: "require email and password to login",
      status: 400,
      success: false,
    });
  }

  if (!(email === process.env.EMAIL) || !(password === process.env.PASSWORD)) {
    return NextResponse.json({
      message: "Invalid creadiantials",
      status: 400,
      success: false,
    });
  }
  await setCookie(email);

  const emailId = await getIdfromToken();
  if (!emailId) {
    return NextResponse.json({
      message: "You're not authorized",
      status: 400,
      success: false,
    });
  }

  if (!emailId === email) {
    return NextResponse.json({
      message: "You're not authorized",
      status: 400,
      success: false,
    });
  }

  const user = await prisma.admin.create({
    data: {
      email,
      password,
      name: "", // Add required fields
      profile: "",
      intro: "",
      resume: "",
    },
  });

  return NextResponse.json({
    message: "Successfully created.",
    status: 400,
    success: true,
  });
};

export const PUT = async (req: NextRequest) => {
  await connectDb();
  const formdata = await req.formData();
  const name = formdata.get("name");
  const profile = formdata.get("profile");
  const intro = formdata.get("intro");
  const resume = formdata.get("resume");

  const profilepic = uploadImage(profile as File, "profilePic");
  const profilpp = (await profilepic).secure_url;
  const email = await getIdfromToken();

  if (!email || typeof email !== "string") {
    return NextResponse.json({
      message: "Invalid token",
      status: 400,
      success: false,
    });
  }

  if (email !== process.env.EMAIL) {
    return NextResponse.json({
      message: "You're not authorized",
      status: 400,
      success: false,
    });
  }

  const newUser = await prisma.admin.update({
    where: {
      email,
    },
    data: {
      name: name?.toString() || "",
      profile: profilpp?.toString() || "",
      intro: intro?.toString() || "",
      resume: resume?.toString() || "",
    },
  });

  return NextResponse.json({
    message: "Successfully updated",
    status: 200,
    success: true,
    newUser,
  });
};

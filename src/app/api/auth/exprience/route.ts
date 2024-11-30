import { connectDb, prisma } from "@/utils/connectDB";
import { getIdfromToken } from "@/utils/getCookie";
import { NextRequest, NextResponse } from "next/server";

await connectDb();
export const POST = async (req: NextRequest) => {
  const formdata = await req.formData();
  const position = formdata.get("position") as string;
  const companyName = formdata.get("companyName") as string;
  const startDate = formdata.get("startDate") as string;
  const endDate = formdata.get("endDate") as string;
  const description = formdata.get("description") as string;

  const isAdmin = await getIdfromToken();
  const admin = await prisma.admin.findUnique({
    where: {
      email: isAdmin as unknown as string,
    },
  });

  const adminId = admin?.id as string;
  console.log(adminId);
  if (!isAdmin) {
    return NextResponse.json({
      success: false,
      status: 201,
      message: "admin not found",
    });
  }
  const exprience = await prisma.experience.create({
    data: {
      position,
      companyName,
      startDate,
      endDate,
      description,
    },
  });

  return NextResponse.json({
    exprience,
    success: true,
    message: "exprience created",
    status: 200,
  });
};

export const GET = async () => {
  const expriences = await prisma.experience.findMany();
  return NextResponse.json({
    expriences,
    success: true,
    message: "expriences fetched",
    status: 200,
  });
};

export const DELETE = async (req: NextRequest) => {
  try {
    const id = await getIdfromToken();
    if (!id) {
      return NextResponse.json({
        success: false,
        status: 201,
        message: "unauthorized",
      });
    }
    const { exprienceId } = await req.json();

    const exprience = await prisma.experience.delete({
      where: {
        id: exprienceId as string,
      },
    });
    return NextResponse.json({
      exprience,
      success: true,
      message: "exprience deleted",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "internal server error",
    });
  }
};

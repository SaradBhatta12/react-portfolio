import { connectDb, prisma } from "@/utils/connectDB";
import { getIdfromToken } from "@/utils/getCookie";
import { uploadImage } from "@/utils/upload";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectDb();

    const formdata = await req.formData();
    const title = formdata.get("title");
    const description = formdata.get("description");
    const image = formdata.get("image");
    const live = formdata.get("live");
    const github = formdata.get("github");

    if (!image) {
      return NextResponse.json({
        message: "Image is required",
        status: 400,
        success: false,
      });
    }

    const uploadedImage = await uploadImage(image as File, "Project");

    if (!uploadedImage) {
      return NextResponse.json({
        message: "Failed to upload image",
        status: 500,
        success: false,
      });
    }

    const newProject = await prisma.project.create({
      data: {
        title: title?.toString() || "",
        description: description?.toString() || "",
        image:
          typeof uploadedImage === "object" ? uploadedImage.secure_url : "",
        live: live?.toString() || "",
        github: github?.toString() || "",
      },
    });

    return NextResponse.json({
      message: "Successfully created project",
      status: 201,
      success: true,
      newProject,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
      success: false,
    });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const Userid = await getIdfromToken();
    if (!Userid) {
      return NextResponse.json({
        message: "You are not authorized to delete this project",
        status: 401,
        success: false,
      });
    }

    const { Projectid } = await req.json(); // Parse JSON body

    const project = await prisma.project.delete({
      where: {
        id: Projectid,
      },
    });

    return NextResponse.json({
      message: "Successfully deleted project",
      status: 200,
      success: true,
      project,
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
      success: false,
    });
  }
};

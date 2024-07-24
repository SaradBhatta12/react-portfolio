import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "All fields are required",
          status: 400,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: `Your portfolio contact <${process.env.EMAIL}>`, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: "Hello ✔", // Subject line
      text: message, // plain text body
      html: `<b>Hello, my name is ${name}. Here is my message:</b><p>${message}</p>`, // html body
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Message sent successfully",
        status: 200,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Unable to send message",
        status: 500,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

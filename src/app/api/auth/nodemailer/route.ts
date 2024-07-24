import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure environment variables are defined
if (!process.env.EMAIL || !process.env.PASS) {
  throw new Error("Missing required environment variables: USER, PASS, EMAIL");
}

export const POST = async (req: NextRequest) => {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `Your portfolio contact <${email}>`, // sender address
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

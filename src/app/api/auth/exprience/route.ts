import { NextResponse } from "next/server";
import ConnectDB from "../../../../../utils/connectDB";
interface UserRes {
  status: number;
  success: boolean;
  message: string;
}
interface ReqBody {
  title: string;
  job: string;
  duration: string;
  tasks: string;
}

export const POST = async (req: Request) => {
  await ConnectDB();

  let name = await req.json();
  console.log(name);

  const response: UserRes = {
    status: 200,
    success: true,
    message: "hey",
  };
  return NextResponse.json({ response });
};

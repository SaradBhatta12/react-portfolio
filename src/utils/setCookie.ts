import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export const setCookie = async (email: string) => {
  const token = jwt.sign(email, process.env.JWT_SECRET as string);
  const tokenset = cookies().set("admin", token, {
    expires: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
  });
  return tokenset;
};

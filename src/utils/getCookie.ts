import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
export const getIdfromToken = async () => {
  const token = cookies().get("admin")?.value;
  if (!token) return null;
  const useremail = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  return useremail;
};

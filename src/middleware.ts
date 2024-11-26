import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicPath =
    path === "/login" || "/" || "/projects" || "/exprience" || "/contacts";
  const token = req.cookies.get("admin")?.value;
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/",
    "/admin",
    "/admin/add-biodata",
    "/admin/add-projects",
  ],
};

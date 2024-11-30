import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  // Explicitly check for public paths
  const isPublicPath =
    path === "/login" ||
    path === "/" ||
    path === "/projects" ||
    path === "/exprience" ||
    path === "/contacts";
  // Check for the token in cookies
  const token = req.cookies.get("admin")?.value;
  // Redirect logic based on path and token
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
    "/admin/add-exprience",
  ],
};

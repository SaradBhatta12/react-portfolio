"use client";

import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import GmailPack from "./components/sub-components/GmailPack";
import IconPack from "./components/sub-components/IconPack";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Paths where components should not render
  const hiddenPaths = [
    "/admin",
    "/admin/add-projects",
    "/admin/add-biodata",
    "/admin/add-exprience",
    "/login",
  ];
  const shouldShowComponents = !hiddenPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
        <NextTopLoader color="red" showSpinner={false} height={2} />

        {/* Render components conditionally */}
        {shouldShowComponents && (
          <>
            <Navbar />
            <GmailPack />
            <IconPack />
          </>
        )}

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}

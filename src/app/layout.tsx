"use client";

import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
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
    "/login",
  ];
  const shouldShowComponents = !hiddenPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
        <NextTopLoader color="white" />

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

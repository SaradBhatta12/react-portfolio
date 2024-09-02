import type { Metadata } from "next";
import IconPack from "./components/sub-components/IconPack";
import GmailPack from "./components/sub-components/GmailPack";
import "./globals.css";
import Navbar from "./components/Navbar";
import NextTopLoader from "nextjs-toploader";
import Cursor from "./components/sub-components/Cursor";
import Copyright from "./components/sub-components/Copyright";
export const metadata: Metadata = {
  title: "portfolio --sarad",
  description: "developed by sarad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Cursor /> */}
        <NextTopLoader color="white" />
        <Navbar />
        {children}
        <IconPack />
        <GmailPack />
        <Copyright />
      </body>
    </html>
  );
}

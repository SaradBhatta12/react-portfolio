import type { Metadata } from "next";
import IconPack from "./components/sub-components/IconPack";
import GmailPack from "./components/sub-components/GmailPack";
import "./globals.css";
import Navbar from "./components/Navbar";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader color="white" />
        <Navbar />
        {children}
        <IconPack />
        <GmailPack />
      </body>
    </html>
  );
}

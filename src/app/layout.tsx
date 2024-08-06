// export const runtime = "edge";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Codey V. Portfolio",
  description: "My personal portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucid English IELTS",
  description: "A comprehensive platform for mastering the IELTS exam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

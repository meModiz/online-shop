import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Kivis",
  description: "Kivis - electronics shop",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white ${inter.className} pointer-events-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

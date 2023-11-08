import { Logo } from "@/components/Logo/Logo";
import { Navbar } from "@/components/Navbar/Navbar";
import { T_NavItem } from "@/types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beathoven",
  description: "A music game for the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //todo: seperate
  const navItems: T_NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Play",
      href: "/play",
    },
    {
      title: "Settings",
      href: "/settings",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <Logo />
        <Navbar navItems={navItems} />
        {children}
      </body>
    </html>
  );
}

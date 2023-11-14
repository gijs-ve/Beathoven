import ChatBox from "@/components/Chatbox/Chatbox";
import { Logo } from "@/components/Logo/Logo";
import { Navbar } from "@/components/Navbar/Navbar";
import {Socket} from "@/components/Socket/Socket";
import { T_NavItem } from "../../../types";
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
      <Socket />
        <Logo />
        <Navbar navItems={navItems} />
        <ChatBox />
        <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full bg-gray-800">
          <div className="bg-blueish-700 w-[90%] px-[10%] py-[5%] rounded-xl border-2 border-blueish-800">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

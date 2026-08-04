import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Home from "./page";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sintoma de MORTE.",
  description: "literatura cinema música",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className="flex justify-center h-screen bg-[#B4B4B4]">
        
        <div className="w-full md:w-205 bg-[#232323]">
          <Navbar />
          {children}
        </div>
      </body> */}

      <body className="flex justify-center h-screen bg-[#B4B4B4]">
        <div>
          <header className="md:w-210 bg-black">
            <Link href={"https://sintomademorte.com/"}>
              <Image
                className="py-4 px-4"
                src="/assets/images/sintoma-de-morte-logo-branco-low-768x326.png"
                loading="eager"
                width={300}
                height={127}
                alt="Site logo"
              />
            </Link>

            <Navbar />
          </header>
          <main className="md:w-210">{children}</main>
          <footer className="md:w-210 flex h-30 items-center gap-[20%] justify-center bg-[#353535] ">
            <Link href="/contato">
              <FaMailBulk className="cursor-pointer  text-white size-12  hover:text-[#b4b4b4]" />
            </Link>

            <Link target="_blank" href="https://substack.com/@sintomademorte">
              <BsSubstack
                className="cursor-pointer  text-white size-10 hover:text-[#b4b4b4]"
              />
            </Link>

            <Link target="_blank" href="http://instagram.com/sintomademorte">
              <FaInstagram className="cursor-pointer  text-white size-12 hover:text-[#b4b4b4]" />
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ItemMenu } from "@/constant/ItemMenu";
import Footer from "@/components/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  
  description: "Sou um apaixonado desenvolvedor fullstack, dedicado a criar experiências online excepcionais. Com 4 anos e 10 meses de experiência na indústria de desenvolvimento, estou empenhado em construir aplicações web de alta qualidade que combinam a beleza do design com a funcionalidade.",
  keywords: [
    "Criação de Sistemas Web",
    "Desenvolvimento Web",
    "Manutenção Web",
  ],
  title: {
    default: "Elcio Monico Portfolio",
    template: "%s | Elcio Monico Portfolio",
  },
  robots: {
    index: true, 
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.className}`}>
      <body className="bg-white">
        <Header active={true} ItemMenu={ItemMenu} />
        {children}
        <Footer ItemMenu={ItemMenu}/>
      </body>
    </html>
  );
}

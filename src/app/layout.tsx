import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Produtos - Desafio Khipo"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className={`${inter.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex App made by @webzma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-[#F5F7FB]`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CCTV APHIN - Jasa Pasang & Service CCTV Bergaransi",
  description:
    "Layanan profesional pemasangan dan perbaikan CCTV untuk rumah, toko, dan kantor oleh CCTV APHIN (Pak Aphin). Gambar jernih, instalasi rapi, bisa dipantau online dari HP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
        {children}
      </body>
    </html>
  );
}

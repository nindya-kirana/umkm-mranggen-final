import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "UMKM Desa Mranggen",
    template: "%s | UMKM Desa Mranggen",
  },

  description:
    "Temukan berbagai UMKM, produk lokal, lokasi, dan informasi usaha masyarakat Desa Mranggen.",

  keywords: [
    "UMKM Mranggen",
    "UMKM Desa Mranggen",
    "UMKM lokal Mranggen",
    "produk lokal Mranggen",
    "usaha Desa Mranggen",
  ],

  authors: [
    {
      name: "UMKM Desa Mranggen",
    },
  ],

  creator: "UMKM Desa Mranggen",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "UMKM Desa Mranggen",
    title: "UMKM Desa Mranggen",
    description:
      "Temukan berbagai UMKM, produk lokal, lokasi, dan informasi usaha masyarakat Desa Mranggen.",
  },

  twitter: {
    card: "summary_large_image",
    title: "UMKM Desa Mranggen",
    description:
      "Temukan berbagai UMKM dan produk lokal Desa Mranggen.",
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
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#F7F5F2]">
        {children}

        <Footer />
      </body>
    </html>
  );
}
"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  umkm: {
    nama: string;
    kategori: string;
    image: string;
    deskripsi: string;
    rating: number;
    lokasi: string;
    whatsapp: string;
    maps: string;
  };
}

export default function HeroSection({
  umkm,
}: HeroSectionProps) {
  return (
    <section className="bg-[#F7F5F2] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={umkm.image}
            alt={umkm.nama}
            className="h-[500px] w-full rounded-[40px] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-5 left-8 rounded-full bg-white px-6 py-3 shadow-lg">
            <p className="font-bold text-[#8A6A4A]">
              {umkm.kategori}
            </p>
          </div>
        </motion.div>

        {/* INFORMASI */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-[#8A6A4A]">
            UMKM DESA MRANGGEN
          </p>

          <h1 className="text-5xl font-black leading-tight text-[#2D2926] md:text-6xl">
            {umkm.nama}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-yellow-500">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="font-semibold text-gray-700">
              {umkm.rating}
            </span>
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {umkm.deskripsi}
          </p>

          {/* Lokasi */}
          <div className="mt-8 flex items-center gap-3 text-gray-700">
            📍
            <span>{umkm.lokasi}</span>
          </div>

          {/* Tombol */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={`https://wa.me/${umkm.whatsapp}`}
              target="_blank"
              className="rounded-full bg-[#2D2926] px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-[#4A4039]"
            >
              Hubungi WhatsApp
            </a>

            <a
              href={umkm.maps}
              target="_blank"
              className="rounded-full border border-[#8A6A4A] px-8 py-4 font-bold text-[#8A6A4A] transition hover:bg-[#F5EFE8]"
            >
              Lihat Lokasi
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
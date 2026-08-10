"use client";

import { motion } from "framer-motion";

import { UMKM } from "@/types/umkm";
import { formatWhatsApp } from "@/lib/phone";

interface HeroSectionProps {
  umkm: UMKM;
}

export default function HeroSection({
  umkm,
}: HeroSectionProps) {
  return (
    <section className="bg-[#F7F5F2] px-4 py-8 sm:px-6 md:px-12 md:py-16 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-[42%_58%] items-center gap-3 sm:gap-5 md:grid-cols-2 md:gap-10">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={umkm.banner}
              alt={umkm.nama}
              className="
                h-[260px]
                w-full
                rounded-[24px]
                object-cover
                shadow-2xl

                sm:h-[320px]
                sm:rounded-[30px]

                md:h-[500px]
                md:rounded-[40px]
              "
            />

            {/* KATEGORI */}
            <div className="absolute -bottom-3 left-3 rounded-full bg-white px-3 py-1.5 shadow-lg sm:left-5 sm:px-5 sm:py-2.5 md:-bottom-5 md:left-8 md:px-6 md:py-3">
              <p className="text-[10px] font-bold text-[#8A6A4A] sm:text-xs md:text-sm">
                {umkm.kategori}
              </p>
            </div>
          </motion.div>


          {/* INFORMASI */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >

            {/* LABEL */}
            <p className="mb-1 text-[8px] font-bold tracking-[0.18em] text-[#8A6A4A] sm:mb-2 sm:text-[10px] sm:tracking-[0.25em] md:mb-3 md:text-sm md:tracking-[0.3em]">
              UMKM DESA MRANGGEN
            </p>


            {/* NAMA */}
            <h1 className="text-xl font-black leading-tight text-[#2D2926] sm:text-2xl md:text-5xl lg:text-6xl">
              {umkm.nama}
            </h1>


            {/* DESKRIPSI */}
            <p className="mt-3 line-clamp-3 text-[10px] leading-4 text-gray-600 sm:mt-4 sm:text-xs sm:leading-5 md:mt-8 md:text-lg md:leading-8">
              {umkm.deskripsi}
            </p>


            {/* LOKASI */}
            <div className="mt-3 flex items-start gap-1.5 text-[9px] text-gray-700 sm:mt-4 sm:text-xs md:mt-8 md:gap-3 md:text-base">
              <span>📍</span>

              <span className="line-clamp-2">
                {umkm.alamat}
              </span>
            </div>


            {/* TOMBOL */}
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 md:mt-10 md:gap-4">

              <a
                href={
                  umkm.whatsapp
                    ? `https://wa.me/${formatWhatsApp(umkm.whatsapp)}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  bg-[#2D2926]
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  text-white
                  transition
                  hover:scale-105
                  hover:bg-[#4A4039]

                  sm:px-4
                  sm:py-2.5
                  sm:text-[10px]

                  md:px-8
                  md:py-4
                  md:text-base
                "
              >
                Hubungi WhatsApp
              </a>


              <a
                href={umkm.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-[#8A6A4A]
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  text-[#8A6A4A]
                  transition
                  hover:bg-[#F5EFE8]

                  sm:px-4
                  sm:py-2.5
                  sm:text-[10px]

                  md:px-8
                  md:py-4
                  md:text-base
                "
              >
                Lihat Lokasi
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
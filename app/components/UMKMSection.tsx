"use client";

import { motion } from "framer-motion";
import UMKMCard from "./UMKMCard";
import Link from "next/link";
import { umkmData } from "../data/umkm";

export default function UMKMSection() {
  return (
    <section
      id="umkm"
      className="bg-[#F7F5F2] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-[#8A6A4A]">
              UMKM MRANGGEN
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[#2D2926] md:text-6xl">
              Temukan
              <br />
              <span className="font-normal italic">
                UMKM Lokal
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500">
            Jelajahi berbagai UMKM yang ada di Desa Mranggen
            dan temukan informasi mengenai usaha serta produk
            lokal yang tersedia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {umkmData.map((umkm, index) => (
            <motion.div
              key={umkm.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <UMKMCard umkm={umkm} />
            </motion.div>
          ))}
        </div>

        {/* Tombol */}
        <div className="mt-12 text-center">
          <Link
            href="/umkm"
            className="inline-block rounded-full bg-[#2D2926] px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#4A4039]"
          >
            Lihat Semua UMKM →
          </Link>
        </div>
      </div>
    </section>
  );
}
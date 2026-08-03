"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface UMKM {
  id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  foto: string;
  lokasi: string;
}

const dummyUMKM: UMKM[] = [
  {
    id: "1",
    nama: "Warung Makan Bu Siti",
    kategori: "Makanan",
    deskripsi:
      "Menyediakan berbagai makanan rumahan dengan cita rasa khas lokal.",
    foto: "/umkm/warung-1.jpg",
    lokasi: "Desa Mranggen",
  },
  {
    id: "2",
    nama: "Dapur Mranggen",
    kategori: "Makanan",
    deskripsi:
      "Pilihan makanan lezat yang dibuat dengan bahan-bahan berkualitas.",
    foto: "/umkm/warung-2.jpg",
    lokasi: "Desa Mranggen",
  },
  {
    id: "3",
    nama: "Kuliner Lokal Mranggen",
    kategori: "Makanan",
    deskripsi:
      "Nikmati beragam hidangan khas dari pelaku UMKM lokal.",
    foto: "/umkm/warung-3.jpg",
    lokasi: "Desa Mranggen",
  },
];

export default function FeaturedUMKM() {
  return (
    <section className="overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="text-sm font-black tracking-[0.25em] text-[#8A6A4A]">
              EXPLORE LOCAL BUSINESSES
            </p>

            <h2 className="mt-4 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-[#2D2926] md:text-7xl">
              Temukan
              <br />

              <span className="text-[#8A6A4A]">
                UMKM Mranggen
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="max-w-md leading-7 text-gray-500"
          >
            Temukan berbagai usaha dan produk lokal
            dari masyarakat Desa Mranggen.
          </motion.p>

        </div>

        {/* Category Filter */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-12 flex gap-3 overflow-x-auto pb-2"
        >
          <button className="whitespace-nowrap rounded-full bg-[#2D2926] px-6 py-3 text-sm font-bold text-white">
            Semua UMKM
          </button>

          <button className="whitespace-nowrap rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-600 transition hover:border-[#8A6A4A] hover:text-[#8A6A4A]">
            Makanan
          </button>

          <button className="whitespace-nowrap rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-600 transition hover:border-[#8A6A4A] hover:text-[#8A6A4A]">
            Minuman
          </button>
        </motion.div>

        {/* UMKM Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummyUMKM.map((umkm, index) => (
            <UMKMCard
              key={umkm.id}
              umkm={umkm}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-12 text-center"
        >
          <Link
            href="/umkm"
            className="inline-flex items-center gap-3 rounded-full bg-[#2D2926] px-7 py-4 font-bold text-white transition hover:bg-[#8A6A4A]"
          >
            Lihat Semua UMKM
            <span>↗</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

function UMKMCard({
  umkm,
  index,
}: {
  umkm: UMKM;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-[2rem] bg-[#F7F5F2] transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <motion.img
          src={umkm.foto}
          alt={umkm.nama}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#2D2926] backdrop-blur">
            {umkm.kategori}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black text-[#2D2926]">
            {umkm.nama}
          </h3>

          <span className="text-xl text-[#8A6A4A]">
            ↗
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {umkm.deskripsi}
        </p>

        <p className="mt-5 text-sm font-bold text-[#8A6A4A]">
          📍 {umkm.lokasi}
        </p>
      </div>
    </motion.div>
  );
}
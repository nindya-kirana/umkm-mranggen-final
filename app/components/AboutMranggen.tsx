"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import UMKMMap from "../components/maps/UMKMMap";
import { UMKM } from "@/types/umkm";

interface Props {
  umkms: UMKM[];
}

export default function AboutMranggen({ umkms }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      id="tentang-mranggen"
      className="relative overflow-hidden bg-[#F7F5F2] px-4 py-16 sm:px-15 md:px-12 md:py-24"
    >
      {/* Background Decoration */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#E8DED3] opacity-40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            HEADER
        ========================== */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
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
              ease: "easeOut",
            }}
          >
            <p className="mb-4 text-xs font-black tracking-[0.25em] text-[#8A6A4A] sm:text-sm">
              TENTANG MRANGGEN
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-[#2D2926] sm:text-5xl md:text-7xl">
              Mengenal
              <br />

              <span className="text-[#8A6A4A]">
                Desa Mranggen
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
          >
            Desa Mranggen memiliki potensi ekonomi lokal yang berasal
            dari berbagai usaha masyarakat. Melalui UMKM Mranggen,
            berbagai produk lokal dapat ditemukan dan dikenal oleh
            masyarakat secara lebih luas.
          </motion.p>
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:mt-16
            lg:grid-cols-[1.3fr_0.7fr]
            lg:items-stretch
          "
        >
          {/* =========================
              MAP
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              relative
              h-[520px]
              overflow-hidden
              rounded-[2rem]
              bg-white
              shadow-xl

              sm:h-[600px]

              lg:h-[720px]
            "
          >
            <motion.div
              style={{
                y: imageY,
              }}
              className="absolute inset-0 h-full w-full"
            >
              <UMKMMap umkms={umkms} />
            </motion.div>

            {/* Floating Card */}
            <div
              className="
                absolute
                left-4
                top-4
                z-[999]
                rounded-2xl
                bg-white/95
                px-4
                py-3
                shadow-xl
                backdrop-blur-md

                sm:left-6
                sm:top-6
                sm:px-6
                sm:py-4
              "
            >
              <p className="text-[10px] font-black tracking-[0.2em] text-[#8A6A4A] sm:text-xs sm:tracking-[0.25em]">
                PERSEBARAN UMKM
              </p>

              <h3 className="mt-1 text-lg font-black text-[#2D2926] sm:mt-2 sm:text-2xl">
                Lokasi UMKM
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                Total
                <span className="ml-2 font-black text-[#8A6A4A]">
                  {umkms.length}
                </span>
                &nbsp;UMKM telah terdaftar.
              </p>
            </div>
          </motion.div>

          {/* =========================
              POTENTIAL CARDS
          ========================== */}
          <div
            className="
              flex
              gap-4
              overflow-x-auto
              pb-2
              snap-x
              snap-mandatory
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              lg:grid
              lg:gap-6
              lg:overflow-visible
              lg:pb-0
              lg:snap-none
            "
          >
            <div className="min-w-[82%] snap-start sm:min-w-[48%] lg:min-w-0">
              <PotentialCard
                number="01"
                title={`${umkms.length} UMKM Terdaftar`}
                description="Seluruh UMKM yang telah terdaftar ditampilkan secara interaktif pada peta persebaran."
                delay={0.1}
              />
            </div>

            <div className="min-w-[82%] snap-start sm:min-w-[48%] lg:min-w-0">
              <PotentialCard
                number="02"
                title="Lokasi Mudah Ditemukan"
                description="Pengunjung dapat melihat lokasi setiap UMKM langsung melalui peta interaktif."
                delay={0.2}
              />
            </div>

            <div className="min-w-[82%] snap-start sm:min-w-[48%] lg:min-w-0">
              <PotentialCard
                number="03"
                title="Ekonomi Lokal"
                description="Digitalisasi membantu masyarakat menemukan dan mendukung UMKM Desa Mranggen."
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PotentialCard({
  number,
  title,
  description,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
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
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        x: -8,
      }}
      className="
        group
        rounded-[2rem]
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl

        sm:p-7
      "
    >
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-black tracking-widest text-[#8A6A4A]">
          {number}
        </span>

        <motion.span
          whileHover={{
            rotate: 45,
          }}
          className="text-2xl text-[#8A6A4A]"
        >
          ↗
        </motion.span>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-xl font-black text-[#2D2926] sm:mt-8 sm:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
        {description}
      </p>
    </motion.div>
  );
}
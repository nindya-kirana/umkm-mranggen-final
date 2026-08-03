"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

export default function AboutMranggen() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const {
    scrollYProgress,
  } = useScroll({
    target: sectionRef,

    offset: [
      "start end",
      "end start",
    ],
  });

  const imageY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [80, -80]
    );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7F5F2] px-6 py-24 md:px-12 lg:px-20"
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
        // className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#E9D8C4] opacity-40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

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

            <p className="mb-4 text-sm font-black tracking-[0.25em] text-[#8A6A4A]">
              TENTANG MRANGGEN
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-[#2D2926] md:text-7xl">

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
            className="max-w-xl text-lg leading-8 text-gray-600"
          >
            Desa Mranggen memiliki potensi ekonomi
            lokal yang berasal dari berbagai usaha
            masyarakat. Melalui UMKM Mranggen,
            berbagai produk lokal dapat ditemukan
            dan dikenal oleh masyarakat secara lebih
            luas.
          </motion.p>

        </div>

        {/* Main Visual */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Image / Visual */}

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
            className="relative min-h-[450px] overflow-hidden rounded-[2rem] bg-[#2D2926]"
          >

            <motion.div
              style={{
                y: imageY,
              }}
              className="absolute inset-[-10%]"
            >

              <img
                src="/mranggen.jpg"
                alt="Desa Mranggen"
                className="h-full w-full object-cover opacity-80"
              />

            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <p className="text-sm font-bold tracking-widest text-white/70">
                LOCAL POTENTIAL
              </p>

              <h3 className="mt-2 text-3xl font-black text-white">
                Potensi Lokal,
                <br />
                Cerita dari Mranggen.
              </h3>

            </div>

          </motion.div>

          {/* Potensi UMKM */}

          <div className="grid gap-6">

            <PotentialCard
              number="01"
              title="Produk Lokal"
              description="Beragam produk yang dihasilkan oleh pelaku UMKM Desa Mranggen."
              delay={0.1}
            />

            <PotentialCard
              number="02"
              title="Usaha Masyarakat"
              description="Usaha masyarakat menjadi bagian penting dari pertumbuhan ekonomi desa."
              delay={0.2}
            />

            <PotentialCard
              number="03"
              title="Potensi Berkembang"
              description="Dengan dukungan digital, UMKM lokal dapat dikenal lebih luas."
              delay={0.3}
            />

          </div>

        </div>

      </div>

    </section>
  );
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
        className="group rounded-[2rem] bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >

        <div className="flex items-start justify-between">

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

        <h3 className="mt-8 text-2xl font-black text-[#2D2926]">
            {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-500">
            {description}
        </p>

        </motion.div>
    );
    }
}

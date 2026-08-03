"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface HeroSlide {
  id: number;
  category: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  background: string;
  accent: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    category: "UMKM MRANGGEN",
    title: "Kenali UMKM di Desa Mranggen",
    description:
      "Temukan berbagai pelaku UMKM dan produk lokal yang ada di Desa Mranggen.",
    buttonText: "Jelajahi UMKM",
    image: "/hero-kuliner.png",
    background: "#D9C7B8",
    accent: "#3D3028",
  },

  {
    id: 2,
    category: "PRODUK LOKAL",
    title: "Temukan Produk Pilihan dari Mranggen",
    description:
      "Jelajahi berbagai produk lokal dan temukan pilihan yang sesuai dengan kebutuhanmu.",
    buttonText: "Jelajahi UMKM",
    image: "/hero-produk.png",
    background: "#E8C98B",
    accent: "#704A22",
  },

  {
    id: 3,
    category: "JELAJAHI UMKM",
    title: "Temukan Usaha Lokal di Sekitarmu",
    description:
      "Cari dan kenali berbagai UMKM yang berada di wilayah Desa Mranggen dengan mudah.",
    buttonText: "Jelajahi UMKM",
    image: "/hero-umkm.png",
    background: "#A9C5B0",
    accent: "#294B3A",
  },

  {
    id: 4,
    category: "DUKUNG UMKM LOKAL",
    title: "Bersama Mendukung UMKM Mranggen",
    description:
      "Mari mengenal, menemukan, dan mendukung perkembangan UMKM lokal di Desa Mranggen.",
    buttonText: "Jelajahi UMKM",
    image: "/hero-produk.png",
    background: "#C4C5C7",
    accent: "#34383D",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = slides[currentSlide];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === slides.length - 1 ? 0 : previous + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((previous) =>
      previous === slides.length - 1 ? 0 : previous + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1
    );
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden transition-colors duration-1000"
      style={{
        backgroundColor: slide.background,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decoration */}
      <motion.div
        key={`circle-${slide.id}`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{
          backgroundColor: slide.accent,
        }}
      />

      <motion.div
        key={`circle-bottom-${slide.id}`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.12 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full"
        style={{
          backgroundColor: slide.accent,
        }}
      />

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <div>
          <h1
            className="text-xl font-black tracking-tight md:text-2xl"
            style={{
              color: slide.accent,
            }}
          >
            UMKM
            <span className="font-normal">MRANGGEN</span>
          </h1>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#umkm"
            className="text-sm font-medium transition-opacity hover:opacity-60"
            style={{
              color: slide.accent,
            }}
          >
            Jelajahi UMKM
          </a>

          <a
            href="#kategori"
            className="text-sm font-medium transition-opacity hover:opacity-60"
            style={{
              color: slide.accent,
            }}
          >
            Kategori
          </a>

          <a
            href="#tentang"
            className="text-sm font-medium transition-opacity hover:opacity-60"
            style={{
              color: slide.accent,
            }}
          >
            Tentang
          </a>
        </div>

        <button
          className="rounded-full p-2 md:hidden"
          style={{
            color: slide.accent,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Main Hero */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-6 pb-20 pt-10 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid w-full items-center gap-12 lg:grid-cols-2"
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="max-w-xl"
            >
              <p
                className="mb-5 text-sm font-bold tracking-[0.3em]"
                style={{
                  color: slide.accent,
                }}
              >
                {slide.category}
              </p>

              <h2
                className="text-5xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
                style={{
                  color: slide.accent,
                }}
              >
                {slide.title}
              </h2>

              <p
                className="mt-7 max-w-md text-base leading-7 opacity-80 md:text-lg"
                style={{
                  color: slide.accent,
                }}
              >
                {slide.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#umkm"
                  className="group flex items-center gap-3 rounded-full px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:gap-5 hover:shadow-xl"
                  style={{
                    backgroundColor: slide.accent,
                  }}
                >
                  {slide.buttonText}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#peta"
                  className="rounded-full border-2 px-6 py-4 text-sm font-bold transition-all duration-300 hover:bg-white/20"
                  style={{
                    borderColor: slide.accent,
                    color: slide.accent,
                  }}
                >
                  Lihat Peta
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Decorative circle */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[300px] w-[300px] rounded-full md:h-[500px] md:w-[500px]"
                style={{
                  backgroundColor: slide.accent,
                  opacity: 0.15,
                }}
              />

              {/* Image Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 h-[350px] w-full max-w-[500px] overflow-hidden rounded-[40px] shadow-2xl md:h-[500px]"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Image Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold text-white">
                      Jelajahi UMKM Lokal
                    </p>

                    <p className="mt-1 text-xs text-white/80">
                      Desa Mranggen
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                }}
                className="absolute -bottom-5 -left-2 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl md:-left-10"
              >
                <p className="text-xs font-medium text-gray-500">
                  Dukung Produk
                </p>

                <p
                  className="text-lg font-black"
                  style={{
                    color: slide.accent,
                  }}
                >
                  Lokal Mranggen
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Slide Counter */}
          <div
            className="text-sm font-bold"
            style={{
              color: slide.accent,
            }}
          >
            <span className="text-2xl">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>

            <span className="mx-2 opacity-40">/</span>

            <span className="opacity-50">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Pergi ke slide ${index + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: currentSlide === index ? "40px" : "8px",
                  backgroundColor:
                    currentSlide === index
                      ? slide.accent
                      : `${slide.accent}55`,
                }}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-2">
            <button
              onClick={previousSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all hover:scale-105"
              style={{
                borderColor: slide.accent,
                color: slide.accent,
              }}
              aria-label="Slide sebelumnya"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all hover:scale-105"
              style={{
                borderColor: slide.accent,
                color: slide.accent,
              }}
              aria-label="Slide berikutnya"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
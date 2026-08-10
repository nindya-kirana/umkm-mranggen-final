"use client";

import Link from "next/link";
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
    image: "/hero-kuliner1.png",
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
      className="relative overflow-hidden transition-colors duration-1000"
      style={{
        backgroundColor: slide.background,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <motion.div
        key={`circle-${slide.id}`}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 0.2,
        }}
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
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 0.12,
        }}
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

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 sm:py-6 lg:px-12">
        <div>
          <h1
            className="text-xl font-black tracking-tight sm:text-2xl lg:text-3xl"
            style={{
              color: slide.accent,
            }}
          >
            UMKM{" "}
            <span className="font-normal">
              MRANGGEN
            </span>
          </h1>
        </div>

        {/* Mobile menu icon */}
        <button
          type="button"
          className="rounded-full p-2 md:hidden"
          style={{
            color: slide.accent,
          }}
          aria-label="Menu"
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

      {/* =========================================================
          MAIN HERO
      ========================================================= */}

      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-5 pb-20 pt-4 sm:px-6 sm:pt-10 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              grid
              w-full
              grid-cols-[1.05fr_0.95fr]
              items-center
              gap-3
              sm:gap-6
              lg:grid-cols-2
              lg:gap-12
            "
          >
            {/* =====================================================
                TEXT
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="min-w-0 max-w-xl"
            >
              {/* Category */}

              <p
                className="
                  mb-3
                  text-[8px]
                  font-bold
                  tracking-[0.18em]
                  sm:mb-5
                  sm:text-sm
                  sm:tracking-[0.3em]
                "
                style={{
                  color: slide.accent,
                }}
              >
                {slide.category}
              </p>

              {/* Title */}

              <h2
                className="
                  text-[1.75rem]
                  font-black
                  leading-[0.95]
                  tracking-tight
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
                style={{
                  color: slide.accent,
                }}
              >
                {slide.title}
              </h2>

              {/* Description */}

              <p
                className="
                  mt-4
                  max-w-md
                  text-[10px]
                  leading-5
                  opacity-80
                  sm:mt-7
                  sm:text-base
                  sm:leading-7
                  md:text-lg
                "
                style={{
                  color: slide.accent,
                }}
              >
                {slide.description}
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  sm:mt-9
                  sm:gap-4
                "
              >
                {/* Jelajahi UMKM */}

                <Link
                  href="/umkm"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-3
                    py-2.5
                    text-[9px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:gap-4
                    hover:shadow-xl
                    sm:gap-3
                    sm:px-6
                    sm:py-4
                    sm:text-sm
                  "
                  style={{
                    backgroundColor: slide.accent,
                  }}
                >
                  {slide.buttonText}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* Lihat Peta */}

                <a
                  href="/#tentang-mranggen"
                  className="
                    rounded-full
                    border-2
                    px-3
                    py-2.5
                    text-[9px]
                    font-bold
                    transition-all
                    duration-300
                    hover:bg-white/20
                    sm:px-6
                    sm:py-4
                    sm:text-sm
                  "
                  style={{
                    borderColor: slide.accent,
                    color: slide.accent,
                  }}
                >
                  Lihat Peta
                </a>
              </div>
            </motion.div>

            {/* =====================================================
                IMAGE — TETAP DI SEBELAH KANAN
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                min-w-0
                justify-center
                lg:justify-end
              "
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
                className="
                  absolute
                  h-[170px]
                  w-[170px]
                  rounded-full
                  sm:h-[300px]
                  sm:w-[300px]
                  md:h-[500px]
                  md:w-[500px]
                "
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
                className="
                  relative
                  z-10
                  h-[230px]
                  w-full
                  max-w-[500px]
                  overflow-hidden
                  rounded-[25px]
                  shadow-2xl
                  sm:h-[350px]
                  sm:rounded-[32px]
                  md:h-[500px]
                  lg:rounded-[40px]
                "
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Image Caption */}

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="rounded-xl bg-white/20 p-2.5 backdrop-blur-md sm:rounded-2xl sm:p-4">
                    <p className="text-[9px] font-semibold text-white sm:text-sm">
                      Jelajahi UMKM Lokal
                    </p>

                    <p className="mt-1 text-[8px] text-white/80 sm:text-xs">
                      Desa Mranggen
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                }}
                className="
                  absolute
                  -bottom-3
                  -left-1
                  z-20
                  rounded-xl
                  bg-white
                  px-3
                  py-2
                  shadow-xl
                  sm:-bottom-5
                  sm:-left-2
                  sm:rounded-2xl
                  sm:px-5
                  sm:py-4
                  md:-left-10
                "
              >
                <p className="text-[8px] font-medium text-gray-500 sm:text-xs">
                  Dukung Produk
                </p>

                <p
                  className="text-sm font-black sm:text-lg"
                  style={{
                    color: slide.accent,
                  }}
                ></p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================
          SLIDER CONTROLS
      ========================================================= */}

      <div className="absolute bottom-5 left-0 right-0 z-20 sm:bottom-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-12">

          {/* Slide Counter */}

          <div
            className="text-xs font-bold sm:text-sm"
            style={{
              color: slide.accent,
            }}
          >
            <span className="text-lg sm:text-2xl">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>

            <span className="mx-1 sm:mx-2 opacity-40">
              /
            </span>

            <span className="opacity-50">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Dots */}

          <div className="flex items-center gap-1.5 sm:gap-3">
            {slides.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Pergi ke slide ${index + 1}`}
                className="h-1.5 rounded-full transition-all duration-300 sm:h-2"
                style={{
                  width:
                    currentSlide === index
                      ? "30px"
                      : "6px",
                  backgroundColor:
                    currentSlide === index
                      ? slide.accent
                      : `${slide.accent}55`,
                }}
              />
            ))}
          </div>

          {/* Arrow Buttons */}

          <div className="flex gap-1.5 sm:gap-2">
            <button
              onClick={previousSlide}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                text-sm
                transition-all
                hover:scale-105
                sm:h-11
                sm:w-11
                sm:border-2
                sm:text-base
              "
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
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                text-sm
                transition-all
                hover:scale-105
                sm:h-11
                sm:w-11
                sm:border-2
                sm:text-base
              "
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
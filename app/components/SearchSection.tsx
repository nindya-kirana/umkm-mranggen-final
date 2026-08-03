"use client";

import { motion } from "framer-motion";

interface SearchSectionProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: (
    event: React.FormEvent<HTMLFormElement>
  ) => void;
}

export default function SearchSection({
  search,
  setSearch,
  handleSearch,
}: SearchSectionProps) {
  return (
    <section
      id="search"
      className="relative overflow-hidden px-6 py-28 md:px-12 lg:px-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-katalog1.png"
          alt="UMKM Desa Mranggen"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2D2926]/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-[#E9C9A7]">
            JELAJAHI MRANGGEN
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Temukan UMKM
            <br />

            <span className="font-normal italic text-[#E9C9A7]">
              di Sekitarmu
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Cari dan temukan berbagai UMKM lokal di Desa
            Mranggen berdasarkan nama usaha, produk, atau lokasi.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.form
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          onSubmit={handleSearch}
          className="mx-auto mt-10 flex max-w-3xl items-center rounded-full border border-white/20 bg-white/95 p-2 shadow-2xl"
        >
          {/* Search Icon */}
          <div className="flex h-12 w-12 items-center justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
              />

              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
              />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Cari nama UMKM, produk, atau lokasi..."
            className="min-w-0 flex-1 bg-transparent px-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 md:text-base"
          />

          {/* Button */}
          <button
            type="submit"
            className="rounded-full bg-[#2D2926] px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#4A4039]"
          >
            Cari
          </button>
        </motion.form>

        {/* Quick Search */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-sm text-white/60">
            Coba cari:
          </span>

          {[
            "Makanan",
            "Minuman",
            "Produk Lokal",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                setSearch(item)
              }
              className="rounded-full border border-white/30 px-4 py-2 text-xs font-medium text-white/80 transition-all hover:border-[#E9C9A7] hover:bg-white/10 hover:text-[#E9C9A7]"
            >
              {item}
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import { Category } from "@/types/category";

interface SearchSectionProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: (event: React.FormEvent) => void;
  categories?: Category[];
}

export default function SearchSection({
  search,
  setSearch,
  handleSearch,
  categories = [],
}: SearchSectionProps) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      {/* =========================================================
          MOBILE
          ========================================================= */}
      <section
        id="search"
        className="block w-full md:hidden"
      >
        <div
          className="
            relative
            h-[300px]
            w-full
            overflow-hidden
          "
        >
          {/* ================= BACKGROUND ================= */}
          <img
            src="/hero-katalog1.png"
            alt="UMKM Desa Mranggen"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* ================= OVERLAY ================= */}
          <div className="absolute inset-0 bg-[#2D2926]/65" />

          {/* ================= CONTENT ================= */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-center
              px-6
            "
          >
            {/* ================= HEADING ================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
              <p
                className="
                  mb-2
                  text-[9px]
                  font-bold
                  tracking-[0.25em]
                  text-[#E9C9A7]
                "
              >
                JELAJAHI MRANGGEN
              </p>

              <h2
                className="
                  text-[30px]
                  font-black
                  leading-[0.95]
                  text-white
                "
              >
                Temukan UMKM
                <br />

                <span
                  className="
                    font-normal
                    italic
                    text-[#E9C9A7]
                  "
                >
                  di Sekitarmu
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[330px]
                  text-[11px]
                  leading-5
                  text-white/75
                "
              >
                Cari UMKM berdasarkan nama usaha,
                kategori, maupun lokasi.
              </p>
            </motion.div>

            {/* =====================================================
                SEARCH + FILTER MOBILE
                ===================================================== */}
            <motion.form
              onSubmit={handleSearch}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                mx-auto
                mt-5
                flex
                w-full
                max-w-[390px]
                items-center
                gap-2
              "
            >
              {/* ================= SEARCH ================= */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  items-center
                  rounded-full
                  bg-white
                  p-1
                  shadow-xl
                "
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Cari UMKM..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-4
                    py-2.5
                    text-xs
                    text-gray-700
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                <button
                  type="submit"
                  className="
                    rounded-full
                    bg-[#2D2926]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#433B35]
                  "
                >
                  Cari
                </button>
              </div>

              {/* ================= FILTER BUTTON ================= */}
              <button
                type="button"
                onClick={() =>
                  setShowFilter((prev) => !prev)
                }
                aria-label="Filter kategori"
                className="
                  flex
                  h-[46px]
                  w-[46px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#2D2926]
                  shadow-xl
                  transition
                  hover:bg-[#F3ECE5]
                "
              >
                {showFilter ? (
                  <X
                    size={20}
                    strokeWidth={2.2}
                  />
                ) : (
                  <SlidersHorizontal
                    size={20}
                    strokeWidth={2.2}
                  />
                )}
              </button>
            </motion.form>

            {/* =====================================================
                MOBILE FILTER
                ===================================================== */}
            <AnimatePresence>
              {showFilter && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    mx-auto
                    mt-3
                    w-full
                    max-w-[390px]
                  "
                >
                  <div
                    className="
                      rounded-2xl

                      p-3
                      shadow-xl
                    "
                  >
                    <p
                      className="
                        mb-2
                        px-1
                        text-[11px]
                        font-semibold
                        text-white/80
                      "
                    >
                      Pilih Kategori
                    </p>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {/* SEMUA */}
                      <button
                        type="button"
                        onClick={() => {
                          setSearch("");
                          setShowFilter(false);
                        }}
                        className="
                          rounded-full
                          border
                          border-white/30
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          text-white
                          transition
                          hover:bg-[#433B35]
                        "
                      >
                        Semua
                      </button>

                      {/* KATEGORI */}
                      {categories.length > 0 ? (
                        categories.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              setSearch(item.nama);
                              setShowFilter(false);
                            }}
                            className="
                              rounded-full
                              border
                              border-white/30
                              px-3
                              py-1.5
                              text-[10px]
                              font-medium
                              text-white
                              transition
                              hover:bg-[#433B35]
                            "
                          >
                            {item.nama}
                          </button>
                        ))
                      ) : (
                        <span
                          className="
                            text-[10px]
                            text-gray-400
                          "
                        >
                          Belum ada kategori
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =========================================================
          DESKTOP
          TAMPILAN DIPERTAHANKAN
          ========================================================= */}
      <section
        id="search-desktop"
        className="
          relative
          hidden
          min-h-screen
          w-full
          overflow-hidden
          md:block
        "
      >
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0">
          <img
            src="/hero-katalog1.png"
            alt="UMKM Desa Mranggen"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>

        {/* ================= OVERLAY ================= */}
        <div
          className="
            absolute
            inset-0
            bg-[#2D2926]/75
          "
        />

        {/* ================= CONTENT ================= */}
        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            w-full
            items-center
            justify-center
            px-12
            lg:px-20
          "
        >
          <div
            className="
              w-full
              max-w-7xl
            "
          >
            {/* ================= HEADING ================= */}
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
              <p
                className="
                  mb-4
                  text-sm
                  font-bold
                  tracking-[0.3em]
                  text-[#E9C9A7]
                "
              >
                JELAJAHI MRANGGEN
              </p>

              <h2
                className="
                  text-5xl
                  font-black
                  text-white
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Temukan UMKM
                <br />

                <span
                  className="
                    font-normal
                    italic
                    text-[#E9C9A7]
                  "
                >
                  di Sekitarmu
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-white/70
                  md:text-lg
                "
              >
                Cari UMKM berdasarkan nama usaha,
                kategori, maupun lokasi.
              </p>
            </motion.div>

            {/* =====================================================
                SEARCH DESKTOP
                ===================================================== */}
            <motion.form
              onSubmit={handleSearch}
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
              className="
                mx-auto
                mt-10
                flex
                max-w-3xl
                items-center
                rounded-full
                border
                border-white/20
                bg-white/95
                p-2
                shadow-2xl
              "
            >
              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Cari nama UMKM, kategori, lokasi..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-5
                  py-3
                  text-base
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                "
              />

              <button
                type="submit"
                className="
                  rounded-full
                  bg-[#2D2926]
                  px-7
                  py-3.5
                  text-white
                  transition
                  hover:bg-[#433B35]
                "
              >
                Cari
              </button>
            </motion.form>

            {/* =====================================================
                CATEGORY DESKTOP
                Semua warna sama
                ===================================================== */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
              "
            >
              <span
                className="
                  text-sm
                  text-white/60
                "
              >
                Kategori:
              </span>

              {/* SEMUA */}
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  rounded-full
                  border
                  border-white/30
                  
                  px-5
                  py-2.5
                  text-sm
                  text-white
                  transition
                  hover:bg-[#433B35]
                "
              >
                Semua
              </button>

              {/* KATEGORI */}
              {categories.length > 0 ? (
                categories.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setSearch(item.nama)
                    }
                    className="
                      rounded-full
                      border
                      border-white/30
                      
                      px-5
                      py-2.5
                      text-sm
                      text-white
                      transition
                      hover:bg-[#433B35]
                    "
                  >
                    {item.nama}
                  </button>
                ))
              ) : (
                <span
                  className="
                    text-sm
                    text-white/50
                  "
                >
                  Belum ada kategori
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
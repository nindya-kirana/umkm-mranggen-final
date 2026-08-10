"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { UMKM } from "@/types/umkm";

interface Props {
  umkms: UMKM[];
}

export default function FeaturedUMKM({
  umkms,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef =
    useRef<HTMLDivElement>(null);

  /*
  |--------------------------------------------------------------------------
  | DETEKSI SLIDE AKTIF
  |--------------------------------------------------------------------------
  */

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = slider.children;

    if (!cards.length) return;

    const scrollLeft = slider.scrollLeft;

    const cardWidth =
      (cards[0] as HTMLElement).clientWidth;

    const gap = 16;

    const index = Math.round(
      scrollLeft / (cardWidth + gap)
    );

    setActiveIndex(
      Math.min(
        index,
        Math.max(umkms.length - 1, 0)
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | PINDAH SLIDE
  |--------------------------------------------------------------------------
  */

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card =
      slider.children[index] as HTMLElement;

    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section className="bg-[#D9C7B8] py-20 md:py-24">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mb-9
            flex
            flex-col
            justify-between
            gap-6

            md:mb-9
            md:flex-row
            md:items-end
          "
        >

          <div>

            <p
              className="
                text-sm
                font-black
                tracking-[0.25em]
                text-[#8A6A4A]
              "
            >
              EXPLORE LOCAL BUSINESSES
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-black
                leading-[0.95]
                tracking-tight
                text-[#2D2926]

                md:text-7xl
              "
            >
              Temukan
              <br />

              <span className="text-[#8A6A4A]">
                UMKM Mranggen
              </span>
            </h2>

          </div>

          <p
            className="
              max-w-md
              text-base
              leading-7
              text-gray-600

              md:text-lg
            "
          >
            Temukan berbagai UMKM lokal yang menjadi
            bagian dari potensi ekonomi Desa Mranggen.
            Temukan informasi usaha dan produk unggulan
            yang siap memenuhi kebutuhan Anda.
          </p>

        </div>


        {/* =====================================================
            MOBILE
        ====================================================== */}

        <div className="md:hidden">

          {umkms.length === 0 ? (

            <div
              className="
                rounded-[2rem]
                bg-white
                p-10
                text-center
              "
            >
              Belum ada UMKM.
            </div>

          ) : (

            <>

              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="
                  flex
                  gap-4
                  overflow-x-auto
                  snap-x
                  snap-mandatory
                  scroll-smooth
                  overscroll-x-contain
                  px-1
                  pb-2

                  [&::-webkit-scrollbar]:hidden
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                "
              >

                {umkms.map((umkm) => (

                  <Link
                    key={umkm.id}
                    href={`/umkm/${umkm.id}`}
                    className="
                      group
                      relative
                      block
                      w-[calc(100vw-4rem)]
                      min-w-[calc(100vw-4rem)]
                      snap-start
                      overflow-hidden
                      rounded-[2rem]
                      bg-white
                      shadow-xl
                    "
                  >

                    <div
                      className="
                        relative
                        h-[430px]
                        w-full
                        overflow-hidden
                      "
                    >

                      <img
                        src={
                          umkm.banner ||
                          "https://placehold.co/800x1000?text=UMKM"
                        }
                        alt={umkm.nama}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/75
                          via-black/10
                          to-transparent
                        "
                      />

                      {/* CATEGORY */}

                      <div
                        className="
                          absolute
                          left-5
                          top-5
                        "
                      >

                        <span
                          className="
                            rounded-full
                            bg-white
                            px-4
                            py-2
                            text-xs
                            font-bold
                            text-[#2D2926]
                            shadow-lg
                          "
                        >
                          {umkm.kategori}
                        </span>

                      </div>


                      {/* CONTENT */}

                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          right-0
                          p-6
                          text-white
                        "
                      >

                        <h3
                          className="
                            text-2xl
                            font-black
                          "
                        >
                          {umkm.nama}
                        </h3>

                        <p
                          className="
                            mt-2
                            line-clamp-2
                            text-sm
                            leading-6
                            text-white/80
                          "
                        >
                          {umkm.deskripsi}
                        </p>

                        <p
                          className="
                            mt-3
                            text-sm
                            font-medium
                            text-white/90
                          "
                        >
                          📍 {umkm.alamat}
                        </p>

                        <div
                          className="
                            mt-5
                            inline-flex
                            rounded-full
                            bg-white
                            px-5
                            py-3
                            text-sm
                            font-bold
                            text-[#2D2926]
                          "
                        >
                          Lihat Detail →
                        </div>

                      </div>

                    </div>

                  </Link>

                ))}

              </div>


              {/* DOT */}

              <div
                className="
                  mt-6
                  flex
                  justify-center
                  gap-2
                "
              >

                {umkms.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      goToSlide(index)
                    }
                    aria-label={`Ke UMKM ${index + 1}`}
                    className={`
                      h-2.5
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        activeIndex === index
                          ? "w-8 bg-[#2D2926]"
                          : "w-2.5 bg-[#8A6A4A]/40"
                      }
                    `}
                  />

                ))}

              </div>

            </>

          )}

        </div>


        {/* =====================================================
            DESKTOP
        ====================================================== */}

        <div
          className="
            hidden
            gap-6

            md:grid
            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {umkms.length === 0 ? (

            <div
              className="
                col-span-full
                rounded-[2rem]
                bg-white
                p-10
                text-center
              "
            >
              Belum ada UMKM.
            </div>

          ) : (

            umkms.map((umkm) => (

              <Link
                key={umkm.id}
                href={`/umkm/${umkm.id}`}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    relative
                    h-[430px]
                    overflow-hidden
                  "
                >

                  <img
                    src={
                      umkm.banner ||
                      "https://placehold.co/800x600?text=UMKM"
                    }
                    alt={umkm.nama}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                    "
                  >

                    <span
                      className="
                        rounded-full
                        bg-white/95
                        px-4
                        py-2
                        text-xs
                        font-bold
                        text-[#2D2926]
                        shadow-lg
                      "
                    >
                      {umkm.kategori}
                    </span>

                  </div>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-6
                      text-white
                    "
                  >

                    <h3
                      className="
                        text-2xl
                        font-black
                      "
                    >
                      {umkm.nama}
                    </h3>

                    <p
                      className="
                        mt-3
                        line-clamp-2
                        text-sm
                        leading-6
                        text-white/80
                      "
                    >
                      {umkm.deskripsi}
                    </p>

                    <p
                      className="
                        mt-4
                        text-sm
                        font-semibold
                        text-white/90
                      "
                    >
                      📍 {umkm.alamat}
                    </p>

                  </div>

                </div>

              </Link>

            ))

          )}

        </div>


        {/* =====================================================
            LIHAT SEMUA
        ====================================================== */}

        <div
          className="
            mt-10
            text-center

            md:mt-12
          "
        >

          <Link
            href="/umkm"
            className="
              inline-flex
              rounded-full
              bg-[#2D2926]
              px-8
              py-4
              font-bold
              text-white
              transition
              hover:bg-[#433B35]
            "
          >
            Lihat Semua UMKM
          </Link>

        </div>

      </div>

    </section>
  );
}
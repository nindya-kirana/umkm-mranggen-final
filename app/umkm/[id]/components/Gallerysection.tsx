"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  images: string[];
}

export default function GallerySection({
  images,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const handleScroll = () => {
    if (!galleryRef.current) return;

    const container = galleryRef.current;

    const index = Math.round(
      container.scrollLeft / container.clientWidth
    );

    setActiveIndex(
      Math.min(index, images.length - 1)
    );
  };

  const goToSlide = (index: number) => {
    if (!galleryRef.current) return;

    const container = galleryRef.current;

    container.scrollTo({
      left: index * container.clientWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-10 md:mb-12">
          <p
            className="
              text-sm
              font-bold
              tracking-[0.3em]
              text-[#8A6A4A]
            "
          >
            GALERI
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-black
              leading-tight
              text-[#2D2926]

              md:text-5xl
            "
          >
            Galeri UMKM
          </h2>
        </div>


        {/* =====================================================
            MOBILE
        ====================================================== */}

        <div className="md:hidden">

          <div
            ref={galleryRef}
            onScroll={handleScroll}
            className="
              flex
              w-full
              snap-x
              snap-mandatory
              overflow-x-auto
              scroll-smooth
              overscroll-x-contain

              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >

            {images.map((image, index) => (
              <div
                key={index}
                className="
                  w-full
                  shrink-0
                  snap-center
                  px-0.5
                "
              >

                <img
                  src={image}
                  alt={`Galeri UMKM ${index + 1}`}
                  className="
                    h-[260px]
                    w-full
                    rounded-[28px]
                    object-cover
                    shadow-lg
                  "
                />

              </div>
            ))}

          </div>


          {/* =================================================
              DOT INDICATOR
          ================================================== */}

          {images.length > 1 && (
            <div className="mt-5 flex items-center justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Foto ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "h-2 w-6 bg-[#8A6A4A]"
                        : "h-2 w-2 bg-[#D8C8BA]"
                    }
                  `}
                />
              ))}
            </div>
          )}

        </div>


        {/* =====================================================
            DESKTOP
        ====================================================== */}

        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">

          {images.map((image, index) => (
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
            >

              <img
                src={image}
                alt={`Galeri UMKM ${index + 1}`}
                className="
                  h-64
                  w-full
                  rounded-3xl
                  object-cover
                  shadow-lg
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
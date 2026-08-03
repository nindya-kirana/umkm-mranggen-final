"use client";

import { motion } from "framer-motion";

interface Props {
  images: string[];
}

export default function GallerySection({
  images,
}: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">

          <p className="text-sm font-bold tracking-[0.3em] text-[#8A6A4A]">
            GALERI
          </p>

          <h2 className="mt-3 text-5xl font-black text-[#2D2926]">
            Galeri UMKM
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt=""
              whileHover={{
                scale: 1.05,
              }}
              className="h-64 w-full rounded-3xl object-cover shadow-lg"
            />
          ))}

        </div>

      </div>
    </section>
  );
}
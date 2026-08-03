"use client";

import { motion } from "framer-motion";

interface Product {
  id: number;
  nama: string;
  harga: string;
  image: string;
  deskripsi: string;
}

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({
  product,
  index,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
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
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-2xl"
    >
      {/* Foto */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.nama}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-black text-[#2D2926]">
            {product.nama}
          </h3>

          <span className="rounded-full bg-[#F5EFE8] px-3 py-1 text-sm font-bold text-[#8A6A4A]">
            ⭐ 4.9
          </span>

        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-500">
          {product.deskripsi}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-xl font-black text-[#8A6A4A]">
            {product.harga}
          </span>

          <button className="rounded-full bg-[#2D2926] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#4A4039]">
            Detail
          </button>

        </div>

      </div>

    </motion.article>
  );
}
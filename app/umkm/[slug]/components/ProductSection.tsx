"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  nama: string;
  harga: string;
  image: string;
  deskripsi: string;
}

interface Props {
  products: Product[];
}

export default function ProductSection({
  products,
}: Props) {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
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
          className="mb-14 text-center"
        >
          <p className="text-sm font-bold tracking-[0.3em] text-[#8A6A4A]">
            PRODUK UMKM
          </p>

          <h2 className="mt-4 text-5xl font-black text-[#2D2926]">
            Produk yang Dijual
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Jelajahi berbagai produk unggulan yang ditawarkan oleh UMKM ini.
            Semua produk dibuat dengan kualitas terbaik oleh pelaku usaha lokal
            Desa Mranggen.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
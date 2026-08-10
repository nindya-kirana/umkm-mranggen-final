"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function ProductSection({
  products,
}: Props) {
  return (
    <section className="bg-[#F7F5F2] py-12 sm:py-16 md:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20">

        {/* HEADER */}
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
          className="
            mb-8
            text-center

            sm:mb-10

            md:mb-14
          "
        >

          {/* LABEL */}
          <p className="
            text-[10px]
            font-bold
            tracking-[0.2em]
            text-[#8A6A4A]

            sm:text-xs
            sm:tracking-[0.25em]

            md:text-sm
            md:tracking-[0.3em]
          ">
            PRODUK UMKM
          </p>


          {/* TITLE */}
          <h2 className="
            mt-2
            text-2xl
            font-black
            leading-tight
            text-[#2D2926]

            sm:mt-3
            sm:text-3xl

            md:mt-4
            md:text-5xl
          ">
            Produk yang Dijual
          </h2>


          {/* DESCRIPTION */}
          <p className="
            mx-auto
            mt-3
            max-w-xl
            text-xs
            leading-5
            text-gray-500

            sm:mt-4
            sm:text-sm
            sm:leading-6

            md:mt-5
            md:max-w-2xl
            md:text-base
            md:leading-8
          ">
            Jelajahi berbagai produk unggulan yang ditawarkan oleh UMKM ini.
            Semua produk dibuat dengan kualitas terbaik oleh pelaku usaha lokal
            Desa Mranggen.
          </p>

        </motion.div>


        {/* PRODUCTS */}
        {products.length === 0 ? (

          <div className="
            rounded-2xl
            bg-white
            p-8
            text-center
            text-sm
            text-gray-500
            shadow-sm

            md:rounded-3xl
            md:p-12
          ">
            Belum ada produk yang tersedia.
          </div>

        ) : (

          <div className="
            grid
            grid-cols-2
            gap-3

            sm:gap-4

            md:grid-cols-2
            md:gap-6

            xl:grid-cols-3
            xl:gap-8
          ">

            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}

          </div>

        )}

      </div>

    </section>
  );
}
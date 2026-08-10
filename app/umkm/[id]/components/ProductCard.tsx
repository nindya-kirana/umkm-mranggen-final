"use client";

import { motion } from "framer-motion";
import { Product } from "@/types/product";

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
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[24px]
        bg-white
        transition-all
        duration-300
        shadow-[0_4px_18px_rgba(45,41,38,0.07)]
        hover:shadow-[0_12px_30px_rgba(45,41,38,0.12)]
        sm:rounded-[28px]
      "
    >
      {/* =====================================================
          FOTO PRODUK
      ====================================================== */}

      <div
        className="
          relative
          aspect-[1/1]
          w-full
          overflow-hidden
          bg-[#F1ECE7]
          rounded-[24px]
          sm:aspect-[1/1]
          
        "
      >
        {product.foto ? (
          <img
            src={product.foto}
            alt={product.nama}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              bg-[#F1ECE7]
              text-3xl
              text-gray-300
            "
          >
            📷
          </div>
        )}

        {/* =================================================
            BADGE
        ================================================== */}

        <div
          className="
            absolute
            left-3
            top-3

            sm:left-4
            sm:top-4
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-white/95
              px-3
              py-1.5
              text-[9px]
              font-bold
              tracking-wide
              text-[#2D2926]
              shadow-sm
              backdrop-blur-sm

              sm:px-3.5
              sm:py-2
              sm:text-[10px]

              md:text-[11px]
            "
          >
            {product.kategori}
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-4
          pb-4
          pt-4

          sm:px-5
          sm:pb-5
          sm:pt-5

          md:px-6
          md:pb-6
          md:pt-5
        "
      >
        {/* =================================================
            NAMA PRODUK
        ================================================== */}

        <h3
          className="
            line-clamp-2
            
            text-[18px]
            font-extrabold
            leading-[1.25]
            tracking-[-0.02em]
            text-[#2D2926]

            
            sm:text-[20px]
            sm:leading-[1.3]

            
            md:text-[23px]
            md:leading-[1.3]
          "
        >
          {product.nama}
        </h3>

        {/* =================================================
            DESKRIPSI
        ================================================== */}

        <p
          className="
            mt-2
            line-clamp-2
            
            text-[13px]
            font-normal
            leading-[1.4]
            text-[#81776F]

            sm:mt-2.5
            
            sm:text-[14px]
            sm:leading-[1.45]

            md:mt-3
            
            md:text-[15px]
            md:leading-[1.5]
          "
        >
          {product.deskripsi}
        </p>

        {/* =================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            mt-4
            flex
            items-end
            justify-between
            gap-2

            sm:mt-5
            sm:gap-3

            md:mt-6
          "
        >
          {/* =================================================
              HARGA
          ================================================== */}

          <div 
            className="
            mt-1
            truncate
            text-[18px]
            font-extrabold
                
            tracking-[-0.02em]
            text-[#8A6A4A]

            sm:text-[20px]

            md:text-[24px]
            "
            >
            Rp {product.harga.toLocaleString("id-ID")}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
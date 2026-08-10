"use client";

import Link from "next/link";

interface Props {
  umkm: {
    id: number;
    nama: string;
    kategori: string;
    alamat: string;
    banner: string;
    jam_buka: string;
    jam_tutup: string;
    status: boolean;
    jumlah_produk?: number;
  };

  onDelete?: (id: number) => void;
}

export default function UMKMAdminCard({
  umkm,
  onDelete,
}: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[20px]
        border
        border-[#E9E1D9]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        sm:rounded-[24px]

        lg:rounded-[28px]
      "
    >

      {/* =====================================
          TOMBOL HAPUS
      ===================================== */}

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          onDelete?.(umkm.id);
        }}
        className="
          absolute
          right-2
          top-2
          z-20
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-black/80
          text-sm
          text-white
          shadow-md
          transition-all
          duration-300
          hover:scale-110
          hover:bg-red-600

          sm:right-3
          sm:top-3
          sm:h-9
          sm:w-9
          sm:text-base

          lg:right-4
          lg:top-4
          lg:h-11
          lg:w-11
          lg:text-xl
        "
        aria-label={`Hapus ${umkm.nama}`}
      >
        🗑️
      </button>


      {/* =====================================
          LINK
      ===================================== */}

      <Link
        href={`/admin/umkm/${umkm.id}`}
        className="block"
      >

        {/* =====================================
            BANNER
        ===================================== */}

        {/* Banner */}
        <div
          className="
            relative
            aspect-square
            w-full
            overflow-hidden
            bg-[#F1ECE7]
          "
        >
          <img
            src={
              umkm.banner ||
              "https://placehold.co/800x800?text=Banner+UMKM"
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


          {/* =====================================
              IMAGE GRADIENT
          ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-24
              bg-gradient-to-t
              from-black/40
              to-transparent
            "
          />


          {/* =====================================
              STATUS
          ===================================== */}

          <span
            className={`
              absolute
              bottom-2
              left-2
              rounded-full
              px-2
              py-1
              text-[8px]
              font-bold
              shadow-sm
              backdrop-blur-md

              sm:bottom-3
              sm:left-3
              sm:px-3
              sm:py-1.5
              sm:text-[9px]

              lg:bottom-4
              lg:left-4
              lg:px-3
              lg:py-1.5
              lg:text-xs

              ${
                umkm.status
                  ? "bg-green-100/95 text-green-700"
                  : "bg-red-100/95 text-red-700"
              }
            `}
          >
            {umkm.status
              ? "Aktif"
              : "Nonaktif"}
          </span>


          {/* =====================================
              HOVER
          ===================================== */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-black/0
              transition
              duration-300
              group-hover:bg-black/30
            "
          >
            <span
              className="
                translate-y-2
                rounded-full
                bg-white
                px-4
                py-2
                text-[9px]
                font-bold
                text-[#2D2926]
                opacity-0
                shadow-lg
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100

                sm:px-5
                sm:py-2.5
                sm:text-[10px]

                lg:px-6
                lg:py-3
                lg:text-sm
              "
            >
              Kelola UMKM →
            </span>
          </div>

        </div>


        {/* =====================================
            CONTENT
        ===================================== */}

        <div
          className="
            p-3

            sm:p-4

            lg:p-6
          "
        >

          {/* =====================================
              NAMA + KATEGORI
          ===================================== */}

          <div>

            <h2
              className="
                line-clamp-2
                text-[15px]
                font-black
                leading-[1.2]
                tracking-tight
                text-[#2D2926]

                sm:text-lg
                sm:leading-[1.25]

                lg:text-2xl
                lg:leading-[1.3]
              "
            >
              {umkm.nama}
            </h2>

            <p
              className="
                mt-1
                truncate
                text-[10px]
                font-bold
                text-[#C18B45]

                sm:text-xs

                lg:text-sm
              "
            >
              {umkm.kategori}
            </p>

          </div>


          {/* =====================================
              INFO
          ===================================== */}

          <div
            className="
              mt-3
              space-y-1
              text-[9px]
              leading-4
              text-gray-500

              sm:mt-4
              sm:text-[10px]
              sm:leading-5

              lg:mt-5
              lg:space-y-2
              lg:text-sm
              lg:leading-6
            "
          >

            {/* Alamat */}

            <p className="line-clamp-1">
              📍 {umkm.alamat}
            </p>


            {/* Jam */}

            <p>
              🕒 {umkm.jam_buka} - {umkm.jam_tutup}
            </p>

          </div>


          {/* =====================================
              JUMLAH PRODUK
          ===================================== */}

          {umkm.jumlah_produk !== undefined && (
            <div
              className="
                mt-3
                border-t
                border-[#EEE8E2]
                pt-3

                sm:mt-4
                sm:pt-4

                lg:mt-5
                lg:pt-5
              "
            >
              <p
                className="
                  text-[9px]
                  font-medium
                  text-gray-400

                  sm:text-[10px]

                  lg:text-xs
                "
              >
                Produk

              </p>

              <p
                className="
                  mt-0.5
                  text-sm
                  font-black
                  text-[#2D2926]

                  sm:text-base

                  lg:text-lg
                "
              >
                {umkm.jumlah_produk}
              </p>
            </div>
          )}

        </div>

      </Link>

    </div>
  );
}
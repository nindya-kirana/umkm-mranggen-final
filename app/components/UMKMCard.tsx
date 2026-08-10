import Link from "next/link";
import { UMKM } from "@/types/umkm";
import { MapPin } from "lucide-react";


interface Props {
  umkm: UMKM;
}

export default function UMKMCard({ umkm }: Props) {
  return (
    <Link
      href={`/umkm/${umkm.id}`}
      className="group block h-full"
    >
      <article
        className="
          flex h-full flex-col
          overflow-hidden
          rounded-xl
          
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg

          sm:rounded-2xl
        "
      >

        {/* =========================
            IMAGE
        ========================== */}

        <div
          className="
            relative
            aspect-[4/3]
            w-full
            overflow-hidden
            bg-gray-100
          "
        >
          {umkm.banner ? (
            <img
              src={umkm.banner}
              alt={umkm.nama}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
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
                text-2xl
                text-gray-400
              "
            >
              📷
            </div>
          )}

          {/* KATEGORI */}

          <div
            className="
              absolute
              left-2
              top-2

              sm:left-3
              sm:top-3

              md:left-4
              md:top-4
            "
          >
            <span
              className="
                rounded-full
                bg-white/90
                px-2
                py-1
                text-[9px]
                font-bold
                text-[#2D2926]
                backdrop-blur

                sm:px-3
                sm:py-1.5
                sm:text-[10px]

                md:px-4
                md:py-2
                md:text-xs
              "
            >
              {umkm.kategori}
            </span>
          </div>
        </div>

        {/* =========================
            CONTENT
        ========================== */}

        <div
          className="
            flex
            flex-1
            flex-col
            p-3

            sm:p-4

            md:p-6
          "
        >

          {/* NAMA */}

          <h3
            className="
              line-clamp-2
              min-h-[36px]
              text-sm
              font-bold
              leading-[18px]
              text-[#2D2926]

              sm:min-h-[42px]
              sm:text-base
              sm:leading-5

              md:min-h-[48px]
              md:text-xl
              md:leading-7
            "
          >
            {umkm.nama}
          </h3>

          {/* ALAMAT */}

          <div
            className="
              mt-2
              flex
              items-center
              gap-1
              text-[10px]
              leading-4
              text-gray-500

              sm:gap-1.5
              sm:text-xs

              md:mt-3
              md:text-sm
            "
          >
            <MapPin
              className="
                h-3
                w-3
                flex-shrink-0

                sm:h-3.5
                sm:w-3.5

                md:h-[17px]
                md:w-[17px]
              "
            />

            <span className="line-clamp-1">
              {umkm.alamat}
            </span>
          </div>

          {/* DESKRIPSI */}

          <p
            className="
              mt-2
              line-clamp-2
              min-h-[30px]
              text-[10px]
              leading-[15px]
              text-gray-500

              sm:mt-3
              sm:min-h-[36px]
              sm:text-xs
              sm:leading-5

              md:mt-4
              md:min-h-[48px]
              md:text-sm
              md:leading-6
            "
          >
            {umkm.deskripsi}
          </p>

          {/* SPACER */}

          <div className="flex-1" />

          {/* DETAIL */}

          <div
            className="
              mt-3
              flex
              items-center
              gap-1
              text-[10px]
              font-bold
              text-[#8A6A4A]

              sm:mt-4
              sm:text-xs

              md:mt-6
              md:gap-2
              md:text-sm

              transition-all
              group-hover:gap-3
            "
          >
            Lihat Detail
            <span>→</span>
          </div>

        </div>
      </article>
    </Link>
  );
}
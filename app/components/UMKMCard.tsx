import Link from "next/link";

interface UMKM {
  id: number;
  slug: string;
  nama: string;
  kategori: string;
  lokasi: string;
  deskripsi: string;
  image: string;
}

interface UMKMCardProps {
  umkm: UMKM;
}

export default function UMKMCard({
  umkm,
}: UMKMCardProps) {
  return (
    <Link
      href={`/umkm/${umkm.slug}`}
      className="block"
    >
      <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        {/* Gambar */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={umkm.image}
            alt={umkm.nama}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Kategori */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#2D2926] backdrop-blur-sm">
              {umkm.kategori}
            </span>
          </div>
        </div>

        {/* Konten */}
        <div className="p-6">

          <h3 className="text-xl font-bold text-[#2D2926]">
            {umkm.nama}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle
                cx="12"
                cy="10"
                r="3"
              />
            </svg>

            <span>{umkm.lokasi}</span>
          </div>

          <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
            {umkm.deskripsi}
          </p>

          {/* Link Detail */}
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#8A6A4A] transition-all group-hover:gap-4">
            Lihat Detail
            <span>→</span>
          </div>

        </div>

      </article>
    </Link>
  );
}
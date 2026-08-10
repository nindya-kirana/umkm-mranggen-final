import Link from "next/link";

interface Props {
  umkmId: number;
}

export default function EmptyProduct({
  umkmId,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-20 text-center shadow-sm">

      <div className="text-7xl">
        📦
      </div>

      <h2 className="mt-5 text-3xl font-black">

        Belum ada produk

      </h2>

      <p className="mt-3 text-gray-500">

        Tambahkan produk pertama untuk UMKM ini.

      </p>

      <Link
        href={`/admin/umkm/${umkmId}/products/new`}
        className="mt-8 inline-block rounded-xl bg-[#2D2926] px-8 py-3 font-semibold text-white"
      >
        + Tambah Produk
      </Link>

    </div>
  );
}
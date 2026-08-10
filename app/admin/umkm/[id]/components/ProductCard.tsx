"use client";

import { Trash2 } from "lucide-react";
import { Product } from "@/types/product";
import { deleteProduct } from "@/services/product";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {

  const router = useRouter();

  async function handleDelete(
    e: React.MouseEvent
  ) {

    e.stopPropagation();

    const ok = confirm(
      "Hapus produk ini?"
    );

    if (!ok) return;

    await deleteProduct(product.id);

    router.refresh();

  }

  return (

    <div
      onClick={() =>
        router.push(
          `/admin/umkm/${product.umkm_id}/products/${product.id}/edit`
        )
      }
      className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="relative">

        <button
          onClick={handleDelete}
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow"
        >
          <Trash2
            size={18}
            className="text-red-500"
          />
        </button>

        {product.foto ? (

          <img
            src={product.foto}
            alt={product.nama}
            className="h-60 w-full object-cover"
          />

        ) : (

          <div className="flex h-60 items-center justify-center bg-gray-200">

            📦

          </div>

        )}

      </div>

      <div className="space-y-3 p-6">

        <h3 className="text-xl font-black">

          {product.nama}

        </h3>

        <p className="text-lg font-semibold text-[#2D2926]">

          Rp{" "}
          {product.harga.toLocaleString("id-ID")}

        </p>
      </div>

    </div>

  );

}
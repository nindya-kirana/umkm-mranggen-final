"use client";

import { useRouter } from "next/navigation";
import { Trash2, Folder } from "lucide-react";

import { Category } from "@/types/category";
import { deleteCategory } from "@/services/category";

interface Props {
  category: Category;
}

export default function CategoryCard({
  category,
}: Props) {

  const router = useRouter();

  async function handleDelete(
    e: React.MouseEvent
  ) {

    e.stopPropagation();

    const ok = confirm(
      `Hapus kategori "${category.nama}"?`
    );

    if (!ok) return;

    await deleteCategory(category.id);

    router.refresh();

  }

  return (

    <div
      onClick={() =>
        router.push(
          `/admin/categories/${category.id}/edit`
        )
      }
      className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="relative h-36 bg-gradient-to-r from-[#8B5E3C] to-[#C89F65]">

        <button
          onClick={handleDelete}
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow"
        >
          <Trash2
            size={18}
            className="text-red-500"
          />
        </button>

        <div className="flex h-full items-center justify-center">

          <Folder
            size={56}
            className="text-white"
          />

        </div>

      </div>

      <div className="space-y-2 p-6">

        <h2 className="text-2xl font-black">

          {category.nama}

        </h2>

        <p className="text-gray-500">

          {category.jumlah_umkm} UMKM

        </p>

      </div>

    </div>

  );

}
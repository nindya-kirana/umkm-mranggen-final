"use client";

import { Category } from "@/types/category";
import CategoryCard from "./CategoryCard";

interface Props {
  categories: Category[];
}

export default function CategoryGrid({
  categories,
}: Props) {

  if (categories.length === 0) {

    return (

      <div className="rounded-3xl bg-white p-20 text-center shadow-sm">

        <h2 className="text-2xl font-bold">

          Belum ada kategori

        </h2>

        <p className="mt-3 text-gray-500">

          Tambahkan kategori pertama.

        </p>

      </div>

    );

  }

  return (

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {categories.map((item) => (

        <CategoryCard

          key={item.id}

          category={item}

        />

      ))}

    </div>

  );

}
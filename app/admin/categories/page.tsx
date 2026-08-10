"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import CategoryGrid from "./components/CategoryGrid";

import { Category } from "@/types/category";
import { getCategories } from "@/services/category";

export default function CategoriesPage() {

  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load() {

      try {

        const data = await getCategories();

        setCategories(data);

      } catch (err: any) {

        console.error(err);

        alert(err.message);

      } finally {

        setLoading(false);

      }

    }

    load();

  }, []);

  return (

    <div className="mx-auto max-w-7xl">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-black">

            Kategori

          </h1>

          <p className="mt-2 text-gray-500">

            Kelola kategori UMKM.

          </p>

        </div>

        <Link
          href="/admin/categories/new"
          className="rounded-xl bg-[#2D2926] px-6 py-3 font-semibold text-white hover:bg-[#4A4039]"
        >

          + Tambah Kategori

        </Link>

      </div>

      {loading ? (

        <div className="rounded-3xl bg-white p-16 text-center shadow-sm">

          <p className="text-gray-500">

            Memuat kategori...

          </p>

        </div>

      ) : categories.length === 0 ? (

        <div className="rounded-3xl bg-white p-16 text-center shadow-sm">

          <h2 className="text-2xl font-bold">

            Belum ada kategori

          </h2>

          <p className="mt-3 text-gray-500">

            Klik tombol <b>Tambah Kategori</b> untuk membuat kategori baru.

          </p>

        </div>

      ) : (

        <CategoryGrid
          categories={categories}
        />

      )}

    </div>

  );

}
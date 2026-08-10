"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import CategoryForm from "../../components/CategoryForm";

import {
  getCategory,
  updateCategory,
} from "@/services/category";

import { Category } from "@/types/category";

export default function EditCategoryPage() {

  const params = useParams();

  const router = useRouter();

  const id = Number(params.id);

  const [category, setCategory] =
    useState<Category | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [pageLoading, setPageLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

      try {

        const data = await getCategory(id);

        setCategory(data);

      } catch (err: any) {

        console.error(err);

        alert(
          err.message ??
          "Kategori tidak ditemukan."
        );

        router.replace("/admin/categories");

      } finally {

        setPageLoading(false);

      }

    }

    if (!isNaN(id)) {

      load();

    }

  }, [id, router]);

  async function handleSubmit(
    data: FormData
  ) {

    try {

      setLoading(true);

      await updateCategory(id, data);

      alert("Kategori berhasil diperbarui.");

      router.push("/admin/categories");

      router.refresh();

    } catch (err: any) {

      console.error(err);

      alert(
        err.message ??
        "Gagal memperbarui kategori."
      );

    } finally {

      setLoading(false);

    }

  }

  if (pageLoading) {

    return (

      <div className="py-20 text-center text-gray-500">

        Memuat data kategori...

      </div>

    );

  }

  if (!category) {

    return null;

  }

  return (

    <div className="mx-auto max-w-3xl">

      <div className="mb-8">

        <h1 className="text-4xl font-black">

          Edit Kategori

        </h1>

        <p className="mt-2 text-gray-500">

          Perbarui kategori UMKM.

        </p>

      </div>

      <CategoryForm
        initialData={category}
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>

  );

}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import CategoryForm from "../components/CategoryForm";

import { createCategory } from "@/services/category";

export default function NewCategoryPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    data: FormData
  ) {

    try {

      setLoading(true);

      await createCategory(data);

      alert("Kategori berhasil ditambahkan.");

      router.push("/admin/categories");

      router.refresh();

    } catch (err: any) {

      console.error(err);

      alert(
        err.message ??
        "Gagal menambahkan kategori."
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="mx-auto max-w-3xl">

      <div className="mb-8">

        <h1 className="text-4xl font-black">
          Tambah Kategori
        </h1>

        <p className="mt-2 text-gray-500">
          Tambahkan kategori UMKM baru.
        </p>

      </div>

      <CategoryForm
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>

  );

}
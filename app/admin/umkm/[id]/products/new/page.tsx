"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import ProductForm from "../../components/ProductForm";

import { createProduct } from "@/services/product";

export default function NewProductPage() {

  const router = useRouter();

  const params = useParams();

  const umkmId = Number(params.id);

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    data: FormData
  ) {

    try {

      setLoading(true);

      await createProduct(data);

      alert("Produk berhasil ditambahkan.");

      router.push(
        `/admin/umkm/${umkmId}`
      );

      router.refresh();

    } catch (err) {

      console.error(err);

      alert("Gagal menambahkan produk.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="mx-auto max-w-5xl">

      <div className="mb-8">

        <h1 className="text-4xl font-black">

          Tambah Produk

        </h1>

        <p className="mt-2 text-gray-500">

          Tambahkan produk baru.

        </p>

      </div>

      <ProductForm

        umkmId={umkmId}

        loading={loading}

        onSubmit={handleSubmit}

      />

    </div>

  );

}
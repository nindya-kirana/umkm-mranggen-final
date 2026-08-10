"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import ProductForm from "../../../components/ProductForm";

import {
  getProduct,
  updateProduct,
} from "@/services/product";

import { Product } from "@/types/product";

export default function EditProductPage() {

  const router = useRouter();

  const params = useParams();

  const umkmId = Number(params.id);

  const productId = Number(params.productId);

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {

    async function load() {

      try {

        const data =
          await getProduct(productId);

        setProduct(data);

      } catch (err) {

        console.error(err);

        alert("Gagal memuat produk.");

      } finally {

        setLoading(false);

      }

    }

    load();

  }, [productId]);

  async function handleSubmit(
    data: FormData
  ) {

    try {

      setSaving(true);

      await updateProduct(
        productId,
        data
      );

      alert("Produk berhasil diperbarui.");

      router.push(`/admin/umkm/${umkmId}`);

      router.refresh();

    } catch (err) {

      console.error(err);

      alert("Gagal memperbarui produk.");

    } finally {

      setSaving(false);

    }

  }

  if (loading) {

    return (

      <div className="p-10">

        Memuat data...

      </div>

    );

  }

  if (!product) {

    return (

      <div className="p-10">

        Produk tidak ditemukan.

      </div>

    );

  }

  return (

    <div className="mx-auto max-w-5xl">

      <div className="mb-8">

        <h1 className="text-4xl font-black">

          Edit Produk

        </h1>

        <p className="mt-2 text-gray-500">

          Perbarui informasi produk.

        </p>

      </div>

      <ProductForm

        umkmId={umkmId}

        initialData={product}

        loading={saving}

        onSubmit={handleSubmit}

      />

    </div>

  );

}
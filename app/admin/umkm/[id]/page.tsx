"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import ProfileHeader from "./components/ProfileHeader";
import ProductGrid from "./components/ProductGrid";

import { getDetailUMKM } from "@/services/umkm";
import { getProductsByUMKM } from "@/services/product";

import { UMKM } from "@/types/umkm";
import { Product } from "@/types/product";

export default function DetailUMKMPage() {

  const params = useParams();

  const id = Number(params.id);

  const [loading, setLoading] =
    useState(true);

  const [umkm, setUMKM] =
    useState<UMKM | null>(null);

  const [products, setProducts] =
    useState<Product[]>([]);

  useEffect(() => {

    async function load() {

      try {

        const detail =
          await getDetailUMKM(id);

        const produk =
          await getProductsByUMKM(id);

        setUMKM(detail);

        setProducts(produk);

      } finally {

        setLoading(false);

      }

    }

    load();

  }, [id]);

  if (loading) {

    return (

      <div className="py-20 text-center">

        Loading...

      </div>

    );

  }

  if (!umkm) {

    return (

      <div className="py-20 text-center">

        UMKM tidak ditemukan.

      </div>

    );

  }

  return (

    <div className="mx-auto max-w-7xl space-y-10">

      <ProfileHeader umkm={umkm} />

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black">

            Produk

          </h2>

          <p className="text-gray-500">

            Kelola seluruh produk UMKM

          </p>

        </div>

        <Link
          href={`/admin/umkm/${id}/products/new`}
          className="rounded-xl bg-[#2D2926] px-6 py-3 font-semibold text-white hover:bg-[#433B36]"
        >
          + Tambah Produk
        </Link>

      </div>

      <ProductGrid

        umkmId={id}

        products={products}

      />

    </div>

  );

}
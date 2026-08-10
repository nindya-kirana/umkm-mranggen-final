"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import UMKMForm from "../components/UMKMForm";
import { createUMKM } from "@/services/umkm";

export default function NewUMKMPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: FormData) {
    try {
      setLoading(true);

      await createUMKM(data);

      alert("UMKM berhasil ditambahkan");

      router.push("/admin/umkm");
      router.refresh();

    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan UMKM");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-8">

        <h1 className="text-4xl font-black">
          Tambah UMKM
        </h1>

        <p className="mt-2 text-gray-500">
          Tambahkan UMKM baru ke Desa Mranggen.
        </p>

      </div>

      <UMKMForm
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>
  );
}
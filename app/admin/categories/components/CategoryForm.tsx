"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Category } from "@/types/category";

interface Props {

  initialData?: Category;

  loading?: boolean;

  onSubmit: (
    data: FormData
  ) => Promise<void>;

}

export default function CategoryForm({

  initialData,

  loading = false,

  onSubmit,

}: Props) {

  const router = useRouter();

  const [nama, setNama] =
    useState(initialData?.nama ?? "");

  async function submit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    const form = new FormData();

    form.append("nama", nama);

    await onSubmit(form);

  }

  return (

    <form
      onSubmit={submit}
      className="space-y-8 rounded-3xl bg-white p-8 shadow-sm"
    >

      <div>

        <label className="mb-2 block font-semibold">

          Nama Kategori

        </label>

        <input
          required
          value={nama}
          onChange={(e) =>
            setNama(e.target.value)
          }
          className="w-full rounded-xl border p-4"
        />

      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-xl border px-8 py-3"
        >
          Batal
        </button>

        <button
          disabled={loading}
          className="rounded-xl bg-[#2D2926] px-8 py-3 font-semibold text-white"
        >
          {loading
            ? "Menyimpan..."
            : "Simpan"}
        </button>

      </div>

    </form>

  );

}
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import ProductImageUpload from "./ProductImageUpload";

import { Product } from "@/types/product";

interface Props {
  umkmId: number;
  initialData?: Product;
  loading?: boolean;
  onSubmit: (data: FormData) => Promise<void>;
}

export default function ProductForm({
  umkmId,
  initialData,
  loading = false,
  onSubmit,
}: Props) {

  const router = useRouter();

  const [nama, setNama] = useState(
    initialData?.nama ?? ""
  );

  const [kategori, setKategori] = useState(
    initialData?.kategori ?? ""
  );

  const [harga, setHarga] = useState<number>(
    initialData?.harga ?? 0
  );

  const [deskripsi, setDeskripsi] = useState(
    initialData?.deskripsi ?? ""
  );

  const [status, setStatus] = useState(
    initialData?.status ?? true
  );
  const [foto, setFoto] =
    useState(initialData?.foto ?? "");

  const preview = foto;

  async function submit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    const formData = new FormData();

    formData.append(
      "umkm_id",
      String(umkmId)
    );

    formData.append(
      "nama",
      nama
    );

    formData.append(
      "kategori",
      kategori
    );

    formData.append(
      "harga",
      String(harga)
    );

    formData.append(
      "deskripsi",
      deskripsi
    );

    formData.append(
      "status",
      status ? "1" : "0"
    );

    formData.append(
    "foto",
    foto
    );

    await onSubmit(formData);

  }

  return (

    <form
      onSubmit={submit}
      className="space-y-8 rounded-3xl bg-white p-8 shadow-sm"
    >

      {/* Nama */}

      <div>

        <label className="mb-2 block font-semibold">

          Nama Produk

        </label>

        <input
          required
          value={nama}
          onChange={(e) =>
            setNama(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        />

      </div>

      {/* Kategori */}

      <div>

        <label className="mb-2 block font-semibold">

          Kategori Produk

        </label>

        <select
          required
          value={kategori}
          onChange={(e) =>
            setKategori(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        >

          <option value="">
            Pilih kategori
          </option>

          <option value="Makanan">
            Makanan
          </option>

          <option value="Minuman">
            Minuman
          </option>

          <option value="Snack">
            Snack
          </option>

          <option value="Fashion">
            Fashion
          </option>

          <option value="Kerajinan">
            Kerajinan
          </option>

          <option value="Lainnya">
            Lainnya
          </option>

        </select>

      </div>

      {/* Harga */}

      <div>

        <label className="mb-2 block font-semibold">

          Harga

        </label>

        <input
          required
          type="text"
          inputMode="numeric"
          value={harga === 0 ? "" : harga}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setHarga(value === "" ? 0 : Number(value));
          }}
          placeholder="Contoh: 25000"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        />

      </div>

      {/* Upload */}

      <ProductImageUpload
        preview={preview}
        onChange={setFoto}
      />

      {/* Deskripsi */}

      <div>

        <label className="mb-2 block font-semibold">

          Deskripsi

        </label>

        <textarea
          rows={6}
          value={deskripsi}
          onChange={(e) =>
            setDeskripsi(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        />

      </div>

      {/* Status */}

      <div>

        <label className="mb-3 block font-semibold">

          Status

        </label>

        <div className="flex gap-8">

          <label className="flex items-center gap-2">

            <input
              type="radio"
              checked={status}
              onChange={() =>
                setStatus(true)
              }
            />

            Aktif

          </label>

          <label className="flex items-center gap-2">

            <input
              type="radio"
              checked={!status}
              onChange={() =>
                setStatus(false)
              }
            />

            Nonaktif

          </label>

        </div>

      </div>

      {/* Tombol */}

      <div className="flex justify-end gap-4 border-t pt-6">

        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-xl border border-gray-300 px-8 py-3 hover:bg-gray-100"
        >

          Batal

        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-[#2D2926] px-8 py-3 font-semibold text-white hover:bg-[#463f39] disabled:opacity-50"
        >

          {loading
            ? "Menyimpan..."
            : "Simpan Produk"}

        </button>

      </div>

    </form>

  );

}
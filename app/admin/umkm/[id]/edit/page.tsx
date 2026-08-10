"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import UMKMForm from "../../components/UMKMForm";

import {
  getDetailUMKM,
  updateUMKM,
} from "@/services/umkm";

import { UMKM } from "@/types/umkm";

export default function EditUMKMPage() {

  const params = useParams();

  const router = useRouter();

  const id = Number(params.id);

  const [loading, setLoading] = useState(false);

  const [umkm, setUMKM] =
    useState<UMKM | null>(null);

  useEffect(() => {

    async function load() {

      const data =
        await getDetailUMKM(id);

      setUMKM(data);

    }

    load();

  }, [id]);

  async function handleSubmit(
    data: FormData
  ) {

    try {

      setLoading(true);

      await updateUMKM(id, data);

      alert("UMKM berhasil diperbarui.");

      router.push(`/admin/umkm/${id}`);

      router.refresh();

    } catch (err) {

      console.error(err);

      alert("Gagal memperbarui UMKM.");

    } finally {

      setLoading(false);

    }

  }

  if (!umkm) {

    return (

      <div className="py-20 text-center">

        Loading...

      </div>

    );

  }

  return (

    <div className="mx-auto max-w-5xl">

      <div className="mb-8">

        <h1 className="text-4xl font-black">

          Edit UMKM

        </h1>

        <p className="mt-2 text-gray-500">

          Perbarui informasi UMKM.

        </p>

      </div>

      <UMKMForm

        initialData={umkm}

        loading={loading}

        onSubmit={handleSubmit}

      />

    </div>

  );

}
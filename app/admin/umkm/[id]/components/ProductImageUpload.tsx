"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { uploadImage } from "@/services/upload";

interface Props {

  preview: string;

  onChange: (url: string) => void;

}

export default function ProductImageUpload({

  preview,

  onChange,

}: Props) {

  const inputRef =
    useRef<HTMLInputElement>(null);

  const [loading, setLoading] =
    useState(false);

  async function handleFile(

    e: React.ChangeEvent<HTMLInputElement>

  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    try {

      setLoading(true);

      const url =
        await uploadImage(file);

      onChange(url);

    } catch (err: any) {

      console.error(err);

      alert(err.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div>

      <label className="mb-3 block font-semibold">

        Foto Produk

      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 transition hover:border-[#2D2926]"
      >

        {preview ? (

          <Image
            src={preview}
            alt="Foto Produk"
            width={800}
            height={600}
            className="h-56 w-full object-cover"
          />

        ) : (

          <div className="flex h-56 flex-col items-center justify-center bg-gray-50">

            <div className="text-5xl">

              📷

            </div>

            <p className="mt-3 font-semibold">

              {loading
                ? "Mengupload..."
                : "Upload Foto Produk"}

            </p>

            <p className="mt-1 text-sm text-gray-500">

              JPG • PNG • WEBP

            </p>

          </div>

        )}

      </div>

      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

    </div>

  );

}
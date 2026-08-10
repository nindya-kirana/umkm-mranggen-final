"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { uploadImage } from "@/services/upload";

interface Props {

  value: string;

  onChange: (url: string) => void;

}

export default function BannerUploader({

  value,

  onChange,

}: Props) {

  const inputRef =
    useRef<HTMLInputElement>(null);

  const [loading, setLoading] =
    useState(false);

  async function chooseFile(

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

        Banner UMKM

      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 transition hover:border-[#2D2926]"
      >

        {value ? (

          <Image
            src={value}
            alt="Banner"
            width={1200}
            height={600}
            className="h-72 w-full object-cover"
          />

        ) : (

          <div className="flex h-72 flex-col items-center justify-center bg-gray-50">

            <div className="text-6xl">

                🖼️

            </div>

            <p className="mt-4 font-semibold">

              {loading
                ? "Mengupload..."
                : "Klik untuk upload banner"}

            </p>

            <span className="mt-2 text-sm text-gray-500">

              JPG • PNG • WEBP

            </span>

          </div>

        )}

      </div>

      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={chooseFile}
      />

    </div>

  );

}
"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { uploadImage } from "@/services/upload";

interface Props {

  value?: string;

  onChange: (url: string) => void;

}

export default function BannerUploader({

  value,

  onChange,

}: Props) {

  const inputRef =
    useRef<HTMLInputElement>(null);

  const [preview, setPreview] =
    useState(value ?? "");

  const [uploading, setUploading] =
    useState(false);

  async function handleFile(

    e: React.ChangeEvent<HTMLInputElement>

  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    try {

      setUploading(true);

      const url =
        await uploadImage(file);

      setPreview(url);

      onChange(url);

    } catch (err: any) {

      alert(err.message);

    } finally {

      setUploading(false);

    }

  }

  return (

    <div>

      <label className="mb-2 block font-semibold">

        Banner UMKM

      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className="flex h-56 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-[#2D2926]"
      >

        {preview ? (

          <Image
            src={preview}
            alt="Banner"
            width={900}
            height={500}
            className="h-full w-full object-cover"
          />

        ) : (

          <div className="text-center">

            <div className="mb-3 text-5xl">

              🖼️

            </div>

            <p className="font-medium">

              {uploading
                ? "Mengupload..."
                : "Klik untuk upload banner"}

            </p>

          </div>

        )}

      </div>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

    </div>

  );

}
"use client";

import { useRef } from "react";

interface Props {
  preview: string | null;
  onChange: (file: File | null) => void;
}

export default function ImageUpload({
  preview,
  onChange,
}: Props) {

  const inputRef = useRef<HTMLInputElement>(null);

  function chooseFile() {
    inputRef.current?.click();
  }

  function handleFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);

  }

  return (
    <div>

      <label className="mb-2 block font-semibold">
        Banner UMKM
      </label>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFile}
      />

      <button
        type="button"
        onClick={chooseFile}
        className="rounded-xl border px-6 py-3 hover:bg-gray-100"
      >
        Pilih Gambar
      </button>

      <div className="mt-5">

        {preview ? (

          <img
            src={preview}
            alt=""
            className="h-64 w-full rounded-2xl object-cover"
          />

        ) : (

          <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300">

            <p className="text-gray-400">
              Belum ada gambar
            </p>

          </div>

        )}

      </div>

    </div>
  );
}
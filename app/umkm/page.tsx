"use client";

import { useMemo, useState } from "react";
import SearchSection from "../components/SearchSection";
import UMKMCard from "../components/UMKMCard";
import { umkmData } from "../data/umkm";

export default function UMKMPage() {
  const [search, setSearch] = useState("");

  const filteredUMKM = useMemo(() => {
    if (!search.trim()) {
      return umkmData;
    }

    const keyword = search.toLowerCase();

    return umkmData.filter((umkm) => {
      return (
        umkm.nama.toLowerCase().includes(keyword) ||
        umkm.kategori.toLowerCase().includes(keyword) ||
        umkm.lokasi.toLowerCase().includes(keyword) ||
        umkm.deskripsi.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  // Fungsi untuk mencegah form melakukan reload halaman
  const handleSearch = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  };

  return (
    <main className="min-h-screen bg-[#F7F5F2]">

      {/* Hero Search */}
      <SearchSection
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {/* Daftar UMKM */}
      <section
        id="umkm"
        className="bg-[#F7F5F2] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-10">
            <p className="text-sm font-bold tracking-[0.3em] text-[#8A6A4A]">
              KATALOG UMKM
            </p>

            <h1 className="mt-3 text-4xl font-black text-[#2D2926] md:text-5xl">
              UMKM Desa Mranggen
            </h1>

            <p className="mt-4 text-gray-500">
              Menampilkan {filteredUMKM.length} UMKM
            </p>
          </div>

          {/* Hasil Pencarian */}
          {filteredUMKM.length === 0 ? (
            <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
              <div className="text-5xl">
                🔍
              </div>

              <h2 className="mt-5 text-2xl font-black text-[#2D2926]">
                UMKM tidak ditemukan
              </h2>

              <p className="mt-3 text-gray-500">
                Coba gunakan kata kunci lain untuk mencari UMKM.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredUMKM.map((umkm) => (
                <UMKMCard
                  key={umkm.id}
                  umkm={umkm}
                />
              ))}
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
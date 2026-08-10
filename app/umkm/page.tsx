"use client";

import { useEffect, useMemo, useState } from "react";

import SearchSection from "../components/SearchSection";
import UMKMCard from "../components/UMKMCard";

import { getUMKM } from "@/services/umkm";
import { getCategories } from "@/services/category";

import { UMKM } from "@/types/umkm";
import { Category } from "@/types/category";

export default function UMKMPage() {
  const [umkmData, setUMKM] = useState<UMKM[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [umkm, kategori] = await Promise.all([
          getUMKM(),
          getCategories(),
        ]);

        setUMKM(umkm);
        setCategories(kategori);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const filteredUMKM = useMemo(() => {
    if (!search.trim()) {
      return umkmData;
    }

    const keyword = search.toLowerCase();

    return umkmData.filter(
      (item) =>
        item.nama.toLowerCase().includes(keyword) ||
        item.kategori.toLowerCase().includes(keyword) ||
        item.alamat.toLowerCase().includes(keyword) ||
        item.deskripsi.toLowerCase().includes(keyword)
    );
  }, [search, umkmData]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5F2]">

      {/* =========================
          SEARCH
      ========================== */}

      <SearchSection
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        categories={categories}
      />

      {/* =========================
          KATALOG
      ========================== */}

      <section
        className="
          bg-[#F7F5F2]
          px-4
          py-12

          sm:px-6
          sm:py-16

          md:px-12
          md:py-20

          lg:px-20
          lg:py-24
        "
      >

        <div className="mx-auto w-full max-w-7xl">

          {/* =========================
              HEADER
          ========================== */}

          <div className="mb-8 sm:mb-10">

            <p
              className="
                text-[10px]
                font-bold
                tracking-[0.25em]
                text-[#8A6A4A]

                sm:text-xs
                sm:tracking-[0.3em]

                md:text-sm
              "
            >
              KATALOG UMKM
            </p>

            <h1
              className="
                mt-2
                text-3xl
                font-black
                leading-tight
                text-[#2D2926]

                sm:mt-3
                sm:text-4xl

                md:text-5xl
              "
            >
              UMKM Desa Mranggen
            </h1>

            <p
              className="
                mt-2
                text-sm
                text-gray-500

                sm:mt-4
                sm:text-base
              "
            >
              Menampilkan {filteredUMKM.length} UMKM
            </p>

          </div>

          {/* =========================
              EMPTY STATE
          ========================== */}

          {filteredUMKM.length === 0 ? (

            <div
              className="
                rounded-2xl
                bg-white
                p-8
                text-center

                sm:rounded-3xl
                sm:p-12
              "
            >
              Tidak ada UMKM ditemukan.
            </div>

          ) : (

            /* =========================
               GRID KATALOG
            ========================== */

            <div
              className="
                grid

                grid-cols-2
                gap-3

                sm:gap-4

                lg:grid-cols-3
                lg:gap-8
              "
            >

              {filteredUMKM.map((item) => (

                <UMKMCard
                  key={item.id}
                  umkm={item}
                />

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}
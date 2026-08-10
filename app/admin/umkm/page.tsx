"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import SearchBar from "./components/SearchBar";
import UMKMAdminCard from "./components/UMKMAdminCard";

import {
  getUMKM,
  deleteUMKM,
} from "@/services/umkm";

import { UMKM } from "@/types/umkm";

export default function UMKMPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [umkm, setUMKM] =
    useState<UMKM[]>([]);

  const [loading, setLoading] =
    useState(true);

  // =========================================
  // LOAD DATA
  // =========================================

  useEffect(() => {
    async function load() {
      try {
        const data = await getUMKM();

        setUMKM(data);
      } catch (err: any) {
        console.error(err);

        alert(
          err.message ??
            "Gagal memuat data UMKM."
        );
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // =========================================
  // SEARCH
  // =========================================

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) {
      return umkm;
    }

    const keyword =
      searchTerm.toLowerCase();

    return umkm.filter((item) => {
      return (
        item.nama
          .toLowerCase()
          .includes(keyword) ||

        item.kategori
          .toLowerCase()
          .includes(keyword) ||

        item.alamat
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [searchTerm, umkm]);

  // =========================================
  // DELETE
  // =========================================

  async function handleDelete(
    id: number
  ) {
    const confirmDelete =
      window.confirm(
        "Yakin ingin menghapus UMKM ini?"
      );

    if (!confirmDelete) return;

    try {
      await deleteUMKM(id);

      setUMKM((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );

      alert(
        "UMKM berhasil dihapus."
      );
    } catch (err: any) {
      console.error(err);

      alert(
        err.message ??
          "Gagal menghapus UMKM."
      );
    }
  }

  // =========================================
  // RENDER
  // =========================================

  return (
    <div
      className="
        mx-auto
        w-full
        max-w-7xl
      "
    >

      {/* =====================================
          HEADER
      ===================================== */}

      <div
        className="
          mb-6
          flex
          flex-col
          gap-5

          sm:mb-8
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        {/* TITLE */}

        <div>
          <h1
            className="
              text-3xl
              font-black
              tracking-tight
              text-[#2D2926]

              sm:text-4xl
            "
          >
            UMKM
          </h1>

          <p
            className="
              mt-1
              text-sm
              leading-5
              text-gray-500

              sm:mt-2
              sm:text-base
            "
          >
            Kelola seluruh UMKM
            Desa Mranggen
          </p>
        </div>


        {/* TAMBAH */}

        <Link
          href="/admin/umkm/new"
          className="
            inline-flex
            w-full
            items-center
            justify-center
            rounded-2xl
            bg-[#2D2926]
            px-5
            py-3
            text-sm
            font-bold
            text-white
            shadow-sm
            transition
            duration-300
            hover:bg-[#4A4039]

            sm:w-auto
            sm:px-6
          "
        >
          + Tambah UMKM
        </Link>

      </div>


      {/* =====================================
          SEARCH
      ===================================== */}

      <div className="mb-6 sm:mb-8">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </div>


      {/* =====================================
          CONTENT
      ===================================== */}

      {loading ? (

        <div
          className="
            rounded-3xl
            bg-white
            p-10
            text-center
            shadow-sm

            sm:p-16
          "
        >
          <p className="text-sm text-gray-500 sm:text-base">
            Memuat data UMKM...
          </p>
        </div>

      ) : (

        <>
          {filtered.length > 0 ? (

            /*
             * =================================
             * CARD UMKM
             *
             * mobile  : 2 kolom
             * tablet  : 2 kolom
             * desktop : 3 kolom
             * =================================
             */

            <div
              className="
                grid
                grid-cols-2
                gap-3

                sm:gap-5

                lg:grid-cols-3
                lg:gap-6

                xl:gap-8
              "
            >
              {filtered.map((item) => (
                <UMKMAdminCard
                  key={item.id}
                  umkm={item}
                  onDelete={handleDelete}
                />
              ))}
            </div>

          ) : (

            /* =================================
               EMPTY STATE
            ================================= */

            <div
              className="
                col-span-full
                rounded-3xl
                bg-white
                p-8
                text-center
                shadow-sm

                sm:p-16
              "
            >

              <div
                className="
                  mb-3
                  text-4xl

                  sm:mb-4
                  sm:text-6xl
                "
              >
                📦
              </div>

              <h2
                className="
                  text-lg
                  font-bold
                  text-[#2D2926]

                  sm:text-2xl
                "
              >
                UMKM tidak ditemukan
              </h2>

              <p
                className="
                  mt-2
                  text-xs
                  text-gray-500

                  sm:mt-3
                  sm:text-sm
                "
              >
                Coba gunakan kata
                kunci lain.
              </p>

            </div>

          )}
        </>

      )}

    </div>
  );
}
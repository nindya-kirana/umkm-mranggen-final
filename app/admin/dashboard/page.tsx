"use client";

import { useEffect, useState } from "react";
import {
  Store,
  Package,
  Tags,
  ArrowUpRight,
} from "lucide-react";

import { getDashboard } from "@/services/dashboard";

interface DashboardData {
  total_umkm: number;
  total_produk: number;
  total_kategori: number;
}

export default function DashboardPage() {
  const [data, setData] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const result = await getDashboard();

        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  /* =====================================================
     LOADING
  ====================================================== */

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-4">
        <p className="text-sm font-medium text-gray-500 sm:text-base">
          Memuat Dashboard...
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        w-full
        space-y-6
        sm:space-y-8
        lg:space-y-10
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div>
        <p
          className="
            text-[10px]
            font-bold
            tracking-[0.25em]
            text-[#8A6A4A]

            sm:text-xs
            sm:tracking-[0.3em]
          "
        >
          ADMINISTRATOR
        </p>

        <h1
          className="
            mt-2
            text-3xl
            font-black
            leading-tight
            tracking-tight
            text-[#2D2926]

            sm:text-4xl

            lg:text-5xl
          "
        >
          Dashboard
        </h1>

        <p
          className="
            mt-2
            max-w-xl
            text-xs
            leading-5
            text-gray-500

            sm:text-sm
            sm:leading-6
          "
        >
          Selamat datang di Dashboard Admin.
          Kelola data UMKM, produk, dan kategori
          Desa Mranggen dari sini.
        </p>
      </div>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-4

          sm:gap-5

          lg:grid-cols-3
          lg:gap-6
        "
      >
        {/* =================================================
            TOTAL UMKM
        ================================================== */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-[#E9E1D9]
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg

            sm:rounded-[26px]
            sm:p-6

            lg:rounded-[30px]
            lg:p-8
          "
        >
          {/* Decorative Circle */}
          <div
            className="
              absolute
              -right-8
              -top-8
              h-24
              w-24
              rounded-full
              bg-[#F5EFE8]

              sm:h-28
              sm:w-28
            "
          />

          <div className="relative">
            {/* Icon */}
            <div
              className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-[#F5EFE8]
                text-[#8A6A4A]

                sm:mb-6
                sm:h-12
                sm:w-12

                lg:h-14
                lg:w-14
              "
            >
              <Store
                size={22}
                strokeWidth={2}
                className="sm:h-6 sm:w-6 lg:h-7 lg:w-7"
              />
            </div>

            <p
              className="
                text-xs
                font-medium
                text-gray-500

                sm:text-sm
              "
            >
              Total UMKM
            </p>

            <div className="mt-1 flex items-end justify-between gap-3">
              <h2
                className="
                  text-3xl
                  font-black
                  leading-none
                  tracking-tight
                  text-[#2D2926]

                  sm:text-4xl
                "
              >
                {data?.total_umkm ?? 0}
              </h2>

              <ArrowUpRight
                size={18}
                className="
                  text-[#B7A18C]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </div>
          </div>
        </div>

        {/* =================================================
            TOTAL PRODUK
        ================================================== */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-[#E9E1D9]
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg

            sm:rounded-[26px]
            sm:p-6

            lg:rounded-[30px]
            lg:p-8
          "
        >
          {/* Decorative Circle */}
          <div
            className="
              absolute
              -right-8
              -top-8
              h-24
              w-24
              rounded-full
              bg-[#F5EFE8]

              sm:h-28
              sm:w-28
            "
          />

          <div className="relative">
            {/* Icon */}
            <div
              className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-[#F5EFE8]
                text-[#8A6A4A]

                sm:mb-6
                sm:h-12
                sm:w-12

                lg:h-14
                lg:w-14
              "
            >
              <Package
                size={22}
                strokeWidth={2}
                className="sm:h-6 sm:w-6 lg:h-7 lg:w-7"
              />
            </div>

            <p
              className="
                text-xs
                font-medium
                text-gray-500

                sm:text-sm
              "
            >
              Total Produk
            </p>

            <div className="mt-1 flex items-end justify-between gap-3">
              <h2
                className="
                  text-3xl
                  font-black
                  leading-none
                  tracking-tight
                  text-[#2D2926]

                  sm:text-4xl
                "
              >
                {data?.total_produk ?? 0}
              </h2>

              <ArrowUpRight
                size={18}
                className="
                  text-[#B7A18C]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </div>
          </div>
        </div>

        {/* =================================================
            TOTAL KATEGORI
        ================================================== */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-[#E9E1D9]
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg

            sm:rounded-[26px]
            sm:p-6

            lg:rounded-[30px]
            lg:p-8
          "
        >
          {/* Decorative Circle */}
          <div
            className="
              absolute
              -right-8
              -top-8
              h-24
              w-24
              rounded-full
              bg-[#F5EFE8]

              sm:h-28
              sm:w-28
            "
          />

          <div className="relative">
            {/* Icon */}
            <div
              className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-[#F5EFE8]
                text-[#8A6A4A]

                sm:mb-6
                sm:h-12
                sm:w-12

                lg:h-14
                lg:w-14
              "
            >
              <Tags
                size={22}
                strokeWidth={2}
                className="sm:h-6 sm:w-6 lg:h-7 lg:w-7"
              />
            </div>

            <p
              className="
                text-xs
                font-medium
                text-gray-500

                sm:text-sm
              "
            >
              Total Kategori
            </p>

            <div className="mt-1 flex items-end justify-between gap-3">
              <h2
                className="
                  text-3xl
                  font-black
                  leading-none
                  tracking-tight
                  text-[#2D2926]

                  sm:text-4xl
                "
              >
                {data?.total_kategori ?? 0}
              </h2>

              <ArrowUpRight
                size={18}
                className="
                  text-[#B7A18C]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { MapPin, Phone, Clock, Store } from "lucide-react";
import Link from "next/link";

import { UMKM } from "@/types/umkm";

interface Props {
  umkm: UMKM;
}

export default function ProfileHeader({
  umkm,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

      {/* Banner */}

      <div className="relative h-72 bg-gray-200">

        {umkm.banner ? (

          <img
            src={umkm.banner}
            alt={umkm.nama}
            className="h-full w-full object-cover"
          />

        ) : (

          <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#8B5E3C] to-[#C89F65]">

            <Store
              size={80}
              className="text-white/70"
            />

          </div>

        )}

      </div>

      {/* Content */}

      <div className="p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}

          <div className="space-y-4">

            <div>

              <h1 className="text-4xl font-black text-[#2D2926]">

                {umkm.nama}

              </h1>

              <span className="mt-3 inline-block rounded-full bg-[#F2E8DC] px-5 py-2 text-sm font-semibold text-[#8B5E3C]">

                {umkm.kategori}

              </span>

            </div>

            <div className="space-y-3 text-gray-600">

              <div className="flex items-center gap-3">

                <MapPin size={18} />

                <span>{umkm.alamat}</span>

              </div>

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>{umkm.whatsapp}</span>

              </div>

              <div className="flex items-center gap-3">

                <Clock size={18} />

                <span>

                  {umkm.jam_buka} - {umkm.jam_tutup}

                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex gap-3">

            <Link
              href={`/admin/umkm/${umkm.id}/edit`}
              className="rounded-xl border border-[#2D2926] px-6 py-3 font-semibold text-[#2D2926] transition hover:bg-[#2D2926] hover:text-white"
            >
              Edit UMKM
            </Link>

          </div>

        </div>

        {/* Deskripsi */}

        <div className="mt-8 border-t pt-8">

          <h3 className="mb-3 text-xl font-bold">

            Tentang UMKM

          </h3>

          <p className="leading-8 text-gray-600">

            {umkm.deskripsi}

          </p>

        </div>

      </div>

    </div>
  );
}
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import CategorySelect from "./CategorySelect";
import BannerUploader from "@/app/admin/components/BannerUploader";

import { UMKM } from "@/types/umkm";
import { parseGoogleMapsUrl } from "@/lib/maps";

interface Props {
  initialData?: UMKM;
  loading?: boolean;
  onSubmit: (data: FormData) => Promise<void>;
}

export default function UMKMForm({
  initialData,
  loading = false,
  onSubmit,
}: Props) {

  const router = useRouter();

  const [nama, setNama] = useState(
    initialData?.nama ?? ""
  );

  const [kategori, setKategori] =
    useState<number | "">(
      initialData?.kategori_id ?? ""
    );

  const [alamat, setAlamat] =
    useState(
      initialData?.alamat ?? ""
    );

  const [whatsapp, setWhatsapp] =
    useState(
      initialData?.whatsapp ?? ""
    );

  // Gunakan kolom maps jika ada,
  // jika tidak gunakan maps_url
  const [maps, setMaps] =
    useState(
      initialData?.maps ??
      initialData?.maps_url ??
      ""
    );

  const [jamBuka, setJamBuka] =
    useState(
      initialData?.jam_buka ?? ""
    );

  const [jamTutup, setJamTutup] =
    useState(
      initialData?.jam_tutup ?? ""
    );

  const [deskripsi, setDeskripsi] =
    useState(
      initialData?.deskripsi ?? ""
    );

  const [status, setStatus] =
    useState(
      initialData?.status ?? true
    );

  const [banner, setBanner] =
    useState(
      initialData?.banner ?? ""
    );

  /**
   * Parse otomatis
   * dari URL Google Maps
   */
  const coordinate = useMemo(() => {

    return parseGoogleMapsUrl(maps);

  }, [maps]);

  async function submit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    if (!kategori) {

      alert("Silakan pilih kategori.");

      return;

    }

    if (!banner) {

      alert("Silakan upload banner.");

      return;

    }

    if (
      coordinate.latitude === null ||
      coordinate.longitude === null
    ) {

      alert(
        "Link Google Maps tidak valid.\n\nSilakan copy URL Google Maps yang benar."
      );

      return;

    }

    const formData = new FormData();

    formData.append(
      "nama",
      nama
    );

    formData.append(
      "kategori_id",
      String(kategori)
    );

    formData.append(
      "alamat",
      alamat
    );

    formData.append(
      "whatsapp",
      whatsapp
    );

    // simpan ke dua kolom
    formData.append(
      "maps",
      maps
    );

    formData.append(
      "maps_url",
      maps
    );

    formData.append(
      "latitude",
      coordinate.latitude.toString()
    );

    formData.append(
      "longitude",
      coordinate.longitude.toString()
    );

    formData.append(
      "jam_buka",
      jamBuka
    );

    formData.append(
      "jam_tutup",
      jamTutup
    );

    formData.append(
      "deskripsi",
      deskripsi
    );

    formData.append(
      "banner",
      banner
    );

    formData.append(
      "status",
      status
        ? "TRUE"
        : "FALSE"
    );

    await onSubmit(formData);

  }

  return (

    <form
      onSubmit={submit}
      className="space-y-8 rounded-3xl bg-white p-8 shadow-sm"
    >

      {/* Nama */}
      <div>

        <label className="mb-2 block font-semibold">
          Nama UMKM
        </label>

        <input
          required
          value={nama}
          onChange={(e)=>
            setNama(e.target.value)
          }
          placeholder="Contoh : Bakso Pak Slamet"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        />

      </div>

      {/* Kategori */}

      <CategorySelect
        value={kategori}
        onChange={setKategori}
      />

      {/* Alamat */}

      <div>

        <label className="mb-2 block font-semibold">
          Alamat
        </label>

        <textarea
          required
          rows={3}
          value={alamat}
          onChange={(e)=>
            setAlamat(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        />

      </div>

      {/* WhatsApp */}

      <div>

        <label className="mb-2 block font-semibold">
          WhatsApp
        </label>

        <input
          required
          value={whatsapp}
          onChange={(e)=>
            setWhatsapp(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        />

      </div>
      {/* GOOGLE MAPS */}

      <div>

        <label className="mb-2 block font-semibold">
          Link Google Maps
        </label>

        <input
          value={maps}
          onChange={(e) =>
            setMaps(e.target.value)
          }
          placeholder="https://www.google.com/maps/..."
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        />

        <p className="mt-2 text-sm text-gray-500">
          Tempel URL Google Maps yang memiliki koordinat.
        </p>

      </div>

      {/* Preview Koordinat */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-semibold">
            Latitude
          </label>

          <input
            readOnly
            value={
              coordinate.latitude ?? ""
            }
            className="w-full rounded-xl border bg-gray-100 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Longitude
          </label>

          <input
            readOnly
            value={
              coordinate.longitude ?? ""
            }
            className="w-full rounded-xl border bg-gray-100 p-4"
          />

        </div>

      </div>

      {/* Jam Operasional */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-semibold">
            Jam Buka
          </label>

          <input
            required
            type="time"
            value={jamBuka}
            onChange={(e) =>
              setJamBuka(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-gray-300 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Jam Tutup
          </label>

          <input
            required
            type="time"
            value={jamTutup}
            onChange={(e) =>
              setJamTutup(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-gray-300 p-4"
          />

        </div>

      </div>

      {/* Banner */}

      <BannerUploader
        value={banner}
        onChange={setBanner}
      />

      {/* Deskripsi */}

      <div>

        <label className="mb-2 block font-semibold">
          Deskripsi
        </label>

        <textarea
          required
          rows={6}
          value={deskripsi}
          onChange={(e) =>
            setDeskripsi(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#2D2926]"
        />

      </div>

      {/* Status */}

      <div>

        <label className="mb-3 block font-semibold">
          Status
        </label>

        <div className="flex gap-8">

          <label className="flex items-center gap-2">

            <input
              type="radio"
              checked={status}
              onChange={() =>
                setStatus(true)
              }
            />

            Aktif

          </label>

          <label className="flex items-center gap-2">

            <input
              type="radio"
              checked={!status}
              onChange={() =>
                setStatus(false)
              }
            />

            Nonaktif

          </label>

        </div>

      </div>
      {/* Tombol */}

      <div className="flex justify-end gap-4 border-t pt-8">

        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-xl border border-gray-300 px-8 py-3 transition hover:bg-gray-100"
        >
          Batal
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-[#2D2926] px-8 py-3 font-semibold text-white transition hover:bg-[#433B35] disabled:opacity-50"
        >
          {loading
            ? "Menyimpan..."
            : "Simpan"}
        </button>

      </div>

    </form>

  );

}
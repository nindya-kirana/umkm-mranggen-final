import { supabase } from "@/lib/supabase";
import { UMKM } from "@/types/umkm";
import { parseGoogleMapsUrl } from "@/lib/maps";

/* =====================================
   GET ALL
===================================== */

export async function getUMKM(): Promise<UMKM[]> {

  const { data, error } = await supabase
    .from("umkm")
    .select(`
      *,
      category (
        nama
      )
    `)
    .order("id");

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((item: any) => ({
    ...item,
    kategori: item.category?.nama ?? "-",
  }));
}

/* =====================================
   GET DETAIL
===================================== */

export async function getUMKMDetail(
  id: number
): Promise<UMKM> {

  const { data, error } = await supabase
    .from("umkm")
    .select(`
      *,
      category (
        nama
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    ...data,
    kategori: data.category?.nama ?? "-",
  };
}

export const getDetailUMKM =
  getUMKMDetail;

/* =====================================
   CREATE
===================================== */

export async function createUMKM(
  form: FormData
): Promise<boolean> {

  const maps = String(
    form.get("maps") ??
    form.get("maps_url") ??
    ""
  );

  const coordinate =
    parseGoogleMapsUrl(maps);

  if (
    coordinate.latitude === null ||
    coordinate.longitude === null
  ) {
    throw new Error(
      "URL Google Maps tidak valid."
    );
  }

  const { error } =
    await supabase
      .from("umkm")
      .insert({

        kategori_id:
          Number(
            form.get("kategori_id")
          ),

        nama:
          String(
            form.get("nama")
          ),

        alamat:
          String(
            form.get("alamat")
          ),

        whatsapp:
          String(
            form.get("whatsapp")
          ),

        maps,

        maps_url: maps,

        latitude:
          coordinate.latitude,

        longitude:
          coordinate.longitude,

        banner:
          String(
            form.get("banner")
          ),

        jam_buka:
          String(
            form.get("jam_buka")
          ),

        jam_tutup:
          String(
            form.get("jam_tutup")
          ),

        deskripsi:
          String(
            form.get("deskripsi")
          ),

        status:
          form.get("status") ===
          "TRUE",

      });

  if (error) {
    throw new Error(error.message);
  }

  return true;
}

/* =====================================
   UPDATE
===================================== */

export async function updateUMKM(
  id: number,
  form: FormData
): Promise<boolean> {

  const maps = String(
    form.get("maps") ??
    form.get("maps_url") ??
    ""
  );

  const coordinate =
    parseGoogleMapsUrl(maps);

  if (
    coordinate.latitude === null ||
    coordinate.longitude === null
  ) {
    throw new Error(
      "URL Google Maps tidak valid."
    );
  }

  const { error } =
    await supabase
      .from("umkm")
      .update({

        kategori_id:
          Number(
            form.get("kategori_id")
          ),

        nama:
          String(
            form.get("nama")
          ),

        alamat:
          String(
            form.get("alamat")
          ),

        whatsapp:
          String(
            form.get("whatsapp")
          ),

        maps,

        maps_url: maps,

        latitude:
          coordinate.latitude,

        longitude:
          coordinate.longitude,

        banner:
          String(
            form.get("banner")
          ),

        jam_buka:
          String(
            form.get("jam_buka")
          ),

        jam_tutup:
          String(
            form.get("jam_tutup")
          ),

        deskripsi:
          String(
            form.get("deskripsi")
          ),

        status:
          form.get("status") ===
          "TRUE",

      })
      .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}

/* =====================================
   DELETE
===================================== */

export async function deleteUMKM(
  id: number
): Promise<boolean> {

  const { error } =
    await supabase
      .from("umkm")
      .delete()
      .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}

/* =====================================
   FEATURED
===================================== */

export async function getFeaturedUMKM(
  limit: number = 6
): Promise<UMKM[]> {

  const { data, error } =
    await supabase
      .from("umkm")
      .select(`
        *,
        category (
          nama
        )
      `)
      .eq("status", true)
      .order("created_at", {
        ascending: false,
      })
      .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(
    (item: any) => ({
      ...item,
      kategori:
        item.category?.nama ?? "-",
    })
  );
}

/* =====================================
   MAP
===================================== */

export async function getMapUMKM() {

  const { data, error } =
    await supabase
      .from("umkm")
      .select(`
        id,
        nama,
        banner,
        latitude,
        longitude,
        category (
          nama
        )
      `)
      .eq("status", true);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(
    (item: any) => ({
      ...item,
      kategori:
        item.category?.nama ?? "-",
    })
  );

}
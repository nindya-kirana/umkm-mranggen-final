import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";

/**
 * ===================================
 * GET PRODUCT BY UMKM
 * ===================================
 */
export async function getProductsByUMKM(
  umkmId: number
): Promise<Product[]> {

  const { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("umkm_id", umkmId)
    .order("id");

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as Product[];
}

/**
 * ===================================
 * GET DETAIL
 * ===================================
 */
export async function getProduct(
  id: number
): Promise<Product> {

  const { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Product;
}

/**
 * ===================================
 * CREATE
 * ===================================
 */
export async function createProduct(
  form: FormData
): Promise<boolean> {

  const { error } = await supabase
    .from("product")
    .insert({

      umkm_id:
        Number(form.get("umkm_id")),

      nama:
        String(form.get("nama")),

      kategori:
        String(form.get("kategori")),

      harga:
        Number(form.get("harga")),

      foto:
        String(form.get("foto")),

      deskripsi:
        String(form.get("deskripsi")),

      status:
        form.get("status") === "TRUE",

    });

  if (error) {
    throw new Error(error.message);
  }

  return true;
}

/**
 * ===================================
 * UPDATE
 * ===================================
 */
export async function updateProduct(
  id: number,
  form: FormData
): Promise<boolean> {

  const { error } = await supabase
    .from("product")
    .update({

      nama:
        String(form.get("nama")),

      kategori:
        String(form.get("kategori")),

      harga:
        Number(form.get("harga")),

      foto:
        String(form.get("foto")),

      deskripsi:
        String(form.get("deskripsi")),

      status:
        form.get("status") === "TRUE",

    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}

/**
 * ===================================
 * DELETE
 * ===================================
 */
export async function deleteProduct(
  id: number
): Promise<boolean> {

  const { error } = await supabase
    .from("product")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}
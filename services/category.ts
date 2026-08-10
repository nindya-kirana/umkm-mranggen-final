import { supabase } from "@/lib/supabase";
import { Category } from "@/types/category";

/**
 * ==============================
 * GET ALL
 * ==============================
 */
export async function getCategories(): Promise<Category[]> {

  const { data, error } = await supabase

    .from("category")

    .select("*")

    .order("id");

  if (error) {

    throw new Error(error.message);

  }

  return data as Category[];

}

/**
 * ==============================
 * GET DETAIL
 * ==============================
 */
export async function getCategory(
  id: number
): Promise<Category> {

  const { data, error } = await supabase

    .from("category")

    .select("*")

    .eq("id", id)

    .single();

  if (error) {

    throw new Error(error.message);

  }

  return data as Category;

}

/**
 * ==============================
 * CREATE
 * ==============================
 */
export async function createCategory(
  form: FormData
): Promise<boolean> {

  const { error } = await supabase

    .from("category")

    .insert({

      nama: form.get("nama"),

    });

  if (error) {

    throw new Error(error.message);

  }

  return true;

}

/**
 * ==============================
 * UPDATE
 * ==============================
 */
export async function updateCategory(
  id: number,
  form: FormData
): Promise<boolean> {

  const { error } = await supabase

    .from("category")

    .update({

      nama: form.get("nama"),

    })

    .eq("id", id);

  if (error) {

    throw new Error(error.message);

  }

  return true;

}

/**
 * ==============================
 * DELETE
 * ==============================
 */
export async function deleteCategory(
  id: number
): Promise<boolean> {

  const { error } = await supabase

    .from("category")

    .delete()

    .eq("id", id);

  if (error) {

    throw new Error(error.message);

  }

  return true;

}
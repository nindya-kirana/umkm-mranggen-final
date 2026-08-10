import { supabase } from "@/lib/supabase";

export interface DashboardData {

  total_umkm: number;

  total_produk: number;

  total_kategori: number;

}

export async function getDashboard(): Promise<DashboardData> {

  const [

    umkm,

    product,

    category,

  ] = await Promise.all([

    supabase

      .from("umkm")

      .select("*", {

        count: "exact",

        head: true,

      }),

    supabase

      .from("product")

      .select("*", {

        count: "exact",

        head: true,

      }),

    supabase

      .from("category")

      .select("*", {

        count: "exact",

        head: true,

      }),

  ]);

  return {

    total_umkm:

      umkm.count ?? 0,

    total_produk:

      product.count ?? 0,

    total_kategori:

      category.count ?? 0,

  };

}
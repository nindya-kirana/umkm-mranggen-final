import { supabase } from "@/lib/supabase";

export interface Admin {

  id: number;

  nama: string;

  email: string;

}

export async function getAdmin() {

  const { data, error } =
    await supabase
      .from("admin")
      .select("id,nama,email");

  if (error)
    throw new Error(error.message);

  return data;

}
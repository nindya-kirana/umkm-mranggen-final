import { gasGet } from "@/lib/gas";

export async function getKategori(){

    const result=

    await gasGet("kategori");

    return result.data ?? [];

}
import { gasGet } from "@/lib/gas";

export async function getUMKM(){

    const result=await gasGet("umkm");

    return result.data ?? [];

}

export async function getDetailUMKM(id:string){

    const result=

    await gasGet(

        "umkm",

        `&id=${id}`

    );

    return result.data;

}
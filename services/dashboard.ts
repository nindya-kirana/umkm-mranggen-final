import { gasGet } from "@/lib/gas";

export async function getDashboard(){

    const result=

    await gasGet("dashboard");

    return result;

}
import { UMKM } from "./types";

export async function getUMKM(slug: string): Promise<UMKM> {

    return {

        id: "1",

        slug,

        nama: "Warung Makan Bu Siti",

        kategori: "Kuliner",

        banner: "/hero-kuliner.png",

        logo: "/logo.png",

        deskripsi:
            "Warung Makan Bu Siti merupakan UMKM kuliner yang menyediakan berbagai makanan rumahan khas Desa Mranggen.",

        alamat:
            "Jl. Raya Mranggen No.12",

        maps:
            "https://maps.google.com",

        whatsapp:
            "628123456789",

        jamBuka:
            "08.00",

        jamTutup:
            "20.00",

        rating: 4.9

    };

}
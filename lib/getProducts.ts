import { Product } from "./types";

export async function getProducts(): Promise<Product[]> {

    return [

        {

            id: "1",

            umkmId: "1",

            nama: "Nasi Goreng",

            harga: 18000,

            foto: "/hero-kuliner.png",

            deskripsi:
                "Nasi goreng spesial dengan ayam."

        },

        {

            id: "2",

            umkmId: "1",

            nama: "Ayam Geprek",

            harga: 15000,

            foto: "/hero-kuliner.png",

            deskripsi:
                "Ayam geprek level pedas."

        },

        {

            id: "3",

            umkmId: "1",

            nama: "Es Teh Jumbo",

            harga: 5000,

            foto: "/hero-kuliner.png",

            deskripsi:
                "Es teh manis segar."

        }

    ];

}
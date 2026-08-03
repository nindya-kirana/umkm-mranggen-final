export interface UMKM {
  id: string;

  slug: string;

  nama: string;

  kategori: string;

  banner: string;

  logo: string;

  deskripsi: string;

  alamat: string;

  maps: string;

  whatsapp: string;

  jamBuka: string;

  jamTutup: string;

  rating: number;
}

export interface Product {

  id: string;

  umkmId: string;

  nama: string;

  harga: number;

  foto: string;

  deskripsi: string;
}
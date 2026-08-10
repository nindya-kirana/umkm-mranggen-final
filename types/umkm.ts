export interface UMKM {
  id: number;

  nama: string;

  kategori: string;

  kategori_id: number;

  alamat: string;

  whatsapp: string;

  banner: string;

  deskripsi: string;

  jam_buka: string;

  jam_tutup: string;

  status: boolean;

  maps: string;

  maps_url: string;

  latitude: number | null;

  longitude: number | null;

  created_at: string;

  updated_at: string;
}
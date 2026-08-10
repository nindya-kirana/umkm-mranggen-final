import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getUMKMDetail } from "@/services/umkm";
import { getProductsByUMKM } from "@/services/product";

import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import GallerySection from "./components/Gallerysection";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

/*
=====================================================
SEO METADATA
=====================================================
*/

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;

  try {
    const umkm = await getUMKMDetail(
      Number(id)
    );

    const title =
      `${umkm.nama} | UMKM Desa Mranggen`;

    const description =
      `${umkm.nama} merupakan UMKM ${umkm.kategori} di Desa Mranggen. ` +
      `Temukan informasi usaha, produk, alamat, lokasi, dan jam operasional.`;

    const url =
      `${BASE_URL}/umkm/${umkm.id}`;

    return {
      title,

      description,

      keywords: [
        umkm.nama,
        umkm.kategori,
        `${umkm.nama} Mranggen`,
        `UMKM ${umkm.kategori} Mranggen`,
        "UMKM Mranggen",
        "UMKM Desa Mranggen",
        "UMKM lokal Mranggen",
        "produk lokal Mranggen",
      ],

      alternates: {
        canonical: url,
      },

      openGraph: {
        type: "website",

        locale: "id_ID",

        url,

        siteName:
          "UMKM Desa Mranggen",

        title,

        description,

        images: umkm.banner
          ? [
              {
                url: umkm.banner,
                width: 1200,
                height: 630,
                alt: umkm.nama,
              },
            ]
          : [],
      },

      twitter: {
        card: "summary_large_image",

        title,

        description,

        images: umkm.banner
          ? [umkm.banner]
          : [],
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch {
    return {
      title: "UMKM Desa Mranggen",

      description:
        "Informasi UMKM dan produk lokal Desa Mranggen.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

/*
=====================================================
PAGE
=====================================================
*/

export default async function DetailUMKM({
  params,
}: Props) {
  const { id } = await params;

  try {
    const umkm =
      await getUMKMDetail(
        Number(id)
      );

    const products =
      await getProductsByUMKM(
        Number(id)
      );

    /*
    =================================================
    STRUCTURED DATA
    =================================================
    */

    const structuredData = {
      "@context":
        "https://schema.org",

      "@type":
        "LocalBusiness",

      name: umkm.nama,

      description:
        umkm.deskripsi,

      image:
        umkm.banner
          ? [umkm.banner]
          : [],

      url:
        `${BASE_URL}/umkm/${umkm.id}`,

      telephone:
        umkm.whatsapp
          ? `+${umkm.whatsapp.replace(/\D/g, "")}`
          : undefined,

      address: {
        "@type":
          "PostalAddress",

        streetAddress:
          umkm.alamat,

        addressLocality:
          "Mranggen",

        addressCountry:
          "ID",
      },

      geo:
        umkm.latitude !== null &&
        umkm.longitude !== null
          ? {
              "@type":
                "GeoCoordinates",

              latitude:
                umkm.latitude,

              longitude:
                umkm.longitude,
            }
          : undefined,

      openingHoursSpecification:
        umkm.jam_buka &&
        umkm.jam_tutup
          ? [
              {
                "@type":
                  "OpeningHoursSpecification",

                opens:
                  umkm.jam_buka,

                closes:
                  umkm.jam_tutup,
              },
            ]
          : undefined,
    };

    return (
      <main className="bg-[#F7F5F2]">

        {/* =====================================
            STRUCTURED DATA
        ===================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                structuredData
              ),
          }}
        />

        {/* =====================================
            HERO
        ===================================== */}

        <HeroSection
          umkm={umkm}
        />

        {/* =====================================
            PRODUCTS
        ===================================== */}

        <ProductSection
          products={products}
        />

        {/* =====================================
            GALLERY
        ===================================== */}

        <GallerySection
          images={[
            umkm.banner,
            umkm.banner,
            umkm.banner,
          ]}
        />

      </main>
    );
  } catch {
    notFound();
  }
}
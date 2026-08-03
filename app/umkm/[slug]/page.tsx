import { notFound } from "next/navigation";
import { umkmData } from "../../data/dummy";

import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import GallerySection from "./components/Gallerysection";


interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetailUMKM({
  params,
}: Props) {
  const { slug } = await params;

  const umkm = umkmData.find(
    (item) => item.slug === slug
  );

  if (!umkm) {
    notFound();
  }

  return (
    <main className="bg-[#F7F5F2]">
      <HeroSection umkm={umkm} />

      <ProductSection
        products={umkm.products}
      />

      <GallerySection
        images={umkm.gallery}
      />
    </main>
  );
}
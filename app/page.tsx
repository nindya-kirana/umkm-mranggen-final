import { Feature } from "framer-motion";
import AboutMranggen from "./components/AboutMranggen";
import HeroBanner from "./components/HeroBanner";
// import SearchSection from "./components/SearchSection";
import AboutSection from "./components/AboutSection";
import FeaturedUMKM from "./components/FeaturedUMKM";
import { getFeaturedUMKM } from "@/services/umkm";

export default async function Home() {
  const umkms = await getFeaturedUMKM(3);
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <FeaturedUMKM umkms={umkms} />
    </main>
  );
}
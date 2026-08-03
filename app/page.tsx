import { Feature } from "framer-motion";
import AboutMranggen from "./components/AboutMranggen";
import HeroBanner from "./components/HeroBanner";
// import SearchSection from "./components/SearchSection";
import UMKMSection from "./components/UMKMSection";
// import FeaturedUMKM from "./components/FeaturedUMKM";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutMranggen />
      <UMKMSection />
    </main>
  );
}
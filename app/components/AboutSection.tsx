import AboutMranggen from "./AboutMranggen";

import { getMapUMKM } from "@/services/umkm";

export default async function AboutSection() {

    const umkms = await getMapUMKM();

    return (

        <AboutMranggen

            umkms={umkms}

        />

    );

}
"use client";

import dynamic from "next/dynamic";
import { UMKM } from "@/types/umkm";

const MapClient = dynamic(
    () => import("./MapClient"),
    {
        ssr: false,
    }
);

interface Props {
    umkms: UMKM[];
}

export default function UMKMMap({
    umkms,
}: Props) {
    return (
        <div className="w-full h-full min-h-[650px]">
            <MapClient umkms={umkms} />
        </div>
    );
}
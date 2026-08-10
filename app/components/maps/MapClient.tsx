"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import { LatLngBounds } from "leaflet";
import L from "leaflet";

import { useEffect } from "react";
import Link from "next/link";

import { UMKM } from "@/types/umkm";

import "leaflet/dist/leaflet.css";

/* ===========================
   Fix icon
=========================== */

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

});

/* ===========================
   Auto Fit
=========================== */

function FitBounds({

  umkms,

}: {

  umkms: UMKM[];

}) {

  const map = useMap();

  useEffect(() => {

    const points = umkms.filter(

      (item) =>

        item.latitude !== null &&

        item.longitude !== null

    );

    if (points.length === 0) return;

    const bounds = new LatLngBounds([]);

    points.forEach((item) => {

      bounds.extend([

        item.latitude!,

        item.longitude!,

      ]);

    });

    map.fitBounds(bounds, {

      padding: [40, 40],

    });

  }, [map, umkms]);

  return null;

}

interface Props {

  umkms: UMKM[];

}

export default function MapClient({

  umkms,

}: Props) {

  const data = umkms.filter(

    (item) =>

      item.latitude !== null &&

      item.longitude !== null

  );

  return (

    <MapContainer

      center={[-7.024, 110.500]}

      zoom={14}

      scrollWheelZoom={false}

      className="h-full w-full rounded-[2rem]"

    >

      <TileLayer

        attribution="&copy; OpenStreetMap"

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      />

      <FitBounds

        umkms={data}

      />

      {data.map((item) => (

        <Marker

          key={item.id}

          position={[

            item.latitude!,

            item.longitude!,

          ]}

        >

          <Popup>

            <div className="w-56">

              <img

                src={item.banner}

                alt={item.nama}

                className="mb-3 h-28 w-full rounded-lg object-cover"

              />

              <h3 className="text-lg font-bold">

                {item.nama}

              </h3>

              <p className="mb-3 text-sm text-gray-500">

                {item.kategori}

              </p>

              <Link

                href={`/umkm/${item.id}`}

                className="font-semibold text-[#8A6A4A]"

              >

                Lihat Detail →

              </Link>

            </div>

          </Popup>

        </Marker>

      ))}

    </MapContainer>

  );

}
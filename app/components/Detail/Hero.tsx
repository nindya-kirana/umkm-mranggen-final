"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { UMKM } from "@/types/umkm";

interface Props{

    umkm:UMKM;

}

export default function Hero({umkm}:Props){

return(

<section className="relative h-[70vh] overflow-hidden">

<Image

src={umkm.banner}

fill

priority

alt={umkm.nama}

className="object-cover"

/>

<div className="absolute inset-0 bg-black/50"/>

<motion.div

initial={{

opacity:0,

y:40

}}

animate={{

opacity:1,

y:0

}}

className="absolute bottom-0 left-0 w-full p-10 text-white"

>

<p className="text-sm uppercase tracking-[0.3em]">

UMKM MRANGGEN

</p>

<h1 className="mt-3 text-5xl font-black">

{umkm.nama}

</h1>

<div className="mt-4 flex gap-6">

<span>

📍 {umkm.kategori}

</span>

</div>

</motion.div>

</section>

)

}
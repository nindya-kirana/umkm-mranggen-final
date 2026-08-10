"use client";

import { useMemo, useState } from "react";

import { Product } from "@/types/product";

import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import EmptyProduct from "./EmptyProduct";

interface Props {
  products: Product[];
  umkmId: number;
}

export default function ProductGrid({
  products,
  umkmId,
}: Props) {

  const [search, setSearch] =
    useState("");

  const filtered = useMemo(() => {

    if (!search.trim()) {

      return products;

    }

    const keyword =
      search.toLowerCase();

    return products.filter((item) => {

      return (

        item.nama
          .toLowerCase()
          .includes(keyword) ||

        item.kategori
          .toLowerCase()
          .includes(keyword) ||

        item.deskripsi
          .toLowerCase()
          .includes(keyword)

      );

    });

  }, [search, products]);

  return (

    <div className="space-y-8">

      <ProductSearch
        value={search}
        onChange={setSearch}
      />

      {filtered.length === 0 ? (

        <EmptyProduct
          umkmId={umkmId}
        />

      ) : (

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filtered.map((item) => (

            <ProductCard
              key={item.id}
              product={item}
            />

          ))}

        </div>

      )}

    </div>

  );

}
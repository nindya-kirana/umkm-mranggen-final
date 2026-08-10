"use client";

import { useEffect, useState } from "react";

import { getCategories } from "@/services/category";
import { Category } from "@/types/category";

interface Props {
  value: number | "";
  onChange: (value: number) => void;
}

export default function CategorySelect({
  value,
  onChange,
}: Props) {

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {

    async function load() {

      const data = await getCategories();

      setCategories(data);

    }

    load();

  }, []);

  return (

    <div>

      <label className="mb-2 block font-semibold">

        Kategori

      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full rounded-xl border border-gray-300 bg-white p-4 outline-none transition focus:border-[#2D2926]"
      >

        <option value="">
          -- Pilih Kategori --
        </option>

        {categories.map((item) => (

          <option
            key={item.id}
            value={item.id}
          >
            {item.nama}
          </option>

        ))}

      </select>

    </div>

  );

}
"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-10">

      <div className="relative">

        <input
          type="text"
          placeholder="Cari nama UMKM..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-5 shadow-sm outline-none transition focus:border-[#2D2926]"
        />

        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-xl">
          🔍
        </div>

      </div>

    </div>
  );
}
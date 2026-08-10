"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import UserMenu from "./UserMenu";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({
  onMenuClick,
}: HeaderProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-[76px]
        items-center
        justify-between
        border-b
        border-[#E9E1D9]
        bg-white
        px-5
        backdrop-blur-md

        sm:px-6

        lg:px-8
      "
    >

      {/* =====================================
          LEFT
      ===================================== */}

      <div className="flex items-center gap-3">

        {/* =====================================
            HAMBURGER - MOBILE
        ===================================== */}

        <button
          type="button"
          onClick={onMenuClick}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-transparent
            text-[#2D2926]
            transition
            hover:bg-[#EEE8E1]

            lg:hidden
          "
          aria-label="Buka menu"
        >
          <Menu size={24} strokeWidth={2.2} />
        </button>


        {/* =====================================
            MOBILE TITLE
            UMKM MRANGGEN
        ===================================== */}

        <Link
          href="/admin/dashboard"
          className="
            block
            select-none
            lg:hidden
          "
        >
          <h1
            className="
              text-[20px]
              leading-[0.9]
              tracking-tight

              sm:text-[22px]
            "
          >
            <span className="font-black text-[#6B4723]">
              UMKM
            </span>

            <br />

            <span className="font-light text-[#6B4723]">
              MRANGGEN
            </span>
          </h1>
        </Link>


        {/* =====================================
            DESKTOP TITLE
            DASHBOARD
        ===================================== */}



      </div>


      {/* =====================================
          USER MENU
      ===================================== */}

      <UserMenu />

    </header>
  );
}
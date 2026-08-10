"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Store,
  Tags,
  X,
} from "lucide-react";

import UserMenu from "./UserMenu";

const menus = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "UMKM",
    href: "/admin/umkm",
    icon: Store,
  },
  {
    title: "Kategori",
    href: "/admin/categories",
    icon: Tags,
  },
];

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  mobile = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-white">

      {/* =====================================
          CLOSE MOBILE
      ===================================== */}

      {mobile && (
        <div
          className="
            flex
            justify-end
            px-5
            pt-5
            lg:hidden
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-[#2D2926]
              transition
              hover:bg-[#F7F5F2]
            "
            aria-label="Tutup menu"
          >
            <X size={22} />
          </button>
        </div>
      )}

      {/* =====================================
          LOGO
      ===================================== */}

      <div
        className="
          px-6
          pb-15
          pt-6

          lg:px-7
          lg:pb-10
          lg:pt-0
        "
      >
        <Link
          href="/admin/dashboard"
          onClick={onClose}
          className="block select-none"
        >
          <h1
            className="
              pt-4
              text-[26px]
              leading-none
              tracking-tight

              lg:text-[30px]
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
      </div>

      {/* =====================================
          MENU
      ===================================== */}

      <nav
        className="
          flex-1
          space-y-2
          px-3
        "
      >
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            pathname === menu.href ||
            pathname.startsWith(`${menu.href}/`);

          return (
            <Link
              key={menu.href}
              href={menu.href}
              onClick={onClose}
              className={`
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                transition-all
                duration-200

                ${
                  active
                    ? "bg-[#2D2926] text-white shadow-lg"
                    : "text-[#2D2926] hover:bg-[#F7F5F2]"
                }
              `}
            >
              <Icon size={22} />

              <span
                className="
                  text-base
                  font-medium

                  lg:text-lg
                "
              >
                {menu.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* =====================================
          MOBILE USER
      ===================================== */}

      {mobile && (
        <div className="border-t border-[#E9E1D9] p-4 lg:hidden">
          <UserMenu mobile />
        </div>
      )}

    </div>
  );
}
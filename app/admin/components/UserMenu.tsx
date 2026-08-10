"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { logout } from "@/services/auth";
import { getAdmin } from "@/utils/auth";

interface Admin {
  nama?: string;
  email?: string;
}

interface UserMenuProps {
  mobile?: boolean;
}

export default function UserMenu({
  mobile = false,
}: UserMenuProps) {
  const router = useRouter();

  const [admin, setAdmin] =
    useState<Admin | null>(null);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    setAdmin(getAdmin());
  }, []);

  async function handleLogout() {
    const confirmLogout = window.confirm(
      "Yakin ingin logout?"
    );

    if (!confirmLogout) return;

    try {
      await logout();

      router.replace("/admin/login");
      router.refresh();

    } catch (err) {
      console.error(err);

      alert("Logout gagal.");
    }
  }

  const initial =
    admin?.nama
      ? admin.nama.charAt(0).toUpperCase()
      : "A";

  /* ==========================================
     MOBILE
  ========================================== */

  if (mobile) {
    return (
      <div className="space-y-3">

        {/* ADMIN INFO */}

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#2D2926]
              text-base
              font-bold
              text-white
            "
          >
            {initial}
          </div>

          <div className="min-w-0">

            <p className="truncate font-semibold text-[#2D2926]">
              {admin?.nama ?? "Administrator"}
            </p>

            <p className="truncate text-xs text-gray-500">
              {admin?.email ?? "-"}
            </p>

          </div>

        </div>

        {/* LOGOUT */}

        <button
          type="button"
          onClick={handleLogout}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            text-sm
            font-semibold
            text-[#2D2926]
            transition

            hover:bg-red-50
            hover:text-red-600
          "
        >
          <LogOut size={17} />

          Logout
        </button>

      </div>
    );
  }

  /* ==========================================
     DESKTOP
  ========================================== */

  return (
    <div className="relative flex items-center gap-4">

      {/* INFO */}

      <div className="hidden text-right sm:block">

        <p className="font-semibold text-[#2D2926]">
          {admin?.nama ?? "Administrator"}
        </p>

        <p className="text-sm text-gray-500">
          {admin?.email ?? "-"}
        </p>

      </div>

      {/* AVATAR */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#2D2926]
          text-lg
          font-bold
          text-white
          transition
          hover:scale-105
        "
        aria-label="Menu administrator"
      >
        {initial}
      </button>

      {/* DROPDOWN */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-14
            z-50
            w-48
            rounded-2xl
            border
            border-[#E9E1D9]
            bg-white
            p-2
            shadow-xl
          "
        >

          <button
            type="button"
            onClick={handleLogout}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              font-semibold
              text-[#2D2926]
              transition

              hover:bg-red-50
              hover:text-red-600
            "
          >
            <LogOut size={17} />

            Logout
          </button>

        </div>
      )}

    </div>
  );
}
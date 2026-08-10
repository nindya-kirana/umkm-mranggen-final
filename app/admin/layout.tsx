"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


import { isLoggedIn } from "@/utils/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // =========================
    // LOGIN PAGE
    // =========================

    if (pathname === "/admin/login") {
      return;
    }

    if (!isLoggedIn()) {
      router.replace("/admin/login");
    }
  }, [pathname, router]);

  // =========================
  // LOGIN PAGE
  // =========================

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // =========================
  // ADMIN LAYOUT
  // =========================

  return (
    <div className="min-h-screen bg-[#F7F5F2]">

      {/* =========================================
          MOBILE SIDEBAR OVERLAY
      ========================================= */}

      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            backdrop-blur-[2px]
            lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* =========================================
          MOBILE SIDEBAR
      ========================================= */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          w-[290px]
          transform
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          ease-out
          lg:hidden

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <Sidebar
          mobile
          onClose={() => setSidebarOpen(false)}
        />
      </aside>

      {/* =========================================
          DESKTOP LAYOUT
      ========================================= */}

      <div
        className="
          grid
          min-h-screen

          lg:grid-cols-[250px_minmax(0,1fr)]
        "
      >

        {/* =====================================
            DESKTOP SIDEBAR
        ===================================== */}

        <aside
          className="
            hidden
            lg:block
            lg:sticky
            lg:top-0
            lg:h-screen
            lg:self-start
          "
        >
          <Sidebar />
        </aside>

        {/* =====================================
            CONTENT AREA
        ===================================== */}

        <div className="flex min-h-screen min-w-0 flex-col">

          {/* HEADER */}

          <Header
            onMenuClick={() => setSidebarOpen(true)}
          />

          {/* MAIN */}

          <main
            className="
              flex-1
              p-5
              sm:p-6
              md:p-8
              lg:p-10
            "
          >
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}
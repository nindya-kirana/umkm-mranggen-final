"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "../components/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [checking, setChecking] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    // Login tidak perlu auth check
    if (pathname === "/admin/login") {
      setChecking(false);
      return;
    }

    async function checkAuth() {
      try {
        const response = await fetch(
          "/api/admin/me",
          {
            credentials: "include",
            cache: "no-store",
          }
        );

        if (!response.ok) {
          router.replace("/admin/login");
          return;
        }
      } catch (error) {
        console.error(
          "AUTH CHECK ERROR:",
          error
        );

        router.replace("/admin/login");
      } finally {
        setChecking(false);
      }
    }

    checkAuth();
  }, [pathname, router]);

  // =========================================
  // LOGIN PAGE
  // =========================================

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // =========================================
  // CHECKING AUTH
  // =========================================

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F5F2]">
        <p className="text-gray-500">
          Memeriksa autentikasi...
        </p>
      </div>
    );
  }

  // =========================================
  // ADMIN LAYOUT
  // =========================================

  return (
    <div className="min-h-screen bg-[#F7F5F2]">

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)]">

        {/* =====================================
            SIDEBAR DESKTOP
        ===================================== */}

        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        {/* =====================================
            CONTENT
        ===================================== */}

        <div className="min-w-0">

          {/* HEADER */}

          <Header
            onMenuClick={() =>
              setMobileMenuOpen(true)
            }
          />

          {/* MAIN CONTENT */}

          <main className="min-h-[calc(100vh-76px)] p-5 sm:p-6 lg:p-8">
            {children}
          </main>

        </div>

      </div>

      {/* =====================================
          MOBILE SIDEBAR OVERLAY
      ===================================== */}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">

          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Tutup menu"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="absolute inset-0 bg-black/40"
          />

          {/* SIDEBAR */}

          <aside
            className="
              relative
              z-10
              flex
              h-full
              w-[280px]
              flex-col
              bg-white
              shadow-2xl
            "
          >
            <Sidebar
              mobile
              onClose={() =>
                setMobileMenuOpen(false)
              }
            />
          </aside>

        </div>
      )}

      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer />

    </div>
  );
}
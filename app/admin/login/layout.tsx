import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "../components/Footer";

import { verifyToken } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = await cookies();

  const token =
    cookieStore.get("admin_token")?.value;

  // =====================================
  // CEK LOGIN
  // =====================================

  if (!token) {
    redirect("/admin/login");
  }

  const payload =
    await verifyToken(token);

  if (!payload) {
    redirect("/admin/login");
  }

  // =====================================
  // ADMIN LAYOUT
  // =====================================

  return (
    <div className="min-h-screen bg-[#F7F5F2]">

      <div className="grid min-h-screen grid-cols-[250px_minmax(0,1fr)]">

        {/* =====================================
            DESKTOP SIDEBAR
        ===================================== */}

        <aside className="sticky top-0 hidden h-screen self-start lg:block">
          <Sidebar />
        </aside>

        {/* =====================================
            CONTENT
        ===================================== */}

        <div className="min-w-0">

          <Header />

          <main className="min-h-[calc(100vh-76px)] p-5 sm:p-6 lg:p-8">
            {children}
          </main>

        </div>

      </div>

      <Footer />

    </div>
  );
}
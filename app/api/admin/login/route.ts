import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { createToken } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(req: Request) {
  try {
    // =====================================
    // REQUEST
    // =====================================

    const body = await req.json();

    const email = String(body.email ?? "").trim();
    const password = String(body.password ?? "");

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email dan password wajib diisi.",
        },
        {
          status: 400,
        }
      );
    }

    // =====================================
    // CARI ADMIN
    // =====================================

    const {
      data: admin,
      error,
    } = await supabaseServer
      .from("admin")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    // =====================================
    // SUPABASE ERROR
    // =====================================

    if (error) {
      console.error(
        "========== SUPABASE LOGIN ERROR =========="
      );

      console.error("CODE:", error.code);
      console.error("MESSAGE:", error.message);
      console.error("DETAILS:", error.details);
      console.error("HINT:", error.hint);

      console.error(
        "=========================================="
      );

      return NextResponse.json(
        {
          success: false,
          message: "Gagal mengambil data admin.",
        },
        {
          status: 500,
        }
      );
    }

    // =====================================
    // ADMIN TIDAK DITEMUKAN
    // =====================================

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Email tidak ditemukan.",
        },
        {
          status: 401,
        }
      );
    }

    // =====================================
    // PASSWORD
    // =====================================

    const valid = await bcrypt.compare(
      password,
      admin.password
    );

    if (!valid) {
      return NextResponse.json(
        {
          success: false,
          message: "Password salah.",
        },
        {
          status: 401,
        }
      );
    }

    // =====================================
    // TOKEN
    // =====================================

    const token = await createToken();

    // =====================================
    // RESPONSE
    // =====================================

    const response = NextResponse.json(
      {
        success: true,
        message: "Login berhasil.",
      },
      {
        status: 200,
      }
    );

    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;

  } catch (error) {

    console.error(
      "========== LOGIN SERVER ERROR =========="
    );

    console.error(error);

    console.error(
      "========================================"
    );

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan pada server.",
      },
      {
        status: 500,
      }
    );
  }
}
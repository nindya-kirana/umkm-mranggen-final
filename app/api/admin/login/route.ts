import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { createToken } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(req: Request) {
  try {
    // ================================
    // BODY
    // ================================

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

    // ================================
    // CARI ADMIN
    // ================================

    const {
      data: admin,
      error,
    } = await supabaseServer
      .from("admin")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      console.error(
        "SUPABASE ADMIN ERROR:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Gagal mengambil data admin.",
        },
        {
          status: 500,
        }
      );
    }

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

    // ================================
    // CEK PASSWORD
    // ================================

    const valid =
      await bcrypt.compare(
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

    // ================================
    // BUAT TOKEN
    // ================================

    const token =
      await createToken();

    if (!token) {
      throw new Error(
        "Token gagal dibuat."
      );
    }

    // ================================
    // RESPONSE
    // ================================

    const response =
      NextResponse.json({
        success: true,
        message: "Login berhasil.",
      });

    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure:
        process.env.NODE_ENV ===
        "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;

  } catch (error) {

    console.error(
      "LOGIN API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan pada server.",
      },
      {
        status: 500,
      }
    );
  }
}
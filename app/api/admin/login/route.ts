import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { createToken } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("=== LOGIN START ===");
    console.log("EMAIL:", body.email);

    const {
      data: admin,
      error,
    } = await supabaseServer
      .from("admin")
      .select("*")
      .eq("email", body.email)
      .maybeSingle();

    console.log("=== SUPABASE RESULT ===");
    console.log("ADMIN FOUND:", !!admin);
    console.log("SUPABASE ERROR:", error);

    if (error) {
      console.error("SUPABASE ERROR CODE:", error.code);
      console.error("SUPABASE ERROR MESSAGE:", error.message);
      console.error("SUPABASE ERROR DETAILS:", error.details);
      console.error("SUPABASE ERROR HINT:", error.hint);

      return NextResponse.json(
        {
          success: false,
          message: "Supabase error.",
        },
        {
          status: 500,
        }
      );
    }

    if (!admin) {
      console.log("ADMIN NOT FOUND");

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

    console.log("ADMIN PASSWORD EXISTS:", !!admin.password);
    console.log(
      "ADMIN PASSWORD TYPE:",
      typeof admin.password
    );

    // =========================
    // CHECK PASSWORD
    // =========================

    let valid = false;

    try {
      valid = await bcrypt.compare(
        body.password,
        admin.password
      );

      console.log(
        "PASSWORD VALID:",
        valid
      );

    } catch (error) {
      console.error("BCRYPT ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Gagal memverifikasi password.",
        },
        {
          status: 500,
        }
      );
    }

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

    // =========================
    // CREATE JWT
    // =========================

    let token: string;

    try {
      token = await createToken();

      console.log(
        "JWT TOKEN CREATED: true"
      );

    } catch (error) {
      console.error("JWT ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Gagal membuat token.",
        },
        {
          status: 500,
        }
      );
    }

    // =========================
    // RESPONSE
    // =========================

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure:
        process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    console.log("=== LOGIN SUCCESS ===");

    return response;

  } catch (error) {

    console.error("=== LOGIN FATAL ERROR ===");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server.",
      },
      {
        status: 500,
      }
    );
  }
}
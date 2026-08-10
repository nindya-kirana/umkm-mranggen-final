import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { createToken } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(req: Request) {

  const body = await req.json();

  const { data: admin, error } =
    await supabaseServer
      .from("admin")
      .select("*")
      .eq("email", body.email)
      .single();

  if (error || !admin) {

    return NextResponse.json(
      {
        success: false,
        message: "Email tidak ditemukan",
      },
      {
        status: 401,
      }
    );

  }

  const valid = await bcrypt.compare(
    body.password,
    admin.password
  );

  if (!valid) {

    return NextResponse.json(
      {
        success: false,
        message: "Password salah",
      },
      {
        status: 401,
      }
    );

  }

  const token = await createToken();

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

  return response;

}
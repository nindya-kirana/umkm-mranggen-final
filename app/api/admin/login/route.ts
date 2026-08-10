import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("LOGIN API: START");

    // =====================================
    // TEST REQUEST
    // =====================================

    const body = await req.json();

    console.log("LOGIN API: BODY RECEIVED");

    console.log("EMAIL:", body.email);

    // =====================================
    // TEST ENV
    // =====================================

    console.log(
      "SUPABASE URL:",
      process.env.NEXT_PUBLIC_SUPABASE_URL
        ? "EXISTS"
        : "MISSING"
    );

    console.log(
      "SERVICE ROLE:",
      process.env.SUPABASE_SERVICE_ROLE_KEY
        ? "EXISTS"
        : "MISSING"
    );

    console.log(
      "JWT SECRET:",
      process.env.JWT_SECRET
        ? "EXISTS"
        : "MISSING"
    );

    return NextResponse.json({
      success: true,
      message: "API login berhasil dipanggil.",
    });

  } catch (error) {

    console.error(
      "LOGIN API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "API error.",
      },
      {
        status: 500,
      }
    );
  }
}
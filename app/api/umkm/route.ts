import { NextRequest, NextResponse } from "next/server";

const GAS_URL = process.env.GOOGLE_APPS_SCRIPT_URL!;
const API_KEY = process.env.GOOGLE_APPS_SCRIPT_KEY!;

export async function GET() {
  const res = await fetch(
    `${GAS_URL}?action=getUMKM&key=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "addUMKM",
      key: API_KEY,
      ...body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return NextResponse.json(data);
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "updateUMKM",
      key: API_KEY,
      ...body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json(await res.json());
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  const res = await fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "deleteUMKM",
      key: API_KEY,
      id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json(await res.json());
}
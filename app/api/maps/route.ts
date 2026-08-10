import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const { url } = await req.json();

  if (!url) {

    return NextResponse.json({

      message: "URL kosong."

    }, {

      status: 400

    });

  }

  /**
   * Contoh URL:
   * https://www.google.com/maps/@-6.98122,110.40982,17z
   */

  const regex =
    /@(-?\d+\.\d+),(-?\d+\.\d+)/;

  const match =
    url.match(regex);

  if (!match) {

    return NextResponse.json({

      message:
        "Koordinat tidak ditemukan pada URL."

    }, {

      status: 400

    });

  }

  return NextResponse.json({

    latitude:
      Number(match[1]),

    longitude:
      Number(match[2]),

  });

}
export async function getCoordinateFromMaps(
  url: string
) {

  const response = await fetch("/api/maps", {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      url,
    }),

  });

  const result = await response.json();

  if (!response.ok) {

    throw new Error(
      result.message ??
      "Gagal mengambil koordinat."
    );

  }

  return result;

}
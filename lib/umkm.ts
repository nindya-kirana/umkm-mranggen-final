export async function getUMKM() {
  const res = await fetch("/api/umkm");

  return res.json();
}

export async function addUMKM(data: any) {
  const res = await fetch("/api/umkm", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function updateUMKM(data: any) {
  const res = await fetch("/api/umkm", {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function deleteUMKM(id: string) {
  const res = await fetch(`/api/umkm?id=${id}`, {
    method: "DELETE",
  });

  return res.json();
}
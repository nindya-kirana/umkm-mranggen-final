export async function login(data: {
  email: string;
  password: string;
}) {
  const res = await fetch("/api/admin/login", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: "include",

    body: JSON.stringify(data),
  });

  // Ambil response sebagai text terlebih dahulu
  const text = await res.text();

  let json: {
    success?: boolean;
    message?: string;
  };

  try {
    json = text
      ? JSON.parse(text)
      : {};
  } catch {
    throw new Error(
      `Server mengembalikan response tidak valid. Status: ${res.status}`
    );
  }

  if (!res.ok) {
    throw new Error(
      json.message ??
      "Login gagal."
    );
  }

  return json;
}


export async function logout() {
  const res = await fetch(
    "/api/admin/logout",
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Logout gagal.");
  }

  return true;
}
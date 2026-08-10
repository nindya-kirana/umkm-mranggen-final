export async function login(data: {
  email: string;
  password: string;
}) {
  const res = await fetch("/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message);
  }

  return json;
}

export async function logout() {
  await fetch("/api/admin/logout", {
    method: "POST",
    credentials: "include",
  });
}
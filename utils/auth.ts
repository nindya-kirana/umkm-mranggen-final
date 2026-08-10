export function getAdmin() {
  return null;
}

export async function isLoggedIn() {

  try {

    const response =
      await fetch("/api/admin/me", {
        method: "GET",
        credentials: "include",
      });

    return response.ok;

  } catch {

    return false;

  }
}
export async function getAdmin() {
  try {

    const response =
      await fetch(
        "/api/admin/me",
        {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        }
      );

    if (!response.ok) {
      return null;
    }

    const data =
      await response.json();

    if (!data.authenticated) {
      return null;
    }

    return data.admin;

  } catch {

    return null;

  }
}
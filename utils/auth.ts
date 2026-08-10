export function getAdmin() {
  if (typeof window === "undefined") {
    return null;
  }

  const admin =
    localStorage.getItem("admin");

  if (!admin) {
    return null;
  }

  return JSON.parse(admin);
}
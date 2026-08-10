export function getAdmin() {

  if (typeof window === "undefined") {

    return null;

  }

  const admin = localStorage.getItem("admin");

  if (!admin) {

    return null;

  }

  return JSON.parse(admin);

}

export function isLoggedIn() {

  return !!getAdmin();

}

export function logout() {

  localStorage.removeItem("admin");

}
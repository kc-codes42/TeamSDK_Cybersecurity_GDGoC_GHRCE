export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function setToken(token: string) {
  localStorage.setItem("token", token);
  document.cookie = `token=${token}; path=/`;
}

export function clearToken() {
  localStorage.removeItem("token");
  document.cookie = "token=; Max-Age=0; path=/";
}

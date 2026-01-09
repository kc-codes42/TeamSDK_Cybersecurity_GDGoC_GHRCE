"use client";

import { logout } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.replace("/");
  }

  return (
    <header className="h-14 border-b border-white/10 px-4 flex items-center justify-between">
      <span className="font-semibold">NetShield</span>
      <button onClick={handleLogout} className="text-sm opacity-80">
        Logout
      </button>
    </header>
  );
}

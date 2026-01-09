"use client";

import Link from "next/link";
import { useRole } from "@/lib/utils/useRole";

export default function Sidebar() {
  const { role, loading } = useRole();

  if (loading) return null;

  return (
    <nav className="w-64 h-screen border-r border-white/10 p-4">
      <ul className="space-y-3">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/dashboard/events">Events</Link>
        </li>

        {role === "admin" && (
          <li>
            <Link href="/dashboard/insights">Insights</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/config/firebase";

export function useRole() {
  const [role, setRole] = useState<"admin" | "viewer" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setRole(null);
      setLoading(false);
      return;
    }

    user.getIdTokenResult().then((res) => {
      setRole((res.claims.role as "admin" | "viewer") ?? "viewer");
      setLoading(false);
    });
  }, []);

  return { role, loading };
}

"use client";

import { useState } from "react";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-80 space-y-4 border border-white/10 p-6"
      >
        <h1 className="text-lg font-semibold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-black border border-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-black border border-white/20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <div className="text-sm text-red-400">{error}</div>
        )}

        <button
          type="submit"
          className="w-full p-2 bg-primary"
        >
          Login
        </button>
      </form>
    </main>
  );
}

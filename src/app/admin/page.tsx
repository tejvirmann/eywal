"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/logs");
      router.refresh();
    } else {
      setError("Incorrect password.");
      setPassword("");
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-3 mb-10">
          <Image src="/logos/logo-mark.svg" alt="" width={28} height={28} />
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--navy)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Eywal Admin
          </span>
        </div>

        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--navy)" }}
        >
          Sign in
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
          Enter your admin password to manage posts.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            required
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all"
            style={{
              borderColor: error ? "#dc2626" : "var(--border)",
              background: "#fff",
              color: "var(--text)",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = error ? "#dc2626" : "var(--navy)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = error ? "#dc2626" : "var(--border)")
            }
          />
          {error && (
            <p className="text-xs" style={{ color: "#dc2626" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              background: "var(--navy)",
              color: "#fff",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

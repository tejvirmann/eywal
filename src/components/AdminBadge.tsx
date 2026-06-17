"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminBadge() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleExit() {
    setLoading(true);
    await fetch("/api/admin/session", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
        style={{ background: "var(--navy)", color: "#fff" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
        Admin
      </div>
      <button
        onClick={handleExit}
        disabled={loading}
        className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors hover:bg-gray-50"
        style={{ borderColor: "var(--border)", color: "var(--muted)" }}
      >
        Exit
      </button>
    </div>
  );
}

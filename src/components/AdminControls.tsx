"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  slug: string;
  isHidden: boolean;
  isReport: boolean;
}

export default function AdminControls({ slug, isHidden, isReport }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  async function trigger(action: "toggle-hidden" | "toggle-report") {
    setLoading(action);
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, action }),
    });
    setLoading(null);
    router.refresh();
  }

  return (
    <div
      className="flex items-center gap-2"
      onClick={(e) => e.preventDefault()}
    >
      <button
        onClick={() => trigger("toggle-hidden")}
        disabled={!!loading}
        className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded border transition-colors"
        style={{
          fontFamily: "system-ui, sans-serif",
          borderColor: isHidden ? "#dc2626" : "rgba(13,27,94,0.25)",
          color: isHidden ? "#dc2626" : "var(--navy)",
          background: isHidden ? "rgba(220,38,38,0.06)" : "transparent",
          opacity: loading === "toggle-hidden" ? 0.5 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {isHidden ? "Hidden" : "Visible"}
      </button>

      <button
        onClick={() => trigger("toggle-report")}
        disabled={!!loading}
        className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded border transition-colors"
        style={{
          fontFamily: "system-ui, sans-serif",
          borderColor: isReport ? "var(--navy)" : "rgba(13,27,94,0.25)",
          color: isReport ? "var(--warm)" : "var(--navy)",
          background: isReport ? "var(--navy)" : "transparent",
          opacity: loading === "toggle-report" ? 0.5 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {isReport ? "Report" : "Log"}
      </button>
    </div>
  );
}

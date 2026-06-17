import { getAllLogs } from "@/lib/content";
import { isAdminMode } from "@/lib/admin";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Logs — Eywal Research Group" };

export default async function LogsPage() {
  const adminMode = await isAdminMode();
  const logs = getAllLogs(adminMode);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <div className="flex items-center justify-between mb-3">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Field Notes
          </p>
          {adminMode && (
            <span
              className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              Admin
            </span>
          )}
        </div>
        <h1
          className="text-4xl font-bold mb-4 tracking-tight"
          style={{ color: "var(--navy)", letterSpacing: "-0.02em" }}
        >
          Logs
        </h1>
        <p className="text-base leading-relaxed mb-12" style={{ color: "#4B5563" }}>
          Running notes from the lab — observations, reading summaries, open
          questions, and incremental findings. Informal by design.
        </p>

        {logs.length === 0 ? (
          <p className="text-sm italic" style={{ color: "var(--muted)" }}>
            No logs yet. Check back soon.
          </p>
        ) : (
          <div>
            {logs.map((post) => (
              <PostCard key={post.slug} post={post} basePath="logs" adminMode={adminMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

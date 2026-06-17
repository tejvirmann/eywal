import { getAllReports } from "@/lib/content";
import { isAdminMode } from "@/lib/admin";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Reports — Eywal Research Group" };

export default async function ReportsPage() {
  const adminMode = await isAdminMode();
  const reports = getAllReports(adminMode);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <div className="flex items-center justify-between mb-3">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Extended Writing
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
          Reports
        </h1>
        <p className="text-base leading-relaxed mb-12" style={{ color: "#4B5563" }}>
          Dense, structured documents — literature reviews, position papers, and
          extended analyses. These are the logs that grew into something more.
        </p>

        {reports.length === 0 ? (
          <p className="text-sm italic" style={{ color: "var(--muted)" }}>
            No reports yet. Check back soon.
          </p>
        ) : (
          <div>
            {reports.map((post) => (
              <PostCard key={post.slug} post={post} basePath="reports" adminMode={adminMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

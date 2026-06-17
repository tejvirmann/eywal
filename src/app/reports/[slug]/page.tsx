import { notFound } from "next/navigation";
import { getAllReports, getPostBySlug } from "@/lib/content";
import { isAdminMode } from "@/lib/admin";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import AdminControls from "@/components/AdminControls";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllReports(true).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Eywal Research Group` };
}

export default async function ReportDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const adminMode = await isAdminMode();

  if (!post || !post.isReport) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <nav
          className="text-xs mb-8 flex items-center justify-between"
          style={{ color: "var(--muted)" }}
        >
          <div>
            <a href="/reports" className="hover:underline" style={{ color: "var(--navy)" }}>
              Reports
            </a>
            <span className="mx-2">·</span>
            <span>{post.date ? format(new Date(post.date), "MMM d, yyyy") : ""}</span>
          </div>
          {adminMode && (
            <AdminControls slug={post.slug} isHidden={post.hidden} isReport={post.isReport} />
          )}
        </nav>

        {post.hidden && adminMode && (
          <div
            className="text-xs font-semibold tracking-wider uppercase px-3 py-2 rounded-lg mb-6 inline-block"
            style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626" }}
          >
            Hidden from public view
          </div>
        )}

        <div className="mb-4">
          <span
            className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded"
            style={{ background: "var(--navy)", color: "#fff" }}
          >
            Report
          </span>
        </div>

        <h1
          className="text-4xl font-bold mb-4 leading-snug tracking-tight"
          style={{ color: "var(--navy)", letterSpacing: "-0.02em" }}
        >
          {post.title}
        </h1>

        {post.tags.filter((t) => t.toLowerCase() !== "report").length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags
              .filter((t) => t.toLowerCase() !== "report")
              .map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                  style={{ background: "var(--warm-mid)", color: "var(--navy)" }}
                >
                  {tag}
                </span>
              ))}
          </div>
        )}

        <div className="border-t mb-10" style={{ borderColor: "var(--border)" }} />

        <article className="prose-lab">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </div>
  );
}

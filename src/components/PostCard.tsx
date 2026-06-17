import Link from "next/link";
import { format } from "date-fns";
import type { Post } from "@/lib/content";
import AdminControls from "@/components/AdminControls";

interface Props {
  post: Post;
  basePath: "logs" | "reports";
  adminMode?: boolean;
}

export default function PostCard({ post, basePath, adminMode }: Props) {
  return (
    <div
      className="py-6 border-b"
      style={{
        borderColor: "rgba(13,27,94,0.1)",
        opacity: post.hidden ? 0.45 : 1,
      }}
    >
      <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
        <div className="flex items-center gap-3">
          <span
            className="text-xs tabular-nums"
            style={{ color: "var(--muted)", fontFamily: "system-ui, sans-serif" }}
          >
            {post.date ? format(new Date(post.date), "yyyy — MMM d") : "—"}
          </span>
          {post.hidden && adminMode && (
            <span
              className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(220,38,38,0.1)",
                color: "#dc2626",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Hidden
            </span>
          )}
          {post.tags
            .filter((t) => t.toLowerCase() !== "report")
            .map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--warm-mid)",
                  color: "var(--navy)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
        </div>

        {adminMode && (
          <AdminControls
            slug={post.slug}
            isHidden={post.hidden}
            isReport={post.isReport}
          />
        )}
      </div>

      <Link
        href={`/${basePath}/${post.slug}`}
        className="group block"
      >
        <h2
          className="text-lg font-semibold mb-1.5 group-hover:underline underline-offset-2"
          style={{ color: "var(--navy)", fontFamily: "system-ui, sans-serif" }}
        >
          {post.title}
        </h2>
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "#4B5563" }}>
          {post.excerpt}
        </p>
      </Link>
    </div>
  );
}

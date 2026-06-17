import Link from "next/link";
import Image from "next/image";
import { getLatestPosts } from "@/lib/content";
import { isAdminMode } from "@/lib/admin";
import { format } from "date-fns";
import HeroText from "@/components/HeroText";

const RESEARCH_AREAS = [
  {
    label: "Bioelectricity",
    description:
      "Electrical fields in tissues as the medium through which cells encode body plans, coordinate behavior, and store morphogenetic memory.",
  },
  {
    label: "Basal Cognition",
    description:
      "Goal-directed, adaptive behavior in non-neural systems — how single cells sense, decide, and remember without a brain.",
  },
  {
    label: "Collective Intelligence",
    description:
      "How populations of cells and organisms self-organize into coherent wholes without central control or explicit instruction.",
  },
  {
    label: "Morphogenetic Fields",
    description:
      "Field-based information structures that guide developmental form — the geometry of life beyond the gene.",
  },
  {
    label: "Consciousness",
    description:
      "The hard problem and its biological substrate. What is the minimal physical system capable of subjective experience?",
  },
  {
    label: "Cellular Programming",
    description:
      "Writing to the software of living systems — optogenetics, synthetic biology, and the frontier of programmable organisms.",
  },
];

export default async function Home() {
  const adminMode = await isAdminMode();
  const posts = getLatestPosts(4, adminMode);

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <HeroText />
      </section>

      {/* Nature image band */}
      <div className="relative w-full overflow-hidden" style={{ height: 420 }}>
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=85"
          alt="Forest — nature research"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, rgba(13,27,94,0.55) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-10">
          <p
            className="text-sm italic max-w-md leading-relaxed"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            "The minimal unit of cognition may not be the neuron — it may be
            the cell itself, navigating a problem space we have only begun to map."
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="border-t" style={{ borderColor: "var(--border)" }} />
      </div>

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between mb-10">
            <h2
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--navy)" }}
            >
              Recent Activity
            </h2>
            <Link
              href="/logs"
              className="text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: "var(--navy)" }}
            >
              All logs →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.isReport ? "reports" : "logs"}/${post.slug}`}
                className="group block p-6 rounded-xl border transition-all hover:shadow-sm hover:border-gray-300"
                style={{
                  borderColor: "var(--border)",
                  background: "#fff",
                  opacity: post.hidden ? 0.5 : 1,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  {post.isReport && (
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                      style={{ background: "var(--navy)", color: "#fff" }}
                    >
                      Report
                    </span>
                  )}
                  {post.hidden && adminMode && (
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                      style={{ background: "rgba(220,38,38,0.1)", color: "#dc2626" }}
                    >
                      Hidden
                    </span>
                  )}
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {post.date ? format(new Date(post.date), "MMM d, yyyy") : ""}
                  </span>
                </div>
                <h3
                  className="font-semibold mb-2 group-hover:underline underline-offset-2 leading-snug"
                  style={{ color: "var(--navy)" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#6B7280" }}>
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t" style={{ borderColor: "var(--border)" }} />
      </div>

      {/* Research Areas */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-10"
          style={{ color: "var(--navy)" }}
        >
          Research Areas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map((area) => (
            <div key={area.label}>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-1 h-4 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                <h3 className="font-semibold text-sm" style={{ color: "var(--navy)" }}>
                  {area.label}
                </h3>
              </div>
              <p className="text-sm leading-relaxed pl-3" style={{ color: "#4B5563" }}>
                {area.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/about"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
            style={{ color: "var(--navy)" }}
          >
            Learn more about our focus →
          </Link>
        </div>
      </section>
    </>
  );
}

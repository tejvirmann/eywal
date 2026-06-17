import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "logs");

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  isReport: boolean;
  hidden: boolean;
  content: string;
}

function readAll(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data, content } = matter(raw);

      const tags: string[] = Array.isArray(data.tags)
        ? data.tags
        : data.tags
        ? [data.tags]
        : [];

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ? String(data.date) : "",
        tags,
        excerpt:
          data.excerpt ??
          content.split("\n\n")[0].replace(/[#*_`]/g, "").slice(0, 200),
        isReport: tags.map((t) => t.toLowerCase()).includes("report"),
        hidden: data.hidden === true,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllLogs(includeHidden = false): Post[] {
  return readAll().filter((p) => !p.isReport && (includeHidden || !p.hidden));
}

export function getAllReports(includeHidden = false): Post[] {
  return readAll().filter((p) => p.isReport && (includeHidden || !p.hidden));
}

export function getPostBySlug(slug: string): Post | undefined {
  return readAll().find((p) => p.slug === slug);
}

export function getLatestPosts(n = 4, includeHidden = false): Post[] {
  return readAll()
    .filter((p) => includeHidden || !p.hidden)
    .slice(0, n);
}

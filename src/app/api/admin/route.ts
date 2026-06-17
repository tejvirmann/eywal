import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { isAdminMode } from "@/lib/admin";

const CONTENT_DIR = path.join(process.cwd(), "content", "logs");

function findFile(slug: string): string | null {
  for (const ext of [".md", ".mdx"]) {
    const p = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

export async function POST(req: NextRequest) {
  if (!(await isAdminMode())) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { slug, action } = (await req.json()) as {
    slug: string;
    action: "toggle-hidden" | "toggle-report";
  };

  const filePath = findFile(slug);
  if (!filePath) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const file = matter(raw);
  const data = { ...file.data };

  if (action === "toggle-hidden") {
    data.hidden = !data.hidden;
  }

  if (action === "toggle-report") {
    const tags: string[] = Array.isArray(data.tags)
      ? [...data.tags]
      : data.tags
      ? [data.tags]
      : [];
    const idx = tags.findIndex((t: string) => t.toLowerCase() === "report");
    if (idx >= 0) tags.splice(idx, 1);
    else tags.push("report");
    data.tags = tags;
  }

  fs.writeFileSync(filePath, matter.stringify(file.content, data), "utf-8");
  return NextResponse.json({ ok: true, data });
}

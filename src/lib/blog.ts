import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingTime: string;
  category: string;
  canonical: string;
  faqItems?: { question: string; answer: string }[];
}

const contentDir = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(contentDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/^\d+-/, "").replace(".mdx", "");
      const raw = fs.readFileSync(path.join(contentDir, f), "utf8");
      const { data } = matter(raw);
      return { slug, ...data } as BlogPost;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string) {
  const files = fs.readdirSync(contentDir);
  const file = files.find((f) => f.includes(slug));
  if (!file) return null;
  const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
  const { data, content } = matter(raw);
  return { metadata: data as BlogPost, content };
}

import { getAllPosts } from "@/lib/blog";
import ArticleCard from "@/components/blog/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Resources | Klaris - Wealth Structure Insights for Accountants",
  },
  description:
    "Practical guides for Australian accountants and financial advisers on trust documentation, SMSF structure mapping, estate planning, and wealth structure visualisation.",
  alternates: { canonical: "https://klaris.com.au/blog" },
  openGraph: {
    title: "Resources | Klaris - Wealth Structure Insights for Accountants",
    description:
      "Practical guides for Australian accountants and financial advisers on trust documentation, SMSF structure mapping, estate planning, and wealth structure visualisation.",
    url: "https://klaris.com.au/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Klaris - Wealth Structure Insights for Accountants",
    description:
      "Practical guides for Australian accountants and financial advisers on trust documentation, SMSF structure mapping, estate planning, and wealth structure visualisation.",
    images: ["https://klaris.com.au/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <section className="max-w-5xl mx-auto px-5 py-10 md:py-14">
      <h1 className="text-3xl font-bold text-primary mb-4">Resources</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Practical guides for accountants and financial advisers working with
        complex client structures.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

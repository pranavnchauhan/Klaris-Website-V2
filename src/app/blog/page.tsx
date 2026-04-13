import { getAllPosts } from "@/lib/blog";
import ArticleCard from "@/components/blog/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Blog | Klaris - Wealth Structure Insights for Accountants",
  },
  description:
    "Practical guides for Australian accountants and financial advisers on trust documentation, SMSF structure mapping, estate planning, and wealth structure visualisation.",
  alternates: { canonical: "https://klaris.com.au/blog" },
  openGraph: {
    title: "Blog | Klaris - Wealth Structure Insights for Accountants",
    description:
      "Practical guides for Australian accountants and financial advisers on trust documentation, SMSF structure mapping, estate planning, and wealth structure visualisation.",
    url: "https://klaris.com.au/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Klaris - Wealth Structure Insights for Accountants",
    description:
      "Practical guides for Australian accountants and financial advisers on trust documentation, SMSF structure mapping, estate planning, and wealth structure visualisation.",
    images: ["https://klaris.com.au/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-section-hero">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Practical guides for accountants and financial advisers working with
            complex client structures.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

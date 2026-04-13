import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
    >
      <span className="text-xs font-medium text-primary uppercase tracking-wide">
        {post.category}
      </span>
      <h2 className="mt-2 text-lg font-semibold group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
        {post.description}
      </p>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
        <span>{post.readingTime}</span>
        <span>·</span>
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}

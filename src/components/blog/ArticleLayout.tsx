import type { BlogPost } from "@/lib/blog";

export default function ArticleLayout({
  metadata,
  children,
}: {
  metadata: BlogPost;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 md:py-14">
      <header className="mb-10">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">
          {metadata.category}
        </span>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-primary">
          {metadata.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {metadata.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>{metadata.author}</span>
          <span>·</span>
          <span>{metadata.readingTime}</span>
          <span>·</span>
          <time dateTime={metadata.publishedAt}>
            {new Date(metadata.publishedAt).toLocaleDateString("en-AU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </header>
      <article className="prose prose-neutral max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground">
        {children}
      </article>
      <footer className="mt-16 border-t pt-8">
        <p className="text-sm text-muted-foreground">
          This article is for informational purposes only and does not
          constitute financial, tax, or legal advice. Klaris is wealth structure
          visualisation software. Decisions should be made in consultation with
          a qualified professional.
        </p>
      </footer>
    </div>
  );
}

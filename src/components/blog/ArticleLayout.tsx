import type { BlogPost } from "@/lib/blog";

export default function ArticleLayout({
  metadata,
  children,
}: {
  metadata: BlogPost;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hero header */}
      <section className="py-16 md:py-24 bg-section-hero">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-4">
            {metadata.category}
          </span>
          <h1 className="text-3xl font-bold leading-tight text-primary sm:text-4xl text-center">
            {metadata.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            {metadata.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
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
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <article className="prose prose-neutral max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground prose-p:text-muted-foreground">
            {children}
          </article>
          <footer className="mt-16 border-t pt-8">
            <p className="text-sm text-muted-foreground">
              This article is for informational purposes only and does not
              constitute financial, tax, or legal advice. Klaris is wealth
              structure visualisation software. Decisions should be made in
              consultation with a qualified professional.
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}

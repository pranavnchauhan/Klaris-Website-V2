import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import ArticleLayout from "@/components/blog/ArticleLayout";
import QuickAnswer from "@/components/blog/QuickAnswer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const mdxComponents = {
  QuickAnswer,
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const { metadata } = post;
  return {
    title: { absolute: `${metadata.title} | Klaris` },
    description: metadata.description,
    alternates: { canonical: metadata.canonical },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.canonical,
      type: "article",
      publishedTime: metadata.publishedAt,
      modifiedTime: metadata.updatedAt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const { metadata, content } = post;

  const faqSchema = metadata.faqItems?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: metadata.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <ArticleLayout metadata={metadata}>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <MDXRemote source={content} components={mdxComponents} />
    </ArticleLayout>
  );
}

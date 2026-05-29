import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Button } from "@/components/site/Button";
import { posts } from "@/data/posts";
import { site } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.coverImage ? { images: [post.coverImage] } : undefined,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: `${site.name} ${site.parent}`,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: `${site.name} ${site.parent}`,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
    ...(post.coverImage && { image: `${site.url}${post.coverImage}` }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section className="border-b border-border bg-noise">
        <Container size="narrow">
          <Link
            href="/blog"
            className="font-display text-xs uppercase tracking-[0.25em] text-fg-dim hover:text-fg"
          >
            ← All posts
          </Link>
          <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-fg-dim">
            <span>{formatDate(post.date)}</span>
            <span className="text-fg-dim">/</span>
            <span className="text-brand-primary">{post.category}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1] tracking-tight sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-fg-muted">{post.excerpt}</p>
        </Container>
      </Section>

      {post.coverImage && (
        <div className="border-b border-border bg-bg">
          <Container size="narrow" className="py-10">
            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 64rem, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </Container>
        </div>
      )}

      <Section>
        <Container size="narrow">
          <article className="space-y-5 text-lg leading-relaxed text-fg-muted">
            {post.body.split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Eyebrow>Want to train with us?</Eyebrow>
            <Button href="/contact">Start an inquiry</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

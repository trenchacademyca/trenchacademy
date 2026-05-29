import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Training, recruiting, and culture from the Trench Academy team. Notes from the field.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden border-b border-border sm:min-h-[70vh]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/media/hero/blog-hero.jpg"
            alt="Trench Academy blog"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <video
            src="/media/video/blog-hero.mp4"
            poster="/media/hero/blog-hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg/85 via-bg/65 to-bg/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-30" />

        <Container className="relative w-full py-20 sm:py-28">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Notes from
            <br />
            <span className="text-brand-primary">the trenches.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            Training breakdowns, recruiting playbooks, athlete stories, and the work
            behind everything we do.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="divide-y divide-border border-y border-border">
            {sorted.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group grid items-center gap-6 py-8 transition-colors hover:bg-surface md:grid-cols-[260px_1fr_120px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
                  {p.coverImage ? (
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 260px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgba(1,125,185,0.25), rgba(3,58,84,0.7))",
                      }}
                    />
                  )}
                </div>

                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dim">
                    {formatDate(p.date)}
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-bold uppercase leading-tight text-fg group-hover:text-brand-primary sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-fg-muted">{p.excerpt}</p>
                </div>

                <div className="text-left font-display text-xs uppercase tracking-[0.25em] text-brand-primary md:text-right">
                  {p.category}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

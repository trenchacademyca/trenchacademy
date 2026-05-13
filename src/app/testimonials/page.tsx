import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Button } from "@/components/site/Button";
import { featuredAthletes, testimonials } from "@/data/athletes";

export const metadata: Metadata = {
  title: "Athletes",
  description:
    "Athletes who have trained with Trench Academy by Recruit Ready, and what they're doing now.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Section className="border-b border-border bg-noise">
        <Container>
          <Eyebrow>Athletes</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Welcome to the
            <br />
            <span className="text-brand-primary">trenches.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            Real athletes. Real work. The players who train with us — and where you can
            watch them play.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>The Athletes</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase sm:text-4xl">
            Meet the athletes.
          </h2>

          <div className="mt-10 grid gap-3 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {featuredAthletes.map((a) => (
              <figure
                key={a.slug}
                className="group relative aspect-[3/4] overflow-hidden border border-border bg-surface"
              >
                <Image
                  src={a.image}
                  alt={`${a.name} — ${a.team}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <div className="font-display text-xs uppercase tracking-[0.25em] text-brand-primary">
                    {a.league}
                  </div>
                  <div className="mt-1 font-display text-xl font-bold uppercase leading-tight text-fg">
                    {a.name}
                  </div>
                  <div className="mt-1 text-xs text-fg-muted">{a.team}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Eyebrow>In Their Words</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase sm:text-4xl">
            From the people in it
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="flex flex-col border border-border bg-bg p-6">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  className="text-brand-primary"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M0 24V14C0 6.3 4.3 1.3 12.9 0v5.2C8.7 6.4 6.5 9.1 6.5 12h6.5v12H0zm18.9 0V14c0-7.7 4.3-12.7 12.9-14v5.2c-4.2 1.2-6.4 3.9-6.4 6.8H32v12H18.9z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-fg-muted">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-display text-sm font-bold uppercase tracking-wider">
                    {t.attribution}
                  </div>
                  <div className="mt-1 font-display text-xs uppercase tracking-[0.2em] text-brand-primary">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow" className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Your story could be next.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg">
              Start training
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

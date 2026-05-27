import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Button } from "@/components/site/Button";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Position-specific football training and recruiting prep from grassroots through pro. Find the program for your athlete.",
};

export default function ProgramsPage() {
  return (
    <>
      <Section className="border-b border-border bg-noise">
        <Container>
          <Eyebrow>Programs</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Every level.
            <br />
            <span className="text-brand-primary">Every position.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            From a first-time youth player learning the game to a senior chasing a
            scholarship, our programs are built around where your athlete is and where
            they&apos;re trying to go.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-6">
            {programs.map((p, i) => {
              const imageRight = i % 2 === 1;
              return (
                <article
                  key={p.slug}
                  id={p.slug}
                  className="grid scroll-mt-24 overflow-hidden border border-border bg-surface md:grid-cols-2"
                >
                  <div
                    className={`relative aspect-[4/3] md:aspect-auto md:min-h-[420px] ${
                      imageRight ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs uppercase tracking-[0.3em] text-fg-dim">
                        Program · {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    <span className="mt-3 font-display text-sm uppercase tracking-[0.25em] text-brand-primary">
                      {p.level}
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                      {p.name}
                    </h2>
                    <p className="mt-5 text-fg-muted">{p.summary}</p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-fg-muted"
                        >
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 bg-brand-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button
                        href={`/contact?program=${encodeURIComponent(p.name)}`}
                        size="md"
                      >
                        {p.cta}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="relative isolate overflow-hidden border-t border-border">
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-30" />
        <Container size="narrow" className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Not sure which fits?
          </h2>
          <p className="mt-4 text-fg-muted">
            Tell us about your athlete and we&apos;ll point you at the right program.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg">
              Start an inquiry
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Button } from "@/components/site/Button";
import { YouthProgramForm } from "@/components/forms/YouthProgramForm";
import { programs } from "@/data/programs";

const youth = programs.find((p) => p.slug === "youth-trench-program")!;

export const metadata: Metadata = {
  title: "Youth Football Program",
  description:
    "Trench Academy's Youth Trench Program introduces young athletes to football fundamentals through mentorship. Spots are limited.",
  robots: { index: false, follow: false },
};

export default function YouthProgramPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src={youth.image}
            alt="Youth program training"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg/90 via-bg/70 to-bg/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-40" />

        <Container className="relative pt-20 pb-24 sm:pt-32 sm:pb-40">
          <Eyebrow>Trench Academy Youth Program</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.85] tracking-tight text-fg sm:text-7xl lg:text-8xl">
            Where it <span className="text-brand-primary">starts.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {youth.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href="#signup" size="lg">
              Sign Up
            </Button>
            <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-primary">
              Spots are limited.
            </span>
          </div>
        </Container>
      </section>

      {/* PROGRAM DETAILS */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>What We Train</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Fundamentals.
                <br />
                <span className="text-brand-primary">Film. Family.</span>
              </h2>
              <p className="mt-6 text-fg-muted">
                Every session builds real football knowledge and physical
                confidence, mentored by athletes who have been in their shoes.
                This is where the foundation gets laid.
              </p>
              <ul className="mt-8 space-y-3">
                {youth.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    <span className="text-fg-muted">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
              <Image
                src={youth.image}
                alt="Youth athletes training at Trench Academy"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* DON MEALS */}
      <Section className="border-y border-border bg-surface">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <Eyebrow>Nutrition Partner</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight">
                Fuelled <span className="text-brand-primary">right.</span>
              </h2>
            </div>
            <div>
              <p className="text-fg-muted">
                Great athletes train hard and eat right. Don Meals is our
                preferred nutrition partner: fresh, macro-tracked meals designed
                by an athlete and crafted by a chef. No subscriptions, no
                minimums. Just food built for performance.
              </p>
              <div className="mt-6">
                <Button
                  href="https://donmeals.ca/"
                  variant="ghost"
                >
                  Visit Don Meals
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Common <span className="text-brand-primary">questions.</span>
          </h2>
          <div className="mt-12 divide-y divide-border">
            {[
              {
                q: "How old does my child need to be?",
                a: "Coming soon.",
              },
              {
                q: "Does my child need prior football experience?",
                a: "Coming soon.",
              },
              {
                q: "Where are sessions held?",
                a: "Coming soon.",
              },
              {
                q: "How often do sessions run and how long is each one?",
                a: "Coming soon.",
              },
              {
                q: "What is the cost?",
                a: "Coming soon.",
              },
              {
                q: "What should my child bring or wear?",
                a: "Coming soon.",
              },
              {
                q: "What happens after I submit the form?",
                a: "Coming soon.",
              },
              {
                q: "Is this program only for linemen?",
                a: "Coming soon.",
              },
              {
                q: "Who are the coaches?",
                a: "Coming soon.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-sm font-semibold uppercase tracking-wide text-fg hover:text-brand-primary">
                  {q}
                  <span className="shrink-0 text-fg-dim transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="pb-5 text-fg-muted">{a}</div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* SIGN UP */}
      <Section id="signup">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Eyebrow>Get Started</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Secure your <span className="text-brand-primary">spot.</span>
            </h2>
            <p className="mt-6 text-fg-muted">
              Fill out the form below and a coach will be in touch.
            </p>
            <div className="mt-10 border border-border bg-surface p-6 sm:p-10">
              <YouthProgramForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

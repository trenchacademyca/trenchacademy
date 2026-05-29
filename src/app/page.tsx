import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Marquee } from "@/components/site/Marquee";
import { StatBlock } from "@/components/site/StatBlock";
import { AthletePhoto } from "@/components/site/AthletePhoto";
import { programs } from "@/data/programs";
import { featuredAthletes, testimonials } from "@/data/athletes";
import { posts } from "@/data/posts";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export const metadata: Metadata = {
  title: {
    absolute:
      "Trench Academy by Recruit Ready · Football Line-Play Training, Recruiting & Development",
  },
  description:
    "Position-specific football training for offensive and defensive linemen. Grassroots through pro: technique, recruiting prep, combine prep, and elite player development. Trust the process.",
  alternates: { canonical: "/" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/media/hero/hero-sean-sevillano.jpg"
            alt="Sean Sevillano in action"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <video
            src="/media/video/home-hero.mp4"
            poster="/media/hero/hero-sean-sevillano.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg/85 via-bg/65 to-bg/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-40" />

        <Container className="relative pt-20 pb-24 sm:pt-32 sm:pb-40">
          <Eyebrow>Trench Academy by Recruit Ready</Eyebrow>

          <h1 className="mt-6 max-w-5xl font-display text-6xl font-bold uppercase leading-[0.85] tracking-tight text-fg sm:text-8xl lg:text-9xl">
            Trust the <span className="text-brand-primary">process.</span>
          </h1>

          <div className="mt-8 flex items-center gap-6 sm:gap-8">
            <Image
              src="/logo.png"
              alt="Trench Academy"
              width={120}
              height={112}
              className="h-14 w-auto sm:h-16"
              priority
            />
            <span className="h-10 w-px bg-border" aria-hidden="true" />
            <a
              href="https://www.rrsportsacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Recruit Ready"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <Image
                src="/recruit-ready-logo.png"
                alt="Recruit Ready"
                width={300}
                height={56}
                className="h-7 w-auto sm:h-9"
              />
            </a>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Grassroots through pro. Position-specific training, recruiting prep, and
            elite player development for athletes who refuse to settle. This is where
            the work gets real.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Start Training
            </Button>
            <Button href="/programs" variant="ghost" size="lg">
              See Programs
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatBlock value="1500+" label="Athletes Trained" />
            <StatBlock value="200+" label="U SPORTS Athletes" />
            <StatBlock value="25+" label="CFL Pros" />
            <StatBlock value="15+" label="NCAA Athletes" />
          </div>
        </Container>
      </section>

      <Marquee
        items={[
          "Youth → Pro",
          "Recruit Ready",
          "Trenches Training",
          "O-Line",
          "D-Line",
          "Combine Prep",
          "Film Breakdown",
          "Welcome to the Trenches",
        ]}
      />

      {/* PROGRAMS PREVIEW */}
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>What We Train</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Built for
                <br />
                <span className="text-brand-primary">the climb.</span>
              </h2>
            </div>
            <Link
              href="/programs"
              className="font-display text-sm uppercase tracking-[0.25em] text-brand-primary hover:text-brand-primary-hot"
            >
              All programs →
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {programs.map((p) => (
              <Link
                key={p.slug}
                href={`/programs#${p.slug}`}
                className="group relative flex w-full flex-col border border-border bg-surface p-6 transition-colors hover:border-brand-primary sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
              >
                <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-primary">
                  {p.level}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-fg">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-fg-muted">{p.summary}</p>
                <span className="mt-auto pt-6 font-display text-xs uppercase tracking-[0.25em] text-fg-dim group-hover:text-brand-primary">
                  {p.cta} →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ATHLETES */}
      <Section className="border-y border-border bg-surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The Athletes</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Real reps.
                <br />
                <span className="text-brand-primary">Real results.</span>
              </h2>
              <p className="mt-4 max-w-md text-fg-muted">
                Driven, committed athletes putting in the work in the trenches with us.
              </p>
            </div>
            <Link
              href="/athletes"
              className="font-display text-sm uppercase tracking-[0.25em] text-brand-primary hover:text-brand-primary-hot"
            >
              All athletes →
            </Link>
          </div>

          <div className="mt-12 grid gap-3 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {featuredAthletes
              .filter((a) =>
                [
                  "zack-williams",
                  "gio-vaccaro",
                  "victor-olaniran",
                  "matt-stokman",
                  "sean-sevillano",
                ].includes(a.slug),
              )
              .map((a) => (
              <figure
                key={a.slug}
                className="group relative aspect-[3/4] overflow-hidden border border-border bg-bg"
              >
                <AthletePhoto athlete={a} />
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

      {/* FAMILY */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
              <Image
                src="/media/family/family.jpg"
                alt="The Trench Academy family"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            </div>

            <div>
              <Eyebrow>The Family</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                More than a program.
                <br />
                <span className="text-brand-primary">A family.</span>
              </h2>
              <p className="mt-6 text-fg-muted">
                Trench Academy isn&apos;t just about reps and results. It&apos;s about
                the people in the building: athletes, coaches, parents, and alumni who
                pull each other forward. Once you&apos;re in the trenches with us,
                you&apos;re family.
              </p>
              <p className="mt-4 text-fg-muted">
                Every athlete who walks through our doors becomes part of something
                bigger than themselves. That&apos;s the standard. That&apos;s the work.
                That&apos;s the family.
              </p>
              <div className="mt-8">
                <Button href="/contact">Join the family</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* LATEST POSTS */}
      <Section className="border-y border-border bg-surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>From the Blog</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Latest from the trenches.
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-display text-sm uppercase tracking-[0.25em] text-brand-primary hover:text-brand-primary-hot"
            >
              All posts →
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[...posts]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden border border-border bg-bg transition-colors hover:border-brand-primary"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    {p.coverImage ? (
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
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
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-fg-dim">
                      <span>{formatDate(p.date)}</span>
                      <span className="text-fg-dim">/</span>
                      <span className="text-brand-primary">{p.category}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-fg group-hover:text-brand-primary">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-fg-muted">{p.excerpt}</p>
                    <span className="mt-6 font-display text-xs uppercase tracking-[0.25em] text-fg-dim group-hover:text-brand-primary">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      {/* APP COMING SOON */}
      <Section className="relative isolate overflow-hidden border-t border-border">
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-40" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow>The Trench Academy App</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
                The whole lab.
                <br />
                <span className="text-brand-primary">In your pocket.</span>
              </h2>
              <p className="mt-5 font-display text-sm uppercase tracking-[0.3em] text-brand-primary">
                Drops soon.
              </p>
              <p className="mt-5 max-w-xl text-fg-muted">
                Training plans, drill film, coach feedback, and recruiting tools. The
                whole lab, anywhere you train. Get on the list to be first in line.
              </p>
            </div>

            <div className="border border-border bg-surface p-6 sm:p-8">
              <div className="font-display text-xs uppercase tracking-[0.3em] text-brand-primary">
                Waitlist
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-tight">
                Be first to know.
              </h3>
              <div className="mt-5">
                <WaitlistForm compact />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIAL */}
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
              <Image
                src="/media/testimonials/denzel-sam-uje.jpg"
                alt={`${testimonials[0].attribution} training at Trench Academy`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent" />
            </div>
            <div>
              <Eyebrow>From the Trenches</Eyebrow>
              <blockquote className="mt-6 font-display text-3xl font-medium uppercase leading-tight text-fg sm:text-4xl lg:text-5xl">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div className="mt-8 text-sm text-fg-muted">
                <span className="font-display font-semibold uppercase tracking-wider text-fg">
                  {testimonials[0].attribution}
                </span>
                <span className="mx-2 text-fg-dim">·</span>
                <span>{testimonials[0].role}</span>
              </div>
              <div className="mt-10">
                <Button href="/athletes" variant="ghost">
                  More athlete stories
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="relative isolate overflow-hidden border-t border-border">
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-30" />
        <Container size="narrow" className="text-center">
          <Eyebrow className="justify-center">Ready to work?</Eyebrow>
          <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-tight sm:text-6xl">
            Get in the lab.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-fg-muted">
            Serious about your game? This is where it starts. Tell us about your athlete
            and we&apos;ll take it from there.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" size="lg">
              Start an inquiry
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

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
  title: "Youth Lineman Program in Winnipeg | Trench Academy",
  description:
    "Winnipeg's premier youth football lineman program for athletes ages 9-13. 13 weeks of O-line and D-line coaching, film study, and academic accountability, mentored by college and pro players. Spots are limited.",
  openGraph: {
    title: "Youth Lineman Program in Winnipeg | Trench Academy",
    description:
      "Winnipeg's premier youth football lineman program for athletes ages 9-13. 13 weeks of O-line and D-line coaching, film study, and academic accountability, mentored by college and pro players. Spots are limited.",
    url: "https://trenchacademy.ca/youth-football-program",
    siteName: "Trench Academy",
    type: "website",
  },
};

const bullets = [
  "Learn fundamental athletic movements: stretching, running, and proper 3-point stance",
  "Develop offensive football movement skills and position-specific fundamentals",
  "Learn the fundamentals of run and pass game, player positions, offensive line splits, and huddle communication",
  "Study film: review your drills, analyze your performance, and identify areas for improvement",
  "Train alongside mentors from our high school, college, and pro O-linemen",
  "Join our academic development and accountability program",
];

export default function YouthProgramPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <video
            src="/media/youth-group-3pt-stance.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center"
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
          <div className="mt-8">
            <Image
              src="/logo.png"
              alt="Trench Academy"
              width={120}
              height={112}
              className="h-14 w-auto sm:h-16"
              priority
            />
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            A multi-level mentoring program for athletes ages 9 to 13 (grades 5 to 8).
            Real football fundamentals and holistic coaching, on the field and in the classroom.
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
          <div className="relative aspect-[21/9] w-full overflow-hidden border border-border">
            <Image
              src="/media/youth-group.jpg"
              alt="Youth athletes training at Trench Academy"
              fill
              sizes="(min-width: 1024px) 100vw, 100vw"
              className="object-cover object-bottom"
            />
          </div>
          <div className="mt-10">
            <Eyebrow>What We Train</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Fundamentals.
              <br />
              <span className="text-brand-primary">Film. Family.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-fg-muted">
              A 13-week program running December to April. We teach run and pass
              techniques, put athletes on film, and give them competitive reps against their
              peers. Youth athletes are mentored by high school, college, and pro O-linemen
              who have been in their shoes. Every participant joins our academic development
              and accountability program. We develop more than athletes. We develop
              student-athletes.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  <span className="text-fg-muted text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-l-2 border-brand-primary pl-4">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-fg-dim">
                Youth Development Coordinator
              </p>
              <p className="mt-1 font-display text-lg font-bold uppercase text-fg">
                Braedan Cheang
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* PHOTO GRID */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-video overflow-hidden">
            <img
              src="/media/youth-group-watching-film.jpg"
              alt="Youth group watching film"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <video
              src="/media/youth-group-drills-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DON MEALS */}
      <Section className="relative isolate overflow-hidden border-y border-border mt-20 sm:mt-28">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/media/don-meals-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-bg/85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg/60 via-transparent to-bg/60" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div className="flex flex-col items-start gap-6">
              <div className="rounded-full shadow-[0_0_40px_20px_rgba(255,255,255,0.6)]">
                <div className="relative h-36 w-36 overflow-hidden rounded-full bg-white [transform:translateZ(0)] sm:h-48 sm:w-48">
                  <Image
                    src="/media/don-meals-logo.png"
                    alt="Don Meals"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <Eyebrow>Nutrition Partner</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight">
                  Fuelled <span className="text-brand-primary">right.</span>
                </h2>
              </div>
            </div>
            <div>
              <p className="text-fg-muted">
                Great athletes train hard and eat right. Don Meals is our
                preferred nutrition partner: fresh, macronutrient packed and tracked
                meals designed by an athlete and crafted by a chef. No subscriptions, no
                minimums. Just food built for performance.
              </p>
              <div className="mt-6">
                <Button href="https://donmeals.ca/">
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
                q: "Does my child need prior experience?",
                a: "No prior experience is needed. This is the introductory level of Trench Academy, designed to teach the game from the ground up.",
              },
              {
                q: "Where are sessions held?",
                a: "Sessions are held at the Golf Dome.",
              },
              {
                q: "How often do sessions run and how long is each one?",
                a: "Sessions run once per week from 6:30am to 8:00am.",
              },
              {
                q: "What is the cost?",
                a: "$500 for the full 13-week program.",
              },
              {
                q: "What should my child bring or wear?",
                a: "Football cleats, football gloves, a workout shirt, and shorts. Uniforms will be provided upon completion of the program.",
              },
              {
                q: "What happens after I submit the form?",
                a: "Your information is sent to our coaches for review. You will be contacted about having your child join Trench Academy.",
              },
              {
                q: "Is the program only for offensive linemen?",
                a: "No. We also have a full-time defensive line coach for athletes who prefer the defensive side of the ball.",
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

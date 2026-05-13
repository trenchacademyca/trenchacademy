import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export const metadata: Metadata = {
  title: "The App · Coming Soon",
  description:
    "The Trench Academy app is coming soon. Training plans, drill library, recruiting tools, and direct coach access — in your pocket. Join the waitlist.",
};

const features = [
  {
    title: "Training plans built for you",
    body: "Position-specific programming tied to your level, your tape, and your goals.",
  },
  {
    title: "Drill library on demand",
    body: "Coach-led drills, film, and breakdowns from the same lab — anytime, anywhere.",
  },
  {
    title: "Direct line to coaches",
    body: "Send your film, get feedback, ask questions. The lab follows you home.",
  },
  {
    title: "Recruiting tools",
    body: "Track schools, build outreach, and stay on top of your timeline.",
  },
  {
    title: "Stay in the family",
    body: "See what your teammates are working on. Iron sharpens iron, even off the field.",
  },
];

export default function AppPage() {
  return (
    <>
      <Section className="relative isolate overflow-hidden border-b border-border bg-noise">
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-40" />
        <Container>
          <Eyebrow>The Trench Academy App</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Coming soon.
            <br />
            <span className="text-brand-primary">The lab in your pocket.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            Everything we do at the academy — the training plans, the drill film, the
            coach feedback, the recruiting work — built into one place you can carry
            with you. Be the first to know when it&apos;s live.
          </p>

          <div className="mt-10 max-w-xl">
            <WaitlistForm />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>What&apos;s coming</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Built for athletes
            <br />
            who don&apos;t stop working.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="border border-border bg-surface p-6"
              >
                <div className="font-display text-xs uppercase tracking-[0.3em] text-brand-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-fg-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative isolate overflow-hidden border-t border-border bg-surface">
        <Container size="narrow" className="text-center">
          <Eyebrow className="justify-center">Don&apos;t miss launch</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Get on the list.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-fg-muted">
            One email when the app drops. No spam, no noise.
          </p>
          <div className="mt-8 mx-auto max-w-xl">
            <WaitlistForm />
          </div>
        </Container>
      </Section>
    </>
  );
}

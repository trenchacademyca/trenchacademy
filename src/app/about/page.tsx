import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Button } from "@/components/site/Button";
import { CoachPhoto } from "@/components/site/CoachPhoto";
import { coaches, type Coach } from "@/data/coaches";

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="border border-border bg-bg">
      <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-border">
        <CoachPhoto coach={coach} />
      </div>
      <div className="p-6">
        <h4 className="font-display text-xl font-bold uppercase leading-tight">
          {coach.name}
        </h4>
        {coach.role && (
          <p className="mt-1 font-display text-xs uppercase tracking-[0.2em] text-brand-primary">
            {coach.role}
          </p>
        )}
        <p className="mt-3 text-sm text-fg-muted">{coach.bio}</p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Trench Academy by Recruit Ready: a football training organization built to develop athletes from grassroots through pro.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border bg-noise">
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            The trenches built us.
            <br />
            <span className="text-brand-primary">Now we build athletes.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            Recruit Ready develops athletes across every position. Trench Academy exists
            for one of them: the trenches. We&apos;re the dedicated line-play program for
            offensive and defensive linemen, coached by people who&apos;ve done it.
          </p>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight">
                Develop the athlete.
                <br />
                Develop the person.
              </h2>
              <p className="mt-6 text-fg-muted">
                We develop linemen the right way: relentless reps, position-specific
                coaching, and mentorship that follows our athletes on and off the field.
                The goal isn&apos;t just a better player by spring. It&apos;s a player
                ready for whatever level comes next.
              </p>
              <p className="mt-4 text-fg-muted">
                We&apos;re not just building linemen. We&apos;re building the kind of
                teammates next-level coaches want in their locker room: disciplined,
                coachable, accountable. The habits we demand here outlast the game.
              </p>
            </div>
            <div>
              <Eyebrow>What We Believe</Eyebrow>
              <ul className="mt-4 space-y-3 text-fg-muted">
                <li className="flex gap-3">
                  <span className="font-display text-brand-primary">01.</span>
                  Technique before volume. Every rep has a purpose.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-brand-primary">02.</span>
                  Recruiting is a process, not a hope. We coach the process.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-brand-primary">03.</span>
                  The standard is the standard. Every athlete, every age.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-brand-primary">04.</span>
                  Iron sharpens iron. You get better against the best, not the comfortable.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative isolate overflow-hidden border-t border-border">
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-20" />
        <Container size="narrow">
          <Eyebrow>The Standard</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Respect the work.
          </h2>
          <p className="mt-6 text-lg text-fg-muted">
            The work doesn&apos;t stop when practice does. Our athletes carry themselves
            with respect, in the building and out of it, and own the details that separate
            good from great: how they recover, how they eat, how they prepare. Around
            here, maximum effort isn&apos;t a good day. It&apos;s the baseline.
          </p>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Eyebrow>Coaches</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Meet the coaches.
          </h2>
          <p className="mt-4 max-w-2xl text-fg-muted">
            Experienced position coaches who train and mentor the next generation, and
            hold every athlete to the same standard.
          </p>

          <div className="mt-12 grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {coaches.map((c) => (
              <CoachCard key={c.slug} coach={c} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow" className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Want to know more?
          </h2>
          <p className="mt-4 text-fg-muted">
            Reach out. Tell us about your athlete. We&apos;ll take it from there.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

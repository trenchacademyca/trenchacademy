import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Button } from "@/components/site/Button";
import { coaches } from "@/data/coaches";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Trench Academy by Recruit Ready — a football training organization built to develop athletes from grassroots through pro.",
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
            Trench Academy by Recruit Ready is a football development program for athletes
            who take the game seriously. We coach the fundamentals, demand the details, and
            build pipelines — from first-time players to college rosters to pro tryouts.
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
                We&apos;re not in the highlight business. We&apos;re in the development
                business. Every drill, every rep, every conversation ties back to who an
                athlete is trying to become — on the field and off it.
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
                  Real growth happens where it&apos;s uncomfortable.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Eyebrow>Coaches</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Meet the coaches.
          </h2>

          <div className="mt-12 grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {coaches.map((c) => (
              <div key={c.slug} className="border border-border bg-bg">
                <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-border">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold uppercase leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-1 font-display text-xs uppercase tracking-[0.2em] text-brand-primary">
                    {c.role}
                  </p>
                  <p className="mt-3 text-sm text-fg-muted">{c.bio}</p>
                </div>
              </div>
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

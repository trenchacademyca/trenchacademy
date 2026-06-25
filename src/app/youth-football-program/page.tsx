import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { YouthProgramForm } from "@/components/forms/YouthProgramForm";

export const metadata: Metadata = {
  title: "Youth Program",
  description: "Trench Academy Youth Program inquiry.",
  robots: { index: false, follow: false },
};

export default function YouthProgramPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Youth Program</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Trench Academy Youth
          </h1>
          <p className="mt-6 text-fg-muted">
            Inquire below and a coach will be in touch.
          </p>
          <div className="mt-10 border border-border bg-surface p-6 sm:p-10">
            <YouthProgramForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}

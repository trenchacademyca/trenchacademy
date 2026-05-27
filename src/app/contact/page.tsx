import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { SocialLinks } from "@/components/site/SocialLinks";
import { MailIcon, PhoneIcon } from "@/components/site/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start an inquiry with Trench Academy by Recruit Ready. Tell us about your athlete and we'll be in touch.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-border bg-noise">
        <Container>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Start an inquiry.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            Serious about your game? This is where it starts. Tell us about your athlete
            and we&apos;ll take it from there.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="border border-border bg-surface p-6 sm:p-10">
              <Suspense fallback={<div className="text-fg-muted">Loading form…</div>}>
                <InquiryForm />
              </Suspense>
            </div>

            <aside className="space-y-8">
              <div>
                <Eyebrow>Direct</Eyebrow>
                <div className="mt-3 space-y-2 text-sm text-fg-muted">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-primary"
                  >
                    <MailIcon className="h-5 w-5 flex-shrink-0" />
                    <span>{site.email}</span>
                  </a>
                  {site.phone && (
                    <a
                      href={`tel:${site.phone}`}
                      className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-primary"
                    >
                      <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                      <span>{site.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              <div>
                <Eyebrow>Follow</Eyebrow>
                <SocialLinks className="mt-3" />
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

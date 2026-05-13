import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { InquiryForm } from "@/components/forms/InquiryForm";
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
            Tell us where your athlete is and where they want to be. A coach will follow
            up with next steps.
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
                <div className="mt-3 space-y-1 text-fg-muted">
                  <a href={`mailto:${site.email}`} className="block hover:text-fg">
                    {site.email}
                  </a>
                  {site.phone && (
                    <a href={`tel:${site.phone}`} className="block hover:text-fg">
                      {site.phone}
                    </a>
                  )}
                </div>
              </div>

              <div>
                <Eyebrow>Train Where</Eyebrow>
                <p className="mt-3 text-fg-muted">
                  {site.location || "Location details coming soon. Reach out for the latest schedule."}
                </p>
              </div>

              <div>
                <Eyebrow>Follow</Eyebrow>
                <ul className="mt-3 space-y-1 text-fg-muted">
                  <li>
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-fg"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-fg"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-fg"
                    >
                      X / Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

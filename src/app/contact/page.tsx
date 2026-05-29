import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Eyebrow } from "@/components/site/Eyebrow";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { SocialLinks } from "@/components/site/SocialLinks";
import { EmailLink } from "@/components/site/EmailLink";
import { PhoneIcon } from "@/components/site/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start an inquiry with Trench Academy by Recruit Ready. Tell us about your athlete and we'll be in touch.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[55vh] items-center overflow-hidden border-b border-border sm:min-h-[60vh]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/media/hero/contact-hero.jpg"
            alt="Trench Academy coaches and athletes"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <video
            src="/media/video/contact-hero.mp4"
            poster="/media/hero/contact-hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg/85 via-bg/65 to-bg/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="absolute inset-0 -z-10 diagonal-stripes opacity-30" />

        <Container className="relative w-full py-20 sm:py-28">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Start an inquiry.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg-muted">
            Serious about your game? This is where it starts. Tell us about your athlete
            and we&apos;ll take it from there.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="border border-border bg-surface p-6 sm:p-10">
              <Suspense fallback={<div className="text-fg-muted">Loading form…</div>}>
                <InquiryForm />
              </Suspense>
            </div>

            <aside className="space-y-8">
              <div className="flex items-center gap-5">
                <Image
                  src="/logo.png"
                  alt="Trench Academy"
                  width={120}
                  height={112}
                  className="h-12 w-auto"
                />
                <span className="h-9 w-px bg-border" aria-hidden="true" />
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
                    className="h-6 w-auto"
                  />
                </a>
              </div>

              <div>
                <Eyebrow>Direct</Eyebrow>
                <div className="mt-3 space-y-2 text-sm text-fg-muted">
                  <EmailLink
                    user={site.emailUser}
                    domain={site.emailDomain}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-primary"
                  />
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

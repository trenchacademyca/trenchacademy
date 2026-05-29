import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";
import { EmailLink } from "./EmailLink";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-(--container-wide) px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex flex-col items-start gap-5">
              <Link href="/" aria-label="Trench Academy by Recruit Ready">
                <Image
                  src="/logo.png"
                  alt="Trench Academy"
                  width={120}
                  height={112}
                  className="h-16 w-auto"
                />
              </Link>
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
                  className="h-7 w-auto"
                />
              </a>
            </div>
            <p className="mt-6 max-w-xs text-sm text-fg-muted">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-fg-dim">
              Train
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-fg-muted hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-fg-dim">
              Org
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.slice(3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-fg-muted hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-fg-dim">
              Connect
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <EmailLink
                  user={site.emailUser}
                  domain={site.emailDomain}
                  className="inline-flex items-center gap-2.5 text-fg-muted transition-colors hover:text-brand-primary"
                />
              </li>
            </ul>
            <SocialLinks className="mt-2" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-fg-dim sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {site.name} {site.parent}. All rights reserved.
          </span>
          <span className="font-display uppercase tracking-[0.25em]">
            Trust the process.
          </span>
        </div>
      </div>
    </footer>
  );
}

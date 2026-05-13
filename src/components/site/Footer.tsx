import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-(--container-wide) px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-fg-muted">
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
                <a
                  href={site.social.instagram}
                  className="text-fg-muted hover:text-fg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.youtube}
                  className="text-fg-muted hover:text-fg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={site.social.twitter}
                  className="text-fg-muted hover:text-fg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-fg-muted hover:text-fg">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-fg-dim sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {site.name} {site.parent}. All rights reserved.
          </span>
          <span className="font-display uppercase tracking-[0.25em]">
            Built in the trenches.
          </span>
        </div>
      </div>
    </footer>
  );
}

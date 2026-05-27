import { site } from "@/lib/site";
import { InstagramIcon } from "./icons";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`space-y-2 text-sm ${className ?? ""}`}>
      <li>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-fg-muted transition-colors hover:text-brand-primary"
        >
          <InstagramIcon className="h-5 w-5 flex-shrink-0" />
          <span>Instagram</span>
        </a>
      </li>
    </ul>
  );
}

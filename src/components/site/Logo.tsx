import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Trench Academy"
      className={`group inline-flex items-center gap-3 ${className ?? ""}`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={120}
        height={112}
        priority
        className="h-14 w-auto sm:h-16"
      />
      <span className="font-display text-base font-bold uppercase tracking-wider text-fg">
        Trench Academy
      </span>
    </Link>
  );
}

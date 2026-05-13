import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className ?? ""}`}>
      <span className="relative flex h-9 w-9 items-center justify-center bg-brand-primary text-white">
        <span className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-brand-navy" />
        <span className="font-display text-lg font-bold leading-none">TA</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold uppercase tracking-wider text-fg">
          Trench Academy
        </span>
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-fg-dim">
          by Recruit Ready
        </span>
      </span>
    </Link>
  );
}

import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display uppercase tracking-[0.25em] text-xs text-brand-primary",
        className,
      )}
    >
      <span className="inline-block h-px w-6 bg-brand-primary" />
      {children}
    </span>
  );
}

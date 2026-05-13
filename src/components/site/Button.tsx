import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider font-semibold transition-all duration-150 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-hot active:bg-brand-primary-dark shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(1,125,185,0.6)]",
  secondary:
    "bg-white text-bg hover:bg-fg-muted/90",
  ghost:
    "bg-transparent text-fg border border-border hover:border-brand-primary hover:text-brand-primary",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

import { cn } from "@/lib/cn";

export function Container({
  className,
  size = "wide",
  children,
}: {
  className?: string;
  size?: "narrow" | "wide";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        size === "narrow" ? "max-w-(--container-narrow)" : "max-w-(--container-wide)",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function StatBlock({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border border-border bg-surface p-6">
      <div className="font-display text-5xl font-bold leading-none text-fg sm:text-6xl">
        {value}
      </div>
      <div className="mt-3 font-display text-xs uppercase tracking-[0.25em] text-fg-dim">
        {label}
      </div>
    </div>
  );
}

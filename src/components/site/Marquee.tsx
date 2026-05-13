export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-surface-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-8 font-display text-2xl uppercase tracking-[0.2em] text-fg-muted"
          >
            <span className="text-brand-primary">●</span>
            <span className="ml-8">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

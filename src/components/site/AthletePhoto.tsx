import Image from "next/image";
import type { FeaturedAthlete } from "@/data/athletes";

const sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw";

export function AthletePhoto({ athlete }: { athlete: FeaturedAthlete }) {
  if (athlete.image) {
    return (
      <Image
        src={athlete.image}
        alt={`${athlete.name}, ${athlete.team}`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  const initials = athlete.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-navy via-surface to-bg">
      <span className="font-display text-7xl font-bold uppercase text-brand-primary/30">
        {initials}
      </span>
    </div>
  );
}

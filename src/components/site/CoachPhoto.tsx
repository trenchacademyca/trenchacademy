import Image from "next/image";
import type { Coach } from "@/data/coaches";

const sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

export function CoachPhoto({ coach }: { coach: Coach }) {
  if (coach.image) {
    return (
      <Image
        src={coach.image}
        alt={coach.name}
        fill
        sizes={sizes}
        className="object-cover"
      />
    );
  }

  const initials = coach.name
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

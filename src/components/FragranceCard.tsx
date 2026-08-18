import { Link } from "@tanstack/react-router";
import { inr, type Fragrance } from "@/lib/fragrances";

export function FragranceCard({ fragrance }: { fragrance: Fragrance }) {
  return (
    <Link
      to="/fragrance/$slug"
      params={{ slug: fragrance.slug }}
      className="group block border border-border bg-card/40 transition-colors hover:border-primary/60"
    >
      <div className="relative overflow-hidden">
        <img
          src={fragrance.image}
          alt={`${fragrance.name} eau de parfum bottle`}
          loading="lazy"
          width={900}
          height={1100}
          className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {fragrance.isNew && (
          <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-primary-foreground">
            New
          </span>
        )}
      </div>
      <div className="space-y-2 p-6">
        <h3 className="font-display text-2xl">{fragrance.name}</h3>
        <p className="eyebrow">{fragrance.family}</p>
        <p className="text-sm text-muted-foreground">{fragrance.tagline}</p>
        <p className="pt-2 text-sm text-primary">{inr(fragrance.price)}</p>
      </div>
    </Link>
  );
}
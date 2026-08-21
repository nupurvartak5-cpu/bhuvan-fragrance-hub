import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { fragrances, getFragrance, inr } from "@/lib/fragrances";

export const Route = createFileRoute("/fragrance/$slug")({
  loader: ({ params }) => {
    const fragrance = getFragrance(params.slug);
    if (!fragrance) throw notFound();
    return { fragrance };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Fragrance not found — Sarkar" }, { name: "robots", content: "noindex" }],
      };
    }
    const f = loaderData.fragrance;
    const title = `${f.name} — Sarkar Eau de Parfum`;
    const description = `${f.name}: ${f.tagline} ${f.family}. ${f.size}, ${inr(f.price)}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: FragranceDetail,
});

function FragranceDetail() {
  const { fragrance } = Route.useLoaderData();
  const others = fragrances.filter((f) => f.slug !== fragrance.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-14 md:grid-cols-2">
        <img
          src={fragrance.image}
          srcSet={`${fragrance.imageSmall} 400w, ${fragrance.image} 800w`}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={`${fragrance.name} eau de parfum bottle`}
          fetchPriority="high"
          decoding="async"
          width={800}
          height={968}
          className="w-full border border-border object-cover"
        />
        <div>
          {fragrance.isNew && <p className="eyebrow">New · Chapter Five</p>}
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{fragrance.name}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{fragrance.family}</p>
          <p className="mt-6 text-sm leading-relaxed text-foreground/90">
            {fragrance.story}
          </p>
          <div className="mt-8 rule-gold" />
          <div className="mt-8 space-y-4">
            {[
              ["Top", fragrance.notes.top],
              ["Heart", fragrance.notes.heart],
              ["Base", fragrance.notes.base],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="eyebrow">{label} notes</p>
                <p className="mt-1 text-sm text-foreground/90">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div>
              <p className="font-display text-3xl text-primary">{inr(fragrance.price)}</p>
              <p className="eyebrow mt-1">{fragrance.size}</p>
            </div>
            <Link to="/contact" className="btn-gold">
              Reserve a bottle
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="font-display text-3xl">Also from the house</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((f) => (
            <Link
              key={f.slug}
              to="/fragrance/$slug"
              params={{ slug: f.slug }}
              className="border border-border p-6 transition-colors hover:border-primary/60"
            >
              <p className="font-display text-2xl">{f.name}</p>
              <p className="eyebrow mt-2">{f.family}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
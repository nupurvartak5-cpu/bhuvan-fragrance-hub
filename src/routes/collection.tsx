import { createFileRoute } from "@tanstack/react-router";
import { FragranceCard } from "@/components/FragranceCard";
import { fragrances } from "@/lib/fragrances";

const title = "The Collection — Five Sarkar Fragrances";
const description =
  "Browse all five Sarkar eau de parfums: Virasat, Raja, Raat, Noor and Safar. Note pyramids, sizes and prices.";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">Eau de Parfum</p>
      <h1 className="mt-4 font-display text-5xl md:text-6xl">The Collection</h1>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Five compositions, each built around a single idea. Virasat joins the house as
        the fifth and most opulent of them.
      </p>
      <div className="mt-6 rule-gold" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fragrances.map((f) => (
          <FragranceCard key={f.slug} fragrance={f} />
        ))}
      </div>
    </div>
  );
}
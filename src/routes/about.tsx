import { createFileRoute } from "@tanstack/react-router";

const title = "The House of Sarkar — Fine Fragrance, Made in India";
const description =
  "How Sarkar builds fragrance: small batches, high parfum concentration and five compositions culminating in Virasat.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="eyebrow">The House</p>
      <h1 className="mt-4 font-display text-5xl md:text-6xl">Made to be remembered</h1>
      <div className="mt-6 rule-gold" />
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          Sarkar began with one question: why should a fragrance made in India smell
          like a copy of something made elsewhere? The answer became a house built on
          Indian raw material — Kashmiri saffron, Mysore-style sandalwood accords,
          Damask rose, oud — composed with the discipline of a European perfumery.
        </p>
        <p>
          Every bottle is blended in batches of 500 and rested for six weeks before it
          is filled, so the top notes settle into the base instead of shouting over it.
          Concentration sits between 20 and 24 percent, which is why a single spray
          lasts an evening.
        </p>
        <p>
          Four fragrances told the story so far. Virasat, the fifth, is the one we kept
          reworking — a saffron and rose heirloom that finally felt finished.
        </p>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {[
          ["2021", "The house is founded"],
          ["4", "Fragrances released to date"],
          ["5th", "Virasat, launching now"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="font-display text-4xl text-gold">{k}</p>
            <p className="eyebrow mt-2">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
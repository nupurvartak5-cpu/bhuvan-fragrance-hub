import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-bottle.jpg";
import { FragranceCard } from "@/components/FragranceCard";
import { fragrances, getFragrance, inr } from "@/lib/fragrances";

const title = "Sarkar Official Store — Virasat, The Fifth Fragrance";
const description =
  "Sarkar fine fragrance. Meet Virasat, the fifth eau de parfum from the house — saffron, Damask rose and oud. Shop all five signature scents.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const heroScent = getFragrance("virasat")!;
  const rest = fragrances.slice(1);

  return (
    <div>
      <section className="relative">
        <img
          src={hero}
          alt="Sarkar Virasat perfume bottle on black marble"
          width={1600}
          height={1104}
          className="h-[78vh] w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-noir)" }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 fade-up">
            <p className="eyebrow">Chapter Five · Now Launching</p>
            <h1 className="mt-4 font-display text-6xl leading-none md:text-8xl">
              <span className="text-gold">Virasat</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {heroScent.tagline} Kashmiri saffron and Damask rose over a smouldering
              oud accord — the fifth fragrance from the house of Sarkar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/fragrance/$slug"
                params={{ slug: heroScent.slug }}
                className="btn-gold"
              >
                Shop Virasat · {inr(heroScent.price)}
              </Link>
              <Link to="/collection" className="btn-outline-gold">
                All five fragrances
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">The Fifth</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Four became a house. The fifth makes it a legacy.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {heroScent.story}
            </p>
            <div className="mt-8 space-y-4">
              {[
                ["Top", heroScent.notes.top],
                ["Heart", heroScent.notes.heart],
                ["Base", heroScent.notes.base],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="eyebrow">{label} notes</p>
                  <p className="mt-1 text-sm text-foreground/90">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={heroScent.image}
            alt="Virasat eau de parfum bottle with saffron and rose"
            loading="lazy"
            width={912}
            height={1104}
            className="w-full border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          {[
            ["Long-wear concentration", "20–24% parfum oil, 8–10 hours on skin."],
            ["Small-batch", "Blended and aged in batches of 500 bottles."],
            ["Free shipping in India", "Dispatched in 48 hours, gift-boxed."],
          ].map(([h, p]) => (
            <div key={h}>
              <h3 className="font-display text-2xl">{h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">The Collection</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">The first four</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((f) => (
            <FragranceCard key={f.slug} fragrance={f} />
          ))}
        </div>
      </section>
    </div>
  );
}

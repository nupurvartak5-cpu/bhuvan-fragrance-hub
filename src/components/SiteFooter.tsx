import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-[0.42em] text-gold">SARKAR</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Fine fragrance, made in India. Five compositions, each aged and bottled in
            small batches.
          </p>
        </div>
        <div>
          <p className="eyebrow">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/collection" className="hover:text-primary">All fragrances</Link></li>
            <li>
              <Link
                to="/fragrance/$slug"
                params={{ slug: "virasat" }}
                className="hover:text-primary"
              >
                Virasat — new
              </Link>
            </li>
            <li><Link to="/contact" className="hover:text-primary">Order support</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">House</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">Our story</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rule-gold" />
        <p className="pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sarkar Fragrances. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
import { Link } from "@tanstack/react-router";
import { useState } from "react";

type NavItem = {
  to: "/" | "/collection" | "/about" | "/contact" | "/fragrance/$slug";
  label: string;
  params?: { slug: string };
};

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Collection" },
  { to: "/fragrance/$slug", label: "Virasat", params: { slug: "virasat" } },
  { to: "/about", label: "The House" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-display text-2xl tracking-[0.42em] text-gold">
          SARKAR
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              params={item.params as never}
              className="text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-[0.68rem] uppercase tracking-[0.24em] text-primary md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 pb-6 pt-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              params={item.params as never}
              onClick={() => setOpen(false)}
              className="py-2 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
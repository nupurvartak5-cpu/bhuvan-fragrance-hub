import f1 from "@/assets/f1.jpg";
import f2 from "@/assets/f2.jpg";
import f3 from "@/assets/f3.jpg";
import f4 from "@/assets/f4.jpg";
import f5 from "@/assets/f5.jpg";

export type Fragrance = {
  slug: string;
  name: string;
  tagline: string;
  family: string;
  price: number;
  size: string;
  image: string;
  notes: { top: string; heart: string; base: string };
  story: string;
  isNew?: boolean;
};

export const fragrances: Fragrance[] = [
  {
    slug: "virasat",
    name: "Virasat",
    tagline: "The fifth chapter. A legacy bottled.",
    family: "Oriental Amber • Saffron • Rose",
    price: 2499,
    size: "100 ml Eau de Parfum",
    image: f5,
    isNew: true,
    notes: {
      top: "Kashmiri saffron, pink pepper, bergamot",
      heart: "Damask rose, oud accord, warm spice",
      base: "Amber, sandalwood, vanilla, musk",
    },
    story:
      "Virasat is the fifth fragrance in the Sarkar house — an heirloom scent built around saffron and Damask rose, aged over a smouldering oud accord. Composed for the moments you want remembered long after you have left the room.",
  },
  {
    slug: "raja",
    name: "Raja",
    tagline: "Command the room without raising your voice.",
    family: "Woody Oud • Spice",
    price: 1999,
    size: "100 ml Eau de Parfum",
    image: f1,
    notes: {
      top: "Clove, cardamom, grapefruit",
      heart: "Oud, cedar, nutmeg",
      base: "Leather, tonka, amber",
    },
    story:
      "The house signature. Dense oud and warm spice, cut with citrus so it never turns heavy — an evening scent that stays close to the skin.",
  },
  {
    slug: "raat",
    name: "Raat",
    tagline: "Written for the hours after midnight.",
    family: "Leather • Tobacco • Smoke",
    price: 1999,
    size: "100 ml Eau de Parfum",
    image: f2,
    notes: {
      top: "Black pepper, violet leaf",
      heart: "Tobacco leaf, suede, cinnamon",
      base: "Vetiver, patchouli, dark vanilla",
    },
    story:
      "Smoked tobacco over soft suede. Raat is the quietest fragrance in the collection and the one people ask about most.",
  },
  {
    slug: "noor",
    name: "Noor",
    tagline: "Light, worn like jewellery.",
    family: "Floral Citrus",
    price: 1799,
    size: "100 ml Eau de Parfum",
    image: f3,
    notes: {
      top: "Sicilian lemon, neroli, mandarin",
      heart: "Jasmine, orange blossom, peony",
      base: "White musk, cedarwood",
    },
    story:
      "A bright, wearable daytime signature — jasmine and neroli lifted by cold citrus. The most versatile bottle we make.",
  },
  {
    slug: "safar",
    name: "Safar",
    tagline: "For everyone who never sits still.",
    family: "Green Aromatic",
    price: 1799,
    size: "100 ml Eau de Parfum",
    image: f4,
    notes: {
      top: "Mint, green apple, basil",
      heart: "Vetiver, lavender, geranium",
      base: "Moss, ambroxan, dry woods",
    },
    story:
      "Crushed mint and vetiver over dry woods. Built for heat, travel and long days.",
  },
];

export const getFragrance = (slug: string) =>
  fragrances.find((f) => f.slug === slug);

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
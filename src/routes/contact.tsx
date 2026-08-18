import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const title = "Contact & Orders — Sarkar Official Store";
const description =
  "Reserve a bottle of Virasat, ask about an order or reach the Sarkar client care team.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="eyebrow">Client Care</p>
      <h1 className="mt-4 font-display text-5xl md:text-6xl">Get in touch</h1>
      <div className="mt-6 rule-gold" />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="eyebrow">
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                required
                className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="eyebrow">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <button type="submit" className="btn-gold">
            Send enquiry
          </button>
          {sent && (
            <p className="text-sm text-primary">
              Thank you — our team replies within one working day.
            </p>
          )}
        </form>

        <div className="space-y-8 text-sm text-muted-foreground">
          <div>
            <p className="eyebrow">Email</p>
            <p className="mt-2">care@sarkarfragrances.com</p>
          </div>
          <div>
            <p className="eyebrow">Phone</p>
            <p className="mt-2">+91 22 4000 1900 · Mon–Sat, 10am–7pm IST</p>
          </div>
          <div>
            <p className="eyebrow">Flagship</p>
            <p className="mt-2">
              Ground Floor, Kala Ghoda
              <br />
              Fort, Mumbai 400001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
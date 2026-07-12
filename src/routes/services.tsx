import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sales, Leasing & Interiors | Blue Wave Estate" },
      {
        name: "description",
        content:
          "Luxury residential sales, corporate leasing, property selling and turnkey interior design across Chennai's premium neighbourhoods.",
      },
      { property: "og:title", content: "Our Services — Blue Wave Estate" },
      {
        property: "og:description",
        content: "Sales, leasing, selling and turnkey interiors for Chennai's finest homes.",
      },
    ],
  }),
  component: Services,
});

const groups = [
  {
    n: "01",
    t: "Luxury Residential Sales",
    d: "A curated selection of Chennai's most exclusive residences.",
    items: [
      "Premium Apartments",
      "Luxury Villas",
      "Independent Houses",
      "Gated Communities",
      "Beachfront Homes",
    ],
  },
  {
    n: "02",
    t: "Residential Leasing",
    d: "Trusted leasing solutions for corporates, expatriates and executives.",
    items: [
      "Corporate Leasing",
      "Executive Rentals",
      "Expat Housing",
      "Company Guest Houses",
    ],
  },
  {
    n: "03",
    t: "Property Selling",
    d: "End-to-end representation — from valuation to registration.",
    items: [
      "Property Valuation",
      "Marketing & Positioning",
      "Buyer Verification",
      "Documentation Support",
      "Registration Assistance",
    ],
  },
  {
    n: "04",
    t: "Interior Turnkey Projects",
    d: "Considered interiors, delivered end to end.",
    items: [
      "Complete Home Interiors",
      "Villa Interiors",
      "Luxury Renovation",
      "Modular Kitchen",
      "Custom Furniture",
      "False Ceiling",
      "Lighting Design",
      "Space Planning",
    ],
  },
];

function Services() {
  return (
    <>
      <Section className="pt-40 md:pt-48">
        <div className="max-w-4xl">
          <div className="eyebrow">Services</div>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
            Four practices,<br />one <span className="italic text-gold">standard.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            From acquisition to interiors, every mandate is handled by senior
            consultants who understand the nuances of Chennai's luxury market.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="border-t border-border">
          {groups.map((g) => (
            <div
              key={g.n}
              className="grid gap-8 border-b border-border py-14 md:grid-cols-12 md:gap-12 md:py-20"
            >
              <div className="md:col-span-1">
                <div className="font-serif text-3xl text-gold">{g.n}</div>
              </div>
              <div className="md:col-span-4">
                <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                  {g.t}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">{g.d}</p>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 border-b border-border/60 py-3 text-sm text-foreground/80"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

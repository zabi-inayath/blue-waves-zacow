import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import interior3 from "../assets/interior-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Blue Wave Estate | Luxury Real Estate Chennai" },
      {
        name: "description",
        content:
          "For 15+ years, Blue Wave Estate has served Chennai's HNIs, NRIs, corporate executives and MNCs through a curated network of builders, developers and owners.",
      },
      { property: "og:title", content: "About Blue Wave Estate" },
      {
        property: "og:description",
        content: "Fifteen years of quiet, considered luxury real estate in Chennai.",
      },
    ],
  }),
  component: About,
});

const clientele = [
  { t: "HNIs", d: "High Net Worth Individuals with an eye for provenance and quality." },
  { t: "Corporate Executives", d: "Senior leadership relocating to and within Chennai." },
  { t: "MNCs", d: "Companies leasing residences for executives and guest houses." },
  { t: "NRIs", d: "Overseas Indians investing in Chennai's most durable addresses." },
  { t: "Investors", d: "Long-term investors seeking curated, verified opportunities." },
];

function About() {
  return (
    <>
      <Section className="pt-40 md:pt-48">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="eyebrow">About Us</div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              A house built on<br />
              <span className="italic text-gold">trust</span>, network<br />
              and quiet expertise.
            </h1>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded in 2009, Blue Wave Estate is Chennai's dedicated luxury
              real estate consultancy — assisting discerning clients across
              sales, leasing, investments and interiors.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <img
          src={interior3}
          alt="Chennai luxury bedroom interior"
          loading="lazy"
          width={1600}
          height={1200}
          className="w-full object-cover"
        />
      </Section>

      <Section>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeader eyebrow="Clientele" title="Who we serve." />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-border">
              {clientele.map((c) => (
                <li key={c.t} className="grid grid-cols-[140px_1fr] items-baseline gap-6 py-6 md:grid-cols-[200px_1fr]">
                  <div className="font-serif text-xl text-foreground">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid gap-16 md:grid-cols-3">
          {[
            ["Discretion", "Every enquiry, mandate and transaction is handled with confidentiality."],
            ["Network", "A private circle of trusted builders, owners and developers across the city."],
            ["Curation", "Only opportunities we would recommend to close family."],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="h-px w-10 bg-gold" />
              <h3 className="mt-6 font-serif text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

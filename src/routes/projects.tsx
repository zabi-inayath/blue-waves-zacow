import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import interior1 from "../assets/interior-1.jpg";
import interior2 from "../assets/interior-2.jpg";
import interior3 from "../assets/interior-3.jpg";
import property1 from "../assets/property-1.jpg";
import property2 from "../assets/property-2.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Interior Projects — Blue Wave Estate" },
      {
        name: "description",
        content:
          "A selection of completed turnkey interior projects — villas, apartments and modular kitchens across Chennai.",
      },
      { property: "og:title", content: "Interior Projects" },
      {
        property: "og:description",
        content: "Completed interior projects across Chennai's premium residences.",
      },
      { property: "og:image", content: interior1 },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: interior1, title: "Sky Residence", loc: "MRC Nagar", type: "Apartment · 4,200 sq.ft" },
  { img: interior2, title: "Walnut & Marble Kitchen", loc: "Boat Club", type: "Modular Kitchen" },
  { img: property1, title: "Beach House", loc: "Neelankarai · ECR", type: "Villa · 6,800 sq.ft" },
  { img: interior3, title: "The Quiet Suite", loc: "Adyar", type: "Master Bedroom" },
  { img: property2, title: "Tower One", loc: "RA Puram", type: "Penthouse" },
];

function Projects() {
  return (
    <>
      <Section className="pt-40 md:pt-48">
        <div className="max-w-4xl">
          <div className="eyebrow">Interior Projects</div>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
            Considered rooms,<br />
            <span className="italic text-gold">quietly</span> delivered.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A selection of completed residences across Chennai. Each project is
            approached with restraint, craft and respect for the architecture.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-16">
          {projects.map((p, i) => (
            <figure
              key={p.title}
              className={`grid gap-8 md:grid-cols-12 md:gap-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-8">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="flex flex-col justify-end md:col-span-4">
                <div className="eyebrow">{p.type}</div>
                <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.loc}</p>
                <div className="mt-6 h-px w-10 bg-gold" />
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary">
        <SectionHeader
          eyebrow="Testimonials"
          title="What our clients say."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[
            { q: "The team handled every detail — sourcing, timelines, finishes. Our villa looks better than we imagined.", a: "Homeowner, Boat Club" },
            { q: "A rare mix of taste and reliability. Everything was on time and on budget.", a: "Corporate Client, ECR" },
          ].map((t) => (
            <blockquote key={t.a} className="border border-border bg-background p-10">
              <div className="text-gold text-sm tracking-widest">★ ★ ★ ★ ★</div>
              <p className="mt-4 font-serif text-2xl leading-snug">“{t.q}”</p>
              <footer className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                — {t.a}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>
    </>
  );
}

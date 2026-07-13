import { createFileRoute, Link } from "@tanstack/react-router";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { LuBuilding2, LuKey, LuPalette } from "react-icons/lu";
import heroImg from "../assets/hero.jpg";
import interior1 from "../assets/interior-1.jpg";
import property1 from "../assets/property-1.jpg";
import { Section, SectionHeader } from "../components/site/Section";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    icon: HiOutlineHomeModern,
    title: "Luxury Residential Sales",
    body: "Premium apartments, villas, gated communities and beachfront homes across Chennai's most sought-after addresses.",
  },
  {
    icon: LuBuilding2,
    title: "Corporate & Executive Leasing",
    body: "Discreet leasing solutions for MNCs, expats, senior executives and company guest houses.",
  },
  {
    icon: LuKey,
    title: "Property Selling",
    body: "Valuation, marketing, buyer verification and full documentation — end to end.",
  },
  {
    icon: LuPalette,
    title: "Turnkey Interiors",
    body: "Complete home and villa interiors — modular kitchens, false ceiling, lighting and space planning.",
  },
];

const areas = [
  "Adyar", "Boat Club", "RA Puram", "MRC Nagar", "ECR", "OMR",
  "Besant Nagar", "Anna Nagar", "Nungambakkam", "T Nagar", "Kotturpuram",
  "Neelankarai", "Injambakkam", "Akkarai", "Thoraipakkam", "Velachery",
];

const builders = [
  "Casagrand", "Prestige", "Brigade", "Appaswamy", "DRA", "TVS Emerald",
  "Hiranandani", "Urbanrise", "Puravankara", "Akshaya", "Olympia", "Sameera",
];

const trust = [
  "15+ Years Experience",
  "Trusted by HNIs",
  "Corporate Leasing Experts",
  "Exclusive Luxury Listings",
  "Verified Properties",
  "Trusted Builder Network",
  "End-to-End Documentation",
  "Interior Turnkey Solutions",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Luxury villa in Chennai at dusk"
            width={1920}
            height={1200}
            className="h-full w-full object-cover slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/90" />
        </div>

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pb-16 pt-40 md:px-12 md:pb-20 md:pt-38">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="mx-auto flex max-w-6xl flex-col items-center text-center fade-up">

              {/* Badge */}
              <div className="flex items-center gap-3">
                <span className="rounded-lg border border-bone/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-bone/70 backdrop-blur">
                  Est. 2009 • Chennai
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl dm-sans leading-[1.02] text-bone md:text-7xl lg:text-8xl">
                Chennai's trusted
                <span className="italic text-gold-soft"> luxury</span>
                <br />
                real estate consultants.
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
                Specialists in high-end residential sales, rentals and investments
                for HNIs, NRIs, corporates and MNC executives.
              </p>
              {/* Buttons */}
              <div className="my-12 flex flex-wrap items-center justify-center gap-5">

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#1C3C85] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a4aa3]"
                >
                  Schedule Consultation
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Submit Requirement
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                </Link>

              </div>

            </div>
          </div>

          <div className="mx-auto w-full max-w-[1400px]">
            <div className="grid grid-cols-2 gap-8 border-t border-bone/15 pt-8 md:grid-cols-4 justify-center text-center">
              {[
                ["15+", "Years of Expertise"],
                ["1,200+", "Curated Transactions"],
                ["16", "Chennai Micro-Markets"],
                ["100%", "Verified Listings"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="poppins text-3xl text-gold md:text-4xl">{n}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-bone/50">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">About the House</div>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
              A quiet, considered<br />approach to Chennai's<br />finest addresses.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              For over fifteen years, Blue Wave Estate has assisted discerning
              clients in buying, selling, renting and investing in Chennai's
              most prestigious residential properties. We work with high net
              worth individuals, corporate executives, NRIs and multinational
              companies — through a private network of trusted builders,
              developers and owners.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs uppercase tracking-[0.24em] text-foreground transition-colors hover:text-gold"
            >
              Read our story <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-secondary">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Practice"
            title="Four disciplines, one standard."
          />
          <Link
            to="/services"
            className="text-[11px] uppercase tracking-[0.24em] text-foreground/70 hover:text-gold"
          >
            All services →
          </Link>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-background p-10 transition-colors hover:bg-bone"
            >
              <s.icon className="text-gold" size={32} />
              <h3 className="mt-8 font-serif text-2xl leading-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <div className="mt-8 h-px w-8 bg-gold transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </Section>

      {/* Feature strip */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[500px]">
            <img
              src={property1}
              alt="Beachfront villa on ECR"
              loading="lazy"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-ink p-10 text-bone md:p-16 lg:p-24">
            <div className="eyebrow text-bone/50">Why Blue Wave</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Discretion, network<br />and a curator's eye.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {trust.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-bone/80">
                  <FiCheck className="mt-1 shrink-0 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas */}
      <Section>
        <SectionHeader
          eyebrow="Focus Areas"
          title="Where we work — the addresses that matter in Chennai."
        />
        <div className="mt-16 flex flex-wrap gap-3">
          {areas.map((a) => (
            <span
              key={a}
              className="border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] text-foreground/70 transition-all hover:border-gold hover:text-gold"
            >
              {a}
            </span>
          ))}
        </div>
      </Section>

      {/* Builders */}
      <Section className="border-y border-border bg-bone">
        <div className="text-center">
          <div className="eyebrow">Trusted Builder Partners</div>
          <h3 className="mt-4 font-serif text-2xl text-muted-foreground md:text-3xl">
            An ecosystem of India's most respected developers.
          </h3>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4 md:grid-cols-6">
          {builders.map((b) => (
            <div
              key={b}
              className="flex h-24 items-center justify-center bg-bone px-4 text-center font-serif text-lg text-foreground/70 transition-colors hover:bg-background hover:text-foreground"
            >
              {b}
            </div>
          ))}
        </div>
      </Section>

      {/* Interior teaser */}
      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <img
              src={interior1}
              alt="Chennai luxury interior"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
            <div className="eyebrow">Interior Studio</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Turnkey interiors,<br />delivered with rigour.
            </h2>
            <p className="mt-6 text-muted-foreground">
              From modular kitchens and lighting to complete villa fit-outs —
              our in-house team delivers considered, tailored interiors that
              hold their value over decades.
            </p>
            <Link to="/projects" className="mt-8 self-start">
              <span className="btn-outline text-foreground">View Projects</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-ink text-bone">
        <SectionHeader eyebrow="Client Voices" title="Trusted, quietly." />
        <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2">
          {[
            {
              q: "We found our dream villa through Blue Wave Estate. Professional and transparent throughout the process.",
              a: "Corporate Client, Boat Club",
            },
            {
              q: "Their interior team transformed our apartment beautifully — considered, on time and to the last detail.",
              a: "Homeowner, ECR",
            },
          ].map((t) => (
            <figure key={t.a} className="bg-ink p-10 md:p-14">
              <div className="text-gold text-sm tracking-widest">★ ★ ★ ★ ★</div>
              <blockquote className="mt-6 font-serif text-2xl leading-snug text-bone md:text-3xl">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-[0.22em] text-bone/50">
                — {t.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="border border-border p-10 text-center md:p-20">
          <div className="eyebrow">Begin the Conversation</div>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            A private consultation,<br />on your schedule.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Share your requirement in confidence. Our senior consultants will
            respond within one business day with a curated shortlist.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Schedule Consultation</Link>
            <Link to="/contact" className="btn-outline text-foreground">
              <span>List Your Property</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

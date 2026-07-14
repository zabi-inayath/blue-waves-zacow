import { createFileRoute, Link } from "@tanstack/react-router";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { LuBuilding2, LuKey, LuPalette, LuHandshake, LuChrome } from "react-icons/lu";
import heroImg from "../assets/hero.jpg";
import interior1 from "../assets/interior-1.jpg";
import property1 from "../assets/property-1.jpg";
import property2 from "../assets/property-2.jpg";
import interior3 from "../assets/interior-3.jpg";
import { Section, SectionHeader } from "../components/site/Section";
import { HiLocationMarker } from "react-icons/hi";

export const Route = createFileRoute("/")({
  component: Home,
});

const testimonials = [
  {
    quote:
      "We found our dream villa through Blue Wave Estate. Professional and transparent throughout the process.",
    author: "Corporate Client",
    location: "Boat Club",
  },
  {
    quote:
      "Their interior team transformed our apartment beautifully — considered, on time and to the last detail.",
    author: "Homeowner",
    location: "ECR",
  },
  {
    quote:
      "Exceptional market knowledge and outstanding negotiation. The entire buying experience was seamless.",
    author: "NRI Investor",
    location: "Anna Nagar",
  },
  {
    quote:
      "From property selection to registration, every detail was handled with professionalism.",
    author: "Business Owner",
    location: "Adyar",
  },
];

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

const builderFonts = [
  "poppins font-bold tracking-tight text-base",
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
                  <div className="poppins text-3xl text-white md:text-4xl">{n}</div>
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
      <Section className="overflow-hidden">

        <div className="mx-auto max-w-7xl">

          {/* Top */}

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-lg border border-[#1C3C85]/20 bg-[#1C3C85]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1C3C85]">
              About Blue Wave
            </span>

            <h2 className="mt-8 font-serif text-4xl leading-tight text-foreground md:text-6xl">

              We don't simply broker
              <br />

              <span className="italic blue-wave-3">
                luxury properties.
              </span>

              <br />

              We build lifelong trust.

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">

              Since 2009, Blue Wave Estate has guided families,
              investors, NRIs and corporate leaders through
              Chennai's most prestigious residential and
              commercial real estate opportunities.

            </p>

          </div>

          {/* Image */}

          <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-2xl md:rounded-3xl">

            <img
              src={property2}
              alt=""
              className="aspect-[16/9] w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Floating Quote */}

            <div className="hidden md:block absolute bottom-4 left-4 right-4 md:right-auto md:bottom-10 md:left-10 max-w-md rounded-2xl md:rounded-3xl border border-white/10 bg-white/10 p-5 md:p-8 backdrop-blur-xl">
              <p className="font-serif text-xl md:text-2xl italic text-white">
                "Trust is the ultimate luxury."
              </p>
              <p className="mt-3 md:mt-4 text-xs md:text-sm leading-relaxed md:leading-7 text-white/80">
                Every property represents a family, an investment and a future. We honour that responsibility.
              </p>
            </div>

          </div>

          {/* Service Cards */}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">

            {[
              ["Buy", "Premium residential & commercial properties"],
              ["Sell", "Strategic pricing & expert negotiations"],
              ["Rent", "Verified tenants & seamless leasing"],
              ["Invest", "Long-term wealth through real estate"],
            ].map(([title, desc]) => (

              <div
                key={title}
                className="rounded-3xl border border-border bg-background p-8 transition duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl"
              >

                <h3 className="font-serif text-3xl text-[#1C3C85] hagrid">

                  {title}

                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">

                  {desc}

                </p>

              </div>

            ))}

          </div>

          {/* Bottom */}

          <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-border pt-10 md:flex-row">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground text-center md:text-left">

                EXPERIENCE

              </p>

              <h3 className="mt-2 poppins text-5xl text-[#1C3C85]">

                15+ Years

              </h3>

            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 rounded-full border border-[#1C3C85] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1C3C85] transition hover:bg-[#1C3C85] hover:text-white"
            >
              Discover Our Story

              <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />

            </Link>

          </div>

        </div>

      </Section>

      {/* Services */}
      <Section className="bg-[#f7f9fc]">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#1C3C85] font-semibold bg-[#1C3C85]/10 px-3.5 py-1.5 rounded-lg">
              PRACTICE
            </span>
            <h2 className="mt-6 text-4xl font-light hagrid leading-tight text-foreground md:text-5xl">
              Four disciplines, <span className="blue-wave-3 font-normal">one standard.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C3C85] hover:text-[#2a4aa3] transition-colors"
          >
            All Services
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#1C3C85]/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#1C3C85]/10 flex items-center justify-center text-[#1C3C85] group-hover:bg-[#1C3C85] group-hover:text-white transition-all duration-500">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-semibold dm-sans text-foreground leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
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
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-br from-[#1C3C85] to-[#0E1F47] p-10 text-bone md:p-16 lg:p-24">
            <span className="text-xs uppercase tracking-[0.25em] blue-wave-2 font-semibold bg-white/10 px-3.5 py-1.5 rounded-full self-start">
              WHY BLUE WAVE
            </span>
            <h2 className="mt-6 text-3xl font-light hagrid leading-tight text-white md:text-4xl">
              Discretion, network and a <br />
              <span className="blue-wave-2 font-normal">curator's eye.</span>
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-3.5 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-xl p-3.5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 blue-wave-2">
                    <FiCheck className="h-4 w-4" />
                  </div>
                  <span className="leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas */}
      <Section className="bg-[#f7f9fc]">
        <div className="mb-12 text-center">

          <span className="inline-flex rounded-lg border border-[#1C3C85]/20 bg-[#1C3C85]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1C3C85]">
            FOCUS AREA
          </span>

          <h2 className="mt-3 text-4xl font-light hagrid leading-tight text-foreground md:text-5xl">
            Where we work, the <span className="blue-wave-3 font-normal"><br />addresses that matter</span> in Chennai.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-sm">
            Exclusive access to premium residential properties and corporate spaces across Chennai's most coveted micro-markets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {areas.map((a) => (
            <div
              key={a}
              className="group relative overflow-hidden bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all duration-500 cursor-pointer flex items-center justify-between"
            >
              {/* Background Reveal */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#1C3C85]/5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"></span>

              {/* Border Reveal */}
              <span className="absolute inset-0 rounded-xl border border-[#1C3C85] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>

              {/* Top Accent */}
              <span className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#1C3C85] transition-all duration-500 group-hover:w-3/4"></span>

              {/* Content */}
              <div className="relative z-10 flex w-full items-center justify-between transition-all duration-500 group-hover:-translate-y-[1px]">
                <div>
                  <h4 className="text-sm font-semibold poppins uppercase tracking-[0.15em] text-foreground group-hover:text-[#1C3C85] transition-colors duration-500">
                    {a}
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 blue-wave-3">
                    Chennai
                  </p>
                </div>
                <HiLocationMarker className="text-muted-foreground blue-wave-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Builders */}
      <Section className="border-y border-gray-150 bg-bone">
        <div className="text-center">
          <span className="inline-flex rounded-lg border border-[#1C3C85]/20 bg-[#1C3C85]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1C3C85]">
            OUR ECOSYSTEM
          </span>

          <h2 className="mt-6 text-4xl font-light hagrid leading-tight text-foreground md:text-5xl">
            Trusted <span className="blue-wave-3 font-normal">Builder Partners</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-sm">
            An ecosystem of India's most respected developers, ensuring structural integrity and premium finishes.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {builders.map((b, i) => {
            const fontClass = builderFonts[i % builderFonts.length];
            return (
              <div
                key={b}
                className="flex h-24 items-center justify-center bg-white border border-gray-100 rounded-xl px-4 text-center text-foreground/80 shadow-sm hover:shadow-md hover:border-[#1C3C85]/20 hover:scale-[1.03] transition-all duration-300"
              >
                <span className={`${fontClass} text-foreground/85`}>
                  {b}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Interior teaser */}
      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-center">
          <div className="md:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full">
              <img
                src={interior1}
                alt="Chennai luxury interior main"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 hidden sm:block w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={interior3}
                alt="Chennai luxury interior detail"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#1C3C85] font-semibold bg-[#1C3C85]/10 px-3.5 py-1.5 rounded-lg border border-[#1C3C85]/20 bg-[#1C3C85]/5 self-start">
              INTERIOR STUDIO
            </span>

            <h2 className="mt-6 text-4xl font-light dm-sans leading-tight text-foreground md:text-5xl">
              Turnkey interiors, <br />
              delivered with <span className="italic blue-wave-3 font-normal">rigour.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              From modular kitchens and lighting to complete villa fit-outs —
              our in-house team delivers considered, tailored interiors that
              hold their value over decades.
            </p>
            <Link to="/projects" className="mt-8 self-start">
              <span className="group inline-flex items-center gap-3 rounded-xl border-2 border-[#1C3C85] bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#1C3C85] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1C3C85] hover:text-white">
                View Projects
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-[#1C3C85] to-[#0E1F47] text-bone py-20">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.25em] blue-wave-2 font-semibold bg-white/10 px-3.5 py-1.5 rounded-lg border border-[#1C3C85]/20 bg-[#1C3C85]/5">
            TESTIMONIALS
          </span>
          <h2 className="mt-6 text-4xl font-light hagrid leading-tight text-white md:text-5xl">
            Client Voices | <span className="blue-wave-2 font-normal">Trusted, quietly.</span>
          </h2>
        </div>
        <div className="relative mt-16 overflow-hidden">
          <div className="flex animate-testimonials gap-4 md:gap-8">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[420px] rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/30 hover:bg-white/10"
              >
                <div className="flex gap-1 blue-wave-2 text-xs sm:text-sm">
                  ★★★★★
                </div>

                <blockquote className="mt-4 sm:mt-6 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
                  "{item.quote}"
                </blockquote>

                <div className="mt-6 sm:mt-8 md:mt-10">
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    {item.author}
                  </h4>

                  <p className="mt-1 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.25em] text-white/50">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-br from-[#1C3C85]/5 to-[#1C3C85]/10 border border-[#1C3C85]/20 p-10 text-center md:p-20 rounded-3xl shadow-sm">
          <span className="text-xs uppercase tracking-[0.25em] text-[#1C3C85] font-semibold bg-[#1C3C85]/10 px-3.5 py-1.5 rounded-xl border border-[#1C3C85]/20">
            BEGIN THE CONVERSATION
          </span>
          <h2 className="mt-6 text-2xl font-light hagrid leading-tight text-foreground md:text-5xl lg:text-6xl">
            A private consultation, <br />
            on your <span className="blue-wave-3 font-normal">schedule.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Share your requirement in confidence. Our senior consultants will
            respond within one business day with a curated shortlist.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#1C3C85] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a4aa3] shadow-md hover:shadow-xl"
            >
              Schedule Consultation
              <svg
                className="hidden md:block h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              className="group inline-flex items-center gap-3 rounded-xl border border-[#1C3C85]/30 bg-white/50 backdrop-blur px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1C3C85] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1C3C85] hover:text-white hover:border-[#1C3C85]"
            >
              Submit Requirement
              <svg
                className="hidden md:block h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
      </Section>
    </>
  );
}

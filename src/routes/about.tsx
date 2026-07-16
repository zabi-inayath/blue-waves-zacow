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
      {/* Unique Minimalist Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1C3C85] mb-8">

                Our Story
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[3rem] font-light hagrid leading-[1.1] text-foreground">
                A house built on <br className="hidden md:block" />
                <span className="italic text-[#1C3C85] opacity-90">trust</span> & quiet expertise.
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded in 2009, Blue Wave Estate is Chennai's dedicated luxury
                real estate consultancy — assisting discerning clients across
                sales, leasing, investments and interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Video */}
      <section className="px-6 lg:px-8 pb-24 bg-white">
        <div className="mx-auto max-w-7xl rounded-3xl overflow-hidden h-[50vh] md:h-[70vh] relative shadow-2xl group">
          <video
            src="/about video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out group-hover:scale-105"
          />

          {/* Optional cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
        </div>
      </section>

      {/* Clientele */}
      <Section className="bg-[#f7f9fc]">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-lg border border-[#1C3C85]/20 bg-[#1C3C85]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1C3C85]">
            CLIENTELE
          </span>
          <h2 className="mt-6 text-4xl font-light hagrid leading-tight text-foreground md:text-5xl">
            Who we <span className="blue-wave-3 font-normal">serve.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientele.map((c) => (
            <div
              key={c.t}
              className="group relative overflow-hidden bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-500 cursor-default"
            >
              <h3 className="text-xl font-semibold poppins text-foreground group-hover:text-[#1C3C85] transition-colors duration-500 mb-3">
                {c.t}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Unique Values (Asymmetrical Grid) */}
      <Section className="bg-[#f7f9fc] py-32">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-light hagrid text-foreground">The Blue Wave <span className="italic text-[#1C3C85]">Difference</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Card */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] p-10 md:p-16 shadow-sm border border-gray-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1C3C85]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            <span className="text-[#1C3C85] mb-8 bg-[#1C3C85]/10 w-16 h-16 rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </span>
            <h3 className="text-4xl font-medium poppins mb-6">Discretion</h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Every enquiry, mandate and transaction is handled with absolute confidentiality. We understand the true value of privacy for our esteemed clientele.
            </p>
          </div>

          {/* Vertical Stack */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-semibold poppins mb-4 group-hover:text-[#1C3C85] transition-colors">Network</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                A private, curated circle of trusted builders, owners and developers across the city's most premium postcodes.
              </p>
            </div>
            <div className="flex-1 bg-[#1C3C85] text-white rounded-[2rem] p-10 shadow-lg group hover:-translate-y-2 transition-all duration-500">
              <h3 className="text-2xl font-semibold poppins mb-4 text-gold">Curation</h3>
              <p className="text-base text-white/80 leading-relaxed">
                Only opportunities we would confidently recommend to close family. Quality over quantity, always.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Unique Credentials (Editorial Alternating Layout) */}
      <Section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1C3C85] mb-6 justify-center md:justify-start w-full">
              Accreditations
            </span>
            <h2 className="text-4xl md:text-5xl font-light hagrid text-foreground leading-tight">
              Recognized by <br className="hidden md:block" />industry authorities.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg leading-relaxed text-center md:text-left">
            We are proud to be affiliated with India's most respected real estate organizations.
          </p>
        </div>

        <div className="space-y-32 max-w-7xl mx-auto">
          {/* Credential 1 */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-[1rem] overflow-hidden shadow-xl border border-gray-100 shrink-0 relative">
              <div className="absolute inset-0 bg-[#1C3C85]/10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img src="/TNRERA.jpg" alt="TNRERA Registered" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-gold font-bold text-xl mb-4">01</div>
              <h3 className="text-3xl font-semibold poppins mb-6 text-foreground">TNRERA Registered</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We are a TNRERA Registered Real Estate Agent, committed to conducting
                every real estate transaction with transparency, integrity, and full
                compliance with the Real Estate (Regulation and Development) Act (RERA).
                Our registration reflects our commitment to ethical practices and
                protecting the interests of our clients.
              </p>
            </div>
          </div>

          {/* Credential 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-20 items-center group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-[1rem] overflow-hidden shadow-xl border border-gray-100 shrink-0 relative">
              <div className="absolute inset-0 bg-[#1C3C85]/10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img src="/ireap.jpg" alt="REAP Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-1/2 md:text-right">
              <div className="text-gold font-bold text-xl mb-4">02</div>
              <h3 className="text-3xl font-semibold poppins mb-6 text-foreground">Member – REAP</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We are a proud member of the Real Estate Agents Association of India
                (REAP), a professional association dedicated to promoting ethical
                business practices, industry collaboration, continuous learning, and
                higher standards in the real estate profession.
              </p>
            </div>
          </div>

          {/* Credential 3 */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center group">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 shrink-0 relative">
              <div className="absolute inset-0 bg-[#1C3C85]/10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img src="/NARLogo.png" alt="NAR India Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-gold font-bold text-xl mb-4">03</div>
              <h3 className="text-3xl font-semibold poppins mb-6 text-foreground">Member – NAR India</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As a member of NAR India (National Association of Realtors – India), we
                are part of a nationwide network of trusted real estate professionals
                committed to integrity, professionalism, and a strict code of ethics.
                This enables us to provide our clients with reliable advice, wider
                market access, and high-quality service.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

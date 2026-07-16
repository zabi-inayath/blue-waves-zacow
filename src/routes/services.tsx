import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "../components/site/Section";

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
      {/* Hero Section */}
      <section className="pt-40 md:pt-52 pb-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1C3C85] mb-8">
            <div className="w-8 h-[2px] bg-[#1C3C85]"></div>
            Expertise
            <div className="w-8 h-[2px] bg-[#1C3C85]"></div>
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light hagrid leading-[1.05] text-foreground max-w-5xl">
            Four practices, <br/>one <span className="italic text-[#1C3C85]">standard.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            From acquisition to interiors, every mandate is handled by senior
            consultants who understand the nuances of Chennai's luxury market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-[#f7f9fc] pt-24 pb-32">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {groups.map((g, i) => (
            <div key={g.n} className="bg-white rounded-[2rem] p-10 lg:p-14 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
               {/* Background highlight on hover */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#1C3C85]/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700"></div>
               
               <div className="flex justify-between items-start mb-8 gap-4">
                  <h2 className="font-light hagrid text-3xl md:text-4xl text-foreground leading-tight group-hover:text-[#1C3C85] transition-colors">{g.t}</h2>
                  <span className="text-4xl md:text-5xl font-light text-[#1C3C85]/20 font-serif">{g.n}</span>
               </div>
               
               <p className="text-muted-foreground text-base leading-relaxed mb-10 pb-8 border-b border-border/50">
                  {g.d}
               </p>

               <ul className="space-y-4 mt-auto">
                  {g.items.map(item => (
                    <li key={item} className="flex items-center gap-4 text-foreground/80 group-hover:text-foreground transition-colors">
                       <span className="w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                       <span className="text-base font-medium poppins">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1C3C85] to-[#0E1F47] text-bone py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 150%, #ffffff 0%, transparent 50%)' }}></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light hagrid mb-8 text-white">Ready to discuss your requirement?</h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            Whether you are looking to acquire a new home or lease a corporate residence, our senior consultants are here to assist.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1C3C85] transition-all hover:bg-gold hover:text-white hover:scale-105 group">
            Schedule a Consultation
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
      </section>
    </>
  );
}

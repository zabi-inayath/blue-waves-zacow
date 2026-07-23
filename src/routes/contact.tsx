import { createFileRoute } from "@tanstack/react-router";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Section } from "../components/site/Section";
import { LeadForm } from "../components/site/LeadForm";
import { OwnerForm } from "../components/site/OwnerForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Blue Wave Estate | Luxury Real Estate Chennai" },
      {
        name: "description",
        content:
          "Speak with a senior consultant. Schedule a private consultation, submit your requirement, or list your property with Blue Wave Estate, Chennai.",
      },
      { property: "og:title", content: "Contact Blue Wave Estate" },
      {
        property: "og:description",
        content: "Private consultations, requirements and property listings — Chennai.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [tab, setTab] = useState<"lead" | "owner">("lead");

  return (
    <>
      {/* Premium Hero */}
      <section className="bg-gradient-to-br from-[#1C3C85] to-[#0E1F47] text-bone pt-40 pb-32 md:pt-52 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-8 bg-white/10 px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm">
            Get in touch
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light hagrid leading-[1.05] text-white max-w-4xl mx-auto">
            Begin the <br className="hidden md:block"/>
            <span className="italic text-gold">conversation.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70 mx-auto leading-relaxed">
            Whether you're looking for a home, an investment, or you'd like to
            list your property — our senior consultants are at your service.
          </p>
        </div>
      </section>

      {/* Floating Info Cards */}
      <section className="px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard icon={FiMapPin} title="Our Office">
            No. 11/38 Status Quo Building,<br />Sterling Road, Nungambakkam,<br />Chennai - 600034
          </InfoCard>
          <InfoCard icon={FiPhone} title="Direct Line">
            <div className="flex flex-col gap-1.5">
              <a href="tel:+919363675069" className="hover:text-[#1C3C85] transition-colors">+91 93636 75069</a>
            </div>
          </InfoCard>
          <InfoCard icon={FaWhatsapp} title="WhatsApp">
            <div className="flex flex-col gap-1.5">
              <a href="https://wa.me/919363675069" target="_blank" rel="noreferrer" className="hover:text-[#1C3C85] transition-colors">+91 93636 75069</a>
            </div>
          </InfoCard>
          <InfoCard icon={FiMail} title="Email & Hours">
            <div className="flex flex-col gap-3">
              <a href="mailto:bluewaveestates06@gmail.com" className="hover:text-[#1C3C85] transition-colors break-all">bluewaveestates06@gmail.com</a>
              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <FiClock className="text-[#1C3C85]" /> Mon – Sat · 9:30 to 7:00
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Forms Section */}
      <Section className="bg-[#f7f9fc] py-24">
        <div className="max-w-5xl mx-auto">
          {/* Custom Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <TabBtn active={tab === "lead"} onClick={() => setTab("lead")}>
              Looking for a Property
            </TabBtn>
            <TabBtn active={tab === "owner"} onClick={() => setTab("owner")}>
              List Your Property
            </TabBtn>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-16 relative overflow-hidden">
            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1C3C85]/5 rounded-bl-[100%] -z-10 pointer-events-none"></div>
            
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="inline-block text-[#1C3C85] font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                {tab === "lead" ? "Enquiry Form" : "Owner Submission"}
              </span>
              <h2 className="font-light hagrid text-4xl md:text-5xl leading-tight text-foreground">
                {tab === "lead"
                  ? "Tell us about your dream property."
                  : "Sell or rent, with a considered plan."}
              </h2>
            </div>
            
            <div>
               {tab === "lead" ? <LeadForm /> : <OwnerForm />}
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <section className="px-6 lg:px-8 pb-24 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 h-[500px]">
          <iframe
            title="Blue Wave Estate — Chennai"
            src="https://www.google.com/maps?q=No.+11%2F38+Status+Quo+Building%2C+Sterling+Road%2C+Nungambakkam%2C+Chennai+-+600034&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.8) contrast(1.1) opacity(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="w-14 h-14 rounded-full bg-[#1C3C85]/5 flex items-center justify-center mb-6 text-[#1C3C85]">
        <Icon size={24} />
      </div>
      <h3 className="font-semibold poppins text-lg text-foreground mb-4">{title}</h3>
      <div className="text-sm leading-relaxed text-muted-foreground mt-auto">
        {children}
      </div>
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 rounded-full border-2 ${
        active
          ? "bg-[#1C3C85] border-[#1C3C85] text-white shadow-lg scale-105"
          : "bg-transparent border-gray-200 text-foreground/60 hover:border-[#1C3C85]/30 hover:text-[#1C3C85]"
      }`}
    >
      {children}
    </button>
  );
}

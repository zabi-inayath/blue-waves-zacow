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
      <Section className="pt-40 md:pt-48">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="eyebrow">Contact</div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              Begin the<br />
              <span className="italic text-gold">conversation.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Whether you're looking for a home, an investment, or you'd like to
              list your property — we'd be pleased to hear from you.
            </p>
          </div>

          <aside className="space-y-6 md:col-span-4 md:col-start-9">
            <InfoRow icon={FiMapPin} title="Address">
              No. 11/38 Status Quo Building,<br />Strerling Road, Nungambakkum,<br />Chennai - 600 0034
            </InfoRow>
            <InfoRow icon={FiPhone} title="Call">
              <div className="flex flex-col gap-2">
                <a href="tel:+919841603932" className="hover:text-gold">
                  Eliyas: +91 98416 03932
                </a>
                <a href="tel:+919789811111" className="hover:text-gold">
                  Naina Mohamed: +91 97898 11111
                </a>
              </div>
            </InfoRow>
            <InfoRow icon={FaWhatsapp} title="WhatsApp">
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/919841603932"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Eliyas: +91 98416 03932
                </a>
                <a
                  href="https://wa.me/919789811111"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Naina Mohamed: +91 97898 11111
                </a>
              </div>
            </InfoRow>
            <InfoRow icon={FiMail} title="Email">
              <a href="mailto:bluewaveestates06@gmail.com" className="hover:text-gold break-all">
                bluewaveestates06@gmail.com
              </a>
            </InfoRow>
            <InfoRow icon={FiClock} title="Hours">
              Monday – Saturday · 9:30 to 7:00
            </InfoRow>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="border border-border">
          <div className="grid grid-cols-2 border-b border-border">
            <TabBtn active={tab === "lead"} onClick={() => setTab("lead")}>
              Looking for a Property
            </TabBtn>
            <TabBtn active={tab === "owner"} onClick={() => setTab("owner")}>
              List Your Property
            </TabBtn>
          </div>
          <div className="p-8 md:p-14">
            <div className="mb-10 max-w-xl">
              <div className="eyebrow">
                {tab === "lead" ? "Enquiry" : "Owner Submission"}
              </div>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                {tab === "lead"
                  ? "Tell us about your dream property."
                  : "Sell or rent, with a considered plan."}
              </h2>
            </div>
            {tab === "lead" ? <LeadForm /> : <OwnerForm />}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="overflow-hidden border border-border">
          <iframe
            title="Blue Wave Estate — Chennai"
            src="https://www.google.com/maps?q=Boat+Club+Road+Chennai&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, filter: "grayscale(1) contrast(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[24px_1fr] items-start gap-4 border-b border-border pb-6">
      <Icon size={16} className="mt-1 text-gold" />
      <div>
        <div className="eyebrow text-foreground/60">{title}</div>
        <div className="mt-2 text-sm leading-relaxed text-foreground">{children}</div>
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
      className={`px-6 py-5 text-[11px] uppercase tracking-[0.22em] transition-colors ${
        active
          ? "bg-ink text-bone"
          : "bg-background text-foreground/60 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

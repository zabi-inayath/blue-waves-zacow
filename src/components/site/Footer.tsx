import { Link } from "@tanstack/react-router";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl">
              Blue Wave <span className="text-gold">Estate</span>
            </h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/60">
              Chennai's trusted luxury real estate consultants — curating
              residential sales, rentals, investments and turnkey interiors for
              discerning clients since 2009.
            </p>
            <div className="mt-8 flex gap-3">
              {[FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center border border-bone/20 text-bone/70 transition-all hover:border-gold hover:text-gold"
                  aria-label="social"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow text-bone/50">Navigate</div>
            <ul className="mt-6 space-y-3 text-sm text-bone/70">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Interior Projects" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-bone/50">Contact</div>
            <ul className="mt-6 space-y-4 text-sm text-bone/70">
              <li className="flex gap-3">
                <FiMapPin className="mt-1.5 shrink-0 text-gold" />
                <span>No. 11/38 Status Quo Building, Strerling Road,<br />Nungambakkum, Chennai - 600 0034</span>
              </li>
              <li className="flex gap-3">
                <FiPhone className="mt-1 shrink-0 text-gold" />
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+919841603932" className="hover:text-gold">
                    Eliyas: +91 98416 03932
                  </a>
                  <a href="tel:+919789811111" className="hover:text-gold">
                    Naina Mohamed: +91 97898 11111
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-gold" />
                <a href="mailto:bluewaveestates06@gmail.com" className="hover:text-gold break-all">
                  bluewaveestates06@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiClock className="text-gold" />
                <span>Mon – Sat · 9:30 to 7:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 text-xs uppercase tracking-[0.22em] text-bone/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Blue Wave Estate</p>
          <p>Chennai · Boat Club · ECR · OMR · Adyar</p>
        </div>
      </div>

      <a
        href="https://wa.me/919000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp size={26} />
      </a>
    </footer>
  );
}

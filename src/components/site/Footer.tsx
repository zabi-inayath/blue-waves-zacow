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
    <footer className="bg-gradient-to-br from-[#1C3C85] to-[#0E1F47] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-4 items-start">
          <div className="md:col-span-2">
            <Link to="/" className="group inline-flex items-center">
              <img
                src="/blue wave (3).png"
                alt="Blue Wave Logo"
                className="h-16 md:h-20 w-auto"
              />

              <div className="flex flex-col text-left">
                <h1 className="text-lg md:text-2xl font-extrabold uppercase poppins text-white">
                  Blue Wave Estates
                </h1>

                <div className="mt-1 flex items-center gap-2 border-white">
                  <div className="h-[2px] w-6 md:w-10 bg-white"></div>

                  <span className="text-[11px] italic font-medium whitespace-nowrap text-white">
                    Elevate your Lifestyle
                  </span>

                  <div className="h-[2px] w-6 md:w-10 bg-white"></div>
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/60">
              Chennai's trusted luxury real estate consultants — curating
              residential sales, rentals, investments and turnkey interiors for
              discerning clients since 2009.
            </p>

            <div className="mt-6 space-y-2 text-xs text-white/80 border-t border-white/10 pt-6 max-w-sm">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>TNRERA Registered Real Estate Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Member - REAP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Member - NAR India</span>
              </div>
              <div className="mt-2 text-white/95 font-semibold text-[10px] uppercase tracking-wider pl-3.5 border-l border-[#D4AF37]">
                Reg No: TNRERA - TN/RERA/0323/2025
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {[FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1C3C85] hover:-translate-y-1"
                  aria-label="social"
                >
                  <Icon size={14} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow text-white/50">Navigate</div>
            <ul className="mt-6 space-y-4">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Interior Projects" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-bone/70 hover:text-white transition-all duration-300"
                  >
                    <span className="h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-4"></span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/50">Contact</div>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80">
                  <FiMapPin size={14} />
                </div>
                <span className="text-bone/70 leading-relaxed pt-0.5">
                  No. 11/38 Status Quo Building, Strerling Road,<br />Nungambakkum, Chennai - 600 0034
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80">
                  <FiPhone size={14} />
                </div>
                <div className="flex flex-col gap-1.5 text-bone/70 pt-0.5">
                  <a href="tel:+919363675069" className="hover:text-white transition-colors">
                    +91 93636 75069
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80">
                  <FiMail size={14} />
                </div>
                <a href="mailto:bluewaveestates06@gmail.com" className="text-bone/70 hover:text-white break-all transition-colors">
                  bluewaveestates06@gmail.com
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80">
                  <FiClock size={14} />
                </div>
                <span className="text-bone/70">Mon – Sat · 9:30 to 7:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.22em] text-white/40 md:flex-row md:items-center">
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

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-serif text-xl tracking-tight text-foreground md:text-2xl">
            Blue Wave <span className="text-gold">Estate</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden text-[11px] uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-gold md:block"
        >
          Consult →
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.22em] text-foreground/70"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

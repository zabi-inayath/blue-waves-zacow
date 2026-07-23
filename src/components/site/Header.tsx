import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiMenu, HiOutlinePhone, HiX } from "react-icons/hi";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const scrolled = isScrolled || !isHomePage;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/90 backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="group flex items-center">
          <img
            src="/blue wave (3).png"
            alt="Blue Wave Logo"
            className="h-16 md:h-24 w-auto"
          />

          <div className="flex flex-col">
            <h1 className={`text-lg md:text-2xl font-extrabold uppercase poppins ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Blue Wave Estates
            </h1>

            <div className={`mt-1 flex items-center gap-2 ${scrolled ? 'border-gray-900' : 'border-white'}`}>
              <div className={`h-[2px] w-6 md:w-10 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></div>

              <span className={`text-[11px] italic font-medium whitespace-nowrap ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Elevate your Lifestyle
              </span>

              <div className={`h-[2px] w-6 md:w-10 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{
                className: scrolled ?
                  "text-[#fff] border-[#fff] bg-[#1C3C85]/90" : "text-[#fff] border-[#1C3C85] bg-[#fff]/10"
              }}
              inactiveProps={{
                className: scrolled
                  ? "text-[#000000] hover:text-[#1C3C85]"
                  : "text-white",
              }}
              className="group relative overflow-hidden rounded-lg border border-transparent px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              {/* Background Reveal */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#1C3C85]/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"></span>

              {/* Border Reveal */}
              <span className={`absolute inset-0 rounded-lg border ${scrolled ? "border-[#1C3C85]" : "border-white"} opacity-0 transition-all duration-500 group-hover:opacity-100`}></span>

              {/* Top Accent */}
              <span className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#1C3C85] transition-all duration-500 group-hover:w-3/4"></span>

              {/* Text */}
              <span className="relative z-10 transition-all duration-500 group-hover:-translate-y-[1px]">
                {n.label}
              </span>
            </Link>
          ))}
        </nav>

        <Link
          to="tel:+919363675069"
          className={`group hidden items-center gap-3 rounded-full border border-[#1C3C85]/30 bg-white/5 px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-[#1C3C85] hover:bg-[#1C3C85] ${scrolled ? 'text-black' : 'text-white'} lg:inline-flex`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C3C85] text-white transition-transform duration-300 group-hover:scale-110">
            <HiOutlinePhone className="h-4 w-4" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-[10px] uppercase tracking-[0.22em] opacity-70">
              Call Now
            </span>
            <span className="text-sm font-semibold tracking-wide">
              +91 93636 75069
            </span>
          </div>
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl transition-all duration-500
  ${scrolled
              ? "bg-white shadow-xl shadow-black/5 hover:shadow-[#1C3C85]/20"
              : "bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20"
            } md:hidden`}
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#1C3C85]/20 via-transparent to-[#1C3C85]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <div className="relative z-10 transition-all duration-500 group-hover:scale-110">
            {open ? (
              <HiX size={23} className={scrolled ? "text-[#1C3C85]" : "text-white"} />
            ) : (
              <HiMenu size={23} className={scrolled ? "text-[#4C4C4C]" : "text-white"} />
            )}
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-2 p-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{
                  className:
                    "text-[#1C3C85] border-[#1C3C85] bg-[#1C3C85]/10",
                }}
                inactiveProps={{
                  className: "text-[#4C4C4C] hover:text-[#1C3C85]",
                }}
                className="group relative overflow-hidden rounded-lg border border-transparent px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                {/* Background Reveal */}
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#1C3C85]/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"></span>

                {/* Border Reveal */}
                <span className="absolute inset-0 rounded-lg border border-[#1C3C85] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>

                {/* Accent Line */}
                <span className="absolute left-0 top-1/2 h-0 w-1 -translate-y-1/2 rounded-r-full bg-[#1C3C85] transition-all duration-300 group-hover:h-8"></span>

                {/* Text */}
                <span className="relative z-10 transition-all duration-500 group-hover:translate-x-1">
                  {n.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

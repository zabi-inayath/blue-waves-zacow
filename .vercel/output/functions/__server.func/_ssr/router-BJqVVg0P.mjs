import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as FaWhatsapp, a as HiMenu, d as FiMail, f as FiMapPin, g as FaLinkedinIn, h as FaInstagram, m as FaFacebookF, o as HiOutlinePhone, p as FiPhone, s as HiX, u as FiClock } from "../_libs/react-icons.mjs";
import { t as interior_1_default } from "./interior-1-nYAOUdaU.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BJqVVg0P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BhnaxI9z.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const isHomePage = useLocation().pathname === "/";
	const scrolled = isScrolled || !isHomePage;
	(0, import_react.useEffect)(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/blue wave (3).png",
						alt: "Blue Wave Logo",
						className: "h-16 md:h-24 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: `text-lg md:text-2xl font-extrabold uppercase poppins ${scrolled ? "text-gray-900" : "text-white"}`,
							children: "Blue Wave Estates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `mt-1 flex items-center gap-2 ${scrolled ? "border-gray-900" : "border-white"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-[2px] w-6 md:w-10 ${scrolled ? "bg-gray-900" : "bg-white"}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[11px] italic font-medium whitespace-nowrap ${scrolled ? "text-gray-700" : "text-white"}`,
									children: "Elevate your Lifestyle"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-[2px] w-6 md:w-10 ${scrolled ? "bg-gray-900" : "bg-white"}` })
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						activeProps: { className: scrolled ? "text-[#fff] border-[#fff] bg-[#1C3C85]/90" : "text-[#fff] border-[#1C3C85] bg-[#fff]/10" },
						inactiveProps: { className: scrolled ? "text-[#000000] hover:text-[#1C3C85]" : "text-white" },
						className: "group relative overflow-hidden rounded-lg border border-transparent px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 origin-left scale-x-0 bg-[#1C3C85]/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-0 rounded-lg border ${scrolled ? "border-[#1C3C85]" : "border-white"} opacity-0 transition-all duration-500 group-hover:opacity-100` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#1C3C85] transition-all duration-500 group-hover:w-3/4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10 transition-all duration-500 group-hover:-translate-y-[1px]",
								children: n.label
							})
						]
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "tel:+919841603932",
					className: `group hidden items-center gap-3 rounded-full border border-[#1C3C85]/30 bg-white/5 px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-[#1C3C85] hover:bg-[#1C3C85] ${scrolled ? "text-black" : "text-white"} lg:inline-flex`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#1C3C85] text-white transition-transform duration-300 group-hover:scale-110",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlinePhone, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.22em] opacity-70",
							children: "Call Now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold tracking-wide",
							children: "+91 98416 03932"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					"aria-label": "Menu",
					onClick: () => setOpen((v) => !v),
					className: `group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl transition-all duration-500
  ${scrolled ? "bg-white shadow-xl shadow-black/5 hover:shadow-[#1C3C85]/20" : "bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20"} md:hidden`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-[#1C3C85]/20 via-transparent to-[#1C3C85]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 transition-all duration-500 group-hover:scale-110",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiX, {
							size: 23,
							className: scrolled ? "text-[#1C3C85]" : "text-white"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiMenu, {
							size: 23,
							className: scrolled ? "text-[#4C4C4C]" : "text-white"
						})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-gray-200 bg-white shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-300",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-2 p-6",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: n.to === "/" },
					activeProps: { className: "text-[#1C3C85] border-[#1C3C85] bg-[#1C3C85]/10" },
					inactiveProps: { className: "text-[#4C4C4C] hover:text-[#1C3C85]" },
					className: "group relative overflow-hidden rounded-lg border border-transparent px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 origin-left scale-x-0 bg-[#1C3C85]/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-lg border border-[#1C3C85] opacity-0 transition-all duration-500 group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 h-0 w-1 -translate-y-1/2 rounded-r-full bg-[#1C3C85] transition-all duration-300 group-hover:h-8" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative z-10 transition-all duration-500 group-hover:translate-x-1",
							children: n.label
						})
					]
				}, n.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-bone",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 py-20 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-serif text-3xl",
								children: ["Blue Wave ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "Estate"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-sm leading-relaxed text-bone/60",
								children: "Chennai's trusted luxury real estate consultants — curating residential sales, rentals, investments and turnkey interiors for discerning clients since 2009."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex gap-3",
								children: [
									FaInstagram,
									FaLinkedinIn,
									FaFacebookF,
									FaWhatsapp
								].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "grid h-10 w-10 place-items-center border border-bone/20 text-bone/70 transition-all hover:border-gold hover:text-gold",
									"aria-label": "social",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 14 })
								}, i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow text-bone/50",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 text-sm text-bone/70",
						children: [
							{
								to: "/about",
								label: "About"
							},
							{
								to: "/services",
								label: "Services"
							},
							{
								to: "/projects",
								label: "Interior Projects"
							},
							{
								to: "/contact",
								label: "Contact"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "transition-colors hover:text-gold",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow text-bone/50",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-4 text-sm text-bone/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiMapPin, { className: "mt-1.5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"No. 11/38 Status Quo Building, Strerling Road,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Nungambakkum, Chennai - 600 0034"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiPhone, { className: "mt-1 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+919841603932",
										className: "hover:text-gold",
										children: "Eliyas: +91 98416 03932"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+919789811111",
										className: "hover:text-gold",
										children: "Naina Mohamed: +91 97898 11111"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiMail, { className: "shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:bluewaveestates06@gmail.com",
									className: "hover:text-gold break-all",
									children: "bluewaveestates06@gmail.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiClock, { className: "text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon – Sat · 9:30 to 7:00" })]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 text-xs uppercase tracking-[0.22em] text-bone/40 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Blue Wave Estate"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Chennai · Boat Club · ECR · OMR · Adyar" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "https://wa.me/919000000000",
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "WhatsApp",
			className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { size: 26 })
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow text-gold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-serif text-4xl text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for has moved or no longer exists."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-2xl text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Please try again, or return home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline text-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Blue Wave Estate — Chennai's Luxury Real Estate Consultants" },
			{
				name: "description",
				content: "Chennai's trusted luxury real estate consultants. Premium residential sales, rentals, investments and turnkey interiors for HNIs, NRIs, corporates and MNC executives."
			},
			{
				name: "author",
				content: "Blue Wave Estate"
			},
			{
				property: "og:title",
				content: "Blue Wave Estate — Luxury Real Estate, Chennai"
			},
			{
				property: "og:description",
				content: "Curated luxury homes across Boat Club, ECR, OMR, Adyar and more. Sales, rentals and turnkey interiors for discerning clients."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/blue wave logo.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			priority: "1.0"
		},
		{
			path: "/about",
			priority: "0.8"
		},
		{
			path: "/services",
			priority: "0.8"
		},
		{
			path: "/projects",
			priority: "0.7"
		},
		{
			path: "/contact",
			priority: "0.7"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./services-887e5tnX.mjs");
var Route$4 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Sales, Leasing & Interiors | Blue Wave Estate" },
		{
			name: "description",
			content: "Luxury residential sales, corporate leasing, property selling and turnkey interior design across Chennai's premium neighbourhoods."
		},
		{
			property: "og:title",
			content: "Our Services — Blue Wave Estate"
		},
		{
			property: "og:description",
			content: "Sales, leasing, selling and turnkey interiors for Chennai's finest homes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./projects-BZ3YGTbo.mjs");
var Route$3 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Interior Projects — Blue Wave Estate" },
		{
			name: "description",
			content: "A selection of completed turnkey interior projects — villas, apartments and modular kitchens across Chennai."
		},
		{
			property: "og:title",
			content: "Interior Projects"
		},
		{
			property: "og:description",
			content: "Completed interior projects across Chennai's premium residences."
		},
		{
			property: "og:image",
			content: interior_1_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-Bd9gKdli.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Blue Wave Estate | Luxury Real Estate Chennai" },
		{
			name: "description",
			content: "Speak with a senior consultant. Schedule a private consultation, submit your requirement, or list your property with Blue Wave Estate, Chennai."
		},
		{
			property: "og:title",
			content: "Contact Blue Wave Estate"
		},
		{
			property: "og:description",
			content: "Private consultations, requirements and property listings — Chennai."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-DknPDYFd.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Blue Wave Estate | Luxury Real Estate Chennai" },
		{
			name: "description",
			content: "For 15+ years, Blue Wave Estate has served Chennai's HNIs, NRIs, corporate executives and MNCs through a curated network of builders, developers and owners."
		},
		{
			property: "og:title",
			content: "About Blue Wave Estate"
		},
		{
			property: "og:description",
			content: "Fifteen years of quiet, considered luxury real estate in Chennai."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-bn0-e5NM.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$6
});
var ProjectsRoute = Route$3.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute,
	ContactRoute,
	ProjectsRoute,
	ServicesRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

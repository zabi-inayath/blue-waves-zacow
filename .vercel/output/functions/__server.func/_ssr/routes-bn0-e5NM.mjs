import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-CEEXm6Sj.mjs";
import { t as interior_3_default } from "./interior-3-CELajxVS.mjs";
import { c as FiArrowUpRight, i as HiOutlineHomeModern, l as FiCheck, n as LuKey, r as LuPalette, t as LuBuilding2 } from "../_libs/react-icons.mjs";
import { t as interior_1_default } from "./interior-1-nYAOUdaU.mjs";
import { n as property_2_default, t as property_1_default } from "./property-2-CK0RPYOX.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-bn0-e5NM.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero--j_amc_b.jpg";
var services = [
	{
		icon: HiOutlineHomeModern,
		title: "Luxury Residential Sales",
		body: "Premium apartments, villas, gated communities and beachfront homes across Chennai's most sought-after addresses."
	},
	{
		icon: LuBuilding2,
		title: "Corporate & Executive Leasing",
		body: "Discreet leasing solutions for MNCs, expats, senior executives and company guest houses."
	},
	{
		icon: LuKey,
		title: "Property Selling",
		body: "Valuation, marketing, buyer verification and full documentation — end to end."
	},
	{
		icon: LuPalette,
		title: "Turnkey Interiors",
		body: "Complete home and villa interiors — modular kitchens, false ceiling, lighting and space planning."
	}
];
var areas = [
	"Adyar",
	"Boat Club",
	"RA Puram",
	"MRC Nagar",
	"ECR",
	"OMR",
	"Besant Nagar",
	"Anna Nagar",
	"Nungambakkam",
	"T Nagar",
	"Kotturpuram",
	"Neelankarai",
	"Injambakkam",
	"Akkarai",
	"Thoraipakkam",
	"Velachery"
];
var builders = [
	"Casagrand",
	"Prestige",
	"Brigade",
	"Appaswamy",
	"DRA",
	"TVS Emerald",
	"Hiranandani",
	"Urbanrise",
	"Puravankara",
	"Akshaya",
	"Olympia",
	"Sameera"
];
var builderFonts = [
	"font-sans font-semibold tracking-wider text-base",
	"font-serif italic tracking-wide text-lg",
	"poppins font-bold tracking-tight text-base",
	"SpaceGrotesk font-semibold tracking-normal text-base",
	"DXRigraf text-base tracking-widest uppercase",
	"Ligema text-xl tracking-wide",
	"league-spartan text-base uppercase",
	"font-serif font-light text-xl"
];
var trust = [
	"15+ Years Experience",
	"Trusted by HNIs",
	"Corporate Leasing Experts",
	"Exclusive Luxury Listings",
	"Verified Properties",
	"Trusted Builder Network",
	"End-to-End Documentation",
	"Interior Turnkey Solutions"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[100svh] w-full overflow-hidden bg-ink text-bone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "Luxury villa in Chennai at dusk",
					width: 1920,
					height: 1200,
					className: "h-full w-full object-cover slow-zoom"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/90" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pb-16 pt-40 md:px-12 md:pb-20 md:pt-38",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[1400px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col items-center text-center fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-lg border border-bone/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-bone/70 backdrop-blur",
									children: "Est. 2009 • Chennai"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-8 text-5xl dm-sans leading-[1.02] text-bone md:text-7xl lg:text-8xl",
								children: [
									"Chennai's trusted",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold-soft",
										children: " luxury"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"real estate consultants."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg",
								children: "Specialists in high-end residential sales, rentals and investments for HNIs, NRIs, corporates and MNC executives."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "my-12 flex flex-wrap items-center justify-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group inline-flex items-center gap-3 rounded-xl bg-[#1C3C85] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a4aa3]",
									children: ["Schedule Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M5 12h14m-6-6 6 6-6 6"
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10",
									children: ["Submit Requirement", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M5 12h14m-6-6 6 6-6 6"
										})
									})]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[1400px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-8 border-t border-bone/15 pt-8 md:grid-cols-4 justify-center text-center",
						children: [
							["15+", "Years of Expertise"],
							["1,200+", "Curated Transactions"],
							["16", "Chennai Micro-Markets"],
							["100%", "Verified Listings"]
						].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "poppins text-3xl text-gold md:text-4xl",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[11px] uppercase tracking-[0.22em] text-bone/50",
							children: l
						})] }, l))
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-4xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex rounded-lg border border-[#1C3C85]/20 bg-[#1C3C85]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1C3C85]",
								children: "About Blue Wave"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-8 font-serif text-4xl leading-tight text-foreground md:text-6xl",
								children: [
									"We don't simply broker",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "luxury properties."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"We build lifelong trust."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground",
								children: "Since 2009, Blue Wave Estate has guided families, investors, NRIs and corporate leaders through Chennai's most prestigious residential and commercial real estate opportunities."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-2xl md:rounded-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: property_2_default,
								alt: "",
								className: "aspect-[16/9] w-full object-cover transition duration-700 hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:block absolute bottom-4 left-4 right-4 md:right-auto md:bottom-10 md:left-10 max-w-md rounded-2xl md:rounded-3xl border border-white/10 bg-white/10 p-5 md:p-8 backdrop-blur-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-xl md:text-2xl italic text-white",
									children: "\"Trust is the ultimate luxury.\""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 md:mt-4 text-xs md:text-sm leading-relaxed md:leading-7 text-white/80",
									children: "Every property represents a family, an investment and a future. We honour that responsibility."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ",
						children: [
							["Buy", "Premium residential & commercial properties"],
							["Sell", "Strategic pricing & expert negotiations"],
							["Rent", "Verified tenants & seamless leasing"],
							["Invest", "Long-term wealth through real estate"]
						].map(([title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-background p-8 transition duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-3xl text-[#1C3C85] hagrid",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-muted-foreground",
								children: desc
							})]
						}, title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 flex flex-col items-center justify-between gap-8 border-t border-border pt-10 md:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm uppercase tracking-[0.3em] text-muted-foreground text-center md:text-left",
							children: "EXPERIENCE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 poppins text-5xl text-[#1C3C85]",
							children: "15+ Years"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "group inline-flex items-center gap-3 rounded-full border border-[#1C3C85] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1C3C85] transition hover:bg-[#1C3C85] hover:text-white",
							children: ["Discover Our Story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowUpRight, { className: "transition group-hover:translate-x-1 group-hover:-translate-y-1" })]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-[#f7f9fc]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.25em] text-[#1C3C85] font-semibold bg-[#1C3C85]/10 px-3.5 py-1.5 rounded-full",
					children: "PRACTICE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 text-4xl font-light hagrid leading-tight text-foreground md:text-5xl",
					children: ["Four disciplines, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: " text-gold font-normal",
						children: "one standard."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					className: "group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C3C85] hover:text-[#2a4aa3] transition-colors",
					children: ["All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowUpRight, { className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#1C3C85]/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-14 h-14 rounded-xl bg-[#1C3C85]/10 flex items-center justify-center text-[#1C3C85] group-hover:bg-[#1C3C85] group-hover:text-white transition-all duration-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 26 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-xl font-semibold dm-sans text-foreground leading-snug",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: s.body
						})
					] })
				}, s.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[500px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: property_1_default,
						alt: "Beachfront villa on ECR",
						loading: "lazy",
						width: 1600,
						height: 1200,
						className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center bg-gradient-to-br from-[#1C3C85] to-[#0E1F47] p-10 text-bone md:p-16 lg:p-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.25em] text-gold-soft font-semibold bg-white/10 px-3.5 py-1.5 rounded-full self-start",
							children: "WHY BLUE WAVE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 text-3xl font-light hagrid leading-tight text-white md:text-4xl",
							children: [
								"Discretion, network and a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold-soft font-normal",
									children: "curator's eye."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2",
							children: trust.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3.5 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-xl p-3.5 hover:bg-white/10 hover:border-white/20 transition-all duration-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheck, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-snug",
									children: t
								})]
							}, t))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-[#f7f9fc]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex rounded-lg border border-[#1C3C85]/20 bg-[#1C3C85]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1C3C85]",
						children: "FOCUS AREAS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-4xl font-light hagrid leading-tight text-foreground md:text-5xl",
						children: [
							"Where we work, the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-gold font-normal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), "addresses that matter"]
							}),
							" in Chennai."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 mx-auto max-w-2xl text-muted-foreground text-sm",
						children: "Exclusive access to premium residential properties and corporate spaces across Chennai's most coveted micro-markets."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4",
				children: areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all duration-500 cursor-pointer flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 origin-left scale-x-0 bg-[#1C3C85]/5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-xl border border-[#1C3C85] opacity-0 transition-all duration-500 group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#1C3C85] transition-all duration-500 group-hover:w-3/4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex w-full items-center justify-between transition-all duration-500 group-hover:-translate-y-[1px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-semibold poppins uppercase tracking-[0.15em] text-foreground group-hover:text-[#1C3C85] transition-colors duration-500",
								children: a
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-1",
								children: "Chennai"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowUpRight, { className: "text-muted-foreground group-hover:text-[#1C3C85] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" })]
						})
					]
				}, a))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "border-y border-gray-150 bg-bone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.25em] text-[#1C3C85] font-semibold bg-[#1C3C85]/10 px-3.5 py-1.5 rounded-full",
						children: "OUR ECOSYSTEM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 text-4xl font-light dm-sans leading-tight text-foreground md:text-5xl",
						children: ["Trusted ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold font-normal",
							children: "Builder Partners"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 mx-auto max-w-2xl text-muted-foreground text-sm",
						children: "An ecosystem of India's most respected developers, ensuring structural integrity and premium finishes."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
				children: builders.map((b, i) => {
					const fontClass = builderFonts[i % builderFonts.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-24 items-center justify-center bg-white border border-gray-100 rounded-xl px-4 text-center text-foreground/80 shadow-sm hover:shadow-md hover:border-[#1C3C85]/20 hover:scale-[1.03] transition-all duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `${fontClass} text-foreground/85`,
							children: b
						})
					}, b);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-12 md:gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-6 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: interior_1_default,
						alt: "Chennai luxury interior main",
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-10 -right-6 hidden sm:block w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: interior_3_default,
						alt: "Chennai luxury interior detail",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center md:col-span-5 md:col-start-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.25em] text-[#1C3C85] font-semibold bg-[#1C3C85]/10 px-3.5 py-1.5 rounded-full self-start",
						children: "INTERIOR STUDIO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 text-4xl font-light dm-sans leading-tight text-foreground md:text-5xl",
						children: [
							"Turnkey interiors, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"delivered with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold font-normal",
								children: "rigour."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground text-base leading-relaxed",
						children: "From modular kitchens and lighting to complete villa fit-outs — our in-house team delivers considered, tailored interiors that hold their value over decades."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects",
						className: "mt-8 self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "group inline-flex items-center gap-3 rounded-xl border-2 border-[#1C3C85] bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#1C3C85] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1C3C85] hover:text-white",
							children: "View Projects"
						})
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-gradient-to-br from-[#1C3C85] to-[#0E1F47] text-bone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.25em] text-gold-soft font-semibold bg-white/10 px-3.5 py-1.5 rounded-full",
					children: "TESTIMONIALS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 text-4xl font-light dm-sans leading-tight text-white md:text-5xl",
					children: ["Client Voices — ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gold-soft font-normal",
						children: "Trusted, quietly."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 md:grid-cols-2",
				children: [{
					q: "We found our dream villa through Blue Wave Estate. Professional and transparent throughout the process.",
					a: "Corporate Client, Boat Club"
				}, {
					q: "Their interior team transformed our apartment beautifully — considered, on time and to the last detail.",
					a: "Homeowner, ECR"
				}].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "bg-white/5 border border-white/10 backdrop-blur-md p-10 md:p-14 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-gold text-sm tracking-widest",
							children: "★ ★ ★ ★ ★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 font-light dm-sans text-2xl leading-relaxed text-bone md:text-3xl",
							children: [
								"“",
								t.q,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-8 text-xs uppercase tracking-[0.22em] text-bone/50 font-semibold",
							children: ["— ", t.a]
						})
					]
				}, t.a))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-gradient-to-br from-[#1C3C85]/5 to-[#1C3C85]/10 border border-[#1C3C85]/20 p-10 text-center md:p-20 rounded-3xl shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.25em] text-[#1C3C85] font-semibold bg-[#1C3C85]/10 px-3.5 py-1.5 rounded-full",
					children: "BEGIN THE CONVERSATION"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 text-4xl font-light dm-sans leading-tight text-foreground md:text-5xl lg:text-6xl",
					children: [
						"A private consultation, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"on your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold font-normal",
							children: "schedule."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "Share your requirement in confidence. Our senior consultants will respond within one business day with a curated shortlist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "group inline-flex items-center gap-3 rounded-xl bg-[#1C3C85] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a4aa3] shadow-md hover:shadow-xl",
						children: ["Schedule Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M5 12h14m-6-6 6 6-6 6"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "group inline-flex items-center gap-3 rounded-xl border border-[#1C3C85]/30 bg-white/50 backdrop-blur px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1C3C85] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1C3C85] hover:text-white hover:border-[#1C3C85]",
						children: ["Submit Requirement", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M5 12h14m-6-6 6 6-6 6"
							})
						})]
					})]
				})
			]
		}) })
	] });
}
//#endregion
export { Home as component };

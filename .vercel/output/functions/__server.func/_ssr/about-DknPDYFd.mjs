import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionHeader, t as Section } from "./Section-CEEXm6Sj.mjs";
import { t as interior_3_default } from "./interior-3-CELajxVS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DknPDYFd.js
var import_jsx_runtime = require_jsx_runtime();
var clientele = [
	{
		t: "HNIs",
		d: "High Net Worth Individuals with an eye for provenance and quality."
	},
	{
		t: "Corporate Executives",
		d: "Senior leadership relocating to and within Chennai."
	},
	{
		t: "MNCs",
		d: "Companies leasing residences for executives and guest houses."
	},
	{
		t: "NRIs",
		d: "Overseas Indians investing in Chennai's most durable addresses."
	},
	{
		t: "Investors",
		d: "Long-term investors seeking curated, verified opportunities."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-40 md:pt-48",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "About Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-serif text-5xl leading-[1.05] md:text-7xl",
						children: [
							"A house built on",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "trust"
							}),
							", network",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"and quiet expertise."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-4 md:col-start-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: "Founded in 2009, Blue Wave Estate is Chennai's dedicated luxury real estate consultancy — assisting discerning clients across sales, leasing, investments and interiors."
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: interior_3_default,
				alt: "Chennai luxury bedroom interior",
				loading: "lazy",
				width: 1600,
				height: 1200,
				className: "w-full object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Clientele",
					title: "Who we serve."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7 md:col-start-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: clientele.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[140px_1fr] items-baseline gap-6 py-6 md:grid-cols-[200px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-xl text-foreground",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: c.d
						})]
					}, c.t))
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-16 md:grid-cols-3",
				children: [
					["Discretion", "Every enquiry, mandate and transaction is handled with confidentiality."],
					["Network", "A private circle of trusted builders, owners and developers across the city."],
					["Curation", "Only opportunities we would recommend to close family."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-10 bg-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-serif text-2xl",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: d
					})
				] }, t))
			})
		})
	] });
}
//#endregion
export { About as component };

import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-CEEXm6Sj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-887e5tnX.js
var import_jsx_runtime = require_jsx_runtime();
var groups = [
	{
		n: "01",
		t: "Luxury Residential Sales",
		d: "A curated selection of Chennai's most exclusive residences.",
		items: [
			"Premium Apartments",
			"Luxury Villas",
			"Independent Houses",
			"Gated Communities",
			"Beachfront Homes"
		]
	},
	{
		n: "02",
		t: "Residential Leasing",
		d: "Trusted leasing solutions for corporates, expatriates and executives.",
		items: [
			"Corporate Leasing",
			"Executive Rentals",
			"Expat Housing",
			"Company Guest Houses"
		]
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
			"Registration Assistance"
		]
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
			"Space Planning"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-40 md:pt-48",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 font-serif text-5xl leading-[1.05] md:text-7xl",
					children: [
						"Four practices,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"one ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "standard."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-lg text-muted-foreground",
					children: "From acquisition to interiors, every mandate is handled by senior consultants who understand the nuances of Chennai's luxury market."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 border-b border-border py-14 md:grid-cols-12 md:gap-12 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-3xl text-gold",
							children: g.n
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl leading-tight md:text-4xl",
							children: g.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: g.d
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-6 md:col-start-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-x-8 gap-y-3 sm:grid-cols-2",
							children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 border-b border-border/60 py-3 text-sm text-foreground/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold" }), i]
							}, i))
						})
					})
				]
			}, g.n))
		})
	})] });
}
//#endregion
export { Services as component };

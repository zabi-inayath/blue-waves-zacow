import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionHeader, t as Section } from "./Section-CEEXm6Sj.mjs";
import { t as interior_3_default } from "./interior-3-CELajxVS.mjs";
import { t as interior_1_default } from "./interior-1-nYAOUdaU.mjs";
import { n as property_2_default, t as property_1_default } from "./property-2-CK0RPYOX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BZ3YGTbo.js
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		img: interior_1_default,
		title: "Sky Residence",
		loc: "MRC Nagar",
		type: "Apartment · 4,200 sq.ft"
	},
	{
		img: "/assets/interior-2-D0VeoM5r.jpg",
		title: "Walnut & Marble Kitchen",
		loc: "Boat Club",
		type: "Modular Kitchen"
	},
	{
		img: property_1_default,
		title: "Beach House",
		loc: "Neelankarai · ECR",
		type: "Villa · 6,800 sq.ft"
	},
	{
		img: interior_3_default,
		title: "The Quiet Suite",
		loc: "Adyar",
		type: "Master Bedroom"
	},
	{
		img: property_2_default,
		title: "Tower One",
		loc: "RA Puram",
		type: "Penthouse"
	}
];
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-40 md:pt-48",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Interior Projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-serif text-5xl leading-[1.05] md:text-7xl",
						children: [
							"Considered rooms,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "quietly"
							}),
							" delivered."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-lg text-muted-foreground",
						children: "A selection of completed residences across Chennai. Each project is approached with restraint, craft and respect for the architecture."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-16",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: `grid gap-8 md:grid-cols-12 md:gap-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							width: 1600,
							height: 1200,
							className: "w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "flex flex-col justify-end md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: p.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-3xl leading-tight md:text-4xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: p.loc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px w-10 bg-gold" })
						]
					})]
				}, p.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Testimonials",
				title: "What our clients say."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-2",
				children: [{
					q: "The team handled every detail — sourcing, timelines, finishes. Our villa looks better than we imagined.",
					a: "Homeowner, Boat Club"
				}, {
					q: "A rare mix of taste and reliability. Everything was on time and on budget.",
					a: "Corporate Client, ECR"
				}].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "border border-border bg-background p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-gold text-sm tracking-widest",
							children: "★ ★ ★ ★ ★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-serif text-2xl leading-snug",
							children: [
								"“",
								t.q,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground",
							children: ["— ", t.a]
						})
					]
				}, t.a))
			})]
		})
	] });
}
//#endregion
export { Projects as component };

import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-CEEXm6Sj.mjs";
import { _ as FaWhatsapp, d as FiMail, f as FiMapPin, p as FiPhone, u as FiClock } from "../_libs/react-icons.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bd9gKdli.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema$1 = objectType({
	name: stringType().trim().min(2).max(80),
	phone: stringType().trim().min(7).max(20),
	email: stringType().trim().email().max(120),
	company: stringType().trim().max(100).optional().or(literalType("")),
	budget: stringType().trim().max(60).optional().or(literalType("")),
	location: stringType().trim().max(80).optional().or(literalType("")),
	propertyType: stringType().trim().max(60).optional().or(literalType("")),
	intent: stringType().trim().max(20).optional().or(literalType("")),
	message: stringType().trim().max(1e3).optional().or(literalType(""))
});
function LeadForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		if (!schema$1.safeParse(Object.fromEntries(fd)).success) {
			setError("Please check the highlighted fields.");
			return;
		}
		setError(null);
		setSubmitted(true);
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow text-gold",
				children: "Thank you"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-2xl",
				children: "We'll be in touch shortly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "A consultant will reach out within one business day."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-5 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Full Name",
				name: "name",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Phone",
				name: "phone",
				type: "tel",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Email",
				name: "email",
				type: "email",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Company",
				name: "company"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Budget",
				name: "budget",
				placeholder: "e.g. ₹ 3 – 5 Cr"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Preferred Location",
				name: "location",
				placeholder: "Boat Club, ECR…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
				label: "Property Type",
				name: "propertyType",
				options: [
					"Apartment",
					"Villa",
					"Independent House",
					"Plot"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
				label: "Intent",
				name: "intent",
				options: [
					"Buy",
					"Rent",
					"Sell",
					"Invest"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Message",
					name: "message",
					textarea: true
				})
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive md:col-span-2",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "btn-primary w-full md:w-auto",
					children: "Submit Enquiry"
				})
			})
		]
	});
}
function Field$1({ label, name, type = "text", required, placeholder, textarea }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "eyebrow text-foreground/60",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: " *"
			})]
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			required,
			rows: 4,
			placeholder,
			className: "mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-gold"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			name,
			required,
			placeholder,
			className: "mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-gold"
		})]
	});
}
function Select({ label, name, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow text-foreground/60",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			name,
			defaultValue: "",
			className: "mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-gold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				disabled: true,
				children: "Select…"
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))]
		})]
	});
}
var schema = objectType({
	name: stringType().trim().min(2).max(80),
	phone: stringType().trim().min(7).max(20),
	email: stringType().trim().email().max(120),
	location: stringType().trim().min(2).max(80),
	propertyType: stringType().trim().min(1),
	price: stringType().trim().min(1).max(60)
});
function OwnerForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		if (!schema.safeParse(Object.fromEntries(fd)).success) {
			setError("Please complete the required fields.");
			return;
		}
		setError(null);
		setSubmitted(true);
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border bg-background p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow text-gold",
				children: "Received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-2xl",
				children: "Your listing details are with us."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "A relationship manager will visit or call to shortlist the marketing plan."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-5 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Owner Name",
				name: "name",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone",
				name: "phone",
				type: "tel",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				name: "email",
				type: "email",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Property Location",
				name: "location",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow text-foreground/60",
					children: ["Property Type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "*"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "propertyType",
					required: true,
					defaultValue: "",
					className: "mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: "Select…"
					}), [
						"Apartment",
						"Villa",
						"Independent House",
						"Plot",
						"Commercial"
					].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: o,
						children: o
					}, o))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Expected Price",
				name: "price",
				required: true,
				placeholder: "e.g. ₹ 4.5 Cr"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block md:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-foreground/60",
					children: "Upload Property Images"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					name: "images",
					multiple: true,
					accept: "image/*",
					className: "mt-3 block w-full text-sm text-muted-foreground file:mr-4 file:border file:border-border file:bg-transparent file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.2em] file:text-foreground hover:file:border-gold"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive md:col-span-2",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "btn-primary w-full md:w-auto",
					children: "List My Property"
				})
			})
		]
	});
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "eyebrow text-foreground/60",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			name,
			required,
			placeholder,
			className: "mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-gold"
		})]
	});
}
function Contact() {
	const [tab, setTab] = (0, import_react.useState)("lead");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-40 md:pt-48",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-serif text-5xl leading-[1.05] md:text-7xl",
							children: [
								"Begin the",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "conversation."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-lg text-muted-foreground",
							children: "Whether you're looking for a home, an investment, or you'd like to list your property — we'd be pleased to hear from you."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6 md:col-span-4 md:col-start-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoRow, {
							icon: FiMapPin,
							title: "Address",
							children: [
								"No. 11/38 Status Quo Building,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Strerling Road, Nungambakkum,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Chennai - 600 0034"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: FiPhone,
							title: "Call",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919841603932",
									className: "hover:text-gold",
									children: "Eliyas: +91 98416 03932"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919789811111",
									className: "hover:text-gold",
									children: "Naina Mohamed: +91 97898 11111"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: FaWhatsapp,
							title: "WhatsApp",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/919841603932",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-gold",
									children: "Eliyas: +91 98416 03932"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/919789811111",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-gold",
									children: "Naina Mohamed: +91 97898 11111"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: FiMail,
							title: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:bluewaveestates06@gmail.com",
								className: "hover:text-gold break-all",
								children: "bluewaveestates06@gmail.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: FiClock,
							title: "Hours",
							children: "Monday – Saturday · 9:30 to 7:00"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBtn, {
						active: tab === "lead",
						onClick: () => setTab("lead"),
						children: "Looking for a Property"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBtn, {
						active: tab === "owner",
						onClick: () => setTab("owner"),
						children: "List Your Property"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 md:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 max-w-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: tab === "lead" ? "Enquiry" : "Owner Submission"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-serif text-3xl leading-tight md:text-4xl",
							children: tab === "lead" ? "Tell us about your dream property." : "Sell or rent, with a considered plan."
						})]
					}), tab === "lead" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerForm, {})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Blue Wave Estate — Chennai",
					src: "https://www.google.com/maps?q=Boat+Club+Road+Chennai&output=embed",
					width: "100%",
					height: "450",
					style: {
						border: 0,
						filter: "grayscale(1) contrast(0.9)"
					},
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})
		})
	] });
}
function InfoRow({ icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[24px_1fr] items-start gap-4 border-b border-border pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			size: 16,
			className: "mt-1 text-gold"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyebrow text-foreground/60",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-sm leading-relaxed text-foreground",
			children
		})] })]
	});
}
function TabBtn({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `px-6 py-5 text-[11px] uppercase tracking-[0.22em] transition-colors ${active ? "bg-ink text-bone" : "bg-background text-foreground/60 hover:text-foreground"}`,
		children
	});
}
//#endregion
export { Contact as component };

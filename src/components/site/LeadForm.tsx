import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(120),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  location: z.string().trim().max(80).optional().or(z.literal("")),
  propertyType: z.string().trim().max(60).optional().or(z.literal("")),
  intent: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError("Please check the highlighted fields.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border p-10 text-center">
        <div className="eyebrow text-gold">Thank you</div>
        <h3 className="mt-4 text-2xl">We'll be in touch shortly.</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          A consultant will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <Field label="Full Name" name="name" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Company" name="company" />
      <Field label="Budget" name="budget" placeholder="e.g. ₹ 3 – 5 Cr" />
      <Field label="Preferred Location" name="location" placeholder="Boat Club, ECR…" />
      <Select
        label="Property Type"
        name="propertyType"
        options={["Apartment", "Villa", "Independent House", "Plot"]}
      />
      <Select
        label="Intent"
        name="intent"
        options={["Buy", "Rent", "Sell", "Invest"]}
      />
      <div className="md:col-span-2">
        <Field label="Message" name="message" textarea />
      </div>
      {error && (
        <p className="text-xs text-destructive md:col-span-2">{error}</p>
      )}
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary w-full md:w-auto">
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-foreground/60">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-gold"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-gold"
        />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="eyebrow text-foreground/60">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-gold"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

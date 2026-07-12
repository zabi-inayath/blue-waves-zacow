import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(120),
  location: z.string().trim().min(2).max(80),
  propertyType: z.string().trim().min(1),
  price: z.string().trim().min(1).max(60),
});

export function OwnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError("Please complete the required fields.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border bg-background p-10 text-center">
        <div className="eyebrow text-gold">Received</div>
        <h3 className="mt-4 text-2xl">Your listing details are with us.</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          A relationship manager will visit or call to shortlist the marketing plan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <Field label="Owner Name" name="name" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Property Location" name="location" required />
      <label className="block">
        <span className="eyebrow text-foreground/60">Property Type <span className="text-gold">*</span></span>
        <select
          name="propertyType"
          required
          defaultValue=""
          className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-gold"
        >
          <option value="" disabled>Select…</option>
          {["Apartment", "Villa", "Independent House", "Plot", "Commercial"].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>
      <Field label="Expected Price" name="price" required placeholder="e.g. ₹ 4.5 Cr" />
      <label className="block md:col-span-2">
        <span className="eyebrow text-foreground/60">Upload Property Images</span>
        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          className="mt-3 block w-full text-sm text-muted-foreground file:mr-4 file:border file:border-border file:bg-transparent file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.2em] file:text-foreground hover:file:border-gold"
        />
      </label>
      {error && <p className="text-xs text-destructive md:col-span-2">{error}</p>}
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary w-full md:w-auto">
          List My Property
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-foreground/60">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}

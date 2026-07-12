import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-24 md:px-12 md:py-32 ${className}`}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="mt-4 text-4xl leading-[1.1] text-foreground md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}

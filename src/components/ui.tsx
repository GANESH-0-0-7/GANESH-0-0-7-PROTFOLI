import type { CSSProperties, ElementType, MouseEvent, ReactNode } from "react";
import { useInView } from "../hooks/useHooks";
import { cn } from "../utils/cn";

/** Fades/slides children in when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Mouse-follow highlight handler for `.spotlight` elements. */
export function spotlightMove(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function SectionHeading({
  kicker,
  title,
  accent,
  intro,
  dark,
}: {
  kicker: string;
  title: string;
  accent: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p
        className={cn(
          "mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.18em] uppercase",
          dark ? "text-accent-bright" : "text-accent",
        )}
      >
        <span className="h-px w-8 bg-current" aria-hidden />
        {kicker}
      </p>
      <h2
        className={cn(
          "font-serif text-3xl leading-[1.1] font-medium tracking-tight sm:text-4xl md:text-[2.75rem]",
          dark ? "text-cream" : "text-ink",
        )}
      >
        {title} <em className={cn("italic", dark ? "text-accent-bright" : "text-accent")}>{accent}</em>
      </h2>
      {intro && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-cream/70" : "text-muted")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function Tag({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.72rem] leading-none",
        dark ? "border-white/15 bg-white/5 text-cream/80" : "border-line bg-paper text-ink-soft",
      )}
    >
      {children}
    </span>
  );
}

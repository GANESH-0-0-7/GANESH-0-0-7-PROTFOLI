import type { CSSProperties } from "react";
import { skillGroups } from "../data/portfolio";
import { Reveal, SectionHeading, spotlightMove } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-line bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          kicker="02 — Toolkit"
          title="Technologies I"
          accent="work with."
          intro="Grouped by what they're used for. No percentages — each of these appears in a project you can open below."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 90}>
              <article
                onMouseMove={spotlightMove}
                className="spotlight h-full rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <header className="mb-5 flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-cream">
                    <group.icon size={18} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg leading-tight font-medium">{group.title}</h3>
                    <p className="mt-0.5 text-sm text-muted">{group.blurb}</p>
                  </div>
                </header>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s.name}
                      style={{ "--brand": s.color } as CSSProperties}
                      className="group/skill flex items-center gap-2 rounded-lg border border-line bg-cream px-3 py-2 text-sm font-medium text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-(--brand) hover:bg-paper hover:shadow-md"
                    >
                      <s.icon
                        size={16}
                        aria-hidden
                        className="text-muted transition-all duration-200 group-hover/skill:scale-110 group-hover/skill:text-(--brand)"
                      />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

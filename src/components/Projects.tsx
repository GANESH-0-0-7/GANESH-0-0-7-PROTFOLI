import { useCallback, useMemo, useState } from "react";
import { projectCategories, projects, type Project, type ProjectCategory } from "../data/portfolio";
import { cn } from "../utils/cn";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Reveal, SectionHeading } from "./ui";

type Filter = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    projectCategories.slice(1).forEach((c) => {
      map[c] = projects.filter((p) => p.categories.includes(c as ProjectCategory)).length;
    });
    return map;
  }, []);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        kicker="03 — Selected work"
        title="Projects with"
        accent="purpose."
        intro="Full-stack platforms, AI systems and computer-vision work. Open any project for its features, stack and links."
      />

      <Reveal>
        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((c) => {
            const on = filter === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(c)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  on
                    ? "border-ink bg-ink text-cream shadow-lg shadow-ink/15"
                    : "border-line bg-paper text-ink-soft hover:-translate-y-0.5 hover:border-ink",
                )}
              >
                {c}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 font-mono text-[0.65rem] leading-none",
                    on ? "bg-white/15" : "bg-sand",
                  )}
                >
                  {counts[c]}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} project{visible.length === 1 ? "" : "s"}
      </p>

      <div className="grid grid-flow-dense gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 80} className={cn(p.featured && "lg:col-span-2")}>
            <ProjectCard project={p} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={close} />}
    </section>
  );
}

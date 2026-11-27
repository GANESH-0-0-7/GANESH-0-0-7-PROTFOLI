import type { Project } from "../data/portfolio";
import { cn } from "../utils/cn";

/**
 * Generated preview artwork for a project: a mock application window tinted by the
 * project's hue and populated with its real title and stack. It is illustrative
 * only — not a screenshot — so it is hidden from assistive tech.
 */
export default function ProjectPreview({ project, large }: { project: Project; large?: boolean }) {
  const { hue, icon: Icon } = project;
  return (
    <div
      aria-hidden
      className={cn("relative overflow-hidden", large ? "aspect-[16/8]" : "aspect-[16/9]")}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 70% 94%), hsl(${(hue + 30) % 360} 60% 86%))`,
      }}
    >
      <div
        className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-50 blur-2xl"
        style={{ background: `hsl(${hue} 85% 65%)` }}
      />
      <div className="absolute inset-x-[8%] top-[14%] bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-ink/10 bg-paper/95 shadow-lg shadow-ink/10 transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-green-500/80" />
          <span className="ml-2 truncate font-mono text-[0.6rem] text-muted">
            {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          </span>
        </div>
        <div className="flex gap-3 p-3.5">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
            style={{ background: `hsl(${hue} 65% 42%)` }}
          >
            <Icon size={18} />
          </span>
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="h-2 w-2/5 rounded-full" style={{ background: `hsl(${hue} 40% 78%)` }} />
            <div className="h-1.5 w-4/5 rounded-full bg-sand" />
            <div className="h-1.5 w-3/5 rounded-full bg-sand" />
            <div className="flex flex-wrap gap-1 pt-1.5">
              {project.stack.slice(0, large ? 5 : 3).map((s) => (
                <span
                  key={s}
                  className="rounded px-1.5 py-0.5 font-mono text-[0.58rem] leading-none"
                  style={{ background: `hsl(${hue} 70% 94%)`, color: `hsl(${hue} 60% 28%)` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight, LuExternalLink } from "react-icons/lu";
import type { Project } from "../data/portfolio";
import { cn } from "../utils/cn";
import ProjectPreview from "./ProjectPreview";
import { Tag, spotlightMove } from "./ui";

const iconBtn =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-cream";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const { featured } = project;
  const visibleStack = project.stack.slice(0, featured ? 6 : 4);
  const extra = project.stack.length - visibleStack.length;

  return (
    <article
      onMouseMove={spotlightMove}
      className={cn(
        "group spotlight flex h-full flex-col overflow-hidden rounded-2xl border bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/10",
        featured ? "border-ink/25" : "border-line hover:border-accent/40",
      )}
    >
      <ProjectPreview project={project} large={featured} />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-mono text-[0.7rem] tracking-[0.14em] text-accent uppercase">
            {project.n} · {project.type}
          </span>
          {featured && (
            <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[0.6rem] tracking-wider text-cream uppercase">
              Featured
            </span>
          )}
        </div>

        <h3 className={cn("font-serif font-medium tracking-tight", featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          {project.title}
        </h3>
        <p className={cn("mt-2.5 text-sm leading-relaxed text-muted", !featured && "line-clamp-3")}>
          {project.desc}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
          {visibleStack.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
          {extra > 0 && (
            <li>
              <Tag>+{extra}</Tag>
            </li>
          )}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-cream transition-all hover:bg-accent hover:shadow-lg hover:shadow-accent/25"
          >
            Project details
            <LuArrowUpRight
              size={15}
              aria-hidden
              className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </button>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={iconBtn}
                aria-label={`${project.title} on GitHub (opens in new tab)`}
                title="GitHub repository"
              >
                <FaGithub size={16} aria-hidden />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={iconBtn}
                aria-label={`${project.title} live demo (opens in new tab)`}
                title="Live demo"
              >
                <LuExternalLink size={16} aria-hidden />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

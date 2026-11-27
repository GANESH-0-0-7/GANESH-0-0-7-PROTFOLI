import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { LuCheck, LuExternalLink, LuX } from "react-icons/lu";
import type { Project } from "../data/portfolio";
import ProjectPreview from "./ProjectPreview";
import { Tag } from "./ui";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[60] flex items-end justify-center bg-night/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="modal-panel group relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 shadow transition-colors hover:bg-ink hover:text-cream"
        >
          <LuX size={18} aria-hidden />
        </button>

        <ProjectPreview project={project} large />

        <div className="p-6 sm:p-8">
          <p className="font-mono text-[0.7rem] tracking-[0.14em] text-accent uppercase">
            {project.n} · {project.type}
          </p>
          <h3 id="project-modal-title" className="mt-2 font-serif text-3xl font-medium tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{project.desc}</p>

          <h4 className="mt-7 font-mono text-[0.7rem] tracking-[0.16em] text-ink uppercase">Key features</h4>
          <ul className="mt-3 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <LuCheck size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-7 font-mono text-[0.7rem] tracking-[0.16em] text-ink uppercase">Tech stack</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-accent"
              >
                Live demo <LuExternalLink size={15} aria-hidden />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  project.live
                    ? "inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-ink"
                    : "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-accent"
                }
              >
                <FaGithub size={16} aria-hidden /> View repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

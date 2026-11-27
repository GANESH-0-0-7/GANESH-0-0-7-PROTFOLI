import { useEffect, useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection, useScrollState } from "../hooks/useHooks";
import { cn } from "../utils/cn";

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const { progress, scrolled } = useScrollState();

  // Close the mobile menu with Escape and lock scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line/80 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className="absolute bottom-0 left-0 h-[2px] origin-left bg-accent-bright"
        style={{ width: "100%", transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="group font-serif text-2xl font-semibold tracking-tight"
          aria-label="Ganesh C — back to top"
          onClick={() => setOpen(false)}
        >
          GC<span className="text-accent-bright transition-transform group-hover:scale-125 inline-block">.</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === l.id ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {active === l.id && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-sand" aria-hidden />
                  )}
                  {l.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-bright transition-all duration-300",
                      active === l.id ? "scale-100 opacity-100" : "scale-0 opacity-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeView}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg hover:shadow-accent/25 sm:inline-flex"
          >
            Resume <LuDownload size={14} aria-hidden />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <LuX size={18} /> : <LuMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "grid transition-[grid-template-rows] duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="px-5 pt-2 pb-6" hidden={!open}>
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between border-b border-line py-3.5 font-serif text-xl",
                      active === l.id ? "text-accent" : "text-ink",
                    )}
                  >
                    {l.label}
                    {active === l.id && <span className="h-2 w-2 rounded-full bg-accent-bright" aria-hidden />}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resumeView}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream"
            >
              View Resume <LuDownload size={14} aria-hidden />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

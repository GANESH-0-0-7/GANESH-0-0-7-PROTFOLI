import { LuArrowUp } from "react-icons/lu";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="text-center">Designed with intention · Built with React, Vite &amp; Tailwind CSS</span>
        <a href="#home" className="link-underline inline-flex items-center gap-1.5 text-ink">
          Back to top <LuArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}

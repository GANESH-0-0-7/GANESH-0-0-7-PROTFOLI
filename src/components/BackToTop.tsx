import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import { cn } from "../utils/cn";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream shadow-xl shadow-ink/25 transition-all duration-300 hover:-translate-y-1 hover:bg-accent sm:right-8 sm:bottom-8",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <LuArrowUp size={18} aria-hidden />
    </button>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Returns [ref, inView]; flips to true once when the element enters the viewport. */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

/** Tracks which section (by id) is currently under the reading line. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const onScroll = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}

/** Page scroll progress 0..1 (rAF-throttled) plus a "scrolled past" flag. */
export function useScrollState(pastPx = 24) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setScrolled(window.scrollY > pastPx);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pastPx]);

  return { progress, scrolled };
}

/** Typewriter that cycles through phrases. Static first phrase for reduced motion. */
export function useTypewriter(phrases: readonly string[], speed = 55, pause = 1700) {
  const [text, setText] = useState(prefersReducedMotion() ? phrases[0] : "");

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let i = 0;
    let j = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = phrases[i];
      j += deleting ? -1 : 1;
      setText(word.slice(0, j));
      let delay = deleting ? speed / 2 : speed;
      if (!deleting && j === word.length) {
        deleting = true;
        delay = pause;
      } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % phrases.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [phrases, speed, pause]);

  return text;
}

/** Animated count-up once `start` is true. */
export function useCountUp(target: number, start: boolean, decimals = 0, duration = 1200) {
  const [value, setValue] = useState(prefersReducedMotion() ? target : 0);

  useEffect(() => {
    if (!start || prefersReducedMotion()) {
      if (start) setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value.toFixed(decimals);
}

/** Copy text to clipboard with a legacy fallback. Resolves to success boolean. */
export function useCopy(resetMs = 2200) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      let ok = false;
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch {
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          ok = document.execCommand("copy");
          document.body.removeChild(ta);
        } catch {
          ok = false;
        }
      }
      if (ok) {
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), resetMs);
      }
      return ok;
    },
    [resetMs],
  );

  return { copied, copy };
}

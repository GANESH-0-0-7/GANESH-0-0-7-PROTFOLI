import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuArrowUpRight, LuDownload, LuMapPin } from "react-icons/lu";
import { profile, typedPhrases } from "../data/portfolio";
import { useTypewriter } from "../hooks/useHooks";

// Drop `ganesh.jpeg` (or .jpg/.png/.webp) into the project root and it is picked up
// automatically at build time; otherwise a monogram portrait is shown.
const found = import.meta.glob("/ganesh.{jpeg,jpg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const PROFILE_IMAGE = Object.values(found)[0];

const socials = [
  { href: profile.github, label: "GitHub profile", icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn profile", icon: FaLinkedinIn },
];

export default function Hero() {
  const typed = useTypewriter(typedPhrases);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* background */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-bright/15 blur-3xl animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl animate-float [animation-delay:-3s]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/80 px-3.5 py-1.5 text-xs font-medium text-ink-soft backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-ring" aria-hidden />
            Open to internships &amp; opportunities
          </p>

          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Hi, I'm <span className="text-accent">Ganesh</span>.
            <br />
            <span className="text-ink-soft">{profile.role}.</span>
          </h1>

          <p className="mt-6 flex min-h-8 flex-wrap items-center gap-x-2 font-mono text-sm text-muted sm:text-base">
            <span>I build</span>
            <span className="inline-flex items-center rounded-md bg-ink px-2.5 py-1 text-cream" aria-hidden>
              {typed}
              <span className="ml-0.5 inline-block h-4 w-[2px] bg-accent-bright animate-blink" />
            </span>
            <span className="sr-only">
              Specialities: {typedPhrases.join(", ")}.
            </span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Computer Science student at JSSATEB turning ideas into dependable software — from Spring Boot
            services and React interfaces to RAG and computer-vision systems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-xl hover:shadow-accent/25"
            >
              View Projects
              <LuArrowUpRight
                size={17}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.resumeDownload}
              download="Ganesh_C_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-lg"
            >
              Download Resume
              <LuDownload size={16} aria-hidden className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <div className="ml-1 flex items-center gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink transition-all hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-cream"
                >
                  <Icon size={17} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <LuMapPin size={14} aria-hidden /> {profile.location}
            </span>
            <span>JSSATEB · B.E. CSE · {profile.years.replace(/ /g, "")}</span>
          </p>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem]">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-accent/40"
              aria-hidden
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-line bg-sand shadow-2xl shadow-ink/10">
              {PROFILE_IMAGE && !imageFailed ? (
                <img
                  src={PROFILE_IMAGE}
                  alt="Portrait of Ganesh C"
                  width={440}
                  height={550}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div
                  role="img"
                  aria-label="Monogram GC"
                  className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-sand via-accent-soft to-sand"
                >
                  <span className="font-serif text-8xl font-medium text-ink">
                    GC<span className="text-accent-bright">.</span>
                  </span>
                  <span className="mt-3 font-mono text-[0.7rem] tracking-[0.2em] text-muted uppercase">
                    Java · Full-Stack · AI
                  </span>
                </div>
              )}
            </div>

            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-xl shadow-ink/10 animate-float sm:-left-8">
              <span className="font-serif text-2xl font-semibold text-accent">{profile.cgpa}</span>
              <span className="text-xs leading-tight text-muted">
                CGPA
                <br />
                B.E. CSE
              </span>
            </div>
            <div className="absolute -top-4 -right-3 rounded-2xl bg-ink px-4 py-2.5 font-mono text-xs text-cream shadow-xl animate-float [animation-delay:-2s] sm:-right-6">
              Spring Boot · React
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

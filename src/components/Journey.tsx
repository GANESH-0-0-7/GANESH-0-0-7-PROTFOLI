import { LuBriefcase, LuGraduationCap, LuTrophy } from "react-icons/lu";
import { profile } from "../data/portfolio";
import { Reveal, SectionHeading } from "./ui";

const timeline = [
  {
    when: "2023",
    title: "Began B.E. in Computer Science & Engineering",
    body: `${profile.college}. Core coursework alongside self-driven projects in Java, Spring Boot and React.`,
  },
  {
    when: "Academics",
    title: `CGPA ${profile.cgpa} / 10`,
    body: "Current cumulative grade point average across completed semesters.",
  },
  {
    when: "Hackathon",
    title: "3rd place — JSSATEB Hackathon",
    body: "Recognised for ReferAI, an AI-powered employee referral platform.",
  },
  {
    when: "2027",
    title: "Expected graduation",
    body: "Aiming to start a career as a Java Full-Stack Developer.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-night text-cream">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-bright/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          dark
          kicker="04 — Journey"
          title="Education &"
          accent="recognition."
          intro="A straightforward record of where I'm studying and what I've been recognised for."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Timeline */}
          <ol className="relative space-y-8 border-l border-white/15 pl-8">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 90} className="relative">
                <span
                  className="absolute top-1.5 -left-[2.4rem] flex h-3 w-3 items-center justify-center rounded-full bg-accent-bright ring-4 ring-night"
                  aria-hidden
                />
                <p className="font-mono text-xs tracking-[0.16em] text-accent-bright uppercase">{t.when}</p>
                <h3 className="mt-1 font-serif text-xl font-medium">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{t.body}</p>
              </Reveal>
            ))}
          </ol>

          {/* Side cards */}
          <div className="space-y-5">
            <Reveal>
              <article className="relative overflow-hidden rounded-2xl border border-accent-bright/40 bg-gradient-to-br from-accent/30 to-night-2 p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="pointer-events-none absolute -right-2 -bottom-6 font-serif text-[9rem] leading-none text-white/[0.06]" aria-hidden>
                  3rd
                </span>
                <p className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.16em] text-accent-bright uppercase">
                  <LuTrophy size={15} aria-hidden /> Hackathon achievement
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight font-medium">
                  3rd place at the JSSATEB Hackathon
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  Built ReferAI, an AI-powered employee referral platform.
                </p>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                <p className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.16em] text-accent-bright uppercase">
                  <LuBriefcase size={15} aria-hidden /> Experience &amp; certifications
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  No formal internships or certifications to list yet — my experience comes from the seven
                  projects above. I'm actively looking for an internship to apply and grow these skills in a
                  team.
                </p>
                <a
                  href="#contact"
                  className="link-underline mt-4 inline-block text-sm font-medium text-cream"
                >
                  Get in touch →
                </a>
              </article>
            </Reveal>

            <Reveal delay={180}>
              <article className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                <LuGraduationCap size={26} aria-hidden className="shrink-0 text-accent-bright" />
                <p className="text-sm leading-relaxed text-cream/75">
                  <strong className="font-medium text-cream">{profile.degree}</strong>
                  <br />
                  {profile.years}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { LuGraduationCap } from "react-icons/lu";
import { aboutCards, profile } from "../data/portfolio";
import { Reveal, SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading kicker="01 — About" title="Curious by nature." accent="Engineer by practice." />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <Reveal as="p">
            I'm pursuing a B.E. in Computer Science and Engineering at JSS Academy of Technical Education,
            Bengaluru. I enjoy turning ideas into useful products — from backend services and responsive
            interfaces to AI-powered applications.
          </Reveal>
          <Reveal as="p" delay={80}>
            My work spans Java and Spring Boot development, React applications, database design,
            retrieval-augmented generation and computer vision. I'm drawn to real-world applications —
            recruitment, healthcare, finance and assistive technology — where good engineering has a
            visible effect on people.
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 flex gap-4 rounded-2xl border border-line bg-paper p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <LuGraduationCap size={22} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[0.7rem] tracking-[0.16em] text-accent uppercase">Education</p>
                <p className="mt-1 font-serif text-lg font-medium text-ink">{profile.degree}</p>
                <p className="text-sm text-muted">
                  {profile.college} · {profile.years}
                </p>
                <p className="text-sm text-muted">CGPA: {profile.cgpa} / 10</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map(({ title, body, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="group h-full rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-ink/5">
                <Icon
                  size={22}
                  aria-hidden
                  className="mb-4 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                />
                <h3 className="font-serif text-lg font-medium">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

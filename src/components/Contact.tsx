import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuCheck, LuCopy, LuMail } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/portfolio";
import { useCopy } from "../hooks/useHooks";
import { cn } from "../utils/cn";
import ContactForm from "./ContactForm";
import { Reveal, SectionHeading } from "./ui";

const links = [
  { label: "GitHub", href: profile.github, icon: FaGithub, handle: "GANESH-0-0-7" },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn, handle: "ganesh-c" },
  { label: "LeetCode", href: profile.leetcode, icon: SiLeetcode, handle: "SAITMAN" },
];

export default function Contact() {
  const { copied, copy } = useCopy();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        kicker="05 — Get in touch"
        title="Have a good idea?"
        accent="Let's build it."
        intro="I'm always interested in connecting, learning and exploring meaningful opportunities — internships especially."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal className="space-y-6">
          <div className="rounded-2xl border border-line bg-paper p-5">
            <p className="font-mono text-[0.7rem] tracking-[0.16em] text-accent uppercase">Email</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="link-underline inline-flex items-center gap-2 font-serif text-lg font-medium break-all sm:text-xl"
              >
                <LuMail size={18} aria-hidden className="shrink-0 text-accent" />
                {profile.email}
              </a>
              <button
                type="button"
                onClick={() => copy(profile.email)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                  copied
                    ? "border-green-600 bg-green-50 text-green-800"
                    : "border-line bg-cream hover:-translate-y-0.5 hover:border-ink",
                )}
              >
                {copied ? <LuCheck size={13} aria-hidden /> : <LuCopy size={13} aria-hidden />}
                {copied ? "Copied!" : "Copy"}
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>
          </div>

          <ul className="space-y-3">
            {links.map(({ label, href, icon: Icon, handle }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:shadow-lg hover:shadow-ink/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-cream transition-colors group-hover:bg-accent">
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block font-mono text-xs text-muted">{handle}</span>
                  </span>
                  <span
                    aria-hidden
                    className="text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  >
                    ↗
                  </span>
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

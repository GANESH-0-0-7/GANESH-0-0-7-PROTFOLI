import { profile, projects } from "../data/portfolio";
import { useCountUp, useInView } from "../hooks/useHooks";

function Stat({ value, decimals = 0, pad = 0, suffix, label, start }: {
  value: number;
  decimals?: number;
  pad?: number;
  suffix?: string;
  label: string;
  start: boolean;
}) {
  const shown = useCountUp(value, start, decimals);
  return (
    <div className="px-4 py-6 text-center sm:py-8">
      <div className="font-serif text-4xl font-medium text-cream sm:text-5xl">
        {pad ? shown.padStart(pad, "0") : shown}
        {suffix && <sup className="ml-0.5 align-super font-mono text-sm text-accent-bright">{suffix}</sup>}
      </div>
      <div className="mt-1.5 font-mono text-[0.7rem] tracking-[0.18em] text-cream/60 uppercase">{label}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  return (
    <section aria-label="At a glance" className="bg-night">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x [&>*:nth-child(-n+2)]:border-b [&>*:nth-child(-n+2)]:border-white/10 md:[&>*:nth-child(-n+2)]:border-b-0"
      >
        <Stat start={inView} value={profile.cgpa} decimals={2} label="CGPA" />
        <Stat start={inView} value={projects.length} pad={2} label="Projects" />
        <Stat start={inView} value={3} pad={2} suffix="rd" label="Hackathon place" />
        <Stat start={inView} value={2027} label="Graduation" />
      </div>
    </section>
  );
}

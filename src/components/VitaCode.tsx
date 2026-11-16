import { SectionHeading } from './fx';

const principles = [
  {
    number: '01',
    title: 'Patient-safety mindset',
    description: 'We approach healthcare software with care: clear limits, thoughtful validation, and human oversight come before flashy features.',
  },
  {
    number: '02',
    title: 'Build for real workflows',
    description: 'We translate pharmacy and care-team needs into focused tools that make complex information easier to navigate.',
  },
  {
    number: '03',
    title: 'Ship, learn, improve',
    description: 'Small milestones, honest reviews, and useful feedback help the team improve each iteration without losing sight of reliability.',
  },
];

export default function VitaCode() {
  return (
    <>
      <SectionHeading kicker="VitaCode Organization | Executive Leadership" title="Where code meets cure." />
      <div className="vitacode gutter space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="vitacode-card rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="vitacode-accent text-sm font-bold uppercase tracking-[0.2em]">
              Building pharma tech, breaking limits, saving lives.
            </p>
            <h3 className="mt-6 font-display text-4xl leading-none text-bone sm:text-5xl">Strategic Direction</h3>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-bone/75 sm:text-base">
              I guide the technical evolution of high-impact pharma-tech ideas, connecting system architecture with the realities of pharmacy and healthcare workflows. I lead a lean, five-person squad of developers and designers, turning ambitious concepts into focused milestones and dependable experiences.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-bone/75 sm:text-base">
              Our aim is to make useful technology easier to trust and easier to use: start with a clear problem, choose a practical design, test the important paths, and improve from feedback. We value performance, privacy, accessibility, and careful handling of health-related information.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="vitacode-inset rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Current Focus</p>
                <p className="mt-2 text-sm font-semibold text-bone">High-performance systems &amp; healthcare-first logic</p>
              </div>
              <div className="vitacode-inset rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Team &amp; Goal</p>
                <p className="mt-2 text-sm font-semibold text-bone">5 people, several overworked bots, and one semicolon at a time.</p>
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="vitacode-logo-frame overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <img
                src={`${import.meta.env.BASE_URL}assets/vitacode.png`}
                alt="VitaCode logo — Innovating Life Through Code"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="vitacode-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-smoke">How We Work</p>
              <ul className="mt-4 space-y-4">
                {principles.map((principle) => (
                  <li key={principle.number} className="flex gap-3">
                    <span className="vitacode-accent font-display text-xl">{principle.number}</span>
                    <div>
                      <h4 className="text-sm font-bold text-bone">{principle.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-bone/65">{principle.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <aside className="vitacode-clause rounded-2xl border border-[#46e3a8]/20 bg-[#46e3a8]/[0.04] p-6 sm:p-8">
          <p className="vitacode-accent text-[10px] font-bold uppercase tracking-[0.24em]">The “Good Luck With That” Clause</p>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-bone/75 sm:text-base">
            VitaCode is an early-stage, five-person digital lab and is not trademarked yet. There are no corporate towers to seize, offshore accounts, or fancy legal departments—just a small team, empty espresso pods, and a few GitHub issues waiting to be closed. Seriously, please don’t sue us; you’d basically be suing a vibe.
          </p>
          <p className="mt-3 max-w-5xl text-xs leading-relaxed text-smoke">
            The joke is not legal advice. VitaCode concepts shown here are portfolio work, not medical advice or a substitute for professional clinical judgment.
          </p>
        </aside>
      </div>
    </>
  );
}

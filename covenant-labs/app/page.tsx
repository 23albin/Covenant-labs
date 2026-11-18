import Image from "next/image";
import Link from "next/link";
import ownerImage from "./owner.png";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Braces,
  Check,
  FlaskConical,
  FunctionSquare,
} from "lucide-react";

import { ChartAreaLinear } from "@/components/chart";
import MagicRings from "@/components/MagicRings";
import MaskedHeading from "@/components/MaskedHeading";
import { reports } from "@/lib/reports";

const principles = [
  {
    number: "01",
    title: "Start with the source",
    description:
      "We read the original paper, documentation, or dataset before summarizing the headline.",
  },
  {
    number: "02",
    title: "Explain the hard parts",
    description:
      "Key terms and methods get plain-language explanations without flattening the details.",
  },
  {
    number: "03",
    title: "Show the limits",
    description:
      "We separate demonstrated results from open questions, assumptions, and speculation.",
  },
  {
    number: "04",
    title: "Keep it open",
    description:
      "Reports are free to read, with sources linked so you can keep exploring for yourself.",
  },
];

const researcherProfile = {
  name: "Your Name",
  image: "",
  bio: "Add a short introduction about your research interests and what you’re exploring.",
};

export default function Home() {
  return (
    <main id="home" className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <MagicRings
          color="#A855F7"
          colorTwo="#22D3EE"
          ringCount={6}
          motion="breathe"
          speed={0.65}
          glow={1.2}
          opacity={0.8}
          followMouse
          mouseInfluence={0.12}
          parallax={0.025}
          intro
          theme="dark"
          maxDevicePixelRatio={1.5}
          className="h-full w-full"
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(124,58,237,0.2),transparent_42%),radial-gradient(ellipse_at_90%_80%,rgba(8,145,178,0.12),transparent_38%)]" />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3" aria-label="Covenant Research home">
            <Image
              src="/icon.png"
              alt="Covenant logo"
              width={46}
              height={46}
              priority
              className="size-11 rounded-xl object-cover shadow-[0_0_24px_rgba(168,85,247,0.32)]"
            />
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-[0.16em]">COVENANT-/Labs</span>
              <span className="mt-1 block text-[9px] font-medium tracking-[0.22em] text-slate-400 uppercase">Research commons</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="transition hover:text-cyan-200" href="#reports">Reports</a>
            <Link href="/reports" className="rounded-full border border-cyan-200/20 bg-cyan-300/8 px-3.5 py-2 text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/15">All reports</Link>
            <a className="transition hover:text-cyan-200" href="#fields">Research fields</a>
            <a className="transition hover:text-cyan-200" href="#method">Our approach</a>
          </nav>

          <a href="#reports" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/10 sm:px-5 sm:text-sm">
            Read for free <ArrowRight aria-hidden="true" className="size-4 text-cyan-200" />
          </a>
        </header>

        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pb-32 lg:pt-20">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-3.5 py-2 text-[10px] font-semibold tracking-[0.16em] text-violet-100/90 uppercase sm:text-xs">
              <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
              Independent research · Open to everyone
            </p>
            <MaskedHeading
              text="Big questions. Clear answers."
              tag="h1"
              align="left"
              weight={800}
              tracking={-0.055}
              lineHeight={0.98}
              textScale={0.12}
              reveal="rise"
              duration={1.1}
              spotlight
              spotlightRadius={180}
              tint="linear-gradient(100deg, #f8fafc 6%, #c4b5fd 47%, #67e8f9 100%)"
              className="max-w-3xl text-[clamp(3.2rem,7vw,6.3rem)] font-black"
              style={{ color: "#f8fafc" }}
            />
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We explore new ideas in science, mathematics, and computing, then turn the research into thoughtful reports anyone can read—for free.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#reports" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-400 to-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_8px_32px_rgba(34,211,238,0.18)] transition hover:scale-[1.02]">
                Explore the reports <ArrowDown aria-hidden="true" className="size-4" />
              </a>
              <a href="#method" className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/5">
                How we work
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-xs font-medium text-slate-400 sm:mt-16">
              <span className="inline-flex items-center gap-2"><Check aria-hidden="true" className="size-4 text-cyan-300" /> Grounded in primary sources</span>
              <span className="inline-flex items-center gap-2"><Check aria-hidden="true" className="size-4 text-cyan-300" /> No paywalls, ever</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-140">
            <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-[#0b1021]/75 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-4">
              <div className="mb-3 flex items-center justify-between gap-3 px-2 pt-1 sm:px-3">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-400 uppercase">The research desk</p>
                  <h2 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">Ideas, in motion.</h2>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/6 px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-cyan-100">SCIENCE × MATH × CODE</span>
              </div>
              <ChartAreaLinear />
              <p className="px-2 pt-3 text-center text-[10px] tracking-wide text-slate-500 sm:text-xs">An illustration of inquiry—not a measured dataset.</p>
            </div>
          </div>
        </section>

        <section id="fields" className="border-y border-white/10 bg-slate-950/45 backdrop-blur-lg">
          <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
            <article className="flex gap-4 border-b border-white/10 py-6 md:border-r md:border-b-0 md:pr-8">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-300/8 text-violet-200"><FlaskConical aria-hidden="true" className="size-5" /></span>
              <div><h2 className="font-semibold text-white">Science</h2><p className="mt-1 text-sm leading-6 text-slate-400">Discoveries, evidence, and the questions behind them.</p></div>
            </article>
            <article className="flex gap-4 border-b border-white/10 py-6 md:border-r md:border-b-0 md:px-8">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200"><FunctionSquare aria-hidden="true" className="size-5" /></span>
              <div><h2 className="font-semibold text-white">Mathematics</h2><p className="mt-1 text-sm leading-6 text-slate-400">The structures and ideas that help us make sense of patterns.</p></div>
            </article>
            <article className="flex gap-4 py-6 md:pl-8">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-fuchsia-300/15 bg-fuchsia-300/[0.07] text-fuchsia-200"><Braces aria-hidden="true" className="size-5" /></span>
              <div><h2 className="font-semibold text-white">Computing</h2><p className="mt-1 text-sm leading-6 text-slate-400">Algorithms, systems, and the technology shaping what comes next.</p></div>
            </article>
          </div>
        </section>

        <section id="reports" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] text-cyan-200 uppercase">The open library</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">Some of our Reports.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">Short, sourced guides to influential ideas. Start with the brief, then follow the references to the original work.</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-2 text-xs font-medium text-slate-300"><BookOpenText aria-hidden="true" className="size-4 text-cyan-200" /> Free to read · Sources included</span>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reports.map((report) => {
              const Icon = report.icon;
              return (
                <article key={report.number} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0b1021]/75 p-5 backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:border-violet-300/35 hover:bg-[#10162b]/90 hover:shadow-[0_18px_48px_rgba(0,0,0,0.28)] sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-300/8 text-violet-200"><Icon aria-hidden="true" className="size-5" /></span>
                    <span className="text-xs font-medium tracking-[0.12em] text-slate-500">{report.number}</span>
                  </div>
                  <p className="mt-6 text-[10px] font-bold tracking-[0.13em] text-cyan-200/80">{report.category}</p>
                  <h3 className="mt-2 text-xl leading-snug font-semibold tracking-tight text-white">{report.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{report.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-medium tracking-[0.12em] text-slate-500">
                    <span>{report.readTime}</span>
                    <span>OPEN ACCESS</span>
                  </div>
                  <details className="group/details mt-3 border-t border-white/10 pt-3">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-semibold text-cyan-100 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                      Read the brief
                      <ArrowRight aria-hidden="true" className="size-4 transition group-open/details:rotate-90" />
                    </summary>
                    <div className="pt-3 text-sm leading-6 text-slate-300">
                      <p>{report.summary}</p>
                      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#060a15]">
                        <p className="border-b border-white/10 px-3 py-2 text-[10px] font-semibold tracking-[0.12em] text-cyan-100 uppercase">
                          Example · {report.codeLanguage}
                        </p>
                        <pre className="overflow-x-auto p-3 text-xs leading-5 text-slate-200"><code>{report.codeSnippet}</code></pre>
                      </div>
                      <p className="mt-4 text-xs font-semibold text-white">Primary source</p>
                      <a href={report.source} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-start gap-1 text-xs leading-5 text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 hover:text-white">
                        {report.citation}<ArrowUpRight aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
                      </a>
                    </div>
                  </details>
                </article>
              );
            })}
          </div>
        </section>

        <section id="method" className="border-y border-white/10 bg-[#090d1b]/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-violet-200 uppercase">Our approach</p>
                <h2 className="mt-4 max-w-lg text-3xl leading-tight font-semibold tracking-[-0.045em] text-white sm:text-5xl">Trust the reader with the whole picture.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">Good research communication is more than a clever summary. It should make the evidence easier to follow—and the uncertainty easier to see.</p>
                <a href="#reports" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white">See it in practice <ArrowRight aria-hidden="true" className="size-4" /></a>
              </div>
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {principles.map((principle) => (
                  <article key={principle.number} className="border-t border-white/15 pt-4">
                    <p className="text-xs font-semibold tracking-[0.14em] text-violet-200">{principle.number}</p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="bio" className="mt-12 border-y border-white/10 bg-[#090d1b]/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-violet-200 uppercase">Our Team</p>
                <h2 className="mt-4 max-w-lg text-3xl leading-tight font-semibold tracking-[-0.045em] text-white sm:text-5xl">Meet the researcher.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">Independent research, shared openly. Get to know the person behind the reports.</p>
              </div>
              <article className="grid items-center gap-6 rounded-2xl border border-white/10 bg-white/3 p-5 sm:grid-cols-[minmax(150px,0.8fr)_1.2fr] sm:p-6">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-violet-200/15 bg-[radial-gradient(circle_at_50%_35%,rgba(168,85,247,0.24),transparent_55%),linear-gradient(145deg,#111a31,#080c18)]">
                  {researcherProfile.image ? (
                    <Image
                      src={researcherProfile.image}
                      alt={`${researcherProfile.name} portrait`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 240px"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-xs text-slate-400">
                    <Image
                      src={ownerImage}
                      alt="Alby Koshy Binu"
                        width={160}
                        height={160}
                      className="size-50 border-cyan-200/30 object-cover"
                    />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-200 uppercase">Main Person</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Alby Koshy Binu</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">Alby is a researcher passionate about exploring the intersection of technology and society.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-cyan-200 uppercase">Curiosity belongs to everyone</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Follow a question. Find a new perspective.</h2>
          </div>
          <a href="#reports" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/40 hover:bg-white/10">Browse the open library <ArrowRight aria-hidden="true" className="size-4 text-cyan-200" /></a>
        </section>

        <footer className="border-t border-white/10 bg-[#050816]/75 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <a href="#home" className="font-bold tracking-[0.12em] text-slate-200">COVENANT <span className="font-normal tracking-normal text-slate-500">Research commons</span></a>
            <p>Independent inquiry. Open knowledge. Free for everyone.</p>
            <a href="#method" className="underline decoration-white/20 underline-offset-4 transition hover:text-white">About our approach</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpenText } from "lucide-react";
import { reports } from "@/lib/reports";

export default function ReportsPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(124,58,237,0.2),transparent_42%),radial-gradient(ellipse_at_90%_80%,rgba(8,145,178,0.12),transparent_38%)]"
      />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="font-bold tracking-[0.16em] text-white">
            COVENANT-/Labs
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
          >
            <ArrowLeft aria-hidden="true" className="size-4 text-cyan-200" />
            Home
          </Link>
        </header>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/6 px-3.5 py-2 text-xs font-semibold tracking-[0.14em] text-cyan-100 uppercase">
              <BookOpenText aria-hidden="true" className="size-4" />
              The open library
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tighter text-white sm:text-6xl">
              Research reports
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              Clear, sourced guides to influential ideas in science, mathematics,
              and computing. Every report is free to read.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reports.map((report) => {
              const Icon = report.icon;
              return (
                <article
                  key={report.number}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0b1021]/80 p-5 backdrop-blur-md sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-300/8 text-violet-200">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="text-xs font-medium tracking-[0.12em] text-slate-500">
                      {report.number}
                    </span>
                  </div>
                  <p className="mt-6 text-[10px] font-bold tracking-[0.13em] text-cyan-200/80">
                    {report.category}
                  </p>
                  <h2 className="mt-2 text-xl leading-snug font-semibold tracking-tight text-white">
                    {report.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {report.description}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-6 text-slate-300">
                    {report.summary}
                  </p>
                  <details className="group/code mt-5 border-t border-white/10 pt-3">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-semibold text-cyan-100 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                      View code example
                      <span className="text-[10px] font-medium tracking-[0.12em] text-slate-500 uppercase">
                        {report.codeLanguage}
                      </span>
                    </summary>
                    <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-[#060a15] p-3 text-xs leading-5 text-slate-200"><code>{report.codeSnippet}</code></pre>
                  </details>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[10px] font-medium tracking-[0.12em] text-slate-500">
                      {report.readTime} · OPEN ACCESS
                    </p>
                    <a
                      href={report.source}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-start gap-1 text-xs leading-5 text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 transition hover:text-white"
                    >
                      {report.citation}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 shrink-0"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

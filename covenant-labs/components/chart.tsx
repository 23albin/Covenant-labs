"use client";

import { ArrowRight, Orbit } from "lucide-react";

const stages = ["ASK", "READ", "TEST", "MODEL", "REFINE", "SHARE"];
const curve = [155, 116, 132, 82, 103, 54];

const width = 660;
const height = 220;
const padding = 28;

const buildPath = (values: number[]) => {
  const stepX = (width - padding * 2) / (values.length - 1);

  return values
    .map((value, index) => {
      const x = padding + index * stepX;
      return `${index === 0 ? "M" : "L"}${x},${value}`;
    })
    .join(" ");
};

export function ChartAreaLinear() {
  const linePath = buildPath(curve);
  const areaPath = `${linePath} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`;

  return (
    <div className="w-full rounded-[22px] border border-white/10 bg-[#080d1b] p-4 text-white shadow-[0_0_60px_rgba(17,24,39,0.65)] sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">A way of working</p>
          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">From question to insight</h3>
        </div>
        <div className="rounded-full border border-violet-300/25 bg-violet-300/8 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-100">
          Research cycle
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1325] p-2 sm:p-3">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-44 w-full sm:h-52" role="img" aria-label="Illustration of the research process: ask, read, test, model, refine, and share">
          <defs>
            <linearGradient id="researchAreaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.36" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.015" />
            </linearGradient>
            <linearGradient id="researchLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
          </defs>

          {[0, 1, 2, 3].map((row) => {
            const y = padding + ((height - padding * 2) / 3) * row;
            return <line key={row} x1={padding} x2={width - padding} y1={y} y2={y} stroke="rgba(148,163,184,0.14)" strokeDasharray="3 7" />;
          })}

          <path d={areaPath} fill="url(#researchAreaFill)" />
          <path d={linePath} fill="none" stroke="url(#researchLine)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {curve.map((value, index) => {
            const x = padding + (index * (width - padding * 2)) / (curve.length - 1);
            return (
              <g key={stages[index]}>
                <circle cx={x} cy={value} r="8" fill="#0c1325" stroke={index < 3 ? "#c4b5fd" : "#67e8f9"} strokeWidth="2.5" />
                <circle cx={x} cy={value} r="2.5" fill={index < 3 ? "#c4b5fd" : "#67e8f9"} />
                <text x={x} y={height - 5} textAnchor="middle" fontSize="10" fill="rgba(203,213,225,0.72)" letterSpacing="1.2">
                  {stages[index]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 sm:px-4">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200"><Orbit aria-hidden="true" className="size-4" /></span>
          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-slate-400">The aim</p>
            <p className="mt-1 text-sm font-semibold text-white">Make knowledge navigable</p>
          </div>
        </div>
        <span className="flex items-center gap-1 text-xs font-medium text-cyan-100">Explore <ArrowRight aria-hidden="true" className="size-3.5" /></span>
      </div>
    </div>
  );
}
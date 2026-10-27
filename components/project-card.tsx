"use client";

import Link from "next/link";
import {
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  ZoomIn,
} from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import { getProjectImageUrl } from "@/components/project-utils";

export { getProjectImageUrl };

type Project = (typeof projects)[number];

export function ProjectVisual({
  imageUrl,
  title,
  category,
  accent = "teal",
  onZoom,
}: {
  imageUrl?: string;
  title: string;
  category?: string;
  accent?: string;
  onZoom?: (imgUrl: string) => void;
}) {
  const safeImageUrl = imageUrl ? encodeURI(imageUrl) : null;

  return (
    <div
      onClick={() => {
        if (safeImageUrl && onZoom) {
          onZoom(safeImageUrl);
        }
      }}
      className="work-img-wrap relative aspect-[16/10] overflow-hidden rounded-t-2xl border-b border-white/10 bg-slate-950 group/img cursor-zoom-in"
    >
      {safeImageUrl ? (
        <img
          src={safeImageUrl}
          alt={`${title} dashboard preview`}
          className="h-full w-full object-cover object-top transition duration-500 ease-out group-hover/img:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#121826] p-6">
          <Layers className="h-16 w-16 text-teal-400/40 animate-pulse" />
        </div>
      )}

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16] via-[#0a0e16]/20 to-transparent opacity-70 group-hover/img:opacity-40 transition-opacity" />

      {/* Zoom hint badge */}
      <div className="zoom-hint flex items-center gap-1.5">
        <ZoomIn className="h-3.5 w-3.5 text-teal-300" />
        <span>تكبير 🔍</span>
      </div>

      {/* Top category badge */}
      <div className="absolute top-4 right-4 z-10">
        {category && (
          <span className="rounded-full border border-teal-400/30 bg-slate-950/80 px-3 py-1 text-xs font-bold text-teal-300 backdrop-blur-md shadow-md">
            {category}
          </span>
        )}
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
  onZoom,
}: {
  project: Project;
  index?: number;
  onZoom?: (imgUrl: string) => void;
}) {
  const imageUrl = getProjectImageUrl(project);

  const accentBorderClass = {
    teal: "border-t-[3px] border-t-teal-400 hover:border-teal-400/60",
    violet: "border-t-[3px] border-t-purple-400 hover:border-purple-400/60",
    amber: "border-t-[3px] border-t-amber-400 hover:border-amber-400/60",
    coral: "border-t-[3px] border-t-rose-400 hover:border-rose-400/60",
    pink: "border-t-[3px] border-t-pink-400 hover:border-pink-400/60",
  }[project.accent] || "border-t-[3px] border-t-teal-400";

  return (
    <article
      className={`ayman-work-card group flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-white/10 bg-[#121826]/85 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 shadow-xl text-right ${accentBorderClass}`}
      data-accent={project.accent}
    >
      <div>
        <ProjectVisual
          imageUrl={imageUrl}
          title={project.title}
          category={project.category}
          accent={project.accent}
          onZoom={onZoom}
        />

        <div className="p-5 sm:p-6 space-y-4">
          {/* Header Tag + Title */}
          <div>
            <div className="work-kicker flex items-center justify-between mb-2">
              <span className={`tag tag-${project.accent}`}>
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                مشروع #{String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <Link href={`/projects/${project.slug}`}>
              <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                {project.title}
              </h2>
            </Link>
          </div>

          {/* KPI Row (From Ayman's portfolio) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="kpi-row rounded-xl overflow-hidden border border-white/10">
              {project.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="kpi">
                  <span className="kpi-val text-teal-300">{metric.value}</span>
                  <span className="kpi-lbl">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Summary */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Technologies Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.7rem] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-bold text-teal-300 hover:text-white transition-colors"
        >
          <span>تفاصيل المشروع ←</span>
        </Link>

        {project.gallery && project.gallery.length > 0 && (
          <span className="text-slate-400">
            {project.gallery.length} صفحات تحليلية
          </span>
        )}
      </div>
    </article>
  );
}

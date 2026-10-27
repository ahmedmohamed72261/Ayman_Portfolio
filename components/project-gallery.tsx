"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles, X } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/components/utils";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "الكل" || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q)) ||
        project.metrics.some((m) =>
          m.label.toLowerCase().includes(q) || m.value.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 text-right">
      {/* Lightbox Modal (Full-Screen Image Zoom from Ayman's portfolio) */}
      {lightboxImage && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="lightbox-close"
              aria-label="إغلاق التكبير"
            >
              ✕
            </button>
            <img
              src={lightboxImage}
              alt="عرض مكبّر للوحة المعلومات"
            />
          </div>
        </div>
      )}

      {/* Search Bar & Filters Header */}
      <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl shadow-xl">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في المشاريع (مثل: الطقس، المبيعات، المستشفى، ROAS، Power BI)..."
            className="w-full rounded-xl border border-white/10 bg-[#0a0e16]/80 pr-10 pl-9 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:border-teal-400/60 focus:outline-none focus:ring-1 focus:ring-teal-400/60 transition text-right"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              aria-label="مسح البحث"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300 px-2 whitespace-nowrap">
          <Sparkles className="h-3.5 w-3.5 text-teal-300" />
          <span>
            عرض <strong className="text-teal-300">{filteredProjects.length}</strong> من {projects.length} مشاريع
          </span>
        </div>
      </div>

      {/* Category Filter Pills (From Ayman's portfolio) */}
      <div
        className="mb-10 flex flex-wrap gap-2 sm:gap-3"
        role="tablist"
        aria-label="تصفية المشاريع حسب المجال"
      >
        {projectCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 shadow-md cursor-pointer",
                isActive
                  ? "border-teal-400 bg-teal-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(45,212,191,0.4)] scale-105"
                  : "border-white/10 bg-[#121826]/80 text-slate-300 hover:border-teal-400/40 hover:text-white"
              )}
              aria-pressed={isActive}
            >
              <span>{category}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onZoom={(url) => setLightboxImage(url)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 p-8 rounded-3xl border border-white/10 bg-[#121826]/60 backdrop-blur-xl">
          <p className="text-lg font-bold text-white">
            لم يتم العثور على مشاريع تطابق &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("الكل");
              setSearchQuery("");
            }}
            className="mt-4 rounded-full border border-teal-400/40 bg-teal-400/10 px-5 py-2 text-xs font-mono font-semibold text-teal-300 hover:bg-teal-400 hover:text-slate-950 transition cursor-pointer"
          >
            إعادة تعيين الفلاتر والبحث
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import {
  BarChart3,
  BrainCircuit,
  Database,
  Layers,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { PageVideoShell } from "@/components/page-video-shell";
import { ProjectShowcase } from "@/components/project-showcase";
import { skills } from "@/data/portfolio";
import { cn } from "@/components/utils";

function GradientTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-l from-teal-300 via-slate-100 to-purple-300 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

function Kicker({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-teal-300 backdrop-blur-md">
      <Icon className="h-3.5 w-3.5 text-teal-300" />
      <span>{label}</span>
    </div>
  );
}

export function SkillsPageClient() {
  const [activeTab, setActiveTab] = useState<string>("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const mainCategoryGroups = [
    "الكل",
    "ذكاء الأعمال والتحليل",
    "البرمجة وقواعد البيانات",
    "جودة البيانات والعمليات",
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((item) => {
      const matchesTab = activeTab === "الكل" || item.group === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <PageVideoShell>
      <div className="relative w-full pt-28 pb-24 overflow-hidden text-right">
        {/* Ambient Glow Orbs */}
        <div
          className="pointer-events-none absolute top-20 right-1/4 w-[700px] h-[700px] rounded-full bg-teal-500/10 blur-[150px] -z-10"
          aria-hidden="true"
        />

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — HERO BANNER & DOMAIN OVERVIEW
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-4">
            <Kicker icon={Layers} label="03 / المهارات والمنظومة التقنية" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl drop-shadow-2xl">
            <GradientTitle>المهارات التقنية وأدوات التحليل</GradientTitle>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            منظومة متكاملة تجمع بين ذكاء الأعمال Power BI وExcel المتقدم وقواعد البيانات SQL والبرمجة بلغة Python والتحقق من جودة البيانات.
          </p>

          {/* Core Skill Category Cards */}
          <div className="mt-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            <div className="p-6 rounded-3xl border border-teal-400/30 bg-[#121826]/85 backdrop-blur-xl shadow-xl hover:border-teal-400/60 transition group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-teal-400/10 text-teal-300 border border-teal-400/30 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-bold text-teal-300">01</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ذكاء الأعمال والتحليل</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                تصميم لوحات Power BI التفاعلية، بناء نماذج البيانات، معادلات DAX، وتحويل ومعالجة الجداول عبر Power Query.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-purple-400/30 bg-[#121826]/85 backdrop-blur-xl shadow-xl hover:border-purple-400/60 transition group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-400/10 text-purple-300 border border-purple-400/30 group-hover:scale-110 transition-transform">
                  <Database className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-bold text-purple-300">02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">البرمجة وقواعد البيانات</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                استعلام وتجميع البيانات باستخدام SQL، التحليل الاستكشافي والتنظيف بلغة Python، واستخراج الرؤى الرياضية والإحصائية.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-amber-400/30 bg-[#121826]/85 backdrop-blur-xl shadow-xl hover:border-amber-400/60 transition group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/30 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-bold text-amber-300">03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">جودة البيانات والعمليات</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                مراجعة السجلات والتحقق من الدقة وتصحيح الأخطاء، دعم العمليات الإدارية، وحل المشكلات التقنية وتوثيق التقارير.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — SEARCH & CATEGORY FILTER TABS
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl shadow-xl">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن مهارة أو أداة (مثل Power BI, Excel, SQL, DAX)..."
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

            {/* Results Count */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 px-2 whitespace-nowrap">
              <Sparkles className="h-3.5 w-3.5 text-teal-300" />
              <span>
                عرض <strong className="text-teal-300">{filteredSkills.length}</strong> من {skills.length} مهارة
              </span>
            </div>
          </div>

          {/* Group Category Tabs */}
          <div className="mb-10 flex flex-wrap gap-2 sm:gap-3" role="tablist">
            {mainCategoryGroups.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 shadow-md cursor-pointer",
                    isActive
                      ? "border-teal-400 bg-teal-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(45,212,191,0.4)] scale-105"
                      : "border-white/10 bg-[#121826]/80 text-slate-300 hover:border-teal-400/40 hover:text-white"
                  )}
                  aria-pressed={isActive}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Skill Cards Grid */}
          {filteredSkills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill) => {
                const Icon = skill.icon;

                let barGradient = "from-teal-400 to-cyan-500";
                let badgeClass = "border-teal-400/30 bg-teal-400/10 text-teal-300";

                if (skill.level >= 90) {
                  barGradient = "from-teal-300 via-emerald-400 to-emerald-300";
                  badgeClass = "border-emerald-400/30 bg-emerald-400/10 text-emerald-300";
                } else if (skill.level >= 85) {
                  barGradient = "from-purple-400 via-teal-400 to-blue-400";
                  badgeClass = "border-purple-400/30 bg-purple-400/10 text-purple-300";
                }

                return (
                  <div
                    key={skill.name}
                    className="group p-6 rounded-2xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl shadow-xl hover:border-teal-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Icon & Category */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="p-3 rounded-xl border border-teal-400/30 bg-teal-400/10 text-teal-300 group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span
                          className={`rounded-full border px-3 py-1 font-mono text-[0.68rem] font-bold ${badgeClass}`}
                        >
                          {skill.group}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                        {skill.name}
                      </h2>
                    </div>

                    {/* Progress Bar & Percentage */}
                    <div className="mt-6 space-y-2 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs font-mono font-bold">
                        <span className="text-slate-400">مستوى الإتقان</span>
                        <span className="text-teal-300">{skill.level}%</span>
                      </div>

                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${barGradient} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 p-8 rounded-3xl border border-white/10 bg-[#121826]/60 backdrop-blur-xl">
              <p className="text-lg font-bold text-white">
                لم يتم العثور على مهارات تطابق &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("الكل");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full border border-teal-400/40 bg-teal-400/10 px-5 py-2 text-xs font-mono font-semibold text-teal-300 hover:bg-teal-400 hover:text-slate-950 transition cursor-pointer"
              >
                إعادة ضبط البحث
              </button>
            </div>
          )}
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — PROJECT SHOWCASE CTA
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <ProjectShowcase
            title="مهارات مثبتة من خلال مشاريع حقيقية"
            description="جميع المهارات أعلاه مطبقة عملياً في مشاريع ولوحات Power BI تفاعلية تشمل دراسة الطقس، المبيعات، الموارد البشرية، والعمليات الصحية."
          />
        </section>
      </div>
    </PageVideoShell>
  );
}

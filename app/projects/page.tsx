import {
  BarChart3,
  CloudSun,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";
import { PageVideoShell } from "@/components/page-video-shell";
import { ProjectGallery } from "@/components/project-gallery";
import { profile, projects } from "@/data/portfolio";

export const metadata = {
  title: "المشاريع ونماذج الأعمال | أيمن يحيى الشهري — لوحات Power BI وذكاء الأعمال",
  description:
    "استعرض مشروعات ولوحات معلومات Power BI التي طورها أيمن يحيى الشهري في الطقس والمناخ، المبيعات والأرباح، التجزئة، الموارد البشرية، والقطاع الصحي.",
};

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

export default function ProjectsPage() {
  return (
    <PageVideoShell className="projects-index-shell">
      {/* Top Header Banner */}
      <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-12 text-center flex flex-col items-center text-right">
        <div className="mb-4">
          <Kicker icon={Rocket} label="05 / المشاريع ونماذج الأعمال · Power BI Dashboards" />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl drop-shadow-2xl">
          <GradientTitle>المشاريع ونماذج الأعمال</GradientTitle>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          تصفّح مشروعات Power BI بحسب المجال، أو انتقل مباشرة إلى أي لوحة معلومات. اضغط على أي صورة لمشاهدتها بحجم أكبر مع الحفاظ على الدقة الأصلية.
        </p>

        {/* Highlight KPI Stat Cards */}
        <div className="mt-10 w-full max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-5 rounded-2xl border border-teal-400/30 bg-[#121826]/80 backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-teal-400/60 transition">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.68rem] uppercase font-bold tracking-wider text-teal-300">
                المشاريع المعروضة
              </span>
              <BarChart3 className="h-4 w-4 text-teal-300" />
            </div>
            <div className="mt-3">
              <span className="text-3xl font-black text-white font-mono">{projects.length}</span>
              <span className="block text-xs text-slate-400 mt-0.5">لوحات Power BI تفاعلية</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-purple-400/30 bg-[#121826]/80 backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-purple-400/60 transition">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.68rem] uppercase font-bold tracking-wider text-purple-300">
                لوحة الطقس
              </span>
              <CloudSun className="h-4 w-4 text-purple-300" />
            </div>
            <div className="mt-3">
              <span className="text-3xl font-black text-white font-mono">4</span>
              <span className="block text-xs text-slate-400 mt-0.5">صفحات تحليلية متصلة</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-amber-400/30 bg-[#121826]/80 backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-amber-400/60 transition">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.68rem] uppercase font-bold tracking-wider text-amber-300">
                المدن المغطاة
              </span>
              <Layers className="h-4 w-4 text-amber-300" />
            </div>
            <div className="mt-3">
              <span className="text-3xl font-black text-white font-mono">12</span>
              <span className="block text-xs text-slate-400 mt-0.5">مدينة سعودية (2021–2026)</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-rose-400/30 bg-[#121826]/80 backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-rose-400/60 transition">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.68rem] uppercase font-bold tracking-wider text-rose-300">
                أدوات النمذجة
              </span>
              <Sparkles className="h-4 w-4 text-rose-300" />
            </div>
            <div className="mt-3">
              <span className="text-2xl font-black text-white font-mono">DAX &amp; PQ</span>
              <span className="block text-xs text-slate-400 mt-0.5">Data Modeling &amp; ETL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Gallery Component */}
      <ProjectGallery />
    </PageVideoShell>
  );
}

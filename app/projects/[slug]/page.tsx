import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  FileText,
  Layers,
  Sparkles,
  TrendingUp,
  Workflow,
  ZoomIn,
} from "lucide-react";
import { PageVideoShell } from "@/components/page-video-shell";
import { ProjectVisual } from "@/components/project-card";
import { getProjectImageUrl } from "@/components/project-utils";
import { SectionReveal } from "@/components/section-reveal";
import { FlowDiagram } from "@/components/data-flow";
import { projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? {
        title: `${project.title} | أيمن يحيى الشهري`,
        description: project.summary,
      }
    : {};
}

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

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const imageUrl = getProjectImageUrl(project);

  const details = [
    ["مجموعة البيانات ونموذج العمل", project.dataset],
    ["معالجة وتنظيف البيانات (Power Query)", project.preprocessing],
    ["بنية النموذج ومعادلات DAX", project.architecture],
    ["التحقق ومطابقة المؤشرات", project.evaluation],
    ["القيمة المضافة والأثر على الأعمال", project.impact],
    ["التحديات والدروس المستفادة", project.challenges],
  ];

  return (
    <PageVideoShell className="projects-detail-shell">
      <div className="relative w-full pt-28 pb-24 text-right">
        {/* Top Back Link + Hero Header */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-teal-300 hover:text-white transition mb-6"
          >
            <ArrowRight className="h-4 w-4" />
            <span>العودة إلى كافة المشاريع</span>
          </Link>

          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Project Copy */}
            <SectionReveal className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-teal-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>لوحة Power BI · {project.category}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                <GradientTitle>{project.title}</GradientTitle>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {project.summary}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-teal-400/20 bg-[#121826] px-3 py-1 font-mono text-xs font-semibold text-teal-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SectionReveal>

            {/* Right Media Image Preview */}
            <SectionReveal className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-teal-400/30 shadow-2xl bg-[#121826]">
                <ProjectVisual
                  imageUrl={imageUrl}
                  title={project.title}
                  category={project.category}
                  accent={project.accent}
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            KEY VERIFIED METRICS STRIP
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((metric) => (
              <SectionReveal
                key={metric.label}
                className="p-5 rounded-2xl border border-teal-400/30 bg-[#121826]/85 backdrop-blur-xl shadow-xl flex flex-col justify-between text-center"
              >
                <div className="flex items-center justify-between text-teal-300">
                  <span className="text-[0.7rem] font-mono font-bold uppercase tracking-wider">
                    مؤشر معتمد
                  </span>
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="mt-4">
                  <p className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight text-teal-300">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 font-mono">
                    {metric.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            PAGES GALLERY (IF MULTI-PAGE PROJECT LIKE SAUDI WEATHER)
            ═══════════════════════════════════════════════════════════════════ */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
            <SectionReveal className="p-8 sm:p-10 rounded-3xl border border-teal-400/30 bg-[#121826]/85 backdrop-blur-xl shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-300">
                  الصفحات التحليلية للوحة المعلومات
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  استعراض صفحات المشروع التفصيلية ({project.gallery.length} صفحات)
                </h2>
                <p className="text-sm text-slate-300 mt-2">
                  تتضمن هذه اللوحة عدة صفحات مترابطة؛ تصفح الصور أدناه بدقة عالية:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((pageImg, idx) => (
                  <div
                    key={pageImg}
                    className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-lg group hover:border-teal-400/40 transition-all"
                  >
                    <div className="p-3 border-b border-white/10 flex items-center justify-between text-xs font-mono text-teal-300">
                      <span>الصفحة التحليلية 0{idx + 1}</span>
                      <ZoomIn className="h-4 w-4" />
                    </div>
                    <img
                      src={pageImg}
                      alt={`الصفحة التحليلية 0${idx + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </SectionReveal>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════════════
            PROBLEM, APPROACH & RESULT GRID
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <SectionReveal className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#121826]/85 backdrop-blur-xl shadow-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-300">
              الملخص التنفيذي
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-8">
              التحدي، الحل التحليلي، والمخرجات
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                  01 / التحدي التجاري
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3">
                  المشكلة وصعوبة المتابعة
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  02 / الحل التحليلي
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3">
                  بناء النموذج والـ DAX
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.approach}
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-teal-500/20 bg-teal-500/5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                  03 / المخرجات والأثر
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3">
                  النتائج والقرارات المدعومة
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            TECHNICAL DETAILS
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.map(([title, copy]) => (
              <SectionReveal
                key={title}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#121826]/85 backdrop-blur-xl shadow-xl space-y-3"
              >
                <div className="flex items-center gap-2 text-teal-300">
                  <CheckCircle2 className="h-4 w-4" />
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{copy}</p>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-8">
            <FlowDiagram title={`${project.title} — تدفق دورة حياة المشروع`} />
          </SectionReveal>
        </section>
      </div>
    </PageVideoShell>
  );
}

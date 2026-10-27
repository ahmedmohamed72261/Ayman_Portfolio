import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Copy,
  GitBranch,
  Globe,
  HeartHandshake,
  Mail,
  MapPin,
  MessageSquare,
  Network,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageVideoShell } from "@/components/page-video-shell";
import { SectionReveal } from "@/components/section-reveal";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: "التواصل والتوظيف | أيمن يحيى الشهري — محلل بيانات ونظم معلومات إدارية",
  description:
    "تواصل مع أيمن يحيى الشهري لفرص العمل في تحليل البيانات، تطوير لوحات Power BI، أو مشاريع ذكاء الأعمال ونمذجة البيانات.",
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
      className={`bg-gradient-to-b from-slate-50 via-slate-200 to-cyan-300 bg-clip-text text-transparent ${className}`}
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
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
      <Icon className="h-3.5 w-3.5 text-cyan-300" />
      <span>{label}</span>
    </div>
  );
}

export default function ContactPage() {
  const contactLinks = [
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: "text-cyan-400",
      glow: "hover:border-cyan-400/50",
    },
    {
      icon: Phone,
      label: "الهاتف / واتساب",
      value: profile.phone,
      href: `tel:${profile.phone.replaceAll(" ", "")}`,
      color: "text-emerald-400",
      glow: "hover:border-emerald-400/50",
    },
    {
      icon: Network,
      label: "حساب LinkedIn",
      value: "linkedin.com/in/ayman-y-alshehri",
      href: profile.linkedin,
      color: "text-purple-400",
      glow: "hover:border-purple-400/50",
    },
    {
      icon: GitBranch,
      label: "مستودعات GitHub",
      value: "github.com/ayman-alshehri",
      href: profile.github,
      color: "text-amber-400",
      glow: "hover:border-amber-400/50",
    },
    {
      icon: MapPin,
      label: "الموقع الجغرافي والجاهزية",
      value: `${profile.location} (مستعد للعمل عن بُعد وحضورياً)`,
      href: "#",
      color: "text-cyan-400",
      glow: "hover:border-cyan-400/50",
    },
  ];

  return (
    <PageVideoShell>
      <div className="relative w-full pt-28 pb-24 overflow-hidden">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[150px] -z-10"
          aria-hidden="true"
        />

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — HERO HEADER & AVAILABILITY STATS
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pb-12">
          <div className="mb-4">
            <Kicker icon={HeartHandshake} label="06 / التواصل والتعاون المهني" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl drop-shadow-2xl">
            <GradientTitle>تواصل مع أيمن يحيى الشهري</GradientTitle>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            مهتم بتعيين محلل بيانات أو أخصائي ذكاء أعمال؟ هل لديك مشروع لوحة مؤشرات أو استفسار تحليلي؟ يسعدني التواصل معك ومناقشة تفاصيل العمل.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-right">
            <div className="p-4 rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg hover:border-cyan-400/60 transition">
              <Zap className="h-5 w-5 text-cyan-400 mb-1" />
              <span className="block text-sm font-extrabold text-white">متاح فوراً</span>
              <span className="text-xs font-mono text-slate-400">جاهز للتوظيف</span>
            </div>
            <div className="p-4 rounded-2xl border border-purple-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg hover:border-purple-400/60 transition">
              <Clock className="h-5 w-5 text-purple-400 mb-1" />
              <span className="block text-sm font-extrabold text-white">&lt; 24 ساعة</span>
              <span className="text-xs font-mono text-slate-400">سرعة الرد والمتابعة</span>
            </div>
            <div className="p-4 rounded-2xl border border-emerald-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg hover:border-emerald-400/60 transition">
              <Globe className="h-5 w-5 text-emerald-400 mb-1" />
              <span className="block text-sm font-extrabold text-white">عن بُعد وحضوري</span>
              <span className="text-xs font-mono text-slate-400">المدينة المنورة والمملكة</span>
            </div>
            <div className="p-4 rounded-2xl border border-amber-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg hover:border-amber-400/60 transition">
              <Mail className="h-5 w-5 text-amber-400 mb-1" />
              <span className="block text-sm font-extrabold text-white">البريد المباشر</span>
              <span className="text-xs font-mono text-slate-400">ayman.y.alshehri</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — CONTACT CHANNELS & FORM GRID
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Contact Details Panel */}
          <SectionReveal className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-2xl shadow-2xl space-y-6">
            <div className="flex items-center gap-4 p-3 rounded-2xl border border-white/10 bg-slate-950/70">
              <div className="relative h-16 w-16 shrink-0 rounded-xl border border-cyan-400/40 overflow-hidden shadow-lg">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{profile.name}</h3>
                <p className="text-xs font-mono text-cyan-300">{profile.title}</p>
                <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-mono text-emerald-300 mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>متاح للفرص الوظيفية الجديدة</span>
                </span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                Direct Contact Channels
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Reach Out Directly
              </h2>
            </div>

            <div className="space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    className={`block p-4 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-md transition-all duration-300 ${item.glow} group`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl border border-white/10 bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <p className="text-[0.68rem] font-mono uppercase tracking-wider text-slate-400">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                <span>Available for Immediate Data Analyst &amp; BI Roles</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                <span>Open for Full-Time, Contract, or Freelance Work</span>
              </div>
            </div>
          </SectionReveal>

          {/* Right Interactive Form Panel */}
          <SectionReveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </SectionReveal>
        </section>
      </div>
    </PageVideoShell>
  );
}

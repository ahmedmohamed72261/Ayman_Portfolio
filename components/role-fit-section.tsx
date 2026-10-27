"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, LineChart, MessageSquareText } from "lucide-react";
import { InteractiveTilt } from "@/components/interactive-tilt";

const roles = [
  {
    title: "Data Analyst / محلل بيانات",
    icon: BarChart3,
    focus: "تنظيف وتجهيز البيانات، التحليل الاستكشافي، بناء مقاييس DAX وحساب مؤشرات الأداء الرئيسية وسرد القصص بالبيانات.",
    proof: "Power BI, Power Query, DAX, SQL, Microsoft Excel, Data Modeling",
  },
  {
    title: "BI Specialist / أخصائي ذكاء أعمال",
    icon: LineChart,
    focus: "تصميم وتطوير لوحات التحكم التفاعلية، نمذجة البيانات النجمية (Star Schema)، ولوحات القيادة التنفيذية.",
    proof: "لوحة طقس السعودية (4 صفحات)، لوحة مبيعات التجزئة، لوحة الأداء الرقمي ROAS، ولوحة مستشفى الملك خالد",
  },
  {
    title: "MIS Analyst / محلل نظم معلومات إدارية",
    icon: MessageSquareText,
    focus: "تحليل العمليات التشغيلية، رقمنة التقارير، وإدارة تدفق البيانات بين الإدارات وأصحاب المصلحة.",
    proof: "بكالوريوس نظم المعلومات الإدارية (جامعة طيبة) + خبرة بلدية وادي هشبل وجمعية رواد الأعمال بالمدينة",
  },
  {
    title: "Business & Reporting Analyst / محلل تقارير أعمال",
    icon: Database,
    focus: "ترجمة متطلبات الإدارة إلى مؤشرات أداء تفاعلية تدعم اتخاذ القرار وتتبع الإيرادات والتكاليف والمخزون.",
    proof: "لوحة الأرباح والمبيعات، لوحة الموارد البشرية، ودورات معتمدة (Tech Mind، وسام المعرفة، هاش بلس)",
  },
];

export function RoleFitSection() {
  return (
    <section className="container-shell py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="section-kicker">المسار المهني والجاهزية</span>
          <h2 className="heading-lg">الأدوار والمسارات المهنية المستهدفة لأيمن يحيى الشهري</h2>
          <p className="muted-copy mt-5">
            ملف مهني متكامل صُمم لمدراء التوظيف والشركات الباحثة عن محلل بيانات أو أخصائي ذكاء أعمال ونظم معلومات إدارية يتميز بالقدرة على تحويل البيانات الخام إلى لوحات تحكم تفاعلية وقرارات استراتيجية مدروسة.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              "تطوير لوحات Power BI ومقاييس DAX المتقدمة",
              "تجهيز وتحويل البيانات عبر Power Query و SQL",
              "تحليل نظم الأعمال وربط أهداف المؤسسة بمؤشرات الأداء",
              "إعداد التقارير التنفيذية والاتصال الفعال مع أصحاب المصلحة",
            ].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.045] p-4"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                {index % 2 === 0 ? <LineChart className="h-5 w-5 text-cyan-100" /> : <MessageSquareText className="h-5 w-5 text-mint" />}
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <InteractiveTilt key={role.title} className="media-frame cinema-card hover-lift rounded-3xl">
                <motion.article
                  className="relative min-h-64 p-6"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[.16em] text-slate-500">role fit</span>
                  </div>
                  <h3 className="relative z-10 mt-6 text-2xl font-semibold text-white">{role.title}</h3>
                  <p className="relative z-10 mt-3 text-sm leading-6 text-slate-300">{role.focus}</p>
                  <p className="relative z-10 mt-5 rounded-2xl border border-white/10 bg-black/20 p-3 text-xs leading-6 text-cyan-100">{role.proof}</p>
                </motion.article>
              </InteractiveTilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}

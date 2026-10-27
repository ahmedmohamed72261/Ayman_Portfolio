import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";
import { profile } from "@/data/portfolio";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-body",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ayman-alshehri.netlify.app"),
  title: {
    default: "أيمن يحيى الشهري | ملف الأعمال التقني وتحليل البيانات",
    template: "%s | أيمن يحيى الشهري",
  },
  description:
    "ملف أعمال أيمن يحيى الشهري في نظم المعلومات الإدارية (MIS) وتحليل البيانات وذكاء الأعمال ولوحات Power BI ومشاريع Excel وSQL.",
  keywords: [
    "أيمن يحيى الشهري",
    "Ayman Yahya Alshehri",
    "ملف أعمال تحليل بيانات",
    "Power BI",
    "ذكاء الأعمال",
    "لوحات تحكم",
    "Excel Data Analysis",
    "نظم معلومات إدارية MIS",
    "جامعة طيبة",
    "المملكة العربية السعودية",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  publisher: profile.name,
  icons: {
    icon: profile.avatar,
    shortcut: profile.avatar,
    apple: profile.avatar,
  },
  openGraph: {
    title: "أيمن يحيى الشهري | ملف الأعمال التقني وذكاء الأعمال",
    description:
      "أحوّل البيانات إلى قرارات أوضح. تصفح لوحات Power BI ومشاريع تحليل البيانات التفاعلية في الطقس، التجزئة، الموارد البشرية، والمبيعات.",
    url: "https://portfolio-ayman-alshehri.netlify.app",
    siteName: "أيمن يحيى الشهري — ملف الأعمال",
    images: [
      {
        url: profile.avatar,
        width: 1200,
        height: 1200,
        alt: "أيمن يحيى الشهري - محلل نظم معلومات وبيانات",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "أيمن يحيى الشهري | ملف الأعمال التقني",
    description: "ملف أعمال تقني تفاعلي في نظم المعلومات الإدارية وتحليل البيانات ولوحات Power BI.",
    images: [profile.avatar],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexArabic.variable} ${spaceMono.variable} h-full antialiased`}
      data-theme="dark"
    >
      <head>
        <link rel="icon" href={profile.avatar} sizes="any" />
        <link rel="apple-touch-icon" href={profile.avatar} />
      </head>
      <body className="min-h-full font-sans bg-[#0a0e16] text-[#edf2f7] relative">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal-400 focus:px-4 focus:py-2 focus:text-slate-950 font-bold"
        >
          تخطي إلى المحتوى
        </a>

        {/* Ambient Twinkling Cosmic Stars Background (Universal across entire portfolio) */}
        <div className="cosmos" aria-hidden="true">
          <div className="stars" />
          <div className="stars layer2" />
        </div>

        <CursorGlow />
        <Navigation />
        <main id="main" className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

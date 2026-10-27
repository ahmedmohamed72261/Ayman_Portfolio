# 📊 Data Analytics & Business Intelligence Portfolio — أيمن يحيى الشهري

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)
![DAX](https://img.shields.io/badge/DAX-Advanced-blue?style=for-the-badge)
![Power Query](https://img.shields.io/badge/Power_Query-ETL-emerald?style=for-the-badge)
![Author](https://img.shields.io/badge/Author-Ayman_Yahya_Alshehri-cyan?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

---

## 📌 Executive Overview

Welcome to the official repository of **Ayman Yahya Alshehri's (أيمن يحيى الشهري) Data Analytics & Business Intelligence Portfolio**.

This web platform is designed for enterprise decision-makers, hiring managers, and business leaders. Built using **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**, it features **6 interactive Power BI analytics case studies** spanning climate analysis, retail sales operations, HR analytics, sales & profitability, digital ad performance (ROAS), and healthcare emergency operations.

> *"تحويل البيانات المعقدة إلى لوحات تحكم تفاعلية وقرارات استراتيجية مدروسة."*

---

## 🌟 Key Platform Features & Interactive Modules

- 🌌 **Celestial Obsidian UI**: Cosmic dark theme with deep multi-radial background glows, animated twinkling starfield, and glassmorphism cards.
- 📊 **6 Comprehensive Power BI Dashboards**: Interactive case study pages equipped with KPIs, high-resolution dashboard previews, lightbox zoom modal, and analytical findings.
- 🗂️ **Dynamic Project Filtering**: Filter dashboards by category (All, Power BI, Business Intelligence).
- 🧪 **Analytics KPI Matrix (`/lab`)**: Matrix linking verified business questions to DAX measures and operational impact.
- 📄 **Executive Resume & Qualifications (`/resume`)**: Detailed resume covering MIS degree from Taibah University, experience, and certified training.
- 📬 **Direct Contact & Inquiries (`/contact`)**: Form and direct communication channels.

---

## 🔗 Portfolio Case Studies

| # | Project Title | Primary Stack | Highlights & Verified Metrics |
|---|---------------|---------------|-------------------------------|
| 1 | **تحليل ومقارنة طقس مدن المملكة** | Power BI, DAX, Power Query | 12 مدينة، 6 سنوات، 4 صفحات تحليلية |
| 2 | **لوحة مبيعات وعمليات التجزئة (Retail Sales)** | Power BI, Star Schema | 3.24M ر.س مبيعات، 2,700 طلب، 32.4% هامش ربح |
| 3 | **لوحة تحليلات الموارد البشرية (HR Analytics)** | Power BI, DAX Measures | 1,420 موظف، 11.2% دوران وظيفي، 86% رضا الموظفين |
| 4 | **لوحة تحليل المبيعات والأرباح (Sales & Profit)** | Power BI, Time-Intelligence | 4.85M ر.س إجمالي الإيرادات، 1.62M ر.س أرباح صافية |
| 5 | **لوحة أداء الإعلانات الرقمية (Digital Ad ROAS)** | Power BI, Marketing Analytics | 4.35x متوسط ROAS، 1,840 حملة إعلانية، 3.82% CTR |
| 6 | **لوحة تحكم العمليات وبلاغات الطوارئ (مستشفى الملك خالد)** | Power BI, Operations Telemetry | 8,920 بلاغ طوارئ، 12.4 دقيقة زمن الاستجابة، 94.6% إغلاق |

---

## 🛠️ Technology Stack & Analytical Ecosystem

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           FRONTEND PLATFORM                             │
│       Next.js 16 (App Router)  │  TypeScript  │  Tailwind CSS           │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│                       BUSINESS INTELLIGENCE & DATA                       │
│    Power BI Desktop  │  DAX Modeling  │  Power Query ETL  │  SQL Server │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│                    DATA ANALYSIS & REPORTING TOOLS                      │
│      Star Schema  │  KPI Architecture  │  Microsoft Excel  │  Pandas    │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Repository Directory Structure

```text
data-analysis/
├── app/                        # Next.js 16 App Router pages
│   ├── page.tsx                # Home / Landing Page
│   ├── about/                  # About & Professional Journey
│   ├── projects/               # Case Study Catalog & Filtering
│   ├── projects/[slug]/        # Individual Project Deep-Dive Pages
│   ├── skills/                 # Interactive Technical Skill Matrix
│   ├── experience/             # Practical BI & Retail Experience
│   ├── resume/                 # Print-Optimized Resume & CV
│   ├── lab/                    # DAX & Analytics Simulator
│   └── contact/                # Direct Contact & Message Form
├── components/                 # Reusable UI & Layout Components
│   ├── cinematic-hero.tsx      # Video Hero & Stat Counter Component
│   ├── project-card.tsx        # Dynamic Case Study Visual Cards
│   ├── project-gallery.tsx     # Filterable Gallery with Lightbox Zoom
│   ├── page-video-shell.tsx    # Universal Cosmic Shell (No Video)
│   └── resume-page.tsx         # CV Layout & Media Print Styles
├── data/
│   └── portfolio.ts            # Centralized Data Store (Projects, Skills, CV)
├── public/
│   └── ayman/                  # Extracted High-Resolution Dashboard Screenshots
└── README.md                   # Repository Master Documentation
```

---

## ⚡ Getting Started (Local Setup)

To run this portfolio website locally:

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Launch Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3️⃣ Build Production Bundle
```bash
npm run build
npm run start
```

---

## 📜 Certifications & Qualifications

- 🎓 **دورة تحليل البيانات الاحترافية (120 ساعة تدريبية)** — معهد تك مايند (Tech Mind)
- 🎓 **دورة أخصائي ذكاء الأعمال Power BI (40 ساعة تدريبية)** — وسام المعرفة للتدريب
- 🎓 **دورة التحليل المتقدم للبيانات ونمذجة المؤشرات (25 ساعة تدريبية)** — مركز هاش بلس
- 🎓 **بكالوريوس نظم المعلومات الإدارية (MIS)** — جامعة طيبة، كلية إدارة الأعمال، المدينة المنورة

---

## 👨‍💻 Author & Contact

**أيمن يحيى الشهري (Ayman Yahya Alshehri)**  
*محلل بيانات | أخصائي ذكاء أعمال ونظم معلومات إدارية*  
📍 المدينة المنورة، المملكة العربية السعودية  

- 📧 **Email**: [ayman.y.alshehri@gmail.com](mailto:ayman.y.alshehri@gmail.com)  
- 📱 **Phone**: +966 54 424 4085  
- 🔗 **LinkedIn**: [linkedin.com/in/ayman-y-alshehri](https://linkedin.com/in/ayman-y-alshehri)  
- 🐙 **GitHub**: [github.com/ayman-alshehri](https://github.com/ayman-alshehri)  

export type Lang = "en" | "id";

export const PROFILE = {
  name: "Mochammad Dzikri Taufik",
  initials: "MDT",
  email: "mdzikritaufik@gmail.com",
  linkedin: "https://linkedin.com/in/mochammaddzikritaufik/",
  linkedinShort: "/in/mochammaddzikritaufik",
  location: "Abu Dhabi, UAE",
  cv: "/CV_Mochammad_Dzikri_Taufik.pdf",
  title: "Aircraft Engine Maintenance Specialist",
};

export const COPY = {
  en: {
    cvShort: "CV",
    cvLong: "DOWNLOAD FULL CV (PDF)",
    menu: "MENU",
    close: "CLOSE",
    navAbout: "About Me",
    navExperience: "Experience",
    navProjects: "Projects",
    navCredentials: "Credentials",
    navContact: "Contact",
    heroSub:
      "Continuous Improvement in aircraft engine MRO. CFM56 and LEAP-1A/1B under Part 145 — plus the digital tools that make the shop floor effective.",
    stat1: "YEARS IN AIRCRAFT ENGINE MRO",
    stat2: "IMPROVEMENT & DIGITAL PROJECTS DELIVERED",
    aboutLead:
      "I improve material traceability by roughly 90 percent, monitor about twenty improvement projects a year, and disassemble CFM56 and LEAP engines with my own hands.",
    aboutP2:
      "Results-driven Continuous Improvement professional with hands-on experience in aircraft engine maintenance, specializing in CFM56 and LEAP-1A/1B engines under Part 145 regulations. Lean Six Sigma Green Belt, with proven results leading and supporting cross-functional initiatives that raise safety, quality, and operational efficiency.",
    aboutP3:
      "Strong analytical and problem-solving skills to translate operational challenges into structured improvement actions — and, when the process needs a tool that does not exist yet, to build it. Five internal platforms and systems in production, from a barcode-driven material management web application to an engine assembly calculator now used as a permanent measurement database.",
    ctaProjects: "VIEW PROJECTS",
    bannerLine: "Available for MRO and continuous improvement roles.",
    expTitle: "Hands on the engine. Eyes on what the process is missing.",
    expSub:
      "Nine years across engine maintenance, continuous improvement coordination, and product management. The work is physical, but the improvements come from noticing what the shop floor keeps working around.",
    projTitle: "Continuous improvement, built and shipped.",
    projSub:
      "Five systems designed and delivered inside engine MRO operations. Every impact figure below is the one recorded on the project.",
    viewCase: "VIEW CASE",
    backProjects: "ALL PROJECTS",
    whatItIs: "WHAT IT IS",
    impact: "IMPACT",
    headline: "HEADLINE RESULT",
    openDemo: "OPEN STAGING DEMO",
    demoNote: "Preview access — user ID 12345, password 12345678.",
    otherProjects: "OTHER PROJECTS",
    credTitle: "Education, certifications and competencies.",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    competencies: "COMPETENCIES",
    languages: "LANGUAGES",
    total: "TOTAL",
    contactTitle: "Let's talk about engines and continuous improvement.",
    contactSub:
      "Open to Lead Technician, Continuous Improvement and MRO operations roles internationally. Email is the fastest way to reach me.",
    basedIn: "BASED IN",
    contactBanner: "Send the role, I'll send the details.",
    gpa: "GPA",
  },
  id: {
    cvShort: "CV",
    cvLong: "UNDUH CV LENGKAP (PDF)",
    menu: "MENU",
    close: "TUTUP",
    navAbout: "Tentang",
    navExperience: "Pengalaman",
    navProjects: "Proyek",
    navCredentials: "Kredensial",
    navContact: "Kontak",
    heroSub:
      "Continuous Improvement pada perawatan mesin pesawat. CFM56 dan LEAP-1A/1B di bawah regulasi Part 145 — beserta perangkat digital yang membuat pekerjaan efektif.",
    stat1: "TAHUN DI PERAWATAN MESIN PESAWAT",
    stat2: "PROYEK PERBAIKAN & DIGITAL YANG DISELESAIKAN",
    aboutLead:
      "Meningkatkan akurasi ketertelusuran material sekitar 90 persen, memantau kurang lebih dua puluh proyek perbaikan setiap tahun, dan menangani langsung disassembly mesin CFM56 serta LEAP.",
    aboutP2:
      "Profesional Continuous Improvement dengan pengalaman langsung pada perawatan mesin pesawat, khususnya mesin CFM56 dan LEAP-1A/1B di bawah regulasi Part 145. Bersertifikat Lean Six Sigma Green Belt, dengan hasil nyata dalam memimpin dan mendukung inisiatif lintas fungsi yang meningkatkan keselamatan, kualitas, dan efisiensi operasional.",
    aboutP3:
      "Kemampuan analisis dan penyelesaian masalah yang kuat untuk menerjemahkan tantangan operasional menjadi tindakan perbaikan yang terstruktur — dan, ketika sebuah proses membutuhkan perangkat yang belum tersedia, membangunnya sendiri. Lima platform serta sistem internal telah berjalan, mulai dari aplikasi web manajemen material berbasis barcode hingga kalkulator perakitan mesin yang kini menjadi basis data pengukuran permanen.",
    ctaProjects: "LIHAT PROYEK",
    bannerLine: "Terbuka untuk peran MRO dan continuous improvement.",
    expTitle: "Tangan di mesin. Mata pada proses yang masih bisa diperbaiki.",
    expSub:
      "Sembilan tahun di perawatan mesin, koordinasi continuous improvement, dan manajemen produk. Pekerjaannya menuntut fisik, tetapi perbaikannya lahir dari kepekaan membaca hal-hal yang selama ini hanya disiasati di lantai produksi.",
    projTitle: "Continuous improvement yang dibangun dan dijalankan.",
    projSub:
      "Lima sistem yang dirancang dan diterapkan di dalam operasi MRO mesin pesawat. Setiap angka dampak di bawah ini adalah angka yang tercatat pada proyeknya.",
    viewCase: "LIHAT DETAIL",
    backProjects: "SEMUA PROYEK",
    whatItIs: "DESKRIPSI",
    impact: "DAMPAK",
    headline: "HASIL UTAMA",
    openDemo: "BUKA DEMO STAGING",
    demoNote: "Akses pratinjau — user ID 12345, kata sandi 12345678.",
    otherProjects: "PROYEK LAINNYA",
    credTitle: "Pendidikan, sertifikasi, dan kompetensi.",
    education: "PENDIDIKAN",
    certifications: "SERTIFIKASI",
    competencies: "KOMPETENSI",
    languages: "BAHASA",
    total: "TOTAL",
    contactTitle: "Mari berdiskusi soal mesin dan perbaaikan berkelanjutan.",
    contactSub:
      "Terbuka untuk peran Lead Technician, Continuous Improvement, dan operasi MRO di tingkat internasional. Email adalah cara tercepat untuk menghubungi saya.",
    basedIn: "BERDOMISILI DI",
    contactBanner: "Kirim posisinya, saya kirim detailnya.",
    gpa: "IPK",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type Copy = (typeof COPY)["en"];

export type NavItem = { num: string; href: string; key: keyof Copy };

export const NAV: NavItem[] = [
  { num: "01", href: "/", key: "navAbout" },
  { num: "02", href: "/experience", key: "navExperience" },
  { num: "03", href: "/projects", key: "navProjects" },
  { num: "04", href: "/credentials", key: "navCredentials" },
  { num: "05", href: "/contact", key: "navContact" },
];

export type Logo = {
  src: string;
  width: number;
  height: number;
  /** Rendered height in px; width follows the image's own ratio. */
  display: number;
};

export const LOGOS = {
  sanad: { src: "/sanad.png", width: 800, height: 312, display: 36 },
  zeroone: { src: "/zeroonegroup.jpg", width: 200, height: 200, display: 52 },
  gmf: { src: "/gmf.png", width: 241, height: 51, display: 30 },
  imcp: { src: "/IMCP.png", width: 350, height: 165, display: 44 },
} satisfies Record<string, Logo>;

export type Job = {
  role: string;
  company: string;
  place: string;
  period: string;
  logo: Logo;
  bullets: string[];
};

export const EXPERIENCE: Record<Lang, Job[]> = {
  en: [
    {
      role: "Lead Technician LEAP-1A/1B — Operation",
      company: "The Sanad Group (Mubadala Company)",
      logo: LOGOS.sanad,
      place: "Abu Dhabi, UAE",
      period: "OCT 2025 — PRESENT",
      bullets: [
        "Performed engine disassembly and assembly of LEAP-1A and LEAP-1B engines in accordance with the Engine Shop Manual (ESM).",
        "Conducted incoming and removed parts, module and piece part inspections, part segregation, and material disposition using the ORACLE system.",
        "Prepared and reviewed technical documentation aligned with approved engine work scopes.",
        "Coordinated with Engineering, Supply Chain, and Special Process departments to ensure smooth workflow execution.",
        "Ensured compliance with safety and quality standards through FOD prevention, independent inspections, and Dirty Dozen awareness.",
        "Fostered Continuous Improvement to LEAP-1B engine part management in GATE 01.",
      ],
    },
    {
      role: "Associate Product Manager",
      company: "Zero One Group",
      logo: LOGOS.zeroone,
      place: "South Jakarta, Indonesia",
      period: "JUL 2024 — OCT 2024",
      bullets: [
        "Engaged with clients to understand their challenges through thorough data analysis and open communication channels to identify core issues.",
        "Translated client issues into detailed technical work plans, giving the engineering team clear, actionable guidance.",
        "Oversaw, managed, and monitored tasks assigned to the engineering team, ensuring deliverables aligned with project timelines and quality standards.",
        "Facilitated regular communication with stakeholders to maintain alignment and project momentum.",
      ],
    },
    {
      role: "Continuous Improvement Coordinator — Production Support Officer",
      company: "PT GMF AeroAsia (Garuda Indonesia Group)",
      logo: LOGOS.gmf,
      place: "Tangerang, Indonesia",
      period: "AUG 2023 — JUL 2024",
      bullets: [
        "Led cross-functional teams to implement continuous improvement initiatives in engine maintenance processes, focusing on safety, quality, and efficiency.",
        "Built synergistic relationships with employees to carry out improvements and product development with positive impact on the company.",
        "Initiated five key projects to uphold and enhance engine safety, compliance, and output quality.",
        "Monitored and supported approximately 20 improvement projects annually within the Engine Services Department.",
      ],
    },
    {
      role: "Senior Engine Maintenance Technician",
      company: "PT GMF AeroAsia (Garuda Indonesia Group)",
      logo: LOGOS.gmf,
      place: "Tangerang, Indonesia",
      period: "DEC 2017 — AUG 2023",
      bullets: [
        "Disassembled and assembled CFM56-3, CFM56-5B, and CFM56-7B engines according to the Engine Shop Manual (ESM).",
        "Conducted dirty inspection, part segregation, and tooling preparation for module work.",
        "Contributed to the Consumable Material Management Project, improving material inventory control and documentation traceability.",
        "Contributed to the common hardware management project, improving CFM56 flow process, traceability, and readiness against project timelines.",
        "Participated in productivity improvement projects, reducing waste and enhancing accuracy of shop floor activity.",
      ],
    },
    {
      role: "Management Trainee",
      company: "PT Indonesia Multi Color Printing",
      logo: LOGOS.imcp,
      place: "Surabaya · Sidoarjo · Cikande, Indonesia",
      period: "JAN 2017 — DEC 2017",
      bullets: [
        "Performed recondition of metal packaging machines as mechanical engineer.",
        "Supervised tin coating and varnish within the production line.",
        "Led the warehouse management project for the new plant.",
        "Fostered improvement of the coating and varnish cleaning method.",
      ],
    },
  ],
  id: [
    {
      role: "Lead Technician LEAP-1A/1B — Operation",
      company: "The Sanad Group (Mubadala Company)",
      logo: LOGOS.sanad,
      place: "Abu Dhabi, UAE",
      period: "OKT 2025 — SEKARANG",
      bullets: [
        "Melaksanakan disassembly dan assembly mesin LEAP-1A dan LEAP-1B sesuai Engine Shop Manual (ESM).",
        "Melakukan inspeksi incoming dan removed parts, modul, serta piece part, segregasi komponen, dan disposisi material menggunakan sistem ORACLE.",
        "Menyusun dan meninjau dokumentasi teknis sesuai work scope mesin yang disetujui.",
        "Berkoordinasi dengan departemen Engineering, Supply Chain, dan Special Process untuk memastikan kelancaran alur kerja.",
        "Memastikan kepatuhan terhadap standar keselamatan dan kualitas melalui pencegahan FOD, inspeksi independen, dan kesadaran Dirty Dozen.",
        "Mendorong Continuous Improvement pada manajemen part mesin LEAP-1B di GATE 01.",
      ],
    },
    {
      role: "Associate Product Manager",
      company: "Zero One Group",
      logo: LOGOS.zeroone,
      place: "Jakarta Selatan, Indonesia",
      period: "JUL 2024 — OKT 2024",
      bullets: [
        "Berinteraksi dengan klien untuk memahami tantangan mereka melalui analisis data menyeluruh dan komunikasi terbuka guna mengidentifikasi akar masalah.",
        "Menerjemahkan permasalahan klien menjadi rencana kerja teknis yang rinci sehingga tim engineering memiliki panduan yang jelas dan dapat dijalankan.",
        "Mengawasi, mengelola, dan memantau tugas tim engineering agar hasil kerja selaras dengan tenggat dan standar kualitas proyek.",
        "Memfasilitasi komunikasi rutin dengan pemangku kepentingan untuk menjaga keselarasan dan momentum proyek.",
      ],
    },
    {
      role: "Continuous Improvement Coordinator — Production Support Officer",
      company: "PT GMF AeroAsia (Garuda Indonesia Group)",
      logo: LOGOS.gmf,
      place: "Tangerang, Indonesia",
      period: "AGT 2023 — JUL 2024",
      bullets: [
        "Memimpin tim lintas fungsi dalam menerapkan inisiatif continuous improvement pada proses perawatan mesin, dengan fokus pada keselamatan, kualitas, dan efisiensi.",
        "Membangun hubungan sinergis dengan karyawan untuk menjalankan perbaikan dan pengembangan produk yang berdampak positif bagi perusahaan.",
        "Menginisiasi lima proyek utama untuk menjaga dan meningkatkan keselamatan mesin, kepatuhan, dan kualitas output.",
        "Memantau serta mendukung sekitar 20 proyek perbaikan per tahun di Engine Services Department.",
      ],
    },
    {
      role: "Senior Engine Maintenance Technician",
      company: "PT GMF AeroAsia (Garuda Indonesia Group)",
      logo: LOGOS.gmf,
      place: "Tangerang, Indonesia",
      period: "DES 2017 — AGT 2023",
      bullets: [
        "Melaksanakan disassembly dan assembly mesin CFM56-3, CFM56-5B, dan CFM56-7B sesuai Engine Shop Manual (ESM).",
        "Melakukan dirty inspection, segregasi komponen, dan penyiapan tooling untuk pekerjaan modul.",
        "Berkontribusi pada Consumable Material Management Project, memperbaiki kontrol inventori material dan ketertelusuran dokumentasi.",
        "Berkontribusi pada proyek manajemen common hardware, memperbaiki alur proses CFM56, ketertelusuran, dan kesiapan terhadap tenggat proyek.",
        "Terlibat dalam proyek peningkatan produktivitas, mengurangi pemborosan dan meningkatkan akurasi aktivitas lantai produksi.",
      ],
    },
    {
      role: "Management Trainee",
      company: "PT Indonesia Multi Color Printing",
      logo: LOGOS.imcp,
      place: "Surabaya · Sidoarjo · Cikande, Indonesia",
      period: "JAN 2017 — DES 2017",
      bullets: [
        "Melakukan rekondisi mesin kemasan logam sebagai mechanical engineer.",
        "Mengawasi proses tin coating dan varnish pada lini produksi.",
        "Memimpin proyek manajemen gudang untuk pabrik baru.",
        "Mendorong perbaikan metode pembersihan coating dan varnish.",
      ],
    },
  ],
};

export type Project = {
  slug: string;
  code: string;
  year: string;
  name: string;
  short: string;
  metric: string;
  detail: string;
  impact: string;
  link: string;
};

export const PROJECT_SLUGS = [
  "sigmas",
  "cohas-board",
  "consumable-material",
  "common-hardware",
  "allicator",
] as const;

export const PROJECTS: Record<Lang, Project[]> = {
  en: [
    {
      slug: "sigmas",
      code: "SIGMAS",
      year: "2026",
      name: "Material management, digitalised",
      short:
        "Web-based digitalization platform for material management in aircraft engine MRO, replacing manual paper-based processes.",
      metric: "~90% traceability accuracy",
      detail:
        "Serves around 40 technicians across engine stripping, inspection and Material GATE 01 stages, with barcode-based automated part identification, guided inspection workflows, standardized disposition recording, and a real-time analytics dashboard.",
      impact:
        "Target: eliminated manual process errors; improved material traceability and part identification accuracy by approximately 90 percent; enhanced real-time visibility for shop floor scheduling and resource allocation.",
      link: "https://sigmas-git-master-dzikri-squarepants-projects.vercel.app/login",
    },
    {
      slug: "cohas-board",
      code: "COHAS BOARD",
      year: "2024",
      name: "ESM procedures as schematics",
      short:
        "Common hardware schematic board for the LPT major module of the CFM56-7 series.",
      metric: "90% of mechanics reported easier use",
      detail:
        "Translated complex Engine Shop Manual installation procedures into a visual schematic format with understandable symbols and step-by-step guidance for technicians.",
      impact:
        "90% of mechanics reported improved ease of use; reduced installation errors and rework; shortened the installation learning curve for new technicians; improved first-pass quality.",
      link: "",
    },
    {
      slug: "consumable-material",
      code: "CONSUMABLE MATERIAL",
      year: "2021 — 2023",
      name: "Engine consumable material management system",
      short:
        "Database, tracking dashboard and inventory control room for chemical and consumable material traceability.",
      metric: "Single source of truth for compliance",
      detail:
        "Designed a comprehensive database and tracking dashboard plus an inventory control room for chemical and consumable material traceability during engine maintenance operations.",
      impact:
        "Eliminated inventory control gaps; improved material visibility for production planners; established a single source of truth for compliance documentation and material usage patterns.",
      link: "",
    },
    {
      slug: "common-hardware",
      code: "COMMON HARDWARE",
      year: "2020 — 2021",
      name: "Common hardware management system",
      short:
        "Kit management and storage system for common hardware removed during disassembly, with return-to-engine tracking.",
      metric: "Hardware loss eliminated",
      detail:
        "Created a dedicated kit management and storage system for common hardware parts removed during disassembly, with return-to-engine tracking.",
      impact:
        "Eliminated hardware loss and misplacement; improved parts availability for assembly phases; enhanced inventory accuracy and storage efficiency.",
      link: "",
    },
    {
      slug: "allicator",
      code: "ALLICATOR",
      year: "2019 — 2024",
      name: "Engine assembly and installation calculator",
      short:
        "Automated dimensional measurement calculation tool replacing manual calculation during assembly and installation.",
      metric: "Permanent measurement database",
      detail:
        "Developed an automated dimensional measurement calculation tool to replace manual calculations during engine assembly and installation phases.",
      impact:
        "Eliminated manual calculation errors and human error variability; reduced inspection time per engine; created a permanent database of measurement records for R&D and continuous improvement analysis.",
      link: "",
    },
  ],
  id: [
    {
      slug: "sigmas",
      code: "SIGMAS",
      year: "2026",
      name: "Digitalisasi manajemen material",
      short:
        "Platform digitalisasi berbasis web untuk manajemen material pada MRO mesin pesawat, menggantikan proses manual berbasis kertas.",
      metric: "Akurasi ketertelusuran ~90%",
      detail:
        "Melayani sekitar 40 teknisi pada tahap stripping, inspeksi, dan Material GATE 01, dengan identifikasi part otomatis berbasis barcode, alur inspeksi terpandu, pencatatan disposisi yang terstandar, dan dasbor analitik waktu nyata.",
      impact:
        "Target: menghilangkan kesalahan proses manual; meningkatkan ketertelusuran material dan akurasi identifikasi part sekitar 90 persen; meningkatkan visibilitas waktu nyata untuk penjadwalan dan alokasi sumber daya di lantai produksi.",
      link: "https://sigmas-git-master-dzikri-squarepants-projects.vercel.app/login",
    },
    {
      slug: "cohas-board",
      code: "COHAS BOARD",
      year: "2024",
      name: "Prosedur ESM dalam bentuk skematik",
      short:
        "Papan skematik common hardware untuk LPT major module mesin CFM56-7 series.",
      metric: "90% mekanik merasa lebih mudah",
      detail:
        "Menerjemahkan prosedur instalasi Engine Shop Manual yang kompleks menjadi format skematik visual dengan simbol yang mudah dipahami dan panduan langkah demi langkah bagi teknisi.",
      impact:
        "90% mekanik melaporkan kemudahan penggunaan yang lebih baik; menurunkan kesalahan instalasi dan pekerjaan ulang; memperpendek kurva belajar instalasi bagi teknisi baru; meningkatkan kualitas first-pass.",
      link: "",
    },
    {
      slug: "consumable-material",
      code: "CONSUMABLE MATERIAL",
      year: "2021 — 2023",
      name: "Sistem manajemen material consumable mesin",
      short:
        "Basis data, dasbor pelacakan, dan ruang kontrol inventori untuk ketertelusuran material kimia dan consumable.",
      metric: "Satu sumber data untuk kepatuhan",
      detail:
        "Merancang basis data dan dasbor pelacakan yang komprehensif beserta ruang kontrol inventori untuk ketertelusuran material kimia dan consumable selama operasi perawatan mesin.",
      impact:
        "Menutup celah kontrol inventori; meningkatkan visibilitas material bagi perencana produksi; membangun satu sumber data tunggal untuk dokumentasi kepatuhan dan pola penggunaan material.",
      link: "",
    },
    {
      slug: "common-hardware",
      code: "COMMON HARDWARE",
      year: "2020 — 2021",
      name: "Sistem manajemen common hardware",
      short:
        "Sistem manajemen dan penyimpanan kit untuk common hardware yang dilepas saat disassembly, dengan pelacakan pengembalian ke mesin.",
      metric: "Kehilangan hardware hilang sepenuhnya",
      detail:
        "Membuat sistem manajemen dan penyimpanan kit khusus untuk part common hardware yang dilepas saat disassembly, dilengkapi pelacakan pengembalian ke mesin.",
      impact:
        "Menghilangkan kehilangan dan salah letak hardware; meningkatkan ketersediaan part pada fase assembly; meningkatkan akurasi inventori dan efisiensi penyimpanan.",
      link: "",
    },
    {
      slug: "allicator",
      code: "ALLICATOR",
      year: "2019 — 2024",
      name: "Kalkulator assembly dan instalasi mesin",
      short:
        "Alat perhitungan pengukuran dimensi otomatis yang menggantikan perhitungan manual saat assembly dan instalasi.",
      metric: "Basis data pengukuran permanen",
      detail:
        "Mengembangkan alat perhitungan pengukuran dimensi otomatis untuk menggantikan perhitungan manual pada fase assembly dan instalasi mesin.",
      impact:
        "Menghilangkan kesalahan perhitungan manual dan variabilitas human error; mengurangi waktu inspeksi per mesin; membangun basis data permanen catatan pengukuran untuk R&D dan analisis continuous improvement.",
      link: "",
    },
  ],
};

export type Cert = { name: string; issuer: string; year: string };

export const CERTS: Cert[] = [
  { name: "Human Factor Initial", issuer: "SANAD", year: "2026" },
  { name: "LEAP-1A Engine System", issuer: "SANAD", year: "2026" },
  { name: "Documentation", issuer: "SANAD", year: "2025" },
  { name: "FOD Prevention", issuer: "SANAD", year: "2025" },
  { name: "Safety Management System", issuer: "SANAD", year: "2025" },
  { name: "Basic Engineering", issuer: "PT GMF AeroAsia", year: "2024" },
  { name: "Lean Six Sigma — Green Belt", issuer: "PT GMF AeroAsia", year: "2024" },
  { name: "FAR Part 145", issuer: "PT GMF AeroAsia", year: "2023" },
  { name: "CASR Part 145", issuer: "PT GMF AeroAsia", year: "2023" },
  { name: "EASA Part M for Foreign EASA 145", issuer: "PT GMF AeroAsia", year: "2023" },
  { name: "Basic Project Management", issuer: "PT GMF AeroAsia", year: "2023" },
  { name: "SWIFT Complex Maintenance — Production Control", issuer: "PT GMF AeroAsia", year: "2023" },
  { name: "PDCA Concept", issuer: "PT GMF AeroAsia", year: "2022" },
  { name: "Basic Supervisory Training", issuer: "PT GMF AeroAsia", year: "2021" },
  { name: "Human Factor Continuation Training", issuer: "PT GMF AeroAsia", year: "2021" },
  { name: "SWIFT Complex Maintenance — Production", issuer: "PT GMF AeroAsia", year: "2021" },
  { name: "Basic Inspection for Shop", issuer: "PT GMF AeroAsia", year: "2020" },
  { name: "Engine CFM56 Series Maintenance", issuer: "PT GMF AeroAsia", year: "2020" },
  { name: "Dangerous Goods Awareness Continuation Training", issuer: "PT GMF AeroAsia", year: "2020" },
  { name: "Electrical Wiring Interconnection System", issuer: "PT GMF AeroAsia", year: "2020" },
  { name: "Fuel Tank Safety", issuer: "PT GMF AeroAsia", year: "2020" },
  { name: "CFM56-7 Series Basic Engine", issuer: "PT GMF AeroAsia", year: "2020" },
  { name: "Safety Management System", issuer: "PT GMF AeroAsia", year: "2020" },
  { name: "GMF Quality System", issuer: "PT GMF AeroAsia", year: "2020" },
  { name: "Basic Engine Maintenance", issuer: "PT GMF AeroAsia", year: "2019" },
];

export type Education = { school: string; years: string; degree: string; gpa: string };

export const EDUCATION: Record<Lang, Education[]> = {
  en: [
    { school: "Universitas Mercu Buana", years: "2019 — 2021", degree: "Bachelor's Degree of Mechanical Engineering", gpa: "3.50 / 4.00" },
    { school: "Politeknik Negeri Bandung", years: "2013 — 2016", degree: "Associate Degree of Aeronautics", gpa: "3.51 / 4.00" },
  ],
  id: [
    { school: "Universitas Mercu Buana", years: "2019 — 2021", degree: "Sarjana Teknik Mesin", gpa: "3,50 / 4,00" },
    { school: "Politeknik Negeri Bandung", years: "2013 — 2016", degree: "Diploma Tiga Aeronautika", gpa: "3,51 / 4,00" },
  ],
};

export type CompetencyGroup = { group: string; items: string[] };

export const COMPETENCIES: Record<Lang, CompetencyGroup[]> = {
  en: [
    {
      group: "Leadership & Project Management",
      items: [
        "Project planning & execution (scope, timeline)",
        "Cross-functional team coordination & stakeholder management",
        "Process improvement methodology (DMAIC, Lean, Six Sigma, Agile, Scrum)",
        "Data analysis & decision making",
        "Risk assessment & mitigation",
        "Training delivery & capability development",
      ],
    },
    {
      group: "Technical & Operational",
      items: [
        "Aircraft engine maintenance (CFM56 series, LEAP-1A/1B)",
        "Facility optimization & safety management",
        "Procedure development & documentation",
        "Equipment readiness planning",
        "Production scheduling & resource allocation",
        "Regulatory compliance (Part 145, EASA, FAA)",
      ],
    },
    {
      group: "Software & Systems",
      items: [
        "Microsoft Office Suite (Excel, PowerPoint, Word, Teams)",
        "Maintenance systems (ESM, SAP, ORACLE, cMRO)",
        "Data visualization & dashboard design",
        "Web application development (basic)",
      ],
    },
  ],
  id: [
    {
      group: "Kepemimpinan & Manajemen Proyek",
      items: [
        "Perencanaan & eksekusi proyek (lingkup, tenggat)",
        "Koordinasi tim lintas fungsi & manajemen pemangku kepentingan",
        "Metodologi perbaikan proses (DMAIC, Lean, Six Sigma, Agile, Scrum)",
        "Analisis data & pengambilan keputusan",
        "Penilaian & mitigasi risiko",
        "Penyampaian pelatihan & pengembangan kapabilitas",
      ],
    },
    {
      group: "Teknis & Operasional",
      items: [
        "Perawatan mesin pesawat (CFM56 series, LEAP-1A/1B)",
        "Optimasi fasilitas & manajemen keselamatan",
        "Penyusunan prosedur & dokumentasi",
        "Perencanaan kesiapan peralatan",
        "Penjadwalan produksi & alokasi sumber daya",
        "Kepatuhan regulasi (Part 145, EASA, FAA)",
      ],
    },
    {
      group: "Perangkat Lunak & Sistem",
      items: [
        "Microsoft Office Suite (Excel, PowerPoint, Word, Teams)",
        "Sistem perawatan (ESM, SAP, ORACLE, cMRO)",
        "Visualisasi data & perancangan dasbor",
        "Pengembangan aplikasi web (dasar)",
      ],
    },
  ],
};

export type Language = { name: string; level: string };

export const LANGUAGES: Record<Lang, Language[]> = {
  en: [
    { name: "Indonesian", level: "NATIVE" },
    { name: "English", level: "CONVERSATIONAL" },
  ],
  id: [
    { name: "Indonesia", level: "PENUTUR ASLI" },
    { name: "Inggris", level: "PERCAKAPAN" },
  ],
};

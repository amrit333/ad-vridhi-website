export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  visualType: "target" | "funnel" | "megaphone" | "graph" | "chat" | "ai" | "laptop" | "video";
  accentBg: string;
  accentColor: string;
  seoTitle: string;
  seoDescription: string;
  outcomesNote: string;
}

export interface RealProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  period: string;
  metricBadge: string;
  summary: string;
  challenge: string;
  execution: string[];
  resultNote: string;
  gradient: string;
  accent: string;
}

export interface ConceptProjectItem {
  id: "realestate" | "ecommerce" | "education" | "startup";
  label: string;
  industry: string;
  title: string;
  designLanguage: string;
  description: string;
  ctaText: string;
}

export interface ToolItem {
  name: string;
  iconSlug?: string;
  fallbackBadge: string;
  note?: string;
}

export interface ToolCategory {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  tools: ToolItem[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedAt: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
}

export const SITE_INFO = {
  brandName: "Ad-Vridhi",
  tagline: "Creative Experiences. Intelligent Marketing. Measurable Growth.",
  positioning:
    "We create digital experiences, execute intelligent marketing strategies and build growth systems that help businesses move forward.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ad-vridhi.vercel.app",
  location: "Noida, Uttar Pradesh, India",
  serviceRegions: "Noida, Delhi NCR, India & International Markets",
  founder: {
    name: "Amritpal Singh",
    role: "Founder & Digital Growth Strategist",
    experience: "2.5+ years of end-to-end campaign ownership",
    education: "Bachelor of Computer Applications (BCA), Punjab University, Patiala (2021–2024)",
    awards: [
      "1st Prize — Hackathon, UIET Chandigarh",
      "1st Prize — Hackathon, Chitkara University",
      "1st Prize — C++ Programming, Chandigarh University",
      "2nd Prize — Web Design, Punjabi University",
    ],
    certifications: [
      {
        title: "Google Analytics (GA4) Certification",
        issuer: "Google",
        period: "Issued Aug 2026 – Aug 2027",
        credentialId: "192846237",
        verifyUrl: "https://drive.google.com/file/d/1Inxb_7cAJ1-BnWWY6Ee4OQrs1RutlmG-/view?usp=sharing",
      },
      {
        title: "ManyChat Automation (Applied Experience)",
        issuer: "3+ Live Brand Pages",
        period: "Documented Lead Generation Results",
      },
      {
        title: "Meta Ads Manager (Hands-On Execution)",
        issuer: "Facebook & Instagram Ads",
        period: "200+ Historical Leads Generated",
      },
      {
        title: "Google Ads Search Certification",
        issuer: "Google Skillshop",
        period: "Target: Q3 2026",
      },
    ],
    phoneDisplay: "+91 85449-26441",
    phoneRaw: "8544926441",
    whatsappUrl: "https://wa.me/918544926441",
    email: "jot60103@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/amritpal-singh",
    youtubeUrl: "https://youtube.com/@techwealthcoach",
    portfolioUrl: "https://digital-marketing-portfolio-topaz.vercel.app",
  },
  coFounder: {
    name: "Akansha Kumari",
    role: "Co-Founder",
    phoneDisplay: "+91 99974-85518",
    phoneRaw: "9997485518",
  },
};

export const PORTFOLIO_BRANDS = [
  {
    name: "Solitaire Infosys",
    context: "Meta Ads & Organic Instagram Growth Portfolio Project",
  },
  {
    name: "Stitchery by Preet",
    context: "D2C Digital Brand Launch & ManyChat Automation",
  },
  {
    name: "Daydream Epoxy",
    context: "Technical & Off-Page SEO Campaign",
  },
  {
    name: "Tech Wealth Coach",
    context: "YouTube SEO & Content Strategy",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortTitle: "Performance Marketing",
    tagline: "Meta Ads, Google Ads, PPC, campaign optimisation and retargeting.",
    description:
      "Multi-stage Facebook, Instagram, and Google Search campaigns built with Custom & Lookalike Audiences, Meta Pixel event tracking, and continuous A/B testing to lower CPL.",
    deliverables: [
      "Meta Ads (Facebook & Instagram) campaign architecture",
      "Google Search & PPC keyword bidding strategy",
      "Meta Pixel & conversion tracking implementation",
      "Custom, Lookalike & bottom-of-funnel retargeting",
      "Weekly CTR, CPC, CPL & ROAS optimisation",
    ],
    visualType: "target",
    accentBg: "#F0EAFE",
    accentColor: "#8B70F5",
    seoTitle: "Performance Marketing Services in Noida & India | Ad-Vridhi",
    seoDescription:
      "Data-driven Meta Ads, Google Ads, PPC optimisation, and conversion retargeting by Ad-Vridhi for businesses across Noida, Delhi NCR, and India.",
    outcomesNote:
      "Historical benchmark from founder experience: 200+ qualified leads generated via Meta Ads in 2 months for Solitaire Infosys. Results vary by industry, offer, and ad budget.",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    shortTitle: "Lead Generation",
    tagline: "B2B leads, real estate leads, education leads and conversion-focused funnels.",
    description:
      "Structured acquisition systems pairing conditional-logic lead forms, high-intent landing pages, and automated CRM/WhatsApp routing to prioritise lead quality over vanity volume.",
    deliverables: [
      "B2B, real estate & education lead funnel design",
      "Multi-step qualification & conditional-logic forms",
      "Landing page conversion optimisation",
      "Instant WhatsApp & DM lead handoff",
      "Lead-to-enrolment & sales pipeline reporting",
    ],
    visualType: "funnel",
    accentBg: "#E6F9FC",
    accentColor: "#0EA5E9",
    seoTitle: "Lead Generation & Conversion Funnels | Ad-Vridhi",
    seoDescription:
      "High-intent B2B, real estate, and education lead generation funnels engineered by Ad-Vridhi in Noida & India.",
    outcomesNote:
      "Designed to filter low-intent enquiries upfront and connect qualified prospects rapidly with your sales desk.",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media Marketing",
    tagline: "Instagram strategy, content calendars, creative campaigns and brand growth.",
    description:
      "Audience-first content calendars, trend-aligned Reels, carousel storytelling, and multi-page Meta Business Suite management engineered for sustainable organic brand equity.",
    deliverables: [
      "Instagram growth strategy & visual identity alignment",
      "Monthly content calendars & creative direction",
      "High-retention Reels, carousels & story hooks",
      "Community management & hashtag clustering",
      "Monthly Insights & engagement analytics",
    ],
    visualType: "megaphone",
    accentBg: "#FDF0FB",
    accentColor: "#D946EF",
    seoTitle: "Social Media & Instagram Growth Agency | Ad-Vridhi",
    seoDescription:
      "Strategic Instagram marketing, Reels production, and multi-page brand growth by Ad-Vridhi.",
    outcomesNote:
      "Historical benchmark from founder experience: scaled an educational Instagram page to 9,200+ followers and 120K+ monthly reach without ad spend.",
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortTitle: "SEO & Search Growth",
    tagline: "Technical SEO, on-page SEO, off-page SEO, keyword research and link building.",
    description:
      "Comprehensive crawl error resolution, Core Web Vitals tuning, semantic on-page architecture, competitor keyword gap analysis, and contextual off-page link building via SEMrush, Ahrefs, and GSC.",
    deliverables: [
      "Technical SEO & Google Search Console crawl audits",
      "On-page metadata, schema & internal link structure",
      "Off-page authority backlink acquisition",
      "Competitor keyword gap research (SEMrush & Ahrefs)",
      "Monthly organic ranking & traffic reporting",
    ],
    visualType: "graph",
    accentBg: "#EEF2FF",
    accentColor: "#5B6CFF",
    seoTitle: "Technical & Off-Page SEO Services | Ad-Vridhi",
    seoDescription:
      "Technical SEO audits, keyword research, Core Web Vitals optimization, and authority link building by Ad-Vridhi.",
    outcomesNote:
      "Executed end-to-end technical and off-page SEO campaigns including crawl recovery and regional ranking improvements for Daydream Epoxy.",
  },
  {
    slug: "instagram-automation",
    title: "Instagram Automation",
    shortTitle: "Instagram Automation",
    tagline: "ManyChat, comment-to-DM automation, story triggers, keyword funnels and lead capture.",
    description:
      "24/7 ManyChat automated Instagram funnels—comment-triggered DM order flows, pricing auto-replies, story response triggers, and link-in-bio capture sequences.",
    deliverables: [
      "ManyChat comment-to-DM & keyword trigger flows",
      "Story poll & reply-to-DM lead capture",
      "Automated pricing, catalogue & booking replies",
      "New follower welcome & nurture sequences",
      "Zero-ad-spend organic funnel attribution",
    ],
    visualType: "chat",
    accentBg: "#FFF4E6",
    accentColor: "#F58206",
    seoTitle: "Instagram & ManyChat Automation Agency | Ad-Vridhi",
    seoDescription:
      "24/7 ManyChat comment-to-DM automation, story triggers, and organic lead funnels built by Ad-Vridhi.",
    outcomesNote:
      "Historical benchmark from founder experience: 150+ qualified organic leads in 6 months at ₹0 CPL via Reels → Story CTAs → ManyChat DM automation.",
  },
  {
    slug: "ai-powered-marketing",
    title: "AI-Powered Marketing",
    shortTitle: "AI-Powered Marketing",
    tagline: "AI content production, creative automation, research workflows and marketing productivity.",
    description:
      "Repeatable multi-tool AI production pipelines combining ChatGPT, Claude AI, Perplexity research, Leonardo AI visuals, and Canva to accelerate campaign execution without losing brand voice.",
    deliverables: [
      "AI-assisted script, copy & research workflows",
      "Brand-consistent visual generation (Leonardo AI + Canva)",
      "Prompt engineering systems for marketing teams",
      "Workflow automation exploration (n8n & WhatsApp)",
      "Human-reviewed quality & creative direction",
    ],
    visualType: "ai",
    accentBg: "#F3E8FF",
    accentColor: "#7C3AED",
    seoTitle: "AI-Powered Marketing & Content Workflows | Ad-Vridhi",
    seoDescription:
      "AI content pipelines and marketing automation systems designed by Ad-Vridhi to boost speed and output quality.",
    outcomesNote:
      "Historical benchmark from founder experience: reduced content production turnaround by 40% (up to 3x faster publish-ready output) across 3 brand pages.",
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    tagline: "Business websites, landing pages and WordPress development.",
    description:
      "High-converting business websites, campaign landing pages, and WordPress or modern React/Next.js builds designed for mobile-first speed, clean SEO structure, and brand authority.",
    deliverables: [
      "Custom responsive business websites & landing pages",
      "WordPress & modern Next.js / TypeScript builds",
      "Conversion-focused UI/UX & persuasive hierarchy",
      "On-page technical SEO & schema markup",
      "GA4 & Meta Pixel integration readiness",
    ],
    visualType: "laptop",
    accentBg: "#ECFDF5",
    accentColor: "#10B981",
    seoTitle: "Creative Website Development Agency | Ad-Vridhi",
    seoDescription:
      "Premium business websites, high-converting landing pages, and WordPress/Next.js development by Ad-Vridhi.",
    outcomesNote:
      "Every site is engineered around conversion clarity, mobile responsiveness, and Lighthouse performance.",
  },
  {
    slug: "youtube-marketing",
    title: "YouTube Marketing",
    shortTitle: "YouTube Marketing",
    tagline: "Content strategy, video SEO, thumbnails, titles and channel growth.",
    description:
      "End-to-end YouTube growth execution—topic research, retention-focused scripting, Premiere Pro & CapCut editing, high-CTR thumbnails, and search-optimised metadata.",
    deliverables: [
      "Channel positioning & content strategy",
      "Retention-hook video editing (Premiere Pro & CapCut)",
      "Contrast-rich custom thumbnail design",
      "YouTube SEO titles, tags & descriptions",
      "YouTube Studio analytics & watch-time growth",
    ],
    visualType: "video",
    accentBg: "#FEF2F2",
    accentColor: "#EF4444",
    seoTitle: "YouTube Marketing & Video SEO Agency | Ad-Vridhi",
    seoDescription:
      "YouTube channel growth, video SEO, retention editing, and thumbnail optimization by Ad-Vridhi.",
    outcomesNote:
      "Historical benchmark from founder experience: 69,800+ impressions, 113+ watch hours, and 101 new subscribers in 28 days (206% growth) for @techwealthcoach.",
  },
];

export const HISTORICAL_ACHIEVEMENTS = [
  {
    metric: "200+ Leads",
    context: "Meta Ads campaign in 2 months",
    source: "Solitaire Infosys (Jan 2024 – Present) • Founder Career Record",
  },
  {
    metric: "150+ Organic Leads",
    context: "At ₹0 CPL in 6 months",
    source: "ManyChat Instagram Funnel • Solitaire Infosys",
  },
  {
    metric: "120K+ Monthly Reach",
    context: "Organic Instagram reach",
    source: "Zero paid ad spend • Solitaire Infosys",
  },
  {
    metric: "85K+ Views",
    context: "First month of a brand launch",
    source: "Stitchery by Preet (2025) • Zero Paid Promotion",
  },
  {
    metric: "9,200+ Followers",
    context: "Organic Instagram growth",
    source: "Audience-first calendars & Reels • Zero Ad Spend",
  },
  {
    metric: "40% Faster Production",
    context: "AI-powered content workflow",
    source: "ChatGPT + Leonardo AI + Canva Pipeline (2025)",
  },
];

export const REAL_PROJECTS: RealProjectItem[] = [
  {
    id: "proj-1",
    slug: "solitaire-infosys-meta-ads",
    title: "Solitaire Infosys — Meta Ads Lead Generation",
    client: "Solitaire Infosys Pvt. Ltd.",
    category: "Performance Marketing",
    period: "Jan 2024 – Present",
    metricBadge: "200+ Qualified Leads (2 Months)",
    summary:
      "Multi-stage Facebook & Instagram campaign pairing awareness Reels/carousels with Facebook Pixel retargeting and 3-variant creative A/B testing.",
    challenge:
      "Generate consistent, affordable student and training enquiries for digital marketing courses across Facebook and Instagram.",
    execution: [
      "Built top-of-funnel awareness creatives (Reels + Carousels) and bottom-of-funnel Pixel retargeting.",
      "Configured Custom Audiences (website visitors, video viewers) and Lookalike Audiences.",
      "Ran continuous A/B tests across 3 creative variants and 2 audience segments with weekly CTR/CPC/CPL audits.",
    ],
    resultNote:
      "Historical campaign result (2 months): 200+ qualified leads generated with continuous CPL optimisation via Meta Business Suite.",
    gradient: "from-[#8B70F5] via-[#6C5CE7] to-[#5B6CFF]",
    accent: "#8B70F5",
  },
  {
    id: "proj-2",
    slug: "solitaire-infosys-instagram-growth",
    title: "Solitaire Infosys — Instagram Organic Growth",
    client: "Solitaire Infosys Pvt. Ltd.",
    category: "Growth Marketing & Automation",
    period: "Jan 2024 – Present",
    metricBadge: "150+ Leads at ₹0 CPL • 9,200+ Followers",
    summary:
      "Full organic growth and ManyChat DM automation funnel converting educational Reels and Story polls into qualified leads with zero ad spend.",
    challenge:
      "Establish strong regional brand recognition and drive steady inbound course enquiries organically without relying purely on paid media.",
    execution: [
      "Scaled the Instagram page to 9,200+ followers and 120,000+ monthly organic reach at ₹0 ad spend.",
      "Engineered funnel: educational Reels → story polls → link-in-bio CTA → ManyChat DM automation.",
      "Tracked follower growth, engagement rate, DM enquiry volume, and lead-to-enrolment conversion monthly.",
    ],
    resultNote:
      "Historical campaign result (6 months): 150+ qualified leads at ₹0 CPL and 120K+ monthly organic reach.",
    gradient: "from-[#5B6CFF] via-[#7C69EF] to-[#55D9EA]",
    accent: "#5B6CFF",
  },
  {
    id: "proj-3",
    slug: "stitchery-by-preet-brand-launch",
    title: "Stitchery by Preet — Digital Brand Launch",
    client: "@stitcherybypreet",
    category: "Brand Launch & ManyChat Automation",
    period: "2025 – Present",
    metricBadge: "85,000+ Month-1 Views (₹0 Ad Spend)",
    summary:
      "Zero-to-launch D2C handcrafted fashion digital presence combining visual identity, viral Reels calendars, and 24/7 ManyChat order automation.",
    challenge:
      "Launch a brand-new handcrafted fashion label from zero followers and zero initial ad budget while handling high DM enquiry volume.",
    execution: [
      "Created complete Instagram strategy, aesthetic visual identity, and trend-aligned Reel calendar.",
      "Deployed ManyChat comment-to-DM order flows, pricing auto-replies, story triggers, and keyword funnels.",
      "Captured 50,000+ organic reach and 85,000+ views in Month 1 with zero paid promotion.",
    ],
    resultNote:
      "Historical campaign result (Month 1): 85,000+ views, 50,000+ organic reach, and 24/7 automated order enquiry handling.",
    gradient: "from-[#EC4899] via-[#8B70F5] to-[#F58206]",
    accent: "#EC4899",
  },
  {
    id: "proj-4",
    slug: "daydream-epoxy-seo-campaign",
    title: "Daydream Epoxy — SEO Campaign",
    client: "Daydream Epoxy",
    category: "SEO & Organic Growth",
    period: "2026 – Present",
    metricBadge: "Technical Audit & Authority Backlinks",
    summary:
      "Full off-page and technical SEO execution resolving Google Search Console crawl blocks, optimising metadata, and acquiring contextual backlinks.",
    challenge:
      "Overcome unindexed pages and establish search visibility in competitive home renovation and epoxy flooring keywords.",
    execution: [
      "Conducted technical SEO audit resolving crawl errors, broken metadata hooks, and Core Web Vitals bottlenecks.",
      "Executed competitor keyword gap analysis using Ahrefs and SEMrush.",
      "Built authority backlinks and niche directory listings tracked month-over-month in Google Search Console.",
    ],
    resultNote:
      "Historical project scope: full crawl/indexing restoration and progressive month-on-month search visibility gains.",
    gradient: "from-[#39208C] via-[#8B70F5] to-[#55D9EA]",
    accent: "#39208C",
  },
  {
    id: "proj-5",
    slug: "tech-wealth-coach-youtube",
    title: "Tech Wealth Coach — YouTube Marketing",
    client: "@techwealthcoach",
    category: "Content Marketing & YouTube SEO",
    period: "2025 – Present",
    metricBadge: "69,800+ Impressions • 206% Growth (28 Days)",
    summary:
      "End-to-end YouTube channel production—AI & finance scripting, Premiere Pro/CapCut retention editing, custom thumbnails, and video SEO.",
    challenge:
      "Break through as a new creator in the competitive AI tools and personal finance niche without outbound paid promotion.",
    execution: [
      "Structured video edits around strong first-5-second retention hooks.",
      "Designed high-contrast custom thumbnails and SEO-optimised titles, descriptions, and tags.",
      "Tracked retention curves, CTR, and impression velocity inside YouTube Studio.",
    ],
    resultNote:
      "Historical campaign result (28-day window): 69,800+ impressions, 113+ watch hours, and 101 new subscribers (206% growth vs. prior period).",
    gradient: "from-[#F58206] via-[#8B70F5] to-[#39208C]",
    accent: "#F58206",
  },
];

export const CONCEPT_PROJECTS: ConceptProjectItem[] = [
  {
    id: "realestate",
    label: "Luxury Real Estate Website",
    industry: "Luxury Real Estate",
    title: "Aurelia Ridge Residences (Concept)",
    designLanguage: "Warm Limestone, Editorial Contrast & Private Viewing Funnel",
    description:
      "Conceptual architectural showcase crafted to position luxury hillside estates with private dossier downloads, plot availability clarity, and high-net-worth appointment booking.",
    ctaText: "Let's Build Your Real Estate Site",
  },
  {
    id: "ecommerce",
    label: "Premium E-commerce Website",
    industry: "Premium E-commerce",
    title: "Kora Atelier Storefront (Concept)",
    designLanguage: "Swiss Editorial Merchandising & High-AOV Product Cards",
    description:
      "Conceptual D2C storefront layout pairing tactile product storytelling, fast variant selection, and frictionless mobile checkout cues designed to boost conversion rate.",
    ctaText: "Let's Build Your Storefront",
  },
  {
    id: "education",
    label: "Education Institute Website",
    industry: "Education Institute",
    title: "Nalanda Digital Academy (Concept)",
    designLanguage: "Structured Academic Clarity & Cohort Admissions UI",
    description:
      "Conceptual institute platform highlighting mentor-led curriculum tracks, transparent intake timelines, and one-click syllabus enquiries for education brands.",
    ctaText: "Let's Build Your Academy Site",
  },
  {
    id: "startup",
    label: "Technology Startup Website",
    industry: "Technology Startup",
    title: "Veloce Revenue Cloud (Concept)",
    designLanguage: "Precision SaaS Interface & Interactive Telemetry Proof",
    description:
      "Conceptual B2B technology website featuring clean product architecture previews, integration status indicators, and high-intent demo request flows.",
    ctaText: "Let's Build Your SaaS Site",
  },
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "advertising",
    code: "A",
    title: "Advertising & Performance Marketing",
    subtitle: "Campaign execution, audience targeting, and conversion tracking integrations.",
    tools: [
      { name: "Meta Ads Manager", iconSlug: "meta", fallbackBadge: "MA" },
      { name: "Facebook Ads", iconSlug: "facebook", fallbackBadge: "FB" },
      { name: "Instagram Ads", iconSlug: "instagram", fallbackBadge: "IG" },
      { name: "Google Ads", iconSlug: "googleads", fallbackBadge: "GA" },
      { name: "Meta Pixel", iconSlug: "meta", fallbackBadge: "PX", note: "Implementation & integration tool" },
      { name: "Google Tag Manager", iconSlug: "googletagmanager", fallbackBadge: "GTM", note: "Implementation & integration tool" },
    ],
  },
  {
    id: "seo-analytics",
    code: "B",
    title: "SEO & Analytics",
    subtitle: "Technical crawl audits, keyword research, backlink analysis, and GA4 reporting.",
    tools: [
      { name: "Google Analytics 4", iconSlug: "googleanalytics", fallbackBadge: "GA4", note: "Google Certified (ID: 192846237)" },
      { name: "Google Search Console", iconSlug: "googlesearchconsole", fallbackBadge: "GSC" },
      { name: "SEMrush", iconSlug: "semrush", fallbackBadge: "SR" },
      { name: "Ahrefs", fallbackBadge: "AH" },
      { name: "Ubersuggest", fallbackBadge: "UB" },
      { name: "Yoast SEO", iconSlug: "yoast", fallbackBadge: "YS" },
    ],
  },
  {
    id: "automation",
    code: "C",
    title: "Marketing Automation",
    subtitle: "24/7 comment-to-DM funnels, story triggers, and conversational lead routing.",
    tools: [
      { name: "ManyChat", fallbackBadge: "MC", note: "3+ live brand pages" },
      { name: "Meta Business Suite", iconSlug: "meta", fallbackBadge: "MBS" },
      { name: "WhatsApp Marketing", iconSlug: "whatsapp", fallbackBadge: "WA" },
      { name: "n8n", iconSlug: "n8n", fallbackBadge: "n8n", note: "Learning & workflow exploration" },
    ],
  },
  {
    id: "ai",
    code: "D",
    title: "AI & Generative AI",
    subtitle: "Research workflows, copy acceleration, visual generation, and multimedia production.",
    tools: [
      { name: "ChatGPT", iconSlug: "openai", fallbackBadge: "GPT" },
      { name: "Claude AI", iconSlug: "anthropic", fallbackBadge: "CL" },
      { name: "Perplexity AI", iconSlug: "perplexity", fallbackBadge: "PX" },
      { name: "Microsoft Copilot", fallbackBadge: "CP" },
      { name: "Leonardo AI", fallbackBadge: "LA" },
      { name: "Runway", fallbackBadge: "RW" },
      { name: "ElevenLabs", iconSlug: "elevenlabs", fallbackBadge: "11L" },
    ],
  },
  {
    id: "creative",
    code: "E",
    title: "Design & Creative Production",
    subtitle: "Reels editing, thumbnails, brand visuals, and high-converting ad creatives.",
    tools: [
      { name: "Canva", iconSlug: "canva", fallbackBadge: "CV" },
      { name: "Adobe Premiere Pro", fallbackBadge: "PR" },
      { name: "CapCut", fallbackBadge: "CC" },
    ],
  },
  {
    id: "web-dev",
    code: "F",
    title: "Web Development",
    subtitle: "WordPress sites & modern frontend web development stack for Ad-Vridhi builds.",
    tools: [
      { name: "WordPress", iconSlug: "wordpress", fallbackBadge: "WP" },
      { name: "React", iconSlug: "react", fallbackBadge: "RE", note: "Website development stack" },
      { name: "Next.js", iconSlug: "nextdotjs", fallbackBadge: "NX", note: "Website development stack" },
      { name: "TypeScript", iconSlug: "typescript", fallbackBadge: "TS", note: "Website development stack" },
      { name: "Tailwind CSS", iconSlug: "tailwindcss", fallbackBadge: "TW", note: "Website development stack" },
    ],
  },
  {
    id: "deployment",
    code: "G",
    title: "Development & Deployment",
    subtitle: "Version control, production hosting, and agentic engineering workflow.",
    tools: [
      { name: "GitHub", iconSlug: "github", fallbackBadge: "GH", note: "Website development stack" },
      { name: "Vercel", iconSlug: "vercel", fallbackBadge: "VC", note: "Website development stack" },
      { name: "Google Antigravity", iconSlug: "google", fallbackBadge: "AGY", note: "Development workflow" },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand the business, audience psychology, offer economics, and existing acquisition gaps.",
    color: "from-[#8B70F5] to-[#5B6CFF]",
  },
  {
    step: "02",
    title: "Strategise",
    desc: "Develop a clear growth plan uniting creative messaging, channel mix, SEO, and automation.",
    color: "from-[#5B6CFF] to-[#55D9EA]",
  },
  {
    step: "03",
    title: "Design",
    desc: "Create the digital experience—conversion-first websites, landing pages, and thumb-stopping creatives.",
    color: "from-[#EC4899] to-[#8B70F5]",
  },
  {
    step: "04",
    title: "Execute",
    desc: "Launch Meta & Google campaigns, Reels calendars, technical SEO fixes, and ManyChat DM flows.",
    color: "from-[#F58206] to-[#FFB52E]",
  },
  {
    step: "05",
    title: "Optimise",
    desc: "Measure CTR, CPL, engagement, and GA4 conversion events weekly to eliminate waste.",
    color: "from-[#10B981] to-[#55D9EA]",
  },
  {
    step: "06",
    title: "Scale",
    desc: "Double down on proven winning audiences, organic formats, and automated pipelines.",
    color: "from-[#39208C] to-[#8B70F5]",
  },
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    slug: "manychat-instagram-funnels-zero-cpl",
    title: "How Comment-to-DM & ManyChat Funnels Turn Organic Reels Into Qualified Leads",
    category: "Instagram Automation",
    readTime: "4 min read",
    publishedAt: "2026-10-18",
    excerpt:
      "A practical breakdown of the Reels → Story CTA → Link-in-Bio → ManyChat DM nurture flow that helped capture 150+ organic leads at ₹0 CPL.",
    sections: [
      {
        heading: "Why Manual DM Replies Lose Warm Prospects",
        body: "When a viewer comments on a Reel asking for pricing, syllabus details, or a product link, every hour of delay lowers intent. Automated ManyChat keyword triggers respond instantly while context is fresh.",
      },
      {
        heading: "Structuring the 4-Step Organic Funnel",
        body: "Pair educational short-form Reels with clear comment keywords, interactive Story polls, and segmented DM branches that qualify buyer intent before handing off to WhatsApp or a consultation call.",
      },
    ],
  },
  {
    slug: "meta-ads-ab-testing-custom-audiences",
    title: "Structuring Multi-Stage Meta Ads With Pixel Retargeting & Creative A/B Tests",
    category: "Performance Marketing",
    readTime: "5 min read",
    publishedAt: "2026-10-04",
    excerpt:
      "How combining top-of-funnel Reels/Carousels with Custom & Lookalike Audiences lowers cost per lead and improves enquiry quality.",
    sections: [
      {
        heading: "Separate Awareness From Retargeting",
        body: "Blending cold prospecting and warm website-visitor retargeting in one ad set muddies attribution. Splitting top-of-funnel education from bottom-of-funnel conversion retargeting keeps CPL transparent.",
      },
      {
        heading: "Weekly Creative & Audience Cadence",
        body: "Testing 3 distinct creative variants across 2 focused audience segments allows fast pruning of fatigued hooks before wasted spend compounds.",
      },
    ],
  },
  {
    slug: "technical-seo-crawl-recovery-playbook",
    title: "Technical SEO Crawl Audits: Fixing Indexing Blocks Before Building Backlinks",
    category: "SEO & Analytics",
    readTime: "4 min read",
    publishedAt: "2026-09-21",
    excerpt:
      "Why off-page link building fails without clean Search Console indexing, structured metadata, and Core Web Vitals hygiene.",
    sections: [
      {
        heading: "Audit Indexing & Metadata First",
        body: "Before investing in directory submissions or contextual backlinks, inspect Google Search Console coverage, canonical tags, and page titles so search engines properly index core service pages.",
      },
      {
        heading: "Pair Keyword Gaps With Internal Links",
        body: "Competitor gap analysis in Ahrefs and SEMrush reveals high-intent commercial queries that dedicated service pages can target cleanly without keyword stuffing.",
      },
    ],
  },
];

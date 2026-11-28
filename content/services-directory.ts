import { services } from "@/content/services";

export interface DivisionDetailProfile {
  divisionId: string;
  whatItDoes: string;
  targetCustomers: string[];
  customerBenefits: string[];
  accentColor: "blue" | "cyan" | "emerald" | "orange";
}

export const divisionDetailProfiles: Record<string, DivisionDetailProfile> = {
  "business-corporate": {
    divisionId: "business-corporate",
    whatItDoes:
      "Handles company incorporation under Qatar Foreign Investment Law, statutory MOCI and Baladiya licensing, PRO clearance from Ain Khalid and Bin Mahmoud desks, attested translations, corporate banking and WPS files, and accounting governance.",
    targetCustomers: [
      "Foreign investors & entrepreneurs setting up in Qatar",
      "Growing SMEs requiring CR, Baladiya, and Civil Defense permits",
      "Companies needing ongoing PRO, visa, WPS, and Dhareeba tax compliance",
    ],
    customerBenefits: [
      "Single local partner covering licensing, PRO, banking, and audit coordination",
      "Two accessible Doha service desks in Ain Khalid and Bin Mahmoud",
      "Structured compliance aligned with MOCI, MOI, MADLSA, and GTA regulations",
    ],
    accentColor: "blue",
  },
  "digital-creative": {
    divisionId: "digital-creative",
    whatItDoes:
      "Designs corporate brand identities, builds responsive Arabic/English websites and e-commerce stores integrated with Qatari payment gateways, and executes SEO, performance ads, social media management, and commercial video/AI content production.",
    targetCustomers: [
      "New businesses establishing their brand identity and website in Qatar",
      "Retail and e-commerce operators needing QNB/SkipCash/Dibsy checkout",
      "Enterprises seeking ongoing SEO, social media, and campaign retainers",
    ],
    customerBenefits: [
      "Cohesive digital presence uniting branding, web engineering, and marketing",
      "Bilingual English and Arabic (RTL) market readiness",
      "Predictable weekly and monthly retainer support tailored to business goals",
    ],
    accentColor: "orange",
  },
  "trading-supply": {
    divisionId: "trading-supply",
    whatItDoes:
      "Sources and supplies retail, wholesale, lifestyle, automotive spare parts, and locally crafted Qatar fragrance collections while coordinating bulk overseas procurement, sea/air freight, and Al Nadeeb customs clearance into Doha.",
    targetCustomers: [
      "Hypermarkets, department stores, and retail chains across Qatar",
      "Commercial fleet operators and maintenance workshops needing spare parts",
      "Enterprises requiring bulk overseas procurement from China, India, and UAE",
    ],
    customerBenefits: [
      "Direct sourcing supported by Pathas Group corridors across Qatar, India, UAE, and China",
      "Consolidated freight forwarding, customs clearance, and local warehousing",
      "Dependable replenishment schedules for retail and commercial buyers",
    ],
    accentColor: "emerald",
  },
  "facility-maintenance": {
    divisionId: "facility-maintenance",
    whatItDoes:
      "Delivers commercial and residential facility management, hospital-grade cleaning and Ministry-approved pest control, gypsum board and glass office partitions, Kahramaa-compliant electrical and plumbing works, surface polishing, and structured Annual Maintenance Contracts.",
    targetCustomers: [
      "Commercial office buildings, corporate towers, and hospitality venues",
      "Residential compounds, private villas, and facility operators",
      "Workplaces requiring custom drywall or tempered glass fit-outs",
    ],
    customerBenefits: [
      "Preventive AMC schedules plus 24/7 rapid-response emergency dispatch",
      "Municipality-compliant cleaning, pest management, and MEP maintenance",
      "Single point of accountability protecting long-term property condition",
    ],
    accentColor: "cyan",
  },
  automotive: {
    divisionId: "automotive",
    whatItDoes:
      "Provides self-contained mobile car wash and interior detailing vans delivered directly to homes and offices, Prime Glass optical resin windshield chip repair, OEM-grade windshield replacement, and scheduled corporate fleet care.",
    targetCustomers: [
      "Private vehicle owners across Doha, Al Rayyan, Al Wakrah, and Lusail",
      "Corporate fleet managers, delivery operators, and rental agencies",
      "Executive transport and limousine operators requiring consistent presentation",
    ],
    customerBenefits: [
      "Zero utility hookup needed — mobile units carry onboard deionized water and silent power",
      "Saves time by servicing vehicles on-site at residential or workplace parking",
      "Backed by fleet operations insight alongside sister company aapco Limousine W.L.L.",
    ],
    accentColor: "orange",
  },
};

export const directoryCategories = [
  { id: "all", label: "All Services", filterLabel: "All Services" },
  { id: "business-corporate", label: "Business & Corporate", filterLabel: "Business & Corporate" },
  { id: "digital-creative", label: "Digital & Creative", filterLabel: "Digital & Creative" },
  { id: "trading-supply", label: "Trading & Supply", filterLabel: "Trading & Supply" },
  { id: "facility-maintenance", label: "Facility Management", filterLabel: "Facility Management" },
  { id: "automotive", label: "Automotive & Car Care", filterLabel: "Automotive & Car Care" },
] as const;

export const totalCatalogServiceCount = services.reduce(
  (sum, division) => sum + division.subServices.length,
  0
);

export const workflowSteps = [
  {
    step: "01",
    title: "Submit Your Enquiry",
    description:
      "Share your business goals, target division, and required scope through our online form, phone, or WhatsApp desk.",
  },
  {
    step: "02",
    title: "Consultation & Requirement Assessment",
    description:
      "Our relevant division specialist reviews your regulatory, operational, or technical requirements and site conditions.",
  },
  {
    step: "03",
    title: "Proposal & Quotation",
    description:
      "Receive a clear scope breakdown, timeline, deliverables, and transparent commercial quotation before work begins.",
  },
  {
    step: "04",
    title: "Service Execution",
    description:
      "Our assigned corporate, digital, procurement, facility, or mobile automotive team executes according to the agreed schedule.",
  },
  {
    step: "05",
    title: "Follow-up & Support",
    description:
      "Post-delivery verification, documentation handover, ongoing maintenance, or retainer support from our Doha offices.",
  },
] as const;

export const verifiedIndustries = [
  {
    id: "startups-corporates",
    title: "Startups, Investors & Corporate Offices",
    description:
      "MOCI company formation, CR & municipal licensing, PRO visa workflows, translations, accounting, and commercial branding.",
    divisionHref: "/services/business-corporate",
  },
  {
    id: "retail-hypermarkets",
    title: "Retail Chains, Department Stores & Hypermarkets",
    description:
      "Wholesale merchandising, FMCG replenishment, lifestyle goods, local fragrances, and e-commerce storefront development.",
    divisionHref: "/services/trading-supply",
  },
  {
    id: "real-estate-hospitality",
    title: "Commercial Properties, Residential Compounds & Hospitality",
    description:
      "Turnkey facility supervision, deep sanitization, municipality-approved pest control, MEP maintenance, and AMC programs.",
    divisionHref: "/services/facility-maintenance",
  },
  {
    id: "logistics-procurement",
    title: "Import, Export & Commercial Supply Chains",
    description:
      "Overseas factory sourcing across India, UAE, and China alongside sea/air freight and Al Nadeeb customs clearance.",
    divisionHref: "/services/trading-supply",
  },
  {
    id: "automotive-fleets",
    title: "Corporate Fleets, Limousines & Private Vehicles",
    description:
      "Scheduled on-site fleet washing, mobile interior detailing, optical windshield chip repair, and OEM glass replacement.",
    divisionHref: "/services/automotive",
  },
  {
    id: "growing-brands",
    title: "E-Commerce & Digital-First Brands",
    description:
      "Performance SEO, bilingual Arabic/English web engineering, social media management, and commercial video production.",
    divisionHref: "/services/digital-creative",
  },
] as const;

export const servicesPageFaqs = [
  {
    question: "What are BizLink Qatar's five main business divisions?",
    answer:
      "BizLink operates across five specialized divisions: Business & Corporate Solutions, Digital & Creative Solutions, Trading & Supply Solutions, Facility Management & Maintenance, and Automotive & Mobile Car Care.",
  },
  {
    question: "How many individual services are available across the five divisions?",
    answer: `Across our five divisions, BizLink lists ${totalCatalogServiceCount} structured service capabilities spanning company formation and PRO clearing, digital marketing and web development, wholesale procurement and logistics, facility engineering and AMC maintenance, and mobile automotive and auto glass care.`,
  },
  {
    question: "Where does BizLink provide its services and where are your offices located?",
    answer:
      "Our teams serve clients across Doha and municipalities throughout Qatar (including Al Rayyan, Al Wakrah, and Lusail). We operate a Corporate Head Office in Souq Naif, Ain Khalid (Building #43) and a Typing & PRO Centre in Bin Mahmoud, Al Jazeera Street (Building #28). Through Pathas Group of Companies, our trading network spans Qatar, India, UAE, and China.",
  },
  {
    question: "How do I request a quotation for a specific service or division?",
    answer:
      "You can select your division and required service using the enquiry form at the bottom of this page, or contact our team directly on +974 5009 1006, via WhatsApp (+974 3000 3916), or by email at info@bizlinkqatar.com.",
  },
  {
    question: "Can we engage BizLink for custom packages or services across multiple divisions?",
    answer:
      "Yes. Many businesses combine services across divisions — for example, company formation under Business & Corporate paired with website development under Digital & Creative, or office interior partitions under Facility Management. Mention your combined scope in the enquiry form so our coordinators can route it accurately.",
  },
  {
    question: "Can I contact an individual division directly?",
    answer:
      "Yes. Each division card and detailed section links to its dedicated division page (/services/[slug]) with WhatsApp consultation links pre-filled for that division's team, and you can select any specific division directly in our enquiry form.",
  },
  {
    question: "Are services available on one-time requests as well as ongoing contracts?",
    answer:
      "Yes. Depending on the service, BizLink supports both single engagements (such as CR incorporation, single-vehicle mobile car wash/glass repair, or website builds) and recurring retainers or Annual Maintenance Contracts (monthly digital retainers, scheduled commercial cleaning, MEP AMC, and fleet washing agreements).",
  },
] as const;

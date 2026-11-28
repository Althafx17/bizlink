export interface SubService {
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  deliverables: string[];
  compliance?: string;
  badge?: string;
}

export interface ServiceDivision {
  id: string;
  number: string;
  anchor: string;
  title: string;
  name: string;
  tagline: string;
  highlight: string;
  description: string;
  imageCard: string;
  brochureMainImage: string;
  iconName: "building" | "monitor" | "truck" | "wrench" | "car";
  items: string[];
  brochurePage: string;
  brochureIntro: string;
  brochureCommitment: string;
  whatsappMessage: string;
  subServices: SubService[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: readonly ServiceDivision[] = [
  {
    id: "business-corporate",
    number: "01",
    anchor: "business",
    title: "Business & Corporate Solutions",
    name: "Business & Corporate",
    tagline: "Simplifying Business. Supporting Growth. Creating Opportunities.",
    highlight: "Your Business Journey, Made Simple WithUs",
    description: "Corporate Licensing, PRO Services & Compliance",
    imageCard: "/images/services/business and cooperate.jpg",
    brochureMainImage: "/images/services/brochure/business-corporate-main.jpg",
    iconName: "building",
    brochurePage: "www.bizlinkqatar.com 03",
    brochureIntro:
      "Starting and managing a business in Qatar requires the right guidance, documentation and professional support. BizLink provides comprehensive business and corporate services to help entrepreneurs, investors and companies establish and manage their operations efficiently. From company formation to government documentation, our team provides practical assistance throughout the business journey.",
    brochureCommitment:
      "We simplify regulatory workflows and eliminate bureaucratic friction, giving founders and multinational enterprises complete confidence from incorporation through ongoing governance.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to consult with your Business & Corporate Services team regarding company formation and commercial licensing in Qatar.",
    items: [
      "Business Consulting & Company Formation",
      "CR, Licensing & Government Services",
      "Qatari Sponsor Arrangements",
      "Typing, PRO & Documentation Services",
      "Translation & Attestation",
      "Bank Account & WPS Assistance",
      "Auditing & Bookkeeping",
      "E-Commerce & Online Business Setup",
    ],
    subServices: [
      {
        id: "company-formation",
        title: "Business Consulting & Company Formation",
        tagline: "100% Foreign Ownership & LLC Incorporation",
        image: "/images/about/luxury_boardroom_skyline.jpg",
        description:
          "Comprehensive corporate structuring under Qatar Foreign Investment Law No. 1 of 2019. We advise on optimal legal vehicles—Limited Liability Companies (W.L.L./LLC), Sole Proprietorships, Branch of Foreign Companies, Trade Representative Offices, and Free Zone entities (QFZ, QFC, Manateq). From initial feasibility and trade name reservation to drafting Articles of Association (AOA) authenticated at the Ministry of Justice.",
        deliverables: [
          "Commercial trade name registration at MOCI",
          "Articles of Association (AOA) drafting & bilingual notarization",
          "100% foreign-owned structure or Joint Venture advisory",
          "Free Zone (QFZ / QFC) vs. Mainland regulatory comparison",
          "Commercial Registration (CR) certificate issuance",
        ],
        compliance: "Ministry of Commerce and Industry (MOCI) & Ministry of Justice Compliant",
        badge: "Core Service",
      },
      {
        id: "cr-licensing",
        title: "CR, Licensing & Government Services",
        tagline: "Commercial Registration & Municipality Licensing",
        image: "/images/about/doha-corporate.webp",
        description:
          "End-to-end processing of statutory permits required to trade legally in Qatar. We secure the Commercial Registration (Sijil Tijari), Municipal Trade License (Ruksa Tijariya from Baladiya), Civil Defense inspection approval (QCDD), commercial signage permits, and sector-specific approvals from the Ministry of Public Health or Ministry of Education.",
        deliverables: [
          "Commercial Register (CR) extraction and official activity codes",
          "Municipal license (Baladiya) premises inspection coordination",
          "Qatar Civil Defense Department (QCDD) fire safety clearance",
          "Commercial signage permits and bilingual storefront compliance",
          "Annual license renewals and commercial activity expansions",
        ],
        compliance: "Ministry of Municipality (Baladiya) & Civil Defense Approved",
      },
      {
        id: "qatari-sponsorship",
        title: "Qatari Sponsor Arrangements",
        tagline: "Corporate Nominee & Secure Local Partnerships",
        image: "/images/about/executive_handshake_expanded.webp",
        description:
          "For commercial activities requiring local participation, BizLink arranges vetted, reputable Qatari individual and corporate partners. We implement robust, legally binding side agreements and powers of attorney (POA) drafted by certified legal counsel to guarantee that day-to-day operational control, management authority, and 100% financial profits remain securely with the investor.",
        deliverables: [
          "Vetted individual or corporate Qatari nominee partner introduction",
          "Ironclad side agreements and power of attorney protections",
          "100% investor operational control & bank signatory governance",
          "Nominee exit mechanisms and dispute resolution structuring",
          "Annual partnership retainer management with zero operational interference",
        ],
        compliance: "Commercial Companies Law of Qatar Compliant",
      },
      {
        id: "typing-pro-services",
        title: "Typing, PRO & Documentation Services",
        tagline: "Government Liaison at Bin Mahmoud & Ain Khalid Desks",
        image: "/images/services/bizlink professional.jpg",
        description:
          "Full-spectrum Public Relations Officer (PRO) operations handled by our licensed government liaison teams. Operating from our Ain Khalid Head Office and Bin Mahmoud Typing Centre, we process work residency permits, family visas, labour contract submissions on the Ministry of Labour portal, Hamad Health Cards, medical commission appointments, and CID fingerprinting clearances.",
        deliverables: [
          "Work Residence Permits (RP) issuance, transfer, and renewals",
          "Labour contract typing and submission via MADLSA portal",
          "Investor, executive, and dependent family visa processing",
          "Medical commission appointments and CID biometric scheduling",
          "Computer Card (Establishment Card) issuance and renewals",
        ],
        compliance: "Ministry of Interior (MOI) & Ministry of Labour (MADLSA)",
        badge: "High Demand",
      },
      {
        id: "translation-attestation",
        title: "Translation & Attestation",
        tagline: "Ministry of Foreign Affairs & Consular Legalization",
        image: "/images/services/sub-services/translation-attestation.jpg",
        description:
          "Sworn, certified legal translations in Arabic, English, French, Hindi, and Urdu recognized by all Qatar ministries, courts, and embassies. We manage the complete attestation chain for foreign personal and corporate documents—including educational degrees, marriage certificates, board resolutions, certificates of incumbency, and powers of attorney.",
        deliverables: [
          "Ministry of Foreign Affairs (MOFA Qatar) attestation stamps",
          "Bilingual certified court-grade legal translations",
          "Embassies and consulates legalization in Doha",
          "Qatar Chamber of Commerce commercial document verification",
          "Apostille validation for Hague convention certificates",
        ],
        compliance: "Recognized by Supreme Judiciary Council & Qatar Courts",
      },
      {
        id: "bank-wps-assistance",
        title: "Bank Account & WPS Assistance",
        tagline: "Wage Protection System & Corporate Banking",
        image: "/images/services/service boss bizlink.jpg",
        description:
          "Direct assistance navigating Qatar's stringent corporate banking compliance. We compile and vet comprehensive Know-Your-Customer (KYC) dossiers for corporate account opening at premier institutions including QNB, Commercial Bank, and Doha Bank. Furthermore, we configure and maintain monthly Wage Protection System (WPS) compliance via validated Salary Information File (SIF) generation.",
        deliverables: [
          "Corporate bank account dossier preparation and executive introductions",
          "WPS system configuration and compliant SIF file generation",
          "Monthly salary processing support to avert labour ministry blocks",
          "Corporate debit/credit card and merchant account facilitation",
          "Corporate escrow account advisory for specialized transactions",
        ],
        compliance: "Qatar Central Bank (QCB) & Ministry of Labour WPS Mandate",
      },
      {
        id: "auditing-bookkeeping",
        title: "Auditing & Bookkeeping",
        tagline: "General Tax Authority (GTA) & Dhareeba Compliance",
        image: "/images/services/sub-services/auditing-bookkeeping.jpg",
        description:
          "Certified financial record keeping, monthly management accounts, VAT readiness, and tax return filing with Qatar's General Tax Authority (GTA) via the Dhareeba digital tax portal. We partner with licensed Qatari audit firms to deliver annual audited financial statements compliant with International Financial Reporting Standards (IFRS).",
        deliverables: [
          "Dhareeba tax portal registration and Tax Card issuance",
          "Quarterly bookkeeping and financial statement compilation (IFRS)",
          "Annual corporate income tax return filing with GTA",
          "Independent certified audit liaison and management letters",
          "Withholding tax (WHT) assessments and contract reporting",
        ],
        compliance: "General Tax Authority (GTA) Dhareeba Compliant",
      },
      {
        id: "ecommerce-setup",
        title: "E-Commerce & Online Business Setup",
        tagline: "Digital Commercial Licensing & Merchant Payment Gateways",
        image: "/images/services/sub-services/ecommerce-setup.jpg",
        description:
          "Specialized licensing pathways for online storefronts, digital service apps, and marketplace platforms operating in Qatar. We obtain the required MOCI e-commerce commercial activity approvals, draft bilingual terms of service compliant with Qatar Consumer Protection laws, and coordinate merchant integration with Qatar payment gateways (SkipCash, Dibsy, QNB E-Gateway).",
        deliverables: [
          "MOCI E-Commerce commercial activity licensing registration",
          "Merchant account application with local Qatari payment gateways",
          "Consumer Protection law-compliant terms, privacy and refund policies",
          "Digital trust mark and Qatar domain (.qa) corporate allocation",
          "Integration documentation for courier logistics and fulfillment APIs",
        ],
        compliance: "Ministry of Commerce and Industry E-Commerce Mandate",
      },
    ],
    process: [
      {
        step: "01",
        title: "Strategic Consultation & Scope Review",
        description: "We analyze your business activities, ownership structure, and Qatar legal requirements to determine the optimal licensing route.",
      },
      {
        step: "02",
        title: "Documentation & Pre-Approvals",
        description: "Drafting the Articles of Association, reserving the trade name, and submitting preliminary dossiers to MOCI and Baladiya.",
      },
      {
        step: "03",
        title: "Statutory Approvals & Inspections",
        description: "Liaison with Civil Defense, municipal inspectors, and Ministry of Justice to secure the Commercial Registration (CR) and Trade License.",
      },
      {
        step: "04",
        title: "Operational Handover & Bank Setup",
        description: "Delivery of the Establishment Card, Chamber of Commerce certificate, corporate bank opening assistance, and ongoing PRO onboarding.",
      },
    ],
    faqs: [
      {
        question: "Can a foreign national own 100% of a company in Qatar?",
        answer:
          "Yes. Under Qatar Foreign Investment Law No. 1 of 2019, foreign investors can own up to 100% of the capital in most economic sectors—including trading, manufacturing, services, consulting, IT, and contracting—subject to MOCI approval. BizLink facilitates this complete 100% foreign-ownership incorporation process.",
      },
      {
        question: "How long does it take to obtain a Commercial Registration (CR) and Trade License?",
        answer:
          "With BizLink's accelerated workflow, a preliminary Commercial Registration (CR) is typically extracted within 2 to 4 working days once documentation is authenticated. The full municipal Trade License (Ruksa) follows in 5 to 8 working days, depending on premises inspection.",
      },
      {
        question: "What is the Wage Protection System (WPS) and is it mandatory?",
        answer:
          "The Wage Protection System (WPS) is a mandatory electronic salary transfer system overseen by the Ministry of Labour and Qatar Central Bank. All companies in Qatar must pay their employees through approved Qatari banks using official SIF files. BizLink configures and handles your monthly WPS compliance.",
      },
      {
        question: "Where are BizLink's PRO and typing offices located?",
        answer:
          "BizLink operates two strategic locations in Doha: our Corporate Head Office in Souq Naif, Ain Khalid (Office #164), and our dedicated Government Services & Typing Centre in Bin Mahmoud on Al Jazeera Street (Building #28).",
      },
    ],
  },
  {
    id: "digital-creative",
    number: "02",
    anchor: "digital",
    title: "Digital & Creative Solutions",
    name: "Digital & Creative",
    tagline: "Building Brands. Connecting Audiences. Growing Businesses.",
    highlight: "Grow Your Brand, With BizLink",
    description: "Digital Marketing, Web Development & Brand Identity",
    imageCard: "/images/services/bizlink digital service.jpg",
    brochureMainImage: "/images/services/brochure/digital-creative-main.webp",
    iconName: "monitor",
    brochurePage: "www.bizlinkqatar.com 04",
    brochureIntro:
      "In today's competitive digital environment, a strong online presence is essential for business growth. BizLink provides creative and digital solutions that help businesses establish their identity, connect with customers and strengthen their market presence. From branding and content creation to website development and digital marketing, we deliver solutions designed around your business objectives.",
    brochureCommitment:
      "Grow Your Brand, With BizLink. We engineer data-driven digital infrastructure and high-impact creative storytelling that elevates your market valuation and customer acquisition.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to consult with your Digital & Creative team regarding web development, branding, or performance marketing in Doha.",
    items: [
      "Digital Marketing & SEO",
      "Content Creation & Ai Video",
      "Website & E Commerce Development",
      "Branding & Graphic Design",
      "Social Media Management",
      "Weekly & Monthly Digital Packages",
    ],
    subServices: [
      {
        id: "digital-marketing-seo",
        title: "Digital Marketing & SEO",
        tagline: "Google Rankings & High-ROI Performance Campaigns",
        image: "/images/services/sub service/DEGITAL MARKETING.jpg",
        description:
          "Targeted search engine optimization and digital ad campaigns designed for the Qatar and GCC markets. We optimize your web infrastructure for local bilingual searches (Arabic and English), dominate Google Map Pack results, and run high-conversion Google Ads (Search, Display, Performance Max) that generate verified commercial sales inquiries.",
        deliverables: [
          "Bilingual Arabic/English technical & on-page SEO optimization",
          "Google Business Profile (Maps) local ranking optimization",
          "Google Ads PPC campaign setup, negative keyword pruning & management",
          "Competitor keyword gap analysis in Qatar market",
          "Monthly transparent ranking, impressions, and conversion analytics",
        ],
        compliance: "Google Certified Partner Standards",
        badge: "Growth Engine",
      },
      {
        id: "content-ai-video",
        title: "Content Creation & Ai Video",
        tagline: "4K Commercial Video Production & Motion Graphics",
        image: "/images/services/sub service/Digital & Creative Solutions 1.jpg",
        description:
          "Cinematic commercial storytelling that stops the scroll. Our creative media team produces 4K promotional brand videos, on-site industrial photography, corporate boardroom shoots, product showcases, and dynamic motion graphics. Enhanced with generative AI video techniques for rapid turnaround and creative effects.",
        deliverables: [
          "On-location 4K video filming and drone aerial cinematography",
          "High-impact vertical reels and TikTok videos with motion captions",
          "Native Arabic and English professional voiceover recording",
          "Color grading, sound design, and 3D motion graphics bumpers",
          "Commercial product photography catalog and high-res retouching",
        ],
        compliance: "Broadcast-Quality 4K / HDR Production Standards",
      },
      {
        id: "web-ecommerce-development",
        title: "Website & E Commerce Development",
        tagline: "Ultra-Fast Modern Web Applications & E-Stores",
        image: "/images/services/sub service/Digital & Creative Solutions 2.jpg",
        description:
          "Custom enterprise web architecture engineered for speed, mobile responsiveness, and high conversion. Built using industry-leading modern stacks including Next.js, React, Tailwind CSS, and headless commerce. Featuring lightning-fast server-rendered performance, bank-grade SSL security, and seamless Qatari payment gateway integrations.",
        deliverables: [
          "Bespoke mobile-first UX/UI design prototyped in Figma",
          "Production Next.js / React web development with 95+ PageSpeed scores",
          "Qatar payment gateway integration (QNB, SkipCash, Dibsy, Stripe)",
          "Bilingual Arabic (RTL) and English (LTR) seamless layout switcher",
          "Enterprise content management system (CMS) with full staff training",
        ],
        compliance: "W3C Web Standards & OWASP Security Architecture",
        badge: "Flagship",
      },
      {
        id: "branding-graphic-design",
        title: "Branding & Graphic Design",
        tagline: "Corporate Identity Systems & Packaging",
        image: "/images/services/biz link digitial services.jpg",
        description:
          "Comprehensive brand development that positions your business ahead of competitors. We create unforgettable logo marks, cohesive visual identities, brand typography, color palettes, luxury business cards, company profiles, vehicle fleet wraps, and retail packaging that commands prestige.",
        deliverables: [
          "Primary and secondary vector logo marks with responsive variants",
          "Complete Brand Identity Guidelines PDF (Color, Typography, Rules)",
          "Corporate stationery suite (Business Cards, Letterheads, Envelopes)",
          "Company profile brochure design (Print-ready & Interactive PDF)",
          "Uniform embroidery designs, building signage, and fleet livery wraps",
        ],
        compliance: "Registered Trademark Specifications",
      },
      {
        id: "social-media-management",
        title: "Social Media Management",
        tagline: "Strategic Presence on Instagram, TikTok & LinkedIn",
        image: "/images/services/sub-services/social-media-management.jpg",
        description:
          "Full-funnel organic and paid social management designed to build authentic authority in Qatar. We craft tailored monthly content calendars, write engaging culturally tuned copy in Arabic and English, manage active community interactions, and deploy hyper-targeted ads across Instagram, TikTok, LinkedIn, and Facebook.",
        deliverables: [
          "Monthly content strategy and 16-24 custom-designed feed & story assets",
          "Professional bilingual Arabic/English copy and hashtag architecture",
          "Community moderation, direct message triage, and audience engagement",
          "Influencer collaboration outreach and event live coverage in Doha",
          "Quarterly growth dashboards with follower sentiment analytics",
        ],
        compliance: "GCC Advertising Standards & Brand Safety Guidelines",
      },
      {
        id: "digital-retainer-packages",
        title: "Weekly & Monthly Digital Packages",
        tagline: "Continuous Growth & Dedicated Account Management",
        image: "/images/about/philosophy-detail.webp",
        description:
          "Turnkey digital department retainers for growing businesses in Qatar. We bundle ongoing website maintenance, weekly SEO updates, continuous social media publishing, periodic video shoots, and executive strategic reviews into one predictable, cost-effective monthly investment.",
        deliverables: [
          "Dedicated Qatar-based digital account manager and Slack/WhatsApp channel",
          "Guaranteed content production volume and publishing cadence",
          "24/7 website uptime, security patch monitoring, and content updates",
          "Bi-weekly performance review calls with actionable growth milestones",
          "Discounts on ad hoc creative shoots, print collateral, and software dev",
        ],
        compliance: "Service Level Agreement (SLA) Guarantee",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Discovery & Competitor Audit",
        description: "We analyze your audience demographic in Qatar, audit current digital channels, and benchmark top competitors across the GCC.",
      },
      {
        step: "02",
        title: "Creative Strategy & Architecture",
        description: "Drafting the creative brief, design wireframes, content calendars, and technical specifications for executive sign-off.",
      },
      {
        step: "03",
        title: "Production & Agile Development",
        description: "High-definition video filming, graphics authoring, clean-code web development, and rigorous QA testing across mobile and desktop.",
      },
      {
        step: "04",
        title: "Launch, Measurement & Growth",
        description: "Deployment to live servers, campaign launch, real-time conversion monitoring, and continuous iterative performance tuning.",
      },
    ],
    faqs: [
      {
        question: "Do you build bilingual Arabic and English websites?",
        answer:
          "Yes, every website we engineer for the Qatar market is built from the ground up to support native Right-to-Left (RTL) Arabic typography alongside Left-to-Right (LTR) English, with instant language toggling and localized UI elements.",
      },
      {
        question: "Which payment gateways do you integrate for Qatar e-commerce?",
        answer:
          "We integrate all major Qatar-compliant payment providers including QNB E-Commerce Gateway, SkipCash, Dibsy, and international gateways like Stripe and PayPal, ensuring seamless local debit/credit card (NAPS) processing.",
      },
      {
        question: "How long does a full corporate rebrand take?",
        answer:
          "A comprehensive brand identity project—including logo design, typography, brand guidelines, stationery, and digital templates—typically spans 2 to 3 weeks from kickoff to final vector and guideline delivery.",
      },
      {
        question: "What is included in the monthly digital retainer packages?",
        answer:
          "Our monthly packages combine social media content production, bilingual copywriting, community moderation, regular SEO auditing, monthly video/photo shoots, and website security maintenance under one predictable fee.",
      },
    ],
  },
  {
    id: "trading-supply",
    number: "03",
    anchor: "trading",
    title: "Trading & Supply Solutions",
    name: "Trading & Supply",
    tagline: "Quality Products. Reliable Supply, Business Excellence.",
    highlight: "Quality Products. Reliable Supply, Business Excellence.",
    description: "Wholesale Distribution, Procurement & Fragrances",
    imageCard: "/images/services/trading-supply-card.webp",
    brochureMainImage: "/images/services/brochure/trading-supply-main.webp",
    iconName: "truck",
    brochurePage: "www.bizlinkqatar.com 05",
    brochureIntro:
      "BizLink provides diverse trading and supply solutions to meet the requirements of retailers, wholesalers, businesses and commercial organizations across Qatar. Our trading operations focus on product variety, dependable sourcing, efficient procurement and flexible supply solutions.",
    brochureCommitment:
      "We focus on quality sourcing, competitive supply solutions and dependable business relationships to support the evolving needs of our customers.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to inquire about your Trading & Supply Solutions, wholesale procurement, or Made-in-Qatar luxury perfumes.",
    items: [
      "General, Retail & Wholesale Trading",
      "Bulk Procurement & Cargo Services",
      "Department Store & Lifestyle Products",
      "Own Brand Perfumes & Fragrances",
      "Vehicle Spare Parts",
      "Retail, Wholesale & Hypermarket Supply",
    ],
    subServices: [
      {
        id: "general-wholesale-trading",
        title: "General, Retail & Wholesale Trading",
        tagline: "High-Volume Commodity & Commercial Distribution",
        image: "/images/about/trading-hub.webp",
        description:
          "Large-scale wholesale procurement and supply across fast-moving consumer goods (FMCG), institutional provisions, and commercial merchandise. Direct relationships with tier-1 manufacturers in India, UAE, and China allow us to deliver superior volume pricing, consistent batch quality, and scheduled warehouse replenishment across Qatar.",
        deliverables: [
          "Direct manufacturer procurement and containerized import logistics",
          "Wholesale bulk pricing tiers for commercial resellers and retailers",
          "Hamad Port customs clearance and climate-controlled warehousing",
          "Scheduled inventory replenishment routes throughout Greater Doha",
          "Credit terms and formal supply agreements for institutional clients",
        ],
        compliance: "Ministry of Commerce and Industry Wholesale Trading Licensed",
        badge: "High Volume",
      },
      {
        id: "bulk-procurement-cargo",
        title: "Bulk Procurement & Cargo Services",
        tagline: "International Sourcing, Sea/Air Freight & Customs",
        image: "/images/services/trading and supplay video image.jpg",
        description:
          "Global freight forwarding and procurement operations linking Qatar with key trade hubs in China, India, and the UAE. We manage full-container load (FCL), less-than-container load (LCL), air cargo handling, customs inspection, tariff classification, and final bonded delivery to your warehouse door.",
        deliverables: [
          "FCL & LCL sea freight coordination through Hamad Port",
          "Express air cargo handling via Hamad International Airport",
          "Qatar Single Window (Al Nadeeb) customs clearance and duty processing",
          "Certificate of Origin and commercial invoice legalization",
          "Last-mile secure transport and heavy cargo offloading across Qatar",
        ],
        compliance: "General Authority of Customs (Al Nadeeb) Verified",
        badge: "Global Network",
      },
      {
        id: "department-lifestyle",
        title: "Department Store & Lifestyle Products",
        tagline: "Curated Retail Goods & Consumer Merchandise",
        image: "/images/sister-companies/pathas-gallery-bg.webp",
        description:
          "End-to-end supply chain for hypermarkets, department stores, and lifestyle boutiques. We curate and deliver high-demand consumer goods—including home accessories, personal lifestyle products, giftware, and seasonal merchandise—packaged with full barcode compliance and shelf-ready presentation.",
        deliverables: [
          "Curated lifestyle catalog aligned with Qatar consumer demand",
          "Shelf-ready packaging, bilingual labeling, and barcode application",
          "Consignment and direct wholesale procurement arrangements",
          "Seasonal holiday and Ramadan retail merchandise collections",
          "Quality inspection and damaged-goods replacement guarantees",
        ],
        compliance: "Qatar Standards and Metrology Conformity",
      },
      {
        id: "perfumes-fragrances",
        title: "Own Brand Perfumes & Fragrances",
        tagline: "Made in Qatar Luxury Scents (6ml – 50ml)",
        image: "/images/services/brochure/trading-fragrances.webp",
        description:
          "Artisanal perfume creation, custom fragrance blending, and private-label bottling manufactured locally in Qatar. From concentrated Oriental attar oils (6ml / 12ml) to luxury French-style Eau de Parfum sprays (50ml / 100ml). Featuring premium olfactory notes of aged Cambodian oud, amber, Taif rose, musk, and bergamot.",
        deliverables: [
          "Custom fragrance profile blending and olfactory formulation",
          "Made-in-Qatar luxury retail collections (6ml, 12ml, 50ml, 100ml)",
          "Bespoke crystal bottle design, custom atomizers, and gift box packaging",
          "Private-label corporate gifting and VIP signature fragrance development",
          "Retail distribution across hypermarkets, duty-free, and luxury boutiques",
        ],
        compliance: "IFRA (International Fragrance Association) & MOCI Approved",
        badge: "Crafted in Qatar",
      },
      {
        id: "vehicle-spare-parts",
        title: "Vehicle Spare Parts",
        tagline: "Commercial Fleet Components & Mechanical Spares",
        image: "/images/sister-companies/pathas-imports-bg.webp",
        description:
          "Specialized sourcing of certified OEM and quality aftermarket automotive replacement parts for transport companies, limousine operators, delivery fleets, and repair centers. We stock critical maintenance components—including brake pads, suspension parts, filters, batteries, and synthetic lubricants.",
        deliverables: [
          "OEM-certified and ISO-compliant aftermarket replacement parts",
          "Commercial fleet maintenance supply contracts with volume discounts",
          "Express same-day delivery for emergency vehicle breakdown parts",
          "Battery and lubricant bulk supply for industrial transport hubs",
          "Parts compatibility verification by certified automotive specialists",
        ],
        compliance: "Automotive Safety & Metrology Standards",
      },
      {
        id: "hypermarket-supply",
        title: "Retail, Wholesale & Hypermarket Supply",
        tagline: "Distribution to Leading Qatari Supermarkets",
        image: "/images/services/sub-services/hypermarket-supply.jpg",
        description:
          "Established distribution pathways supplying major retail chains, hypermarkets (Lulu, Carrefour, Safari Mall, Al Meera), and regional trade distributors. We handle vendor registration, inventory staging, promotional displays, and fast-moving replenishment schedules.",
        deliverables: [
          "Approved vendor status across leading Qatar hypermarket chains",
          "End-cap promotional display setup and point-of-sale branding",
          "JIT (Just-in-Time) delivery cycles to eliminate out-of-stock events",
          "Full returns management and expiry tracking protocols",
          "Quarterly sell-through performance analytics and demand forecasting",
        ],
        compliance: "Qatar Hypermarket Supplier Quality Standards",
      },
    ],
    process: [
      {
        step: "01",
        title: "Product Sourcing & Factory Audit",
        description: "We identify certified manufacturers, verify ISO and quality credentials, and negotiate tiered wholesale volume pricing.",
      },
      {
        step: "02",
        title: "Sample Verification & QC Testing",
        description: "Physical sample testing against Qatar metrology standards, packaging inspection, and regulatory compliance verification.",
      },
      {
        step: "03",
        title: "Freight Forwarding & Customs Clearance",
        description: "Securing shipping containers, bill of lading documentation, and rapid Al Nadeeb customs clearance at Hamad Port.",
      },
      {
        step: "04",
        title: "Warehousing & JIT Distribution",
        description: "Safe storage in our Qatar facilities and scheduled last-mile distribution to retail shelves or client warehouses.",
      },
    ],
    faqs: [
      {
        question: "Can BizLink handle custom overseas procurement from China or India?",
        answer:
          "Yes. With operational hubs in India, UAE, and China, BizLink handles factory audits, price negotiation, quality control inspection, ocean/air shipping, and Al Nadeeb customs clearance directly into Doha.",
      },
      {
        question: "Where are BizLink's perfumes manufactured?",
        answer:
          "Our signature perfume lines and custom fragrance blends are proudly formulated and packaged locally in Qatar ('Made in Qatar'), complying with international IFRA standards and Qatar consumer protection regulations.",
      },
      {
        question: "Do you supply spare parts for commercial fleets?",
        answer:
          "Yes, we provide wholesale contracts for commercial fleet components—including commercial vehicle batteries, brake discs, filters, tires, and certified lubricants—with express delivery across Qatar.",
      },
      {
        question: "What is your typical turnaround time for customs clearance at Hamad Port?",
        answer:
          "Standard sea freight container clearance through Al Nadeeb typically takes 24 to 48 hours once all commercial documentation, certificates of origin, and inspection fees are finalized.",
      },
    ],
  },
  {
    id: "facility-maintenance",
    number: "04",
    anchor: "facility",
    title: "Facility Management & Maintenance",
    name: "Facility & Maintenance",
    tagline: "Maintaining Spaces. Enhancing Environments. Ensuring Reliability.",
    highlight: "Complete Property Care",
    description: "Commercial Cleaning, MEP Repairs & AMC",
    imageCard: "/images/services/fdacility maintainace.jpg",
    brochureMainImage: "/images/services/brochure/facility-maintenance-main.webp",
    iconName: "wrench",
    brochurePage: "www.bizlinkqatar.com 06",
    brochureIntro:
      "BizLink offers comprehensive facility management, maintenance and property improvement services for residential, commercial and hospitality environments. Our services are designed to maintain functional, clean, safe and well-organized spaces while helping clients protect their property investments.",
    brochureCommitment:
      "We deliver reliable, municipality-compliant property care, preventive maintenance, and rapid-response technical support to protect your residential, commercial, and hospitality assets.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to inquire about Facility Management, commercial cleaning, MEP maintenance, or an Annual Maintenance Contract (AMC).",
    items: [
      "Facility & Hospitality Management",
      "Cleaning & Pest Control Services",
      "Gypsum Board & Glass Partition Works",
      "Electrical & Plumbing Maintenance Works",
      "Floor Tiling & Surface Restoration",
      "General Property Maintenance & Repairs",
      "Comprehensive Annual Maintenance Contracts (AMC)",
    ],
    subServices: [
      {
        id: "facility-hospitality-management",
        title: "Facility & Hospitality Management",
        tagline: "Turnkey Property Care for Towers, Compounds & Hotels",
        image: "/images/services/brochure/facility-guard-building.webp",
        description:
          "Comprehensive physical asset management for commercial towers, corporate headquarters, luxury residential compounds, and hospitality venues in Qatar. We integrate on-site facility supervision, preventative maintenance schedules, vendor oversight, energy efficiency monitoring, and emergency response teams.",
        deliverables: [
          "Dedicated on-site facility managers and 24/7 helpdesk dispatch",
          "Computerized Maintenance Management System (CMMS) tracking",
          "Building services vendor coordination (Elevators, Fire, Security)",
          "Common area janitorial protocols and waste disposal management",
          "Energy consumption audits and preventative lifecycle planning",
        ],
        compliance: "BIFM & ISO 41001 Facility Management Standards",
        badge: "Turnkey",
      },
      {
        id: "cleaning-pest-control",
        title: "Cleaning & Pest Control Services",
        tagline: "Hospital-Grade Sanitization & Pest Eradication",
        image: "/images/services/brochure/facility-pest-spray.webp",
        description:
          "Professional commercial cleaning and integrated pest management (IPM) for corporate offices, banks, retail centers, restaurants, and residential villas. Our trained crews use non-toxic, eco-friendly chemicals and hospital-grade disinfection equipment to eliminate dust, pathogens, and pest infestations.",
        deliverables: [
          "Scheduled daily, weekly, or monthly office janitorial cleaning",
          "Post-construction and pre-occupancy intensive deep cleaning",
          "High-pressure external facade and glass window washing",
          "Odorless, municipality-approved pest control and insect eradication",
          "Official Qatar Ministry of Public Health compliance certificates",
        ],
        compliance: "Ministry of Public Health Approved Pest Control Formulations",
        badge: "24/7 Service",
      },
      {
        id: "gypsum-glass-partitions",
        title: "Gypsum Board & Glass Partition Works",
        tagline: "Architectural Interior Fit-Outs & Acoustic Demountables",
        image: "/images/services/brochure/facility-gypsum-installation.webp",
        description:
          "High-precision interior architectural improvements for modern workplaces. We design, fabricate, and install decorative gypsum false ceilings, drywall acoustic partitions, frameless tempered glass meeting rooms, aluminum-framed demountable office cubicles, and contemporary interior wall paneling.",
        deliverables: [
          "Custom CAD layout drawings and architectural space planning",
          "Acoustic insulated gypsum drywall installation and joint taping",
          "10mm - 12mm toughened frameless glass partition walls and doors",
          "Premium stainless steel and matte black architectural hardware",
          "Smooth surface skim coating, priming, and commercial paint finishing",
        ],
        compliance: "Civil Defense QCDD Fire-Rated Material Standards",
      },
      {
        id: "electrical-plumbing",
        title: "Electrical & Plumbing Works",
        tagline: "Kahramaa-Compliant Power & Water Engineering",
        image: "/images/services/brochure/facility-plumbing-mep.webp",
        description:
          "Full MEP (Mechanical, Electrical, Plumbing) diagnostic, repair, and installation services. Our licensed technicians resolve power phase imbalances, circuit overloads, LED lighting retrofits, distribution board (DB) repairs, drainage blockages, water pump malfunctions, and plumbing pipeline replacements.",
        deliverables: [
          "Thermal imaging electrical inspection and circuit load balancing",
          "Distribution panel (DB) upgrades and breaker replacements",
          "Commercial booster pump and water heater repairs",
          "Sanitary fixtures installation and drainage line video inspection",
          "24/7 rapid-response emergency electrical and leak containment",
        ],
        compliance: "Kahramaa (Qatar General Electricity & Water) Compliant",
      },
      {
        id: "floor-tiling-polishing",
        title: "Floor Tiling & Polishing",
        tagline: "Diamond Marble Restoration & Industrial Epoxy",
        image: "/images/about/interior-main.webp",
        description:
          "Expert floor installation, grout restoration, and diamond crystallizing treatments for marble, granite, porcelain, terrazzo, and ceramic tiles. We also apply heavy-duty epoxy coatings for industrial warehouses, basement parking garages, and commercial kitchen environments.",
        deliverables: [
          "Precision ceramic, porcelain, and natural stone floor tiling",
          "Diamond pad marble grinding, honing, and mirror-crystallization",
          "High-traffic industrial epoxy floor coating and line striping",
          "Grout removal, antibacterial regrouting, and stain sealants",
          "Slip-resistant chemical etching for pool decks and entrance foyers",
        ],
        compliance: "Anti-Slip Safety Specifications",
      },
      {
        id: "property-maintenance-amc",
        title: "General Property Maintenance & AMC",
        tagline: "Annual Maintenance Contracts with Guaranteed SLAs",
        image: "/images/about/engineering-facility.webp",
        description:
          "Proactive Annual Maintenance Contracts (AMC) designed to preserve property value and prevent costly emergency breakdowns. AMC clients enjoy scheduled monthly HVAC inspections, electrical/plumbing testing, 24/7 emergency priority dispatch, and reduced spare parts pricing across Doha.",
        deliverables: [
          "Tailored residential, commercial, or compound AMC agreements",
          "Scheduled monthly preventative AC, MEP, and pump checkups",
          "Guaranteed under-60-minute emergency dispatch for critical failures",
          "Complete asset register documentation and equipment condition reports",
          "Discounted rates on interior renovations, painting, and materials",
        ],
        compliance: "24/7 Guaranteed Service Level Agreement (SLA)",
        badge: "Essential",
      },
    ],
    process: [
      {
        step: "01",
        title: "On-Site Facility Assessment",
        description: "Our senior MEP and facility engineers conduct a physical inspection to audit property conditions, equipment status, and maintenance needs.",
      },
      {
        step: "02",
        title: "Scope & Preventive Plan Design",
        description: "Developing a tailored service scope with clear schedules, preventative maintenance checklists, and emergency SLA parameters.",
      },
      {
        step: "03",
        title: "Certified Crew Deployment",
        description: "Mobilizing certified technicians equipped with safety equipment, diagnostic tools, and municipality-approved materials.",
      },
      {
        step: "04",
        title: "Ongoing Monitoring & Reporting",
        description: "Digital job sign-offs, regular facility audits, and executive maintenance reports ensuring complete transparency and peace of mind.",
      },
    ],
    faqs: [
      {
        question: "Do you offer 24/7 emergency repair services in Doha?",
        answer:
          "Yes. Our facility management division maintains 24/7 emergency response crews for urgent electrical failures, major plumbing leaks, and air conditioning breakdowns across Doha and surrounding municipalities.",
      },
      {
        question: "Are your pest control chemicals safe for children and pets?",
        answer:
          "All our pest control formulations are odorless, eco-friendly, and approved by the Qatar Ministry of Public Health. Our technicians follow strict safety and dilution standards to ensure total safety for residential and commercial occupants.",
      },
      {
        question: "What is covered under an Annual Maintenance Contract (AMC)?",
        answer:
          "A BizLink AMC covers scheduled routine servicing of HVAC units, electrical distribution boards, water pumps, plumbing systems, and prioritized emergency repair dispatch with zero inspection call-out fees.",
      },
      {
        question: "Can you provide custom interior office glass partitions?",
        answer:
          "Yes. We design and install acoustic tempered glass partitions, frameless glass meeting rooms, and gypsum drywall configurations tailored to corporate space requirements with fast turnaround.",
      },
    ],
  },
  {
    id: "automotive",
    number: "05",
    anchor: "automotive",
    title: "Automotive & Mobile Car Care",
    name: "Automotive & Mobile Car Care",
    tagline: "Professional Automotive Services, Delivered to Your Location.",
    highlight: "Your Car. Our Care. Your Location",
    description: "Mobile Car Wash, Detailing & Auto Glass Replacement",
    imageCard: "/images/services/sub service/AUTOMOBILE AND SERVICES.png",
    brochureMainImage: "/images/services/sub service/AUTOMOBILE AND SERVICES.png",
    iconName: "car",
    brochurePage: "www.bizlinkqatar.com 07",
    brochureIntro:
      "BizLink provides convenient mobile automotive services designed to make vehicle maintenance and care easier for customers across Qatar. Our on-site service approach saves time and offers practical solutions for vehicle cleaning, detailing and automotive glass requirements.",
    brochureCommitment:
      "We combine convenience, professional service and customer focused support to deliver practical automotive solutions wherever you. Your Car. Our Care. Your Location.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to book a Mobile Car Wash, Interior Detailing, or Auto Glass Service at my location.",
    items: [
      "Mobile Car Wash & Detailing",
      "Windshield Replacement",
      "Car Detailing & Interior Cleaning",
      "On-Site Auto Glass Services",
      "Auto Glass Inspection & Repair",
    ],
    subServices: [
      {
        id: "mobile-car-wash",
        title: "Mobile Car Wash & Detailing",
        tagline: "Doorstep Scratch-Free Wash Anywhere in Doha",
        image: "/images/services/automotive-wash.jpg",
        description:
          "On-demand mobile car wash service delivered directly to your villa, corporate office, or underground parking space. Our fully equipped mobile vans feature onboard deionized spot-free water tanks, silent generators, high-pressure foam cannons, and premium pH-balanced automotive shampoos that protect your paint against harsh desert dust.",
        deliverables: [
          "Contactless snow foam pre-wash and two-bucket scratch-free hand wash",
          "Alloy wheel iron fallout removal, brake dust cleaning, and tire dressing",
          "Hydrophobic spot-free deionized water rinse with ultra-plush microfiber dry",
          "Exterior glass clarity cleaning and streak-free mirror polishing",
          "Quick interior vacuuming, dashboard wipe-down, and luxury scenting",
        ],
        compliance: "Eco-Friendly Biodegradable Cleaning Solutions",
        badge: "Doorstep Service",
      },
      {
        id: "windshield-replacement",
        title: "Windshield Replacement",
        tagline: "Certified OEM-Grade Glass Installation",
        image: "/images/services/sub-services/windshield-replacement.jpg",
        description:
          "Complete glass replacement for cracked, shattered, or severely pitted front windshields, rear screens, door windows, and panoramic sunroofs. We install certified OEM-equivalent automotive glass utilizing rapid-cure urethane adhesives that meet strict international crash safety standards and ADAS safety camera calibration.",
        deliverables: [
          "Certified OEM-standard laminated safety glass for all makes and models",
          "Automotive-grade polyurethane adhesive with 1-hour safe drive-away time",
          "Precision fitment preserving rain sensor and ADAS camera alignments",
          "Complete glass cleanup and shattered fragment vacuuming",
          "Lifetime warranty against air whistles, water leaks, and adhesive failure",
        ],
        compliance: "Federal Motor Vehicle Safety Standards (FMVSS 212/216)",
        badge: "Certified Safety",
      },
      {
        id: "car-detailing-interior",
        title: "Car Detailing & Interior Cleaning",
        tagline: "Deep Steam Shampooing, Leather Care & Sanitization",
        image: "/images/services/sub service/automotive-detailing.jpg",
        description:
          "Intensive interior rejuvenation and exterior machine paint correction. We perform hot-water thermal steam extraction on fabric seats, carpets, and floor mats; pH-balanced cleaning and conditioning for luxury leather upholstery; AC vent ozone disinfection; and multi-stage orbital machine polishing to eliminate swirl marks and paint haze.",
        deliverables: [
          "Hot water extraction upholstery shampooing removing deep dirt and stains",
          "Fine leather deep cleaning, softening, and UV-blocking conditioner",
          "Full dashboard, door panel, console, and headliner deep cleansing",
          "AC evaporator ozone treatment eliminating odors, bacteria, and allergens",
          "Multi-stage machine paint polish restoring deep gloss and reflection",
        ],
        compliance: "Professional Detailer Association Standards",
        badge: "VIP Treatment",
      },
      {
        id: "onsite-auto-glass",
        title: "On-Site Auto Glass Services",
        tagline: "We Come to Your Home, Office, or Breakdown Location",
        image: "/images/services/sub service/AUTOMOBILE AND SERVICES.png",
        description:
          "Eliminate the danger of driving with impaired visibility or shattered glass. Our specialized auto glass mobile units travel directly to your location anywhere across Doha, Al Rayyan, Al Wakrah, and Lusail, completing mobile replacements and repairs with zero towing required.",
        deliverables: [
          "Fully equipped mobile installation van dispatched to your coordinates",
          "On-site replacement in private garages, driveways, or commercial lots",
          "Insurance claim documentation and photographic evidence support",
          "Shattered glass disposal and vehicle interior vacuuming",
          "Flexible scheduling including evening and weekend appointments",
        ],
        compliance: "Mobile Service Protocol & Safety Compliance",
      },
      {
        id: "auto-glass-repair",
        title: "Auto Glass Inspection & Repair",
        tagline: "Windshield Chip & Crack Optical Resin Repair",
        image: "/images/services/sub-services/auto-glass-repair.jpg",
        description:
          "Mobile windshield repair powered by Prime Glass technology. Minor stone chips, starbursts, and hairline cracks up to 6 inches are repaired on-site using vacuum-pressure optical resin injection. This restores 95%+ optical clarity and structural windshield integrity, preventing costly full windshield replacement and passing annual vehicle inspection.",
        deliverables: [
          "Structural stone chip and starburst crack stabilization",
          "High-grade optical UV-curable resin injection technology",
          "15-minute rapid cure with zero optical distortion",
          "Complete structural integrity restoration preventing crack spread",
          "Official vehicle inspection pass assurance",
        ],
        compliance: "Prime Glass Certification & Qatar Traffic Inspection Standards",
      },
      {
        id: "corporate-fleet-care",
        title: "Corporate Fleet Washing & Maintenance",
        tagline: "Scheduled Maintenance for Limousines & Commercial Vans",
        image: "/images/sister-companies/aapco-limousine-bg.webp",
        description:
          "Comprehensive recurring car care contracts for corporate car rental fleets, limousine operators (including sister concern aapco Limousine), government agencies, and commercial logistics vans. Our mobile wash teams operate overnight or during scheduled fleet downtime to ensure pristine brand appearance every morning.",
        deliverables: [
          "Custom recurring weekly or bi-weekly fleet cleaning schedules",
          "Overnight or early-morning wash shifts ensuring zero vehicle downtime",
          "Detailed vehicle condition inspection logs and tire pressure checks",
          "Centralized monthly billing and corporate credit arrangements",
          "Bulk fleet discounting tailored to vehicle volume",
        ],
        compliance: "Corporate Service Level Agreement (SLA)",
        badge: "Fleet Partner",
      },
    ],
    process: [
      {
        step: "01",
        title: "Booking & Location Coordinates",
        description: "Select your desired service and send your GPS location pin via WhatsApp or our instant online booking form.",
      },
      {
        step: "02",
        title: "Mobile Van Dispatch",
        description: "Our self-contained mobile unit arrives on time with onboard water, silent power, and professional equipment.",
      },
      {
        step: "03",
        title: "Execution & Detailing",
        description: "Certified technicians perform the cleaning, detailing, or glass installation following strict scratch-free procedures.",
      },
      {
        step: "04",
        title: "Quality Inspection & Handover",
        description: "Inspect the vehicle, verify optical clarity and cleanliness, and pay easily via card, digital link, or cash.",
      },
    ],
    faqs: [
      {
        question: "Do I need to provide water or electricity for the mobile car wash?",
        answer:
          "No. Our mobile car care vans are completely self-sufficient, carrying their own onboard deionized water tanks and silent generators. We can service your vehicle anywhere in Doha without any utility hookup.",
      },
      {
        question: "Can stone chips in my windshield be repaired instead of replacing it?",
        answer:
          "Yes. If the chip or star crack is smaller than a 1-Riyal coin and not directly in the driver's critical field of view, our Prime Glass optical resin repair will restore its strength in 15 minutes and prevent the crack from spreading.",
      },
      {
        question: "How long after windshield replacement can I drive my car?",
        answer:
          "We use premium, high-modulus polyurethane adhesives with a safe drive-away time of just 60 minutes after installation is completed.",
      },
      {
        question: "Do you offer corporate rates for company fleet washing?",
        answer:
          "Yes, we provide specialized fleet wash and maintenance agreements for limousine fleets, delivery vans, and corporate cars with customized schedules and centralized monthly invoicing.",
      },
    ],
  },
] as const;

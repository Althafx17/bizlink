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
  iconName: "building" | "monitor" | "truck" | "wrench" | "car";
  items: string[];
}

export const services: readonly ServiceDivision[] = [
  {
    id: "business-corporate",
    number: "01",
    anchor: "business",
    title: "Business & Corporate Solutions",
    name: "Business & Corporate",
    tagline: "Simplifying Business. Supporting Growth. Creating Opportunities.",
    highlight: "Your Business Journey, Made Simple With Us",
    description: "Corporate Licensing, PRO Services & Compliance",
    imageCard: "/images/services/business and cooperate.jpg",
    iconName: "building",
    items: [
      "Company Formation, CR & Commercial Licensing",
      "Corporate PRO & Government Liaison Services",
      "Document Attestation (MOFA, Embassies & Apostille)",
      "WPS (Wage Protection System) & Payroll Compliance",
      "Bookkeeping, Accounting & Auditing Support",
      "Qatari Sponsorship & Business Partnership Arrangements",
      "Legal Documentation, Typing & Official Translation",
      "Corporate Bank Account Opening Assistance & E-Commerce",
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
    imageCard: "/images/services/biz link digitial services.jpg",
    iconName: "monitor",
    items: [
      "Digital Marketing & Social Media Management",
      "Branding, Graphic Design & Corporate Identity",
      "Custom Website Design & E-Commerce Development",
      "Search Engine Optimization (SEO) & Online Visibility",
      "Content Creation, Commercial Photography & Video",
      "Performance Marketing & Paid Social/PPC Advertising",
      "Biz Link Computer Center & IT Solutions",
    ],
  },
  {
    id: "trading-supply",
    number: "03",
    anchor: "trading",
    title: "Trading & Supply Solutions",
    name: "Trading & Supply",
    tagline: "Quality Products. Reliable Supply. Business Excellence.",
    highlight: "Our Commitment to Supply Chain Excellence",
    description: "Wholesale Distribution, Procurement & Fragrances",
    imageCard: "/images/services/trading and supplay video image.jpg",
    iconName: "truck",
    items: [
      "General Trading, Retail & Commercial Supply",
      "Corporate, Department Store & Lifestyle Supplies",
      "Industrial Supplies & Safety Equipment Distribution",
      "Building Materials & Construction Hardware",
      "Bulk Procurement, Logistics & International Cargo Handling",
      "Vehicle Spare Parts & Fleet Components Supply",
      "Made-in-Qatar Luxury Perfumes (6ml – 50ml) & Blending",
    ],
  },
  {
    id: "facility-maintenance",
    number: "04",
    anchor: "facility",
    title: "Facility Management & Maintenance",
    name: "Facility & Maintenance",
    tagline: "Maintaining Spaces. Enhancing Environments. Ensuring Reliability.",
    highlight: "Complete Property Care & 24/7 Reliability",
    description: "Commercial Cleaning, MEP Repairs & AMC",
    imageCard: "/images/services/fdacility maintainace.jpg",
    iconName: "wrench",
    items: [
      "Commercial & Residential Deep Cleaning (24/7 Doha)",
      "Disinfection, Sanitization & Deep Cleaning Protocols",
      "Pest Control & Extermination Solutions",
      "General MEP Maintenance (Mechanical, Electrical & Plumbing)",
      "Gypsum Board Partitions, Glass Works, Tiles & Flooring",
      "HVAC Servicing, AC Maintenance & Duct Cleaning",
      "Comprehensive Annual Maintenance Contracts (AMC)",
    ],
  },
  {
    id: "automotive",
    number: "05",
    anchor: "automotive",
    title: "Automotive & Mobile Car Care",
    name: "Automotive Care",
    tagline: "Professional Automotive Services, Delivered to Your Location.",
    highlight: "Your Car. Our Care. Your Location — Convenience At Your Doorstep",
    description: "Mobile Car Wash, Detailing & Auto Glass Replacement",
    imageCard: "/images/services/bizlink professional.jpg",
    iconName: "car",
    items: [
      "Pathas Mobile Car Wash (Any Where, Any Time in Doha)",
      "On-Site Interior Deep Cleaning, Shampooing & Detailing",
      "Paint Protection, Machine Polishing & Ceramic Coating",
      "Prime Glass Mobile Windshield Repair & Replacement",
      "Corporate Fleet Washing & Scheduled Maintenance Packages",
      "Eco-Friendly Waterless & Steam Wash Systems",
    ],
  },
] as const;

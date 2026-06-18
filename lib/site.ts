export const site = {
  name: "Meca Homes",
  positioning: "Luxury Home Builders | Custom Home Builders",
  region: "South Florida",
  serviceArea: "Miami, Miami-Dade, Broward & South Florida",
  phone: "786-300-1441",
  phoneHref: "tel:+17863001441",
  email: "Info@meca-homes.com",
  emailHref: "mailto:Info@meca-homes.com",
  domain: "Meca-Homes.com",
  url: "https://meca-homes.com",
  whatsappHref: "https://wa.me/17863001441",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Areas", href: "#service-areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

// Cities reinforced naturally through the copy for local SEO.
export const serviceCities = [
  "Miami",
  "Coral Gables",
  "Pinecrest",
  "Coconut Grove",
  "Key Biscayne",
  "Fort Lauderdale",
] as const;

// Full service-area list used by the Service Areas section, footer, and schema.
export type ServiceArea = { name: string; note: string };

export const areasServed: ServiceArea[] = [
  { name: "Miami", note: "Custom homes across the city and greater Miami-Dade." },
  { name: "Coral Gables", note: "Estate residences within strict architectural standards." },
  { name: "Pinecrest", note: "Spacious luxury homes on signature large lots." },
  { name: "Coconut Grove", note: "Refined builds among the Grove's lush canopy." },
  { name: "Key Biscayne", note: "Coastal, code-resilient island residences." },
  { name: "Miami Beach", note: "Waterfront and modern architectural homes." },
  { name: "Aventura", note: "Contemporary residences in a premier enclave." },
  { name: "Doral", note: "New construction in one of Miami's fastest-growing areas." },
  { name: "Weston", note: "Family estates in West Broward's planned communities." },
  { name: "Fort Lauderdale", note: "Luxury and waterfront homes across Broward County." },
];

export type Service = {
  id: string;
  anchor: string;
  title: string;
  headline: string;
  copy: string;
  long: string;
  features: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: "design-build",
    anchor: "service-design-build",
    title: "Design Build",
    headline: "One Team, From Concept to Keys",
    copy: "Architecture, engineering, and construction unified under a single agreement — eliminating gaps, accelerating timelines, and protecting your budget from concept to completion.",
    long: "As a design build contractor in South Florida, Meca Homes unites architecture, structural engineering, and construction under one accountable agreement. You work with a single team from the first concept sketch through final completion — no handoffs between separate firms, no conflicting timelines, and no budget surprises. This integrated model is how the most refined custom homes in Miami and the surrounding communities get built on schedule and to specification.",
    features: [
      "Unified architecture, engineering & construction",
      "Transparent, fixed-scope budgeting",
      "Faster approvals and shorter timelines",
      "A single point of accountability",
    ],
    icon: "compass",
  },
  {
    id: "turn-key-construction",
    anchor: "service-turn-key-construction",
    title: "Turn-Key Construction",
    headline: "Move-In Ready, Built to Last",
    copy: "We manage every trade, inspection, and finish so you receive a fully completed luxury residence — no loose ends, no surprises, just the keys to your new home.",
    long: "Our turn-key construction service in Miami and South Florida delivers a fully finished luxury residence ready for the day you walk through the door. Meca Homes coordinates every trade, material selection, inspection, and finish so nothing is left for you to chase. From foundation to final detailing, we manage the complete build and hand over a home that is complete, code-compliant, and ready to enjoy.",
    features: [
      "Full-scope project management",
      "Premium materials and finish coordination",
      "Every trade and inspection handled in-house",
      "Delivered move-in ready",
    ],
    icon: "key",
  },
  {
    id: "site-work-shell",
    anchor: "service-site-work-shell",
    title: "Site Work & Shell Construction",
    headline: "Engineered Foundations & Structure",
    copy: "Clearing, grading, foundations, and structural shell construction executed to exacting standards — the durable groundwork that defines a home built to endure.",
    long: "Strong homes begin below the surface. As a site work contractor in Miami, Meca Homes handles clearing, grading, drainage, foundations, and full shell construction across South Florida. Our structural shell work — slabs, tie-beams, masonry, and framing — is engineered for the region's soil, wind-load, and code requirements, giving developers and homeowners durable groundwork that performs for decades. We also partner with builders who need only the site work and shell completed to a turn-ready standard.",
    features: [
      "Land clearing, grading & drainage",
      "Engineered foundations and slabs",
      "Masonry, tie-beams & structural shell",
      "Wind-load and code-compliant builds",
    ],
    icon: "structure",
  },
  {
    id: "sewer-lateral",
    anchor: "service-sewer-lateral",
    title: "Residential Sewer Lateral Connections",
    headline: "Code-Compliant Utility Tie-Ins",
    copy: "Precise residential sewer lateral connections that link your property to municipal infrastructure — permitted, inspected, and built to last beneath the surface.",
    long: "Connecting a home to municipal sewer infrastructure demands precision and proper permitting. Meca Homes provides residential sewer lateral connections in Miami and across South Florida — excavating, tying in, and restoring the site to standard while coordinating every required permit and inspection. Whether for a new custom home or a property transitioning off septic, our crews deliver clean, compliant connections that hold up beneath the surface.",
    features: [
      "New laterals and septic-to-sewer conversions",
      "Full permitting and municipal coordination",
      "Inspected, code-compliant tie-ins",
      "Clean excavation and site restoration",
    ],
    icon: "pipe",
  },
  {
    id: "wet-tapping",
    anchor: "service-wet-tapping",
    title: "Wet Tapping",
    headline: "Live Connections, Zero Disruption",
    copy: "Specialized wet tapping that connects new service lines to pressurized water mains without interrupting flow — handled by crews trained for precision utility work.",
    long: "Wet tapping connects a new service line to a live, pressurized water main without shutting down the system or interrupting service to surrounding properties. As a wet tapping contractor in South Florida, Meca Homes performs these specialized live connections with the equipment and trained crews the work demands — minimizing disruption while meeting utility standards. It is precise, high-stakes utility work that we execute cleanly on residential and development projects.",
    features: [
      "Live connections to pressurized mains",
      "No service interruption to surrounding lines",
      "Specialized equipment and trained crews",
      "Utility-standard, inspected workmanship",
    ],
    icon: "valve",
  },
];

export const trustItems = [
  "Custom Homes",
  "Design-Build",
  "Turn-Key Construction",
  "Site Work",
  "Shell Construction",
  "Sewer & Utility Connections",
] as const;

export const processSteps = [
  {
    title: "Consultation",
    copy: "We listen to your vision, scope, and budget — then map a clear path forward.",
  },
  {
    title: "Design & Planning",
    copy: "Architectural design and engineering aligned to your lifestyle and site.",
  },
  {
    title: "Permitting",
    copy: "We navigate South Florida municipal approvals and permits so your project stays on schedule.",
  },
  {
    title: "Site Work",
    copy: "Clearing, grading, foundations, and utilities prepared to exacting standards.",
  },
  {
    title: "Construction",
    copy: "Skilled trades and rigorous oversight bring your custom home to life.",
  },
  {
    title: "Final Walkthrough",
    copy: "A detailed inspection and handover — every finish reviewed, every detail right.",
  },
] as const;

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does a luxury custom home cost in Miami?",
    a: "Luxury custom home costs in Miami and South Florida vary widely based on lot, square footage, design complexity, finishes, and site conditions. Most high-end custom homes are priced per square foot, with premium architectural and waterfront projects commanding more. Rather than quote a generic number, Meca Homes prepares a tailored budget after reviewing your lot, scope, and design goals during the consultation — so you have a realistic figure built around your actual project.",
  },
  {
    q: "How long does a custom home build take?",
    a: "A custom home in South Florida typically takes 12 to 24 months from design to final walkthrough, depending on size, complexity, and the permitting timeline in your municipality. Design and engineering, permitting, site work, and construction each have their own duration. Because Meca Homes runs design-build under one team, phases overlap efficiently and approvals move faster, which helps keep your overall timeline as tight as possible.",
  },
  {
    q: "What is design-build construction?",
    a: "Design-build is a delivery method where architecture, engineering, and construction are handled by a single accountable team under one contract — rather than hiring an architect and a builder separately. This unified approach removes the gaps and finger-pointing common in traditional projects, improves cost control, and shortens timelines. As a design-build contractor in South Florida, Meca Homes manages your project end to end so there is one point of responsibility from first sketch to final key.",
  },
  {
    q: "What is included in turn-key construction?",
    a: "Turn-key construction means we deliver a fully completed, move-in-ready home. Meca Homes coordinates every trade, material, inspection, and finish — structure, mechanicals, millwork, fixtures, and final detailing — so nothing is left for you to manage or chase. You receive a home in Miami or South Florida that is complete, code-compliant, and ready to live in from the day you receive the keys.",
  },
  {
    q: "Do I need permits for a custom home?",
    a: "Yes. Building a custom home in South Florida requires permits and approvals from your local municipality, covering structural, electrical, plumbing, mechanical, and often zoning and environmental review. Coastal and waterfront areas like Key Biscayne and Miami Beach can carry additional requirements. Meca Homes manages the full permitting process on your behalf, coordinating drawings, applications, and inspections so your project stays compliant and on schedule.",
  },
  {
    q: "What is shell construction?",
    a: "Shell construction is the structural envelope of a home — foundations, slabs, masonry walls, tie-beams, and framing — built to a weather-tight, structurally complete stage. It is the durable groundwork everything else is built upon. Meca Homes provides shell construction in South Florida engineered for the region's soil and wind-load requirements, either as part of a full build or as a standalone scope for developers and builders who need only the structure completed.",
  },
  {
    q: "What site work is required before construction?",
    a: "Site work prepares your lot for building and typically includes clearing, grading, drainage, soil compaction, and utility rough-ins, along with foundations. Proper site work is critical in South Florida, where water table, soil, and flood considerations directly affect a home's longevity. As a site work contractor in Miami, Meca Homes handles these early phases to exacting standards so the structure that follows sits on a stable, well-drained, code-compliant base.",
  },
  {
    q: "What is a sewer lateral connection?",
    a: "A residential sewer lateral connection is the pipe that links a home's plumbing to the municipal sewer main. Installing or replacing one involves excavation, a precise tie-in, permitting, inspection, and site restoration. Meca Homes provides residential sewer lateral connections in Miami and South Florida for new custom homes and for properties converting from septic to sewer — delivering clean, compliant connections that perform reliably beneath the surface.",
  },
  {
    q: "What is wet tapping?",
    a: "Wet tapping is a specialized method of connecting a new service line to a live, pressurized water main without shutting the system down or interrupting service to surrounding properties. It requires specific equipment and trained crews because the main stays under pressure throughout. As a wet tapping contractor in South Florida, Meca Homes performs these live connections cleanly and to utility standards on residential and development projects.",
  },
  {
    q: "How do I start a custom home project?",
    a: "Starting is simple: request a consultation by phone, email, or the form on this page. Meca Homes will review your vision, lot, scope, budget, and timeline, then outline a clear path forward — from feasibility and design through permitting and construction. There is no obligation, and you will leave the conversation with a concrete sense of next steps for your South Florida custom home.",
  },
  {
    q: "What areas of South Florida do you serve?",
    a: "Meca Homes serves luxury residential construction throughout South Florida, including Miami, Coral Gables, Pinecrest, Coconut Grove, Key Biscayne, Miami Beach, Aventura, Doral, Weston, and Fort Lauderdale, along with surrounding Miami-Dade and Broward communities. If your project sits within the region, we can almost certainly help — reach out and we will confirm.",
  },
  {
    q: "Why choose a design-build contractor?",
    a: "A design-build contractor gives you a single team and a single contract for design, engineering, and construction, which means clearer accountability, tighter budget control, and faster timelines than coordinating separate firms. You avoid the common scenario where the architect and builder blame each other for overruns. For a luxury custom home in Miami or South Florida, that unified responsibility protects both your investment and your peace of mind.",
  },
  {
    q: "What makes luxury home construction different?",
    a: "Luxury home construction demands a higher standard at every stage — bespoke architecture, premium materials, advanced systems, precise craftsmanship, and meticulous project management. Tolerances are tighter, finishes are more demanding, and coordination among specialized trades is far more complex. Meca Homes approaches each South Florida residence with the oversight and detail that high-end work requires, so the finished home reflects the quality its owners expect.",
  },
  {
    q: "How does Meca Homes manage permitting?",
    a: "Meca Homes manages permitting in-house as part of the design-build process. We prepare and submit drawings and applications, coordinate with the relevant South Florida municipality, respond to plan-review comments, and schedule the required inspections through completion. Because permitting is integrated with design and construction rather than handed off, issues are anticipated early and your project keeps moving.",
  },
  {
    q: "What should I expect during construction?",
    a: "During construction you can expect clear communication, organized scheduling, and rigorous quality oversight. Meca Homes coordinates each trade in sequence, manages inspections, and keeps you informed of progress and key decisions. Because we serve as your single point of responsibility, you always know where your home stands — culminating in a detailed final walkthrough where every finish is reviewed before handover.",
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury custom home exterior in South Florida with clean modern architecture",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
    alt: "Contemporary Miami residence with floor-to-ceiling glass",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    alt: "Custom-built luxury home with manicured South Florida landscaping",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    alt: "Architectural waterfront luxury property in South Florida",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    alt: "Interior of a custom-built modern Miami home",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    alt: "Elegant South Florida custom home at dusk with warm lighting",
    span: "lg:col-span-2",
  },
] as const;

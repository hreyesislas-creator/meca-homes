// ─────────────────────────────────────────────────────────────────────────
// Meca Homes — bilingual content (EN / ES)
//
// This object is the single source of truth for ALL user-facing copy.
// Structural data (anchors, icons, image URLs, phone/email) lives in
// lib/site.ts. Arrays here are index-aligned with the structural arrays
// in lib/site.ts (services, areas, gallery, process, trust, credibility, faq).
//
// Spanish is professional South Florida business Spanish for a luxury
// residential construction audience — not literal machine translation.
// ─────────────────────────────────────────────────────────────────────────

export type Lang = "en" | "es";

const en = {
  meta: {
    title: "Meca Homes | Custom Home Builders in South Florida",
    description:
      "Meca Homes are custom home builders serving South Florida — Miami-Dade, Broward, and Palm Beach — with design-build, turn-key construction, site work and shell construction, residential sewer lateral connections, and wet tapping.",
  },
  brand: {
    tagline: "Luxury Builders",
  },
  language: {
    label: "Language",
    en: "English",
    es: "Español",
  },
  nav: {
    about: "About",
    services: "Services",
    process: "Process",
    projects: "Projects",
    areas: "Areas",
    faq: "FAQ",
    contact: "Contact",
  },
  header: {
    cta: "Request a Consultation",
  },
  a11y: {
    homeLink: "Meca Homes home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
  },
  common: {
    call: "Call",
    requestConsultation: "Request a Consultation",
  },
  hero: {
    badge: "Custom Home Builders · South Florida",
    imageAlt:
      "Custom home built by Meca Homes in South Florida with modern architecture and manicured landscaping",
    headlineLead: "Custom Homes Built From ",
    headlineHighlight: "Vision",
    headlineTail: " to Completion",
    subhead:
      "Meca Homes are custom home builders serving South Florida — Miami-Dade, Broward, and Palm Beach — delivering design-build, turn-key construction, site work and shell construction, and residential utility connections under one accountable team.",
    ctaPrimary: "Request a Consultation",
    stats: [
      { k: "Single", v: "Point of Responsibility" },
      { k: "Design", v: "to Final Walkthrough" },
      { k: "South FL", v: "Residential Specialists" },
    ],
    scroll: "Scroll",
  },
  credibility: {
    aria: "Why clients trust Meca Homes",
    items: [
      "Licensed & Insured",
      "South Florida Specialists",
      "Design-Build Experts",
      "Turn-Key Construction",
      "Permit & Municipality Coordination",
    ],
  },
  trust: [
    "Custom Homes",
    "Design-Build",
    "Turn-Key Construction",
    "Site Work",
    "Shell Construction",
    "Sewer & Utility Connections",
  ],
  about: {
    eyebrow: "About Meca Homes",
    imageAlt:
      "Interior of a Meca Homes custom residence in South Florida with refined finishes",
    headline: "A single point of responsibility, from first sketch to final key.",
    body: [
      "Meca Homes is a custom home builder serving South Florida — Miami-Dade, Broward, and Palm Beach. We unify every phase of your project under one accountable team — design, Architectural and Engineering Plans, permitting, site preparation, construction, inspections, and the final walkthrough — so you always know exactly where your home stands.",
      "That single point of responsibility removes the gaps, delays, and finger-pointing that plague multi-vendor builds. The result is a calmer process, a protected budget, and a residence crafted to the highest standard.",
    ],
    pillars: [
      "Design, Architectural & Engineering Plans",
      "Permitting & municipal approvals",
      "Site preparation & utilities",
      "Construction & quality oversight",
      "Inspections & code compliance",
      "Final walkthrough & handover",
    ],
    cardTitle: "One Builder.",
    cardSub: "Total accountability.",
  },
  services: {
    eyebrow: "What We Build",
    headline:
      "Specialized services for high-end residential construction in South Florida.",
    intro:
      "From full design-build engagements across South Florida to specialized utility work throughout the region, every service is delivered with the precision a custom home demands.",
    exploreCta: "Explore this service",
    ctaCardTitle: "Not sure where your project fits?",
    ctaCardBody:
      "Tell us about your vision and we'll guide you to the right scope and the next step.",
    ctaCardCta: "Request a Consultation",
    items: [
      {
        title: "Design Build",
        headline: "One Team, From Concept to Completion",
        copy: "Architecture, engineering, and construction unified under a single agreement — eliminating gaps, accelerating timelines, and protecting your budget from concept to completion.",
        long: "As a design build contractor in South Florida, Meca Homes unites architecture, structural engineering, and construction under one accountable agreement. You work with a single team from the first concept sketch through final completion — no handoffs between separate firms, no conflicting timelines, and no budget surprises. This integrated model is how the most refined custom homes in Miami and the surrounding communities get built on schedule and to specification.",
        features: [
          "Unified architecture, engineering & construction",
          "Transparent, fixed-scope budgeting",
          "Faster approvals and shorter timelines",
          "A single point of accountability",
        ],
      },
      {
        title: "Turn-Key Construction",
        headline: "Move-In Ready, Built to Last",
        copy: "We manage every trade, inspection, and finish so you receive a fully completed custom residence — no loose ends, no surprises, just the keys to your new home.",
        long: "Our turn-key construction service across South Florida delivers a fully finished custom residence ready for the day you walk through the door. Meca Homes coordinates every trade, material selection, inspection, and finish so nothing is left for you to chase. From foundation to final detailing, we manage the complete build and hand over a home that is complete, code-compliant, and ready to enjoy.",
        features: [
          "Full-scope project management",
          "Premium materials and finish coordination",
          "Every trade and inspection handled in-house",
          "Delivered move-in ready",
        ],
      },
      {
        title: "Site Work & Shell Construction",
        headline: "Engineered Foundations & Structure",
        copy: "Clearing, grading, foundations, and structural shell construction executed to exacting standards — the durable groundwork that defines a home built to endure.",
        long: "Strong homes begin below the surface. As a site work contractor across South Florida, Meca Homes handles clearing, grading, drainage, foundations, and full shell construction up to final roof covering. Our structural shell work — slabs, tie-beams, masonry, framing, and roof structure up to final roof covering — is engineered for the region's soil, wind-load, and code requirements, giving developers and homeowners durable groundwork that performs for decades. We also partner with builders who need only the site work and shell completed to a turn-ready standard.",
        features: [
          "Land clearing, grading & drainage",
          "Engineered foundations and slabs",
          "Masonry, tie-beams & structural shell",
          "Structural shell completed up to final roof covering",
        ],
      },
      {
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
      },
      {
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
      },
    ],
  },
  serviceDetails: {
    eyebrow: "Services In Detail",
    headline: "Specialized expertise, explained.",
    intro:
      "Each discipline below is delivered to exacting standards across South Florida — engineered, permitted, and built to last.",
    cta: "Request a Consultation",
    imageAltSuffix: "Meca Homes, South Florida",
  },
  process: {
    eyebrow: "Our Process",
    title: "A Streamlined Path to Building Your Custom Home",
    intro:
      "Six deliberate stages — each managed in-house — keep your project transparent, on schedule, and true to your vision.",
    steps: [
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
    ],
  },
  gallery: {
    eyebrow: "Selected Work",
    title: "Custom residences, crafted with intention.",
    intro:
      "Custom residential construction, structural work, site preparation, and custom home development across South Florida.",
    captions: [
      "Custom home exterior in South Florida with clean modern architecture",
      "Contemporary Miami residence with floor-to-ceiling glass",
      "Custom-built home with manicured South Florida landscaping",
      "Architectural waterfront property in South Florida",
      "Interior of a custom-built modern Miami home",
      "Elegant South Florida custom home at dusk with warm lighting",
    ],
    note: "Imagery shown for design representation — project portfolio available on request.",
  },
  serviceAreas: {
    eyebrow: "Where We Build",
    title: "Serving South Florida",
    intro:
      "Meca Homes delivers custom residential construction throughout South Florida — from custom homes in Miami and Coral Gables to waterfront residences in Key Biscayne, Fort Lauderdale, Boca Raton, and West Palm Beach. Wherever your lot sits across Miami-Dade, Broward, or Palm Beach, our design-build team brings the same single point of responsibility to your project.",
    notes: [
      "Custom homes across the city and greater Miami-Dade.",
      "Estate residences within strict architectural standards.",
      "Spacious custom homes on signature large lots.",
      "Refined builds among the Grove's lush canopy.",
      "Coastal, code-resilient island residences.",
      "Waterfront and modern architectural homes.",
      "Contemporary residences in a premier enclave.",
      "New construction in one of Miami's fastest-growing areas.",
      "Family estates in West Broward's planned communities.",
      "Custom and waterfront homes across Broward County.",
      "Custom home building across the full breadth of Miami-Dade County.",
      "Residential construction throughout Broward County communities.",
      "Custom and luxury residences across Palm Beach County.",
      "Upscale custom homes in Boca Raton and nearby enclaves.",
      "Modern custom residences across West Palm Beach and the coast.",
    ],
    closingLead: "Don't see your community? ",
    closingLink: "Contact us",
    closingTail:
      " — we serve custom home projects across the wider South Florida region.",
  },
  faq: {
    eyebrow: "Questions, Answered",
    title: "Custom Home Building FAQs",
    intro:
      "Common questions about building a custom home in South Florida — from cost and timelines to permitting, site work, and utility connections.",
    closingLead: "Still have questions about your project? ",
    closingCallPrefix: "Call ",
    closingOr: " or ",
    closingLink: "request a consultation",
    items: [
      {
        q: "How much does a custom home cost in South Florida?",
        a: "Custom home costs across South Florida — Miami-Dade, Broward, and Palm Beach — vary widely based on lot, square footage, design complexity, finishes, and site conditions. Most custom homes are priced per square foot, with premium architectural and waterfront projects commanding more. Rather than quote a generic number, Meca Homes prepares a tailored budget after reviewing your lot, scope, and design goals during the consultation — so you have a realistic figure built around your actual project.",
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
        a: "Meca Homes serves custom residential construction throughout South Florida, including Miami, Coral Gables, Pinecrest, Coconut Grove, Key Biscayne, Miami Beach, Aventura, Doral, Weston, Fort Lauderdale, Boca Raton, and West Palm Beach, along with the surrounding Miami-Dade, Broward, and Palm Beach County communities. If your project sits within the region, we can almost certainly help — reach out and we will confirm.",
      },
      {
        q: "Why choose a design-build contractor?",
        a: "A design-build contractor gives you a single team and a single contract for design, engineering, and construction, which means clearer accountability, tighter budget control, and faster timelines than coordinating separate firms. You avoid the common scenario where the architect and builder blame each other for overruns. For a custom home anywhere in South Florida, that unified responsibility protects both your investment and your peace of mind.",
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
    ],
  },
  contact: {
    eyebrow: "Request a Consultation",
    headline: "Let's build something extraordinary.",
    description:
      "Share your project anywhere in Miami or South Florida and our team will follow up with a tailored path forward — from feasibility to final walkthrough.",
    assurances: [
      "Direct response from our team",
      "No-obligation project review",
      "Clear next steps within days",
    ],
    callUs: "Call us",
    emailUs: "Email us",
    messageUs: "Message us",
    whatsapp: "WhatsApp",
  },
  form: {
    header: "Start your project",
    introLead:
      "Tell us a few details and our team will prepare your next steps. Fields marked ",
    introTail: " are required.",
    labels: {
      name: "Full Name",
      phone: "Phone",
      email: "Email",
      projectType: "Project Type",
      location: "City / Property Location",
      budget: "Budget Range",
      timeline: "Timeline",
      details: "Project Details",
    },
    placeholders: {
      name: "Jane Doe",
      phone: "(786) 300-1441",
      email: "you@email.com",
      location: "Miami, FL",
      details:
        "Tell us about your lot, vision, square footage, or any specifics that will help us prepare.",
    },
    selectServiceDefault: "Select a service",
    selectRangeDefault: "Select a range",
    projectTypes: [
      "New Custom Home",
      "Design-Build",
      "Turn-Key Construction",
      "Site Work / Shell",
      "Sewer Lateral Connection",
      "Wet Tapping",
      "Other / Not Sure",
    ],
    budgets: [
      "Under $500K",
      "$500K – $1M",
      "$1M – $2M",
      "$2M – $5M",
      "$5M+",
      "To be determined",
    ],
    timelines: [
      "Ready to start",
      "1 – 3 months",
      "3 – 6 months",
      "6 – 12 months",
      "Just exploring",
    ],
    submit: "Request My Consultation",
    submitting: "Sending…",
    microcopy: "We'll review your project and contact you with the next steps.",
    privacy: "Your information is kept private and is never shared.",
    successTitle: "Thank you — your request is in.",
    successBodyLead:
      "We'll review your project details and contact you shortly with the next steps. For anything urgent, call ",
    successBodyTail: ".",
    submitAnother: "Submit another request",
    errorGeneric: "Something went wrong.",
    errorRequired: "Name, phone, and email are required.",
  },
  floating: {
    call: "Call Now",
    whatsapp: "WhatsApp",
    quote: "Get a Quote",
    whatsappAria: "Chat on WhatsApp",
  },
  footer: {
    description:
      "Custom home builders across South Florida — Miami-Dade, Broward, and Palm Beach — delivering design-build, turn-key construction, site work and shell construction, and residential utility connections.",
    exploreHeading: "Explore",
    servicesHeading: "Services",
    areasHeading: "Areas Served",
    seoLead: "Custom home builders serving South Florida:",
    seoBody:
      "Proudly building custom homes across Miami-Dade, Broward, and Palm Beach — including Miami, Coral Gables, Pinecrest, Coconut Grove, Key Biscayne, Miami Beach, Aventura, Doral, Weston, Fort Lauderdale, Boca Raton, and West Palm Beach.",
    rights: "All rights reserved.",
    positioning: "Custom Home Builders | Residential Construction · South Florida",
  },
};

export type Translation = typeof en;

const es: Translation = {
  meta: {
    title:
      "Meca Homes | Constructores de Casas Personalizadas en el Sur de Florida",
    description:
      "Meca Homes son constructores de casas personalizadas en el Sur de Florida —Miami-Dade, Broward y Palm Beach— con diseño-construcción, construcción llave en mano, preparación de terreno y obra gris, conexiones laterales de alcantarillado y tomas en carga.",
  },
  brand: {
    tagline: "Constructores de Lujo",
  },
  language: {
    label: "Idioma",
    en: "English",
    es: "Español",
  },
  nav: {
    about: "Nosotros",
    services: "Servicios",
    process: "Proceso",
    projects: "Proyectos",
    areas: "Zonas",
    faq: "Preguntas",
    contact: "Contacto",
  },
  header: {
    cta: "Solicitar Consulta",
  },
  a11y: {
    homeLink: "Inicio de Meca Homes",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
  },
  common: {
    call: "Llamar",
    requestConsultation: "Solicitar Consulta",
  },
  hero: {
    badge: "Constructores de Casas Personalizadas · Sur de Florida",
    imageAlt:
      "Casa personalizada construida por Meca Homes en el Sur de Florida con arquitectura moderna y jardinería cuidada",
    headlineLead: "Casas Personalizadas Hechas a la Medida, de la ",
    headlineHighlight: "Visión",
    headlineTail: " a la Entrega",
    subhead:
      "Meca Homes es una constructora de casas personalizadas en el Sur de Florida —Miami-Dade, Broward y Palm Beach— que ofrece diseño-construcción, construcción llave en mano, preparación de terreno y obra gris, y conexiones residenciales de servicios bajo un solo equipo responsable.",
    ctaPrimary: "Solicitar Consulta",
    stats: [
      { k: "Único", v: "Punto de Responsabilidad" },
      { k: "Diseño", v: "hasta la Entrega Final" },
      { k: "Sur de FL", v: "Especialistas Residenciales" },
    ],
    scroll: "Desliza",
  },
  credibility: {
    aria: "Por qué los clientes confían en Meca Homes",
    items: [
      "Con Licencia y Asegurados",
      "Especialistas del Sur de Florida",
      "Expertos en Diseño-Construcción",
      "Construcción Llave en Mano",
      "Gestión de Permisos y Municipios",
    ],
  },
  trust: [
    "Casas Personalizadas",
    "Diseño-Construcción",
    "Construcción Llave en Mano",
    "Preparación de Terreno",
    "Construcción de Obra Gris",
    "Conexiones de Alcantarillado y Servicios",
  ],
  about: {
    eyebrow: "Sobre Meca Homes",
    imageAlt:
      "Interior de una residencia personalizada de Meca Homes en el Sur de Florida con acabados refinados",
    headline:
      "Un solo punto de responsabilidad, desde el primer boceto hasta la entrega de llaves.",
    body: [
      "Meca Homes es una constructora de casas personalizadas en el Sur de Florida —Miami-Dade, Broward y Palm Beach—. Unificamos cada fase de su proyecto bajo un solo equipo responsable —diseño, Planos Arquitectónicos y de Ingeniería, permisos, preparación del terreno, construcción, inspecciones y la entrega final— para que siempre sepa con exactitud en qué etapa se encuentra su hogar.",
      "Ese único punto de responsabilidad elimina los vacíos, las demoras y la falta de coordinación habituales cuando intervienen múltiples contratistas. El resultado es un proceso más tranquilo, un presupuesto protegido y una residencia elaborada con los más altos estándares.",
    ],
    pillars: [
      "Diseño, Planos Arquitectónicos y de Ingeniería",
      "Permisos y aprobaciones municipales",
      "Preparación del terreno y servicios",
      "Construcción y control de calidad",
      "Inspecciones y cumplimiento de códigos",
      "Entrega final y recorrido de cierre",
    ],
    cardTitle: "Un Solo Constructor.",
    cardSub: "Responsabilidad total.",
  },
  services: {
    eyebrow: "Lo Que Construimos",
    headline:
      "Servicios especializados para construcción residencial de alta gama en el Sur de Florida.",
    intro:
      "Desde proyectos completos de diseño-construcción en todo el Sur de Florida hasta trabajos especializados de servicios públicos en toda la región, cada servicio se ejecuta con la precisión que exige una casa personalizada.",
    exploreCta: "Conocer este servicio",
    ctaCardTitle: "¿No sabe en qué categoría encaja su proyecto?",
    ctaCardBody:
      "Cuéntenos su visión y lo guiaremos hacia el alcance adecuado y el siguiente paso.",
    ctaCardCta: "Solicitar Consulta",
    items: [
      {
        title: "Diseño-Construcción",
        headline: "Un Solo Equipo, del Concepto a la Entrega Final",
        copy: "Arquitectura, ingeniería y construcción unificadas en un solo contrato: eliminamos los vacíos, aceleramos los plazos y protegemos su presupuesto del concepto a la entrega.",
        long: "Como contratista de diseño-construcción en el Sur de Florida, Meca Homes une la arquitectura, la ingeniería estructural y la construcción en un solo contrato responsable. Usted trabaja con un único equipo desde el primer boceto conceptual hasta la entrega final, sin transferencias entre firmas distintas, sin plazos en conflicto y sin sorpresas en el presupuesto. Este modelo integrado es la forma en que las residencias personalizadas más refinadas de Miami y las comunidades cercanas se construyen a tiempo y según las especificaciones.",
        features: [
          "Arquitectura, ingeniería y construcción unificadas",
          "Presupuesto transparente y de alcance cerrado",
          "Aprobaciones más rápidas y plazos más cortos",
          "Un solo punto de responsabilidad",
        ],
      },
      {
        title: "Construcción Llave en Mano",
        headline: "Lista para Habitar, Construida para Durar",
        copy: "Gestionamos cada oficio, inspección y acabado para que reciba una casa personalizada totalmente terminada: sin cabos sueltos, sin sorpresas, solo las llaves de su nuevo hogar.",
        long: "Nuestro servicio de construcción llave en mano en todo el Sur de Florida entrega una casa personalizada completamente terminada, lista para el día en que cruce la puerta. Meca Homes coordina cada oficio, selección de materiales, inspección y acabado para que usted no tenga que ocuparse de nada. Desde los cimientos hasta los detalles finales, gestionamos la obra completa y entregamos un hogar terminado, conforme a los códigos y listo para disfrutar.",
        features: [
          "Gestión integral del proyecto",
          "Coordinación de materiales y acabados premium",
          "Cada oficio e inspección gestionados internamente",
          "Entregada lista para habitar",
        ],
      },
      {
        title: "Preparación de Terreno y Construcción de Obra Gris",
        headline: "Cimientos y Estructura de Ingeniería",
        copy: "Limpieza, nivelación, cimientos y construcción de obra gris estructural ejecutados con estándares exigentes: la base duradera que define un hogar construido para perdurar.",
        long: "Los hogares sólidos comienzan bajo la superficie. Como contratista de preparación de terreno en todo el Sur de Florida, Meca Homes se encarga de la limpieza, nivelación, drenaje, cimientos y construcción de obra gris hasta el techado final. Nuestra obra gris estructural —losas, vigas de amarre, mampostería, armado y estructura de techo hasta el techado final— está diseñada para el suelo, las cargas de viento y los requisitos de código de la región, ofreciendo a desarrolladores y propietarios una base duradera que rinde por décadas. También colaboramos con constructores que solo necesitan la preparación del terreno y la obra gris terminadas a un estándar listo para continuar.",
        features: [
          "Limpieza, nivelación y drenaje del terreno",
          "Cimientos y losas de ingeniería",
          "Mampostería, vigas de amarre y obra gris estructural",
          "Obra gris estructural terminada hasta el techado final",
        ],
      },
      {
        title: "Conexiones Residenciales de Alcantarillado",
        headline: "Conexiones de Servicios Conformes al Código",
        copy: "Conexiones laterales de alcantarillado residencial precisas que enlazan su propiedad con la infraestructura municipal: con permisos, inspeccionadas y construidas para durar bajo la superficie.",
        long: "Conectar un hogar a la infraestructura municipal de alcantarillado exige precisión y los permisos adecuados. Meca Homes ofrece conexiones laterales de alcantarillado residencial en Miami y todo el Sur de Florida: excavamos, realizamos la conexión y restauramos el sitio según el estándar, mientras coordinamos cada permiso e inspección requeridos. Ya sea para una nueva residencia personalizada o una propiedad que deja atrás el sistema séptico, nuestros equipos entregan conexiones limpias y conformes que perduran bajo la superficie.",
        features: [
          "Nuevas conexiones laterales y cambio de séptico a alcantarillado",
          "Tramitación completa de permisos y coordinación municipal",
          "Conexiones inspeccionadas y conformes al código",
          "Excavación limpia y restauración del sitio",
        ],
      },
      {
        title: "Tomas en Carga (Wet Tapping)",
        headline: "Conexiones en Vivo, Sin Interrupciones",
        copy: "Tomas en carga especializadas que conectan nuevas líneas de servicio a tuberías de agua presurizadas sin interrumpir el flujo, ejecutadas por equipos capacitados en trabajos de precisión sobre servicios públicos.",
        long: "La toma en carga conecta una nueva línea de servicio a una tubería principal de agua presurizada y en funcionamiento, sin apagar el sistema ni interrumpir el servicio a las propiedades vecinas. Como contratista de tomas en carga en el Sur de Florida, Meca Homes realiza estas conexiones en vivo especializadas con el equipo y las cuadrillas capacitadas que la labor exige, minimizando las interrupciones y cumpliendo los estándares de los servicios públicos. Es un trabajo de servicios de alta exigencia y precisión que ejecutamos con limpieza en proyectos residenciales y de desarrollo.",
        features: [
          "Conexiones en vivo a tuberías presurizadas",
          "Sin interrupción del servicio en las líneas vecinas",
          "Equipo especializado y cuadrillas capacitadas",
          "Mano de obra inspeccionada y conforme a estándares",
        ],
      },
    ],
  },
  serviceDetails: {
    eyebrow: "Servicios en Detalle",
    headline: "Experiencia especializada, explicada.",
    intro:
      "Cada disciplina a continuación se ejecuta con estándares exigentes en el Sur de Florida: con ingeniería, permisos y construida para durar.",
    cta: "Solicitar Consulta",
    imageAltSuffix: "Meca Homes, Sur de Florida",
  },
  process: {
    eyebrow: "Nuestro Proceso",
    title: "Un Camino Claro para Construir su Residencia Personalizada",
    intro:
      "Seis etapas bien definidas —cada una gestionada internamente— mantienen su proyecto transparente, a tiempo y fiel a su visión.",
    steps: [
      {
        title: "Consulta",
        copy: "Escuchamos su visión, alcance y presupuesto, y luego trazamos un camino claro a seguir.",
      },
      {
        title: "Diseño y Planificación",
        copy: "Diseño arquitectónico e ingeniería alineados con su estilo de vida y su terreno.",
      },
      {
        title: "Permisos",
        copy: "Gestionamos las aprobaciones y permisos municipales del Sur de Florida para que su proyecto avance a tiempo.",
      },
      {
        title: "Preparación del Terreno",
        copy: "Limpieza, nivelación, cimientos y servicios preparados con estándares exigentes.",
      },
      {
        title: "Construcción",
        copy: "Oficios calificados y una supervisión rigurosa dan vida a su residencia personalizada.",
      },
      {
        title: "Entrega Final",
        copy: "Una inspección detallada y la entrega: cada acabado revisado, cada detalle en su lugar.",
      },
    ],
  },
  gallery: {
    eyebrow: "Trabajo Seleccionado",
    title: "Residencias personalizadas, creadas con intención.",
    intro:
      "Construcción residencial personalizada, trabajo estructural, preparación de terreno y desarrollo de viviendas personalizadas en todo el Sur de Florida.",
    captions: [
      "Fachada de residencia personalizada en el Sur de Florida con arquitectura moderna y limpia",
      "Residencia contemporánea en Miami con ventanales de piso a techo",
      "Casa construida a la medida con jardinería cuidada del Sur de Florida",
      "Propiedad arquitectónica frente al agua en el Sur de Florida",
      "Interior de una casa moderna construida a la medida en Miami",
      "Elegante residencia personalizada del Sur de Florida al atardecer con iluminación cálida",
    ],
    note: "Imágenes mostradas con fines de representación de diseño; portafolio de proyectos disponible a solicitud.",
  },
  serviceAreas: {
    eyebrow: "Dónde Construimos",
    title: "Al Servicio del Sur de Florida",
    intro:
      "Meca Homes ofrece construcción residencial personalizada en todo el Sur de Florida, desde residencias personalizadas en Miami y Coral Gables hasta viviendas frente al agua en Key Biscayne, Fort Lauderdale, Boca Raton y West Palm Beach. Dondequiera que se encuentre su terreno en Miami-Dade, Broward o Palm Beach, nuestro equipo de diseño-construcción aporta el mismo y único punto de responsabilidad a su proyecto.",
    notes: [
      "Residencias personalizadas en toda la ciudad y el área metropolitana de Miami-Dade.",
      "Residencias señoriales que cumplen estrictos estándares arquitectónicos.",
      "Amplias casas personalizadas en terrenos de gran tamaño.",
      "Construcciones refinadas entre la frondosa vegetación del Grove.",
      "Residencias isleñas costeras y resistentes según el código.",
      "Viviendas frente al agua y de arquitectura moderna.",
      "Residencias contemporáneas en un enclave de primer nivel.",
      "Obra nueva en una de las zonas de mayor crecimiento de Miami.",
      "Residencias familiares en las comunidades planificadas del oeste de Broward.",
      "Viviendas personalizadas y frente al agua en todo el condado de Broward.",
      "Construcción de casas personalizadas en todo el condado de Miami-Dade.",
      "Construcción residencial en las comunidades del condado de Broward.",
      "Residencias personalizadas y de lujo en todo el condado de Palm Beach.",
      "Casas personalizadas de alta gama en Boca Raton y sus alrededores.",
      "Residencias personalizadas modernas en West Palm Beach y la costa.",
    ],
    closingLead: "¿No ve su comunidad? ",
    closingLink: "Contáctenos",
    closingTail:
      " y atendemos proyectos de residencias personalizadas en toda la región del Sur de Florida.",
  },
  faq: {
    eyebrow: "Preguntas, Respondidas",
    title: "Preguntas Frecuentes sobre Construcción de Residencias",
    intro:
      "Preguntas comunes sobre la construcción de una casa personalizada en el Sur de Florida: desde costos y plazos hasta permisos, preparación de terreno y conexiones de servicios.",
    closingLead: "¿Aún tiene preguntas sobre su proyecto? ",
    closingCallPrefix: "Llame al ",
    closingOr: " o ",
    closingLink: "solicite una consulta",
    items: [
      {
        q: "¿Cuánto cuesta una casa personalizada en el Sur de Florida?",
        a: "El costo de una casa personalizada en el Sur de Florida —Miami-Dade, Broward y Palm Beach— varía ampliamente según el terreno, los metros cuadrados, la complejidad del diseño, los acabados y las condiciones del sitio. La mayoría de las casas personalizadas se cotizan por pie cuadrado, y los proyectos arquitectónicos premium o frente al agua alcanzan valores mayores. En lugar de dar una cifra genérica, Meca Homes prepara un presupuesto a la medida tras revisar su terreno, alcance y objetivos de diseño durante la consulta, para que tenga una cifra realista basada en su proyecto real.",
      },
      {
        q: "¿Cuánto tarda la construcción de una residencia personalizada?",
        a: "Una residencia personalizada en el Sur de Florida suele tardar de 12 a 24 meses desde el diseño hasta la entrega final, según el tamaño, la complejidad y los plazos de permisos de su municipio. El diseño y la ingeniería, los permisos, la preparación del terreno y la construcción tienen cada uno su propia duración. Como Meca Homes ejecuta el diseño-construcción con un solo equipo, las fases se superponen de forma eficiente y las aprobaciones avanzan más rápido, lo que ayuda a mantener su cronograma general lo más ajustado posible.",
      },
      {
        q: "¿Qué es la construcción diseño-construcción (design-build)?",
        a: "El diseño-construcción es un método de ejecución en el que la arquitectura, la ingeniería y la construcción están a cargo de un solo equipo responsable bajo un único contrato, en lugar de contratar por separado a un arquitecto y a un constructor. Este enfoque unificado elimina los vacíos y la falta de coordinación comunes en los proyectos tradicionales, mejora el control de costos y acorta los plazos. Como contratista de diseño-construcción en el Sur de Florida, Meca Homes gestiona su proyecto de principio a fin, de modo que haya un solo punto de responsabilidad desde el primer boceto hasta la entrega de llaves.",
      },
      {
        q: "¿Qué incluye la construcción llave en mano?",
        a: "La construcción llave en mano significa que entregamos un hogar totalmente terminado y listo para habitar. Meca Homes coordina cada oficio, material, inspección y acabado —estructura, instalaciones, carpintería, accesorios y detalles finales— para que usted no tenga que gestionar ni perseguir nada. Recibe una residencia en Miami o el Sur de Florida terminada, conforme a los códigos y lista para habitar desde el día en que recibe las llaves.",
      },
      {
        q: "¿Necesito permisos para una residencia personalizada?",
        a: "Sí. Construir una residencia personalizada en el Sur de Florida requiere permisos y aprobaciones de su municipio, que abarcan los aspectos estructurales, eléctricos, de plomería y mecánicos, y a menudo la revisión de zonificación y ambiental. Las zonas costeras y frente al agua, como Key Biscayne y Miami Beach, pueden tener requisitos adicionales. Meca Homes gestiona todo el proceso de permisos en su nombre, coordinando planos, solicitudes e inspecciones para que su proyecto se mantenga conforme y a tiempo.",
      },
      {
        q: "¿Qué es la construcción de obra gris?",
        a: "La construcción de obra gris es la envolvente estructural de un hogar —cimientos, losas, muros de mampostería, vigas de amarre y armado— construida hasta una etapa estructuralmente completa y resistente a la intemperie. Es la base duradera sobre la que se levanta todo lo demás. Meca Homes ofrece construcción de obra gris en el Sur de Florida diseñada para el suelo y las cargas de viento de la región, ya sea como parte de una obra completa o como un alcance independiente para desarrolladores y constructores que solo necesitan la estructura terminada.",
      },
      {
        q: "¿Qué preparación de terreno se requiere antes de construir?",
        a: "La preparación del terreno deja su lote listo para construir y normalmente incluye limpieza, nivelación, drenaje, compactación del suelo y conexiones preliminares de servicios, además de los cimientos. Una buena preparación del terreno es crucial en el Sur de Florida, donde el nivel freático, el suelo y las consideraciones de inundación afectan directamente la durabilidad de un hogar. Como contratista de preparación de terreno en Miami, Meca Homes ejecuta estas primeras fases con estándares exigentes para que la estructura que sigue se asiente sobre una base estable, bien drenada y conforme al código.",
      },
      {
        q: "¿Qué es una conexión lateral de alcantarillado?",
        a: "Una conexión lateral de alcantarillado residencial es la tubería que enlaza la plomería de un hogar con la red municipal de alcantarillado. Instalarla o reemplazarla implica excavación, una conexión precisa, permisos, inspección y restauración del sitio. Meca Homes ofrece conexiones laterales de alcantarillado residencial en Miami y el Sur de Florida, tanto para nuevas residencias personalizadas como para propiedades que pasan de séptico a alcantarillado, entregando conexiones limpias y conformes que funcionan de manera confiable bajo la superficie.",
      },
      {
        q: "¿Qué es la toma en carga (wet tapping)?",
        a: "La toma en carga (wet tapping) es un método especializado para conectar una nueva línea de servicio a una tubería principal de agua presurizada y en funcionamiento, sin apagar el sistema ni interrumpir el servicio a las propiedades vecinas. Requiere equipo específico y cuadrillas capacitadas, porque la tubería permanece bajo presión durante todo el proceso. Como contratista de tomas en carga en el Sur de Florida, Meca Homes realiza estas conexiones en vivo con limpieza y conforme a los estándares de los servicios públicos, en proyectos residenciales y de desarrollo.",
      },
      {
        q: "¿Cómo inicio un proyecto de residencia personalizada?",
        a: "Comenzar es sencillo: solicite una consulta por teléfono, correo electrónico o el formulario de esta página. Meca Homes revisará su visión, terreno, alcance, presupuesto y plazos, y luego trazará un camino claro a seguir, desde la viabilidad y el diseño hasta los permisos y la construcción. No hay ningún compromiso, y terminará la conversación con una idea concreta de los próximos pasos para su residencia personalizada en el Sur de Florida.",
      },
      {
        q: "¿Qué zonas del Sur de Florida atienden?",
        a: "Meca Homes ofrece construcción residencial personalizada en todo el Sur de Florida, incluyendo Miami, Coral Gables, Pinecrest, Coconut Grove, Key Biscayne, Miami Beach, Aventura, Doral, Weston, Fort Lauderdale, Boca Raton y West Palm Beach, junto con las comunidades cercanas de los condados de Miami-Dade, Broward y Palm Beach. Si su proyecto se encuentra dentro de la región, es casi seguro que podemos ayudar: contáctenos y se lo confirmaremos.",
      },
      {
        q: "¿Por qué elegir un contratista de diseño-construcción?",
        a: "Un contratista de diseño-construcción le ofrece un solo equipo y un solo contrato para el diseño, la ingeniería y la construcción, lo que se traduce en una responsabilidad más clara, un mejor control del presupuesto y plazos más cortos que coordinar firmas por separado. Evita la situación común en la que el arquitecto y el constructor se culpan mutuamente por los sobrecostos. Para una casa personalizada en cualquier lugar del Sur de Florida, esa responsabilidad unificada protege tanto su inversión como su tranquilidad.",
      },
      {
        q: "¿Qué hace diferente a la construcción de viviendas de lujo?",
        a: "La construcción de viviendas de lujo exige un estándar más alto en cada etapa: arquitectura a la medida, materiales premium, sistemas avanzados, una ejecución precisa y una gestión meticulosa del proyecto. Las tolerancias son más estrictas, los acabados más exigentes y la coordinación entre los oficios especializados mucho más compleja. Meca Homes aborda cada residencia del Sur de Florida con la supervisión y el detalle que exige el trabajo de alta gama, para que el hogar terminado refleje la calidad que sus propietarios esperan.",
      },
      {
        q: "¿Cómo gestiona Meca Homes los permisos?",
        a: "Meca Homes gestiona los permisos de forma interna como parte del proceso de diseño-construcción. Preparamos y presentamos los planos y las solicitudes, coordinamos con el municipio correspondiente del Sur de Florida, respondemos a los comentarios de la revisión de planos y programamos las inspecciones requeridas hasta la finalización. Como los permisos están integrados con el diseño y la construcción en lugar de delegarse, los problemas se anticipan a tiempo y su proyecto sigue avanzando.",
      },
      {
        q: "¿Qué puedo esperar durante la construcción?",
        a: "Durante la construcción puede esperar una comunicación clara, una programación organizada y un riguroso control de calidad. Meca Homes coordina cada oficio en secuencia, gestiona las inspecciones y lo mantiene informado del avance y de las decisiones clave. Como somos su único punto de responsabilidad, siempre sabrá en qué etapa se encuentra su hogar, culminando en una entrega final detallada en la que se revisa cada acabado antes de la entrega.",
      },
    ],
  },
  contact: {
    eyebrow: "Solicitar Consulta",
    headline: "Construyamos algo extraordinario.",
    description:
      "Cuéntenos su proyecto en cualquier lugar de Miami o el Sur de Florida y nuestro equipo le responderá con un plan a la medida, desde la viabilidad hasta la entrega final.",
    assurances: [
      "Respuesta directa de nuestro equipo",
      "Evaluación del proyecto sin compromiso",
      "Próximos pasos claros en pocos días",
    ],
    callUs: "Llámenos",
    emailUs: "Escríbanos",
    messageUs: "Mensaje directo",
    whatsapp: "WhatsApp",
  },
  form: {
    header: "Inicie su proyecto",
    introLead:
      "Cuéntenos algunos detalles y nuestro equipo preparará sus próximos pasos. Los campos marcados con ",
    introTail: " son obligatorios.",
    labels: {
      name: "Nombre Completo",
      phone: "Teléfono",
      email: "Correo Electrónico",
      projectType: "Tipo de Proyecto",
      location: "Ciudad / Ubicación de la Propiedad",
      budget: "Rango de Presupuesto",
      timeline: "Plazo",
      details: "Detalles del Proyecto",
    },
    placeholders: {
      name: "Juan Pérez",
      phone: "(786) 300-1441",
      email: "usted@correo.com",
      location: "Miami, FL",
      details:
        "Cuéntenos sobre su terreno, su visión, los metros cuadrados o cualquier detalle que nos ayude a prepararnos.",
    },
    selectServiceDefault: "Seleccione un servicio",
    selectRangeDefault: "Seleccione un rango",
    projectTypes: [
      "Nueva Residencia Personalizada",
      "Diseño-Construcción",
      "Construcción Llave en Mano",
      "Preparación de Terreno / Obra Gris",
      "Conexión Lateral de Alcantarillado",
      "Toma en Carga (Wet Tapping)",
      "Otro / No estoy seguro",
    ],
    budgets: [
      "Menos de $500K",
      "$500K – $1M",
      "$1M – $2M",
      "$2M – $5M",
      "$5M+",
      "Por definir",
    ],
    timelines: [
      "Listo para comenzar",
      "1 – 3 meses",
      "3 – 6 meses",
      "6 – 12 meses",
      "Solo explorando",
    ],
    submit: "Solicitar Mi Consulta",
    submitting: "Enviando…",
    microcopy:
      "Revisaremos su proyecto y nos pondremos en contacto con los próximos pasos.",
    privacy: "Su información se mantiene privada y nunca se comparte.",
    successTitle: "Gracias: su solicitud fue recibida.",
    successBodyLead:
      "Revisaremos los detalles de su proyecto y nos pondremos en contacto pronto con los próximos pasos. Para algo urgente, llame al ",
    successBodyTail: ".",
    submitAnother: "Enviar otra solicitud",
    errorGeneric: "Algo salió mal.",
    errorRequired:
      "El nombre, el teléfono y el correo electrónico son obligatorios.",
  },
  floating: {
    call: "Llamar Ahora",
    whatsapp: "WhatsApp",
    quote: "Cotizar",
    whatsappAria: "Chatear por WhatsApp",
  },
  footer: {
    description:
      "Constructores de casas personalizadas en todo el Sur de Florida —Miami-Dade, Broward y Palm Beach—, que ofrecen diseño-construcción, construcción llave en mano, preparación de terreno y obra gris, y conexiones residenciales de servicios.",
    exploreHeading: "Explorar",
    servicesHeading: "Servicios",
    areasHeading: "Zonas Atendidas",
    seoLead: "Constructores de residencias personalizadas al servicio del Sur de Florida:",
    seoBody:
      "Construyendo con orgullo casas personalizadas en Miami-Dade, Broward y Palm Beach —incluyendo Miami, Coral Gables, Pinecrest, Coconut Grove, Key Biscayne, Miami Beach, Aventura, Doral, Weston, Fort Lauderdale, Boca Raton y West Palm Beach.",
    rights: "Todos los derechos reservados.",
    positioning:
      "Constructores de Casas Personalizadas | Construcción Residencial · Sur de Florida",
  },
};

export const translations: Record<Lang, Translation> = { en, es };

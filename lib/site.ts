// Language-neutral / structural site data.
// All user-facing copy lives in lib/i18n/translations.ts.
// Arrays here are index-aligned with the matching arrays in the translations
// object (services ↔ t.services.items, areas ↔ t.serviceAreas.notes, etc.).

export const site = {
  name: "Meca Homes",
  phone: "786-300-1441",
  phoneHref: "tel:+17863001441",
  email: "Info@meca-homes.com",
  emailHref: "mailto:Info@meca-homes.com",
  domain: "Meca-Homes.com",
  url: "https://meca-homes.com",
  whatsappHref: "https://wa.me/17863001441",
} as const;

// Navigation: structural keys + anchors. Labels come from t.nav[key].
export const nav = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "projects", href: "#projects" },
  { key: "areas", href: "#service-areas" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const;

// Service structural metadata. Text (title/headline/copy/long/features) is in
// t.services.items[i] and t.serviceDetails (same order).
export type ServiceMeta = { id: string; anchor: string; icon: string };

export const services: ServiceMeta[] = [
  { id: "design-build", anchor: "service-design-build", icon: "compass" },
  {
    id: "turn-key-construction",
    anchor: "service-turn-key-construction",
    icon: "key",
  },
  { id: "site-work-shell", anchor: "service-site-work-shell", icon: "structure" },
  { id: "sewer-lateral", anchor: "service-sewer-lateral", icon: "pipe" },
  { id: "wet-tapping", anchor: "service-wet-tapping", icon: "valve" },
];

// Detail-section imagery, keyed by service id.
export const serviceImages: Record<string, string> = {
  "design-build":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=80",
  "turn-key-construction":
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=80",
  "site-work-shell":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=80",
  "sewer-lateral":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1100&q=80",
  "wet-tapping":
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1100&q=80",
};

// About-section slideshow imagery. Curated from the existing project image set
// (the original about image + selected gallery residences), sized for the 4:5
// frame. Alt text comes from t.about.imageAlt.
export const aboutImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1100&q=80",
] as const;

// Service-area city names (proper nouns — identical in both languages).
// Descriptions come from t.serviceAreas.notes[i] (same order).
export const areaNames = [
  "Miami",
  "Coral Gables",
  "Pinecrest",
  "Coconut Grove",
  "Key Biscayne",
  "Miami Beach",
  "Aventura",
  "Doral",
  "Weston",
  "Fort Lauderdale",
  "Miami-Dade",
  "Broward",
  "Palm Beach",
  "Boca Raton",
  "West Palm Beach",
] as const;

// Gallery images. Captions/alt come from t.gallery.captions[i] (same order).
export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    span: "lg:col-span-2",
  },
] as const;

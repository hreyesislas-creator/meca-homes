import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { site, services } from "@/lib/site";
import { translations } from "@/lib/i18n/translations";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import "./globals.css";

// English is the default/canonical content used for static SEO + schema.
const en = translations.en;

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Meca Homes | Custom Home Builders in South Florida",
    template: "%s | Meca Homes",
  },
  description:
    "Meca Homes are custom home builders serving South Florida — Miami-Dade, Broward, and Palm Beach — with design-build, turn-key construction, site work and shell construction, residential sewer lateral connections, and wet tapping.",
  keywords: [
    "custom home builders South Florida",
    "custom home builders Miami-Dade",
    "design build contractor South Florida",
    "turn-key construction South Florida",
    "site work and shell construction South Florida",
    "shell construction Broward",
    "custom home builders Palm Beach",
    "custom home builders Boca Raton",
    "custom home builders West Palm Beach",
    "residential sewer lateral connections Miami-Dade",
    "wet tapping contractor South Florida",
    "residential construction South Florida",
  ],
  authors: [{ name: "Meca Homes" }],
  creator: "Meca Homes",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    url: site.url,
    siteName: "Meca Homes",
    title: "Meca Homes | Custom Home Builders in South Florida",
    description:
      "Custom home building, design-build, turn-key construction, site work and shell construction, and utility connections across South Florida — Miami-Dade, Broward, and Palm Beach.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meca Homes | Custom Home Builders in South Florida",
    description:
      "Custom home building, design-build, turn-key construction, and site work and shell construction across South Florida — Miami-Dade, Broward, and Palm Beach.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#102044",
  width: "device-width",
  initialScale: 1,
};

const cityAreas = [
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
  "Boca Raton",
  "West Palm Beach",
];

const businessDescription =
  "Custom home builders providing design-build, turn-key construction, site work and shell construction, residential sewer lateral connections, and wet tapping across South Florida — Miami-Dade, Broward, and Palm Beach.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      description: businessDescription,
      logo: `${site.url}/og-image.jpg`,
      slogan: "Custom Homes Built From Vision to Completion",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-786-300-1441",
        email: site.email,
        contactType: "sales",
        areaServed: "US-FL",
        availableLanguage: ["English", "Spanish"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
    {
      // LocalBusiness + construction-company semantics.
      // schema.org has no literal "ConstructionCompany" type; GeneralContractor
      // (a HomeAndConstructionBusiness, itself a LocalBusiness) is the correct
      // standard type, declared alongside LocalBusiness for clarity.
      "@type": [
        "LocalBusiness",
        "GeneralContractor",
        "HomeAndConstructionBusiness",
      ],
      "@id": `${site.url}/#business`,
      name: site.name,
      description: businessDescription,
      url: site.url,
      email: site.email,
      telephone: "+1-786-300-1441",
      priceRange: "$$$$",
      image: `${site.url}/og-image.jpg`,
      parentOrganization: { "@id": `${site.url}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressRegion: "FL",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "South Florida" },
        { "@type": "AdministrativeArea", name: "Miami-Dade County" },
        { "@type": "AdministrativeArea", name: "Broward County" },
        { "@type": "AdministrativeArea", name: "Palm Beach County" },
        ...cityAreas.map((name) => ({ "@type": "City", name })),
      ],
      knowsAbout: [
        "Custom Homes",
        "Design-Build",
        "Architectural and Engineering Plans",
        "Turn-Key Construction",
        "Site Work and Shell Construction",
        "Residential Sewer Lateral Connections",
        "Wet Tapping",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Home Building Services",
        itemListElement: services.map((s, i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: en.services.items[i].title,
            description: en.services.items[i].copy,
            url: `${site.url}/#${s.anchor}`,
            areaServed: "South Florida",
            provider: { "@id": `${site.url}/#business` },
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      inLanguage: "en-US",
      mainEntity: en.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq-es`,
      inLanguage: "es",
      mainEntity: translations.es.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

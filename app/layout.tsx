import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { site, services, faqs } from "@/lib/site";
import "./globals.css";

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
    default: "Meca Homes | Luxury Custom Home Builders in South Florida",
    template: "%s | Meca Homes",
  },
  description:
    "Meca Homes are luxury custom home builders in South Florida, serving Miami and surrounding communities with design-build, turn-key construction, site work, shell construction, residential sewer lateral connections, and wet tapping.",
  keywords: [
    "luxury custom home builders South Florida",
    "custom home builders Miami",
    "design build contractor South Florida",
    "turn-key construction Miami",
    "shell construction South Florida",
    "site work contractor Miami",
    "residential sewer lateral connections Miami",
    "wet tapping contractor South Florida",
    "luxury home builders Miami-Dade",
    "residential construction South Florida",
  ],
  authors: [{ name: "Meca Homes" }],
  creator: "Meca Homes",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Meca Homes",
    title: "Meca Homes | Luxury Custom Home Builders in South Florida",
    description:
      "Luxury custom home building, design-build, turn-key construction, site work, shell construction, and utility connections across Miami and South Florida.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meca Homes | Luxury Custom Home Builders in South Florida",
    description:
      "Luxury custom home building, design-build, turn-key construction, site work, and shell construction across Miami and South Florida.",
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
];

const businessDescription =
  "Luxury custom home builders providing design-build, turn-key construction, site work, shell construction, residential sewer lateral connections, and wet tapping in Miami and South Florida.";

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
      slogan: "Luxury Custom Homes Built From Vision to Completion",
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
        ...cityAreas.map((name) => ({ "@type": "City", name })),
      ],
      knowsAbout: [
        "Luxury Custom Homes",
        "Design-Build",
        "Turn-Key Construction",
        "Site Work",
        "Shell Construction",
        "Residential Sewer Lateral Connections",
        "Wet Tapping",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Home Building Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.copy,
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
      mainEntity: faqs.map((f) => ({
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
        {children}
      </body>
    </html>
  );
}

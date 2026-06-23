# Meca Homes — Luxury Custom Home Builders

Premium, lead-focused landing page for **Meca Homes**, a luxury / custom home builder serving South Florida.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**. Mobile-first, fast, SEO-ready.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Stack

- **Next.js 16** (App Router, Turbopack, Server Components)
- **TypeScript** (strict)
- **Tailwind CSS v4** — brand theme tokens in `app/globals.css`
- **next/font** — Fraunces (display) + Inter (sans)
- **next/image** — optimized imagery (Unsplash placeholders, see below)

## Project structure

```
app/
  layout.tsx        SEO metadata, fonts, JSON-LD (LocalBusiness/GeneralContractor)
  page.tsx          Section composition
  globals.css       Brand theme + scroll-reveal + utilities
  sitemap.ts        /sitemap.xml
  robots.ts         /robots.txt
  api/lead/route.ts Lead form endpoint (validates; logs lead — ready to wire to email/CRM)
components/         Header, Hero, About, Services, Process,
                   Gallery, Contact, LeadForm, Footer, FloatingActions, Logo, Icons, Reveal
lib/site.ts         Single source of truth: company info, services, process, gallery
```

## Brand identity

| Token        | Hex       |
|--------------|-----------|
| Deep navy    | `#102044` / `#13284B` |
| Steel blue   | `#526FA8` |
| Luxury gold  | `#F5E64A` |
| Off-white    | `#F5F5F5` |
| Dark ink     | `#111111` |

## Customization notes

- **Company details** (phone, email, services, process steps) live in `lib/site.ts`.
- **Gallery images** use Unsplash placeholders for design representation. Replace the
  `gallery` URLs in `lib/site.ts` with real project photos (drop them in `/public` and
  reference `/your-photo.jpg`). Hero/About images are also Unsplash placeholders.
- **Lead delivery**: `app/api/lead/route.ts` validates and logs each submission. Wire the
  marked integration point to Resend / SendGrid / HubSpot / a webhook to deliver leads to
  `Info@meca-homes.com`.
- **No fake testimonials or guarantees** are included, per brief. Gallery carries a clear
  "imagery for design representation" note.

## SEO

- Title, description, keywords, OpenGraph, Twitter card in `app/layout.tsx`
- JSON-LD structured data (GeneralContractor)
- `sitemap.xml` + `robots.txt`
- Update `site.url` in `lib/site.ts` to the production domain before launch.
```

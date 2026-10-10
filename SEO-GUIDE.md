# SEO & local SEO – lipoedem.ma

> **First check that the domain lipoedem.ma is renewed.** In October 2026 Google was showing
> "Nom de domaine expiré" for it – nothing on the site can rank while the domain is expired.

## How the site is built and hosted

The site is a **Next.js 16** app (App Router) hosted on **Vercel**:

```
npm install
npm run dev     # local development on http://localhost:3000
npm run build   # production build (Vercel runs this automatically on every push)
```

Every page is pre-rendered to static HTML at build time with its own title, description,
canonical, hreflang and JSON-LD, then served from Vercel's CDN. Google, Bing and AI assistants
read the full content without running JavaScript.

- URLs end with a slash (`/maladie/`); Vercel redirects `/maladie` → `/maladie/` automatically.
- Redirects (old `/fr/…`, `/blog`…) and security / cache headers are in `next.config.mjs`.
- Unknown URLs return a real **404** with `noindex`.
- **Speed Insights**: in Vercel → Project → *Speed Insights* → Enable, to see real Core Web Vitals
  from visitors' phones.

### Connecting the domain on Vercel

1. Vercel → Project → Settings → **Domains** → add `lipoedem.ma` and `www.lipoedem.ma`.
2. Set `lipoedem.ma` as the primary domain; choose "Redirect `www.lipoedem.ma` to `lipoedem.ma`" (308).
3. At the .ma registrar, create the DNS records Vercel shows (A record `76.76.21.21` for the apex,
   CNAME `cname.vercel-dns.com` for `www`, or the values displayed in your dashboard).
4. Keep the `*.vercel.app` preview URL out of Google: Vercel already sends `noindex` on preview
   deployments; only the production domain should be submitted in Search Console.

## Where to change things

| What | File |
|---|---|
| Address, phone, WhatsApp, hours, social links | `src/config/site.ts` (single source – used everywhere, incl. schema) |
| Title / meta description of each page | `src/seo/routes.ts` |
| Home page FAQ (also sent to Google as FAQ schema) | `src/seo/faq.ts` |
| Structured data (MedicalClinic, Physician, MedicalCondition, MedicalProcedure, FAQ, Breadcrumb) | `src/seo/schema.ts` |
| Adding a new page | create `src/app/<slug>/page.tsx` (copy an existing one) **and** add it to `src/seo/routes.ts` – the sitemap updates itself |
| Redirects, security & cache headers | `next.config.mjs` |
| Ad / marketing tags (GTM, Meta Pixel, TikTok, Google Ads) | `src/config/site.ts` → `tracking` – paste the ID, rebuild |

## Guide du lipœdème (content that ranks)

`/guide/` holds in-depth articles answering what people search ("lipœdème ou cellulite", "stades du lipœdème",
"prix opération lipœdème Maroc", "lipœdème des bras", récupération, lymphœdème). Each article has an
"L’essentiel" summary, a FAQ, Article + FAQ schema and the doctor as author/reviewer.

To add an article: add an entry to `src/content/guide.ts` (same shape as the others). The page, sitemap,
`llms.txt` and `llms-full.txt` update automatically. Publishing one useful article per month is the most
effective way to climb on "lipoedeme" (≈1,300 searches/month in Morocco, low competition).

## AI assistants (ChatGPT, Perplexity, Gemini, Claude) – "GEO"

- `/llms.txt` and `/llms-full.txt` are generated from the site content: clinic facts, all FAQs and guide articles.
- `robots.txt` explicitly allows AI crawlers.
- The same name, address, phone and doctor description are repeated consistently everywhere
  (site, schema, llms files) – AI answers rely on this consistency, as Google does.
- Off-site matters as much: Google Business Profile, Dabadoc, press (Le Matin, 2M, Femmes du Maroc) and the
  MOSLIPOD association are sources AI assistants quote.

## Google Analytics

Both tags are loaded in `index.html`: **G-98XDWC6P0Q** (new) and G-F46EC384N2 (old).
Taps on contact links are sent as events (`src/analytics.ts`):
`contact_phone`, `contact_whatsapp`, `contact_email`, `get_directions`.
In GA4 → Admin → Events, mark `contact_whatsapp` and `contact_phone` as **key events** to see
which pages bring appointment requests.

## Arabic page

`/ar` is a full Arabic (RTL) page for people searching «الوذمة الشحمية», «الليبوديما», «علاج الوذمة الشحمية في المغرب».
It is linked to the French home page with `hreflang` (fr ↔ ar), has its own Arabic FAQ schema and
its own share image. Text lives in `src/pages/Arabic.tsx` and `src/seo/faq.ts` (`arFaq`).

## Share image

`public/og/lipoedeme-maroc-fr.jpg` and `-ar.jpg` (1200×630) are what WhatsApp, Facebook and LinkedIn show
when someone shares a link to the site.

## After deploying

1. **Google Search Console** → Sitemaps → submit `https://lipoedem.ma/sitemap.xml`.
   Then URL inspection → test `/`, `/ar/`, `/maladie/`, `/traitement/`, `/wal/`, `/contact/` → *Request indexing*.
2. **Bing Webmaster Tools** → submit the same sitemap (Bing also feeds ChatGPT search).
3. Check structured data with https://search.google.com/test/rich-results

## Google Business Profile (most important for "lipoedème maroc" / Maps)

The map box at the top of Google comes from Google Business Profile, not from the website.

- The name, address and phone on the profile must be **exactly** the ones in `src/config/site.ts`.
- Category: *Chirurgien plasticien* (primary) + *Clinique de chirurgie esthétique* / *Médecin*.
- Website field: `https://lipoedem.ma/` ; appointment link: `https://lipoedem.ma/contact`.
- Add the services "Traitement du lipœdème", "Liposuccion WAL", with descriptions.
- Upload real photos (center, team, bloc) every month and post updates.
- Ask every satisfied patient for a Google review (send the review link on WhatsApp after the follow-up visit).
  Reviews and their keywords ("lipœdème", "Casablanca") are the #1 local ranking factor.
- Put the same name/address/phone on Facebook, Instagram, Dabadoc, annuaires médicaux.

## Media to re-upload

These files in `public/` are corrupted (cut at 512 KB during an earlier upload) and are no longer used:

- `البروفيسور توفيق الصفريوي … .mp4` (TV interview – Publications page now links to YouTube instead)
- `photo/doctor photo1.png`, `photo/ecps.PNG`, `image2/ecps.PNG`, `please use this folder/ecps.PNG`
- several `.mp4` in `please use this folder/`, `video/`, `Témoignages de Patientes/` that are exactly 524 288 bytes

# SEO & local SEO – lipoedem.ma

## How the site is built now

`npm run build` does three things:

1. builds the React app (Vite),
2. builds a server version of the same app,
3. runs `scripts/prerender.mjs`, which writes one real HTML file per page
   (`index.html`, `maladie.html`, `contact.html`…), a `404.html` and `sitemap.xml`.

Google, Bing and AI assistants (ChatGPT, Perplexity, Gemini…) now receive the full text,
title, description, canonical URL and structured data of every page without running JavaScript.
The browser then "hydrates" the page so menus, galleries and the chatbot work as before.

Deploy the `dist/` folder as before (Netlify / Bolt). No server is needed.

## Where to change things

| What | File |
|---|---|
| Address, phone, WhatsApp, hours, social links | `src/config/site.ts` (single source – used everywhere, incl. schema) |
| Title / meta description of each page | `src/seo/routes.ts` |
| Home page FAQ (also sent to Google as FAQ schema) | `src/seo/faq.ts` |
| Structured data (MedicalClinic, Physician, MedicalCondition, MedicalProcedure, FAQ, Breadcrumb) | `src/seo/schema.ts` |
| Adding a new page | add the route in `src/App.tsx` **and** in `src/seo/routes.ts` |

## After deploying

1. **Google Search Console** → Sitemaps → submit `https://lipoedem.ma/sitemap.xml`.
   Then URL inspection → test `/`, `/maladie`, `/traitement`, `/wal`, `/contact` → *Request indexing*.
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

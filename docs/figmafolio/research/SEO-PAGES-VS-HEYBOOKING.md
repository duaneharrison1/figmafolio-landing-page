---
figmafolio-sync: figmaApp docs/figmafolio/research is the source. Copy this file unchanged to figmafolio-landing-page/docs/figmafolio/research/.
version: 2026-11-21.1
---

# SEO page set: heybooking today vs FigmaFolio, and the full page list

Written 21 Nov 2026. heybooking counts are from its built site (`public/`, 21 Nov 2026). FigmaFolio status is from the landing repo branches (nothing below is live yet). Facts about FigmaFolio come from `PRODUCT.md`; facts about other tools are in `SEO-RESEARCH.md` with the date each was read.

## 1. What heybooking has

About 340 pages in the sitemap. That number is a multiplier (one page type times 5 country folders plus a Chinese twin), not 340 separate ideas.

| Page type | What it is | Count | Shared across countries? |
|---|---|---|---|
| Home, pricing, contact, set-up-by-chat | Core pages | about 4 per country | Country copies |
| Feature pages | One page per live feature, with a picture of the real screen | 12 + an index | Country copies |
| Business-type pages ("who it's for") | Studios, gyms, salons, workshops, rentals, food, ceramic studios | about 8 + an index | Country copies |
| Niche search pages | Two per business: "[business] booking system" and "free booking system for [business]". Pilates, yoga, hairdressers, art, pottery, tutoring, playgroups, music schools, personal trainers, gyms, home bakers, small shops | about 24 in English | Yes, each with its own local line |
| Alternative pages | One per competitor (Fresha, Acuity, Mindbody, Momence, Setmore, SimplyBook, Bookeo, TeamUp, Calendly, Glofox and others) plus a hub. Every fact read from the tool's own page and dated. International only, so they are not near copies | 14 + hub | No, international only |
| Help centre | 12 how-to guides named after what owners search, numbered steps, a FAQ. It was a blog for hours on 20 Nov, then renamed `/help/` | 12 + index | English and Hong Kong |
| Language twin | Traditional Chinese for Hong Kong, built from the English pages | 63 | Hong Kong only |
| Country folders | `/hk/`, `/ph/`, `/sg/`, `/uk/` and international `/`, with hreflang and x-default, no forced redirects, a dismissible "see prices in HK$" suggestion | 5 | n/a |

Things heybooking does around the pages, not as pages:

- Structured data on every page (Organization, SoftwareApplication with offers, FAQPage, BreadcrumbList on niche pages).
- Sitemap written by the build, robots.txt, an IndexNow key for Bing, and an `llms.txt` of plain questions and short answers for AI assistants.
- One name everywhere ("heybooking" in titles, JSON-LD and the page words), so Google shows one site name.
- A picture kit: 27 simplified copies of real screens, each naming the screen it mirrors, plus a guard that fails the build when a picture does not match its step.
- Competitor facts re-read each quarter, with a "checked" date.
- One real testimonial, used with the customer's agreement.
- A rule against thin content: a niche page needs its own features and questions. A page that repeats another with one word swapped is not built.
- The blog was withdrawn on purpose. How-to guides moved to `/help/`. A blog comes back only when there are experience-led posts (feature news, customer stories, lessons from running the product).

## 2. What FigmaFolio has, and how it lines up

| heybooking type | FigmaFolio equivalent | Status (21 Nov 2026) |
|---|---|---|
| Core pages | Home, pricing, about, contact, how it works | Exist. Home is Clark's redesign; do not touch without asking. |
| Feature pages | 5 old pages (analytics, custom domain, favicon, password, responsive design) | Exist, still carry claims PRODUCT.md does not support. Rewrite. |
| Task and niche search pages | Task pages (below) | 8 written locally, 1 to 8. None live. |
| Business-type pages | Audience pages (below) | Not started. |
| Alternative pages | Comparison pages | 1 written (Figma Sites). Research partly done for Siter, Framer, UXfolio, Readymag. |
| Help centre | Guides (below) | Not started. 2 of the task pages are really guides. |
| Blog | One 2022 post with a Vietnamese snippet, an Unsplash image, and template text on the index ("We write about building startups...") | Needs a decision, see section 4. |
| Country folders and twin | `/ph/` first | Not started. English only for now (Duane). |
| JSON-LD | FAQPage only (from the kit) | Add Organization, SoftwareApplication, BreadcrumbList. |
| llms.txt, IndexNow | None | Add after pages are live. |
| One name | "FigmaFolio" and "Figmafolio" are both used | Decide one. Needs Duane. |
| Picture kit | Style kit and tokens exist; no minis yet | First mini: the publish step. |
| Testimonial | None | Ask a real customer. Do not invent one. |

## 3. Full page list for FigmaFolio

Counts are English, one market. Do not copy a page with a word swapped (thin content): each needs its own facts and questions.

**A. Task pages (8 written, held)**
1. Figma prototype to website
2. Figma portfolio on your own domain
3. Is FigmaFolio free?
4. Free Figma portfolio website
5. Figma Sites alternative
6. Password protect a Figma prototype
7. One link for desktop and mobile Figma prototypes
8. Share a Figma prototype so anyone can open it

**B. Feature pages (rewrite 5, add 3)**
Rewrite: analytics, custom domain, custom favicon, password protection, responsive design (rename around desktop and mobile prototypes). Add: edits show without republishing; the link check; remove the "Made with Figmafolio" label. Plus a features index. About 9 pages.

**C. Audience pages (the business-type equivalent), 6 to 8**
Figma portfolio for UX designers, for product designers, for students and case studies, for freelancers sharing client work (password), for job seekers sending a link to recruiters, for agencies. Each needs its own sourced facts (what that person needs the link to do). Build only after the first batch shows impressions.

**D. Comparison pages, up to 8 plus a hub**
Siter, Framer, UXfolio, Carrd, Readymag, and Figma Sites (done). Possibly Webflow. Read each tool's own pages on the day, date them, "Not stated" over a guess, and include a "where they are better" list. GitHub Pages, Netlify and Tiiny.host go in a "other ways to host" section, not their own pages.

**E. Guides, about 10 to 12, under `/help/`**
Needs Duane's decision on the name (see 4). Candidates: connect a custom domain (the app has real instructions to read from), share a prototype (page 8 may move here), why a recruiter may see a warning on your link (needs real sources first), make a portfolio from case studies, one link for desktop and mobile (page 7), set a password for client work (page 6).

**F. `/ph/` pages, 15 or so**
Philippines is the top country by clicks, but mostly from Facebook and direct, not search. Build after English is live: the core pages and the task pages with local words and the dismissible toast. Prices stay regional and are not typed on pages.

**Total:** about 65 English pages plus about 15 for `/ph/`, against heybooking's 340. Fewer than heybooking on purpose: it has five markets and 12 business types. FigmaFolio has one product, one audience and no proof yet that task searches bring traffic.

## 4. The FigmaFolio blog

- The current blog is not helping. The index says "We write about building startups and thoughts going on our mind", and the one post is from 2022 and is now covered by the Figma Sites page.
- Recommended, copying heybooking's 20 Nov decision: redirect the old post to the Figma Sites alternative page, take the blog out of the nav and sitemap, and put how-to guides under `/help/`. A blog comes back when there are experience-led posts: what changed in the product, what was learned reviewing real portfolios (a Pro plan feature), real customer stories with consent.
- This is Duane's call: the name `/help/` vs `/blog/`, and whether to keep the blog hidden until then.

## 5. What would make FigmaFolio's version stronger than a copy

- Experience, expertise, proof: real portfolio reviews, a real customer note with consent, real numbers only (dated).
- Same checks as heybooking: a guard against thin pages, a "checked" date on every page, a quarterly re-read of competitor facts.
- Do not claim what the product does not do (no code export, no real pages, no ranking promise). That is also why task searches may bring fewer sign-ups than the page count suggests.

## 6. Open questions for Duane

1. Brand name spelling: "FigmaFolio" or "Figmafolio"?
2. Blog: hide and redirect now, or keep?
3. Guides under `/help/` or `/blog/`?
4. Build `/ph/` before or after the audience pages?
5. A real customer testimonial to ask for?

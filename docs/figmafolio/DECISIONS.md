---
figmafolio-sync: figmaApp docs/figmafolio is the source. Copy this file unchanged to figmafolio-landing-page/docs/figmafolio/.
version: 2026-11-21.1
---

# FigmaFolio decisions

What Duane decided, newest first. Add a line whenever he decides something. Never delete a line: strike it through and say what replaced it.

## 20 Nov 2026: SEO programme (FigmaFolio only)
- Run the heybooking SEO playbook for FigmaFolio's marketing site (figmafolio-landing-page). Aero gets the same process later; nothing for Aero now.
- Order: baseline, truth and tone files, research and page plan, checkpoint with Duane, tracking and admin, technical fixes, "X alternative" pages (after research and after the admin pages), pages in small batches held for his "merge".
- Admin insights are in scope: remake figmafolio.com/admin so it handles the new pages, with separate Aero pages to follow later.
- Analytics: keep the one Plausible site and filter to marketing pages in our own admin dashboard. No separate Plausible site.
- Languages: Duane has no insight. English only for now, decided from Plausible (France, Germany and China together are under 11% of home page visits). Revisit if a country grows.
- "Free" pages: write them honestly as "free for 7 days, then from $3 a month". FigmaFolio's free plan is a 7-day trial, not a permanent free tier. Whether to change the free plan is Duane's product call, not part of this work.
- Delete `/features/project-showcase` and `/features/code-conversion` (they describe features FigmaFolio does not have), with redirects. Approved by Duane 21 Nov after checking the live pages. Done on branch `seo/remove-false-pages` in figmafolio-landing-page (local commit, Duane pushes).
- Style rule (Duane, 21 Nov): every SEO page must use a style guide and reusable components (colours, buttons, cards), because FigmaFolio's whole branding will change later. No hardcoded colours or one-off buttons in page files. Changing the brand should mean changing tokens, not editing pages. The landing page has 294 hardcoded hex values and no token file today, so a token layer and a small page kit come before the first SEO page. The app and the marketing site stay separate and are kept in sync by hand through one versioned tokens file in both repos.
- `/pricing-test` is a developer test page for the regional pricing table. To be deleted or hidden; the ipinfo token typed into it stays in git history, so rotate it.
- Search Console: the figmafolio.com Domain property already existed (owner duanehar@outlook.com, 16 months of data). Verified for francisgonzales.claude@gmail.com on 21 Nov with a TXT record at GoDaddy. josefluis12@gmail.com (Full access) removed on 21 Nov at Duane's request.
- Bing Webmaster: https://www.figmafolio.com/ added and verified on 21 Nov with a CNAME at GoDaddy (under the heybooking Bing login). No sitemap submitted yet; waits for the canonical fix to be live.
- ~~Search Console and Bing: no FigmaFolio property (20 Nov).~~ Wrong: the Search Console property existed. See the two lines above.
- 21 Nov, locale: follow heybooking. International `/` in US$ is the default (x-default), country pages in folders (`/ph/` first, since the Philippines is the top country by clicks, all brand searches), `hreflang` between them, no forced redirects, a dismissible time-zone suggestion. Prices stay regional; never touch pricing logic. No Tagalog yet: no one searches in it.
- 21 Nov, canonical: `site` in astro.config.mjs changed from app.figmafolio.com (the app) to www.figmafolio.com, robots.txt added (branch seo/canonical-domain, not pushed). Sitemap submission waits until it is live.
- 21 Nov, page speed: home page 99 mobile / 100 desktop performance, SEO 100, accessibility 96. No speed work needed now.
- 21 Nov, style method: marketing pictures are built from "minis" of the real screens, captured from the real app, tokens only, checked for drift. Plan in `DESIGN_SYSTEM_PLAN.md`.

## 13 Nov 2026: later
- Push the custom domain as the reason to upgrade, and as the answer to links being flagged by recruiters' security tools.
- Aero sign-ups must not get FigmaFolio emails (#349).
- Keep Clark's copy as the base, improved with the research (`HOMEPAGE-COPY.md`).

## 13 Nov 2026: strategy picks
- Homepage line: Clark's "Figma file. Go live in 1 min!" (the "1 min" needs a real test before it ships).
- First audience: job-seeking designers. Duane adds: the free figmafolio address can get flagged as phishing by recruiters' email and browser security, so a custom domain does better. Push the custom domain for this audience.
- Pro "free portfolio review": keep it, and make it easy: a way to submit a portfolio for review from inside the app.
- Mascot: left out of this round.

## 13 Nov 2026: repairs
- Remove User Testing from the FigmaFolio website (it lives in Aero). Merged.
- Fix www for custom domains, including existing ones. Merged.
- Warn on dashboard tiles when a prototype is not shared; correct the instructions page. Merged.
- Stale "trial" status and trial gates: Duane is looking into it himself.
- Admin key in the repo: not a concern for now.

## 13 Nov 2026: setup answers for the re-evaluation run
- Keep the name FigmaFolio. No rename work. The logo and font still get checked for looking like Figma's own.
- Clark leads the look. His Figma file is the starting direction, refined against competitors and Duane's references. Nothing is signed; this is how the work is run, not a deal.
- Scope is everything a customer sees: app, landing page, sign-up and onboarding, every email, and the Figma plugin's Community page.
- Docs live in `docs/figmafolio/` in figmaApp. Shared words and facts must update in figmaApp and figmafolio-landing-page together (proposal in `README.md`, not yet confirmed).

## Earlier, from Duane's notes (to confirm, not yet re-stated)
- 3 Nov: FigmaFolio still makes money and is never stopped. The aim is to improve and diversify it so it needs less of Duane's time.
- 3 Nov, on Clark's redesign: much better. Open: which is the main colour, given the light blue gradient; the logo is a risk; the font may be Figma's own.
- 2 Nov: the stale "trial" status on paying users is a real issue on its own (GitHub #303).
- 26 Oct: the FigmaFolio to Aero onboarding popup is one design for everyone (PR #289); the forced migration A/B test runs since 16 Jul.
- 18 Apr: User Testing moved to Aero. FigmaFolio shows a link to Aero instead.

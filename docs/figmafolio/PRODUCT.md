---
figmafolio-sync: figmaApp docs/figmafolio is the source. Copy this file unchanged to figmafolio-landing-page/docs/figmafolio/.
version: 2026-11-20.1
---

# What FigmaFolio does today

The check for anything the website, emails, plugin page or videos claim. If it is not here, do not claim it. Draft 1, read from the code on 13 Nov 2026 (figmaApp 2d32839). Lines marked "to confirm" need a look at the live app. Prices are not here: they are regional and go in `PRICING-FACTS.md`, copied from the live checkout.

Every PR that adds, removes or renames something a user can see updates this file.

## Making a site

- Paste a Figma prototype link and get a live site. The site shows Figma's own prototype in a frame, so interactions and transitions are Figma's.
- Separate links for desktop and mobile, with the breakpoint chosen per site (Viewport editor).
- Design, file and branch links are turned into prototype links when pasted.
- The link is checked as it is entered: if a stranger cannot open the prototype, a note and a share guide appear (since 4 Nov 2026).
- Upload an HTML site instead of a Figma link (HTML sites get a `name.figmafolio.com` address). To confirm: how it is offered in the create flow today.
- Changes made in Figma show on the site without republishing, because the site embeds the live prototype.
- Duplicate and delete a site from the dashboard.
- App interface in English, Spanish, German, Chinese, Japanese and French.

## By plan (from the plan gates in the code)

| Feature | Free and trial | Basic | Solo | Pro |
|---|---|---|---|---|
| Sites | 1 | 1 | 3 | No limit |
| Site online after 7 days | No (trial ends) | Yes | Yes | Yes |
| Password protection | Locked | Yes | Yes | Yes |
| Custom favicon | Locked | Yes | Yes | Yes |
| Choose the `name.figmafolio.com` address (HTML sites) | Locked | Yes | Yes | Yes |
| Custom domain | Locked | Locked | Yes | Yes |
| Analytics (visitors, places, sources) | Locked | Locked | Yes | Yes |
| Remove the "Made with Figmafolio" label | No | Yes | Yes | Yes |

- The trial lasts 7 days, counted from the first site (or sign-up if no site yet). After that, sites go offline for visitors until the owner pays.
- Older legacy plans have their own site counts (up to 6 monthly, no limit yearly). To confirm how many customers are still on them.

## What FigmaFolio does not do (say so where a visitor would assume otherwise)

Read from the app code on 20 Nov 2026. A Figma-link site is Figma's prototype shown in a frame, not a set of web pages built by FigmaFolio.

- No sitemap, RSS feed, pagination or "collections" for a user's site. None found in the app or `api/site.js`.
- No conversion of a Figma file to HTML and CSS. The create flow can take an HTML site that the user exported elsewhere (for example with a Figma-to-HTML plugin) and host it; FigmaFolio does not do the conversion.
- A site does not "adapt" across phone, tablet and desktop. It shows a desktop prototype and, if added, a mobile prototype, chosen by screen size.
- Search engines see a frame around a prototype, so a FigmaFolio site is a weak SEO asset. Do not claim better rankings.

## Claims on the live marketing site that this file does not support (20 Nov 2026)

Found in `figmafolio-landing-page/src/pages/features/`. Each needs a fix or removal before any search work builds on these pages.

| Page | Claim | Status |
|---|---|---|
| `/features/project-showcase` | SEO-ready with automatic sitemaps and RSS feeds; pagination; smart collections | Not in the app. Remove the page or rewrite it. |
| `/features/code-conversion` | Convert Figma designs to responsive HTML and CSS; "our Code Conversion feature" | Not a FigmaFolio feature (HTML upload only). Remove or rewrite. Its body also repeats the custom domain heading ("Benefits of custom domains"). |
| `/features/responsive-design` | "Publish as Responsive Design" button; adapts across mobile, tablet and desktop; "fully responsive websites" | Overstated. Rewrite around desktop and mobile prototypes on one link. To confirm: does a "Publish as Responsive Design" button still exist in the plugin? |
| `/features/analytics` | Page-level engagement data; time-based trends and historical data | To confirm against the analytics screen. `PRODUCT.md` lists visitors, places, sources only. |
| `/features/custom-domain` | Better SEO rankings with your own domain authority | Cannot be backed up. Remove. |
| `/features/custom-favicon`, `password-protection` | Benefit lists | Generic filler but not false. Rewrite in the tone file's style. |

## Not FigmaFolio any more

- **User testing:** moved to Aero on 18 Apr 2026. FigmaFolio shows a link to Aero in its place. Do not sell it on the FigmaFolio site.
- **New sign-ups and Aero:** half of new web sign-ups are moved to Aero in an A/B test running since 16 Jul 2026.

## Not read yet

- The Figma plugin (`figma-plugin` repo) and its Community page.
- The emails' full text (they live in Klaviyo). The subjects and flows are listed in `REPAIR.md`, section 7.
- The live site and app, logged out and logged in, desktop and phone.

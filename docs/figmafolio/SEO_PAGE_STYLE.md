---
figmafolio-sync: figmaApp docs/figmafolio is the source. Copy this file unchanged to figmafolio-landing-page/docs/figmafolio/.
version: 2026-11-22.2
---

# SEO page style guide

How Figmafolio's search pages (task, feature, comparison, country and blog pages) should look. It sits under `DESIGN_SYSTEM_PLAN.md` and uses only tokens from `tokens.css`. Words are in `TONE_OF_VOICE.md`. The home page is the visual reference: these pages should feel like the same product.

## Why this exists

The first batch of SEO pages was built for facts and speed. They read as plain documents next to the home page: small headings, text-only tables ("Yes" and "No"), no illustrations, and a FAQ that fills half the width. This guide fixes that once, in the kit, so every page changes together.

## The look, in six rules

1. **Big, bold headings.** H1 `text-4xl md:text-6xl font-bold tracking-tight`. Section H2 `text-3xl md:text-4xl font-bold`. Same dark ink as the home page. One H1 per page.
2. **One idea per band.** Each section is one full-width band with generous space (`py-16 md:py-24`). Bands alternate plain and `surface`. A band opens with its H2 and one short line, then shows the thing.
3. **Show, do not list.** Where a page says what a feature does, show a picture of it: the real illustration from `src/assets` (custom domain, favicon, password, multiple sites, responsive) or a mini of the real screen. Never leave a text-only page for a feature that has a picture.
4. **Cards, not bullets.** Reasons, features and audiences are rounded cards on the `surface` colour (`rounded-ff-xl`), a heading, one or two lines, and an illustration or icon when there is one. They fill the row: 3 across on desktop, 1 on a phone.
5. **Tables are for comparing, and they use icons.** A tick for yes, a muted dash for no, text for anything else. The column the page is about is tinted. A table never has more than 7 rows; if it does, split it. Never print "Yes" and "No" as words.
6. **Full width, centred.** Page bands use the home page's 72rem container. Reading text stays at 42rem but is centred in its band, so the right half is never empty. FAQs use the same card style as the home page, in a centred column.

## Components (all in `src/components/kit/`)

| Component | Use it for | Rules |
|---|---|---|
| `Hero` | Top of every page | Text left, picture or mini right (`visual` slot). With no picture it centres.  Lede is one or two sentences. Buttons: one primary, one secondary. |
| `Section` | Every band | `tone="surface"` for alternating bands. `width="wide"` for grids and tables. Headings inside a band are styled by it. |
| `Card` | Reasons, features, audiences | Optional `image` (an imported illustration) or `icon` (`refresh`, `plug`, `bars`). A row of cards uses images or icons on every card, not a mix. |
| `PlanCard` | A plan and its price | Price comes from the caller (the live price record), never typed in the component. |
| `ComparisonTable` | Compare plans or tools | Ticks and dashes. `highlight` tints the column the page is about. A `null` cell prints "Not stated". |
| `Steps` | How it works | Numbered. A step may carry a mini. Use one mini per idea, never the same picture twice on a page. |
| `Faq` | Questions | Cards, centred, with FAQPage data. |
| `Cta` | End of a page | One per page. Price line unless the page states its own. |

## Pictures

- Use `src/assets/*.png` for feature illustrations. They are the same ones the home page uses.
- Minis are simplified pictures of the real app screens, built from the same tokens. They are labelled "Simplified picture of ...". A PR that changes the real screen updates its mini.
- No stock photos of people. No invented screenshots. Example names are labelled "Example".

## Spacing and rhythm

- Container `max-w-ff-container`, side padding `px-5`.
- Space inside a band: heading, then `mt-3` for the line under it, then `mt-10` before the content.
- Cards `p-6 md:p-8`, gap `gap-6`.
- Never put two surface bands next to each other.

## Colour and type

Tokens only. No hex, no Tailwind palette classes. Brand green is for actions, ticks and links. Body text is `ink` or `muted`. Font is Poppins from the token.

## What to check before a page ships

- Looks like the home page next to it at 1280px and 390px.
- No text-only table, no "Yes" or "No" word cells.
- No empty right half, no picture used twice.
- `CI=true pnpm build` passes (it blocks hex colours and stray styles).
- Screenshot reviewed.

## Not decided

- A product-screenshot style (real screenshots versus minis) for the hero of task pages.
- Dark mode. Not planned.

---
figmafolio-sync: figmaApp docs/figmafolio is the source. Copy this file unchanged to figmafolio-landing-page/docs/figmafolio/.
version: 2026-11-21.1
---

# FigmaFolio style foundation and "minis" method

Why: the whole FigmaFolio brand will change (Clark's redesign). Every SEO page must read its colours, type and buttons from one place, so a rebrand is one edit, not a hunt through pages. The same goes for pictures of the product.

Modelled on heybooking (`docs/brand/SHARED_DESIGN_SYSTEM.md`, `scripts/site/illus.py`, `check_feature_sync.py`). What heybooking did: hand-built simplified HTML pictures ("minis") of real screens, tokens only, labels copied from the app, one named real file each, a reminder script that lists which minis to re-check when app code changes. What I add for FigmaFolio: a capture step, so the labels and styles come from the real screen and not from memory.

## 1. One tokens file, mirrored by hand

- `tokens.css` in the landing repo is the only place a colour, font, size, radius, shadow or space value is set. Tailwind is mapped onto it. Pages and components never contain a hex value.
- Copy it to figmaApp `docs/figmafolio/` with a `version:` header (hand sync, like the other docs). The app's own 294 hardcoded hex values are replaced over time, not in this piece of work.
- Clark's redesign changes the values, not the names. Check with Duane before touching home page content.

## 2. Reusable page kit (Astro components, tokens only)

Hero, button, card, step list, comparison table, FAQ (with the matching structured data), "last checked" note, price line, call to action. Every SEO page is built from these and nothing else. A hidden `/style-guide` page (noindex) shows each one.

## 3. The minis method (how a picture of the real UI is made)

1. **Capture.** For each real screen worth showing (publish from Figma, project list, domain settings, password page), take a capture from the live app signed in as a test account: a full screenshot, the visible labels word for word, the roles (button, heading, tab), and the computed colour, font and radius of each part matched to a token. Saved as `docs/figmafolio/capture/<screen>.json` and `.png`, with the date and the app commit.
2. **Mini.** A small HTML/CSS snippet made from the capture, using the page kit and tokens only. Fewer states, no data, example names labelled "Example". It starts with `mirrors:` (the real app file) and `captured:` (capture id and date).
3. **Check.** A script lists, for every mini: any label that is not in its capture (fails), and any mirrored app file changed since the capture (reminder to recapture and re-check). Labels are never typed from memory.
4. **Side by side.** `/style-guide` shows each mini next to its real screenshot, so drift is visible.

Truth rules from CLAUDE.md apply: no moving cursor, no animated typing, other tools' interfaces kept visibly separate, no stock photos.

## 4. How capture runs

First version: through Duane's signed-in Chrome, read-only (screenshot plus page text plus computed styles), one screen at a time, saved to the folder above. A scripted version (Playwright against a test account) comes later only if captures need to be repeated often. It needs a test account; none is set up yet.

## Order of work

1. tokens file and Tailwind mapping
2. page kit and `/style-guide`
3. first capture and mini (the publish step)
4. check script
5. page 1, "Figma prototype to website", held for "merge"

---
figmafolio-sync: figmaApp docs/figmafolio is the source. Copy this file unchanged to figmafolio-landing-page/docs/figmafolio/.
version: 2026-11-21.1
---

# FigmaFolio folder

Everything about how FigmaFolio looks, sounds and works, kept in the repo so it is not lost in chat. Separate from Aero's `docs/brand/`: FigmaFolio has its own tokens and words, and Aero tokens are never applied to FigmaFolio pages.

| File | What it is |
|---|---|
| `PLAYBOOK.md` | The process, Duane's answers, and a log of each run. |
| `DECISIONS.md` | Every decision Duane made, newest first. Read this first. |
| `REPAIR.md` | Step 0: what breaks for a new user, with causes found in the code and the fix for each. |
| `TONE_OF_VOICE.md` | How FigmaFolio words are written, including the search page rules. |
| `DESIGN_SYSTEM_PLAN.md` | One tokens file, the page kit, and the "minis" method for pictures of the real UI. |
| `PRODUCT.md` | What FigmaFolio really does today, by plan. The check for any claim on the site, in emails or in videos. |
| `references/` | Duane's references for art direction. |

Still to come, as the run reaches them: `BRAND.md`, `PRICING-FACTS.md` (copied from the live checkout), `TODO.md`, `CHANGELOG.md`, the tokens file and the shared words file.

## Shared words across both repos (proposal, Duane to confirm)

The problem: the app (figmaApp) and the marketing site (figmafolio-landing-page) say the same things in two places: plan names, what each plan includes, step names, button labels, help lines such as "set Share to Anyone with the link can view". When one changes, the other drifts. The landing page today still sells User Testing, which moved to Aero in April.

What I recommend:

1. **One words file, in figmaApp.** `src/figmafolio/words.json` holds every shared word: product name, plan names, plan features and limits, step names, button labels, help lines, the plugin's Community page text, and email subject lines. Prices are not in it: they are regional and come from the live checkout into `PRICING-FACTS.md`.
2. **Both codebases read it, nobody retypes it.** The app imports the JSON. The Astro site imports its own copy at `src/data/figmafolio-words.json`. Emails in Klaviyo and the plugin page cannot import, so their text sits in the same file and a short checklist says where to paste it.
3. **Copying is automatic.** A GitHub Action in figmaApp watches `words.json` and every file in `docs/figmafolio/` with a `figmafolio-sync` header. When one changes on main, it opens a pull request on figmafolio-landing-page with the same file. Duane merges that PR like any other. This needs one token added in GitHub settings (I can walk through the buttons).
4. **A check catches misses.** Every synced file carries a `version:` line. figmaApp's build compares its version with the public landing page copy and warns when the landing page is behind. A PR that changes a synced file without bumping the version fails.
5. **Same rule as Aero, so there is one habit.** This mirrors the "two repos, one design system" rule already in CLAUDE.md for Aero and aero-landing-page.

Until the Action exists, the manual rule applies: before editing a synced file, compare versions with the twin; after editing, bump the version and copy it across in the same piece of work.

---
figmafolio-sync: figmaApp docs/figmafolio is the source. Copy this file unchanged to figmafolio-landing-page/docs/figmafolio/.
version: 2026-11-22.1
---

# FigmaFolio tone of voice

Use this file every time you write words a designer or a website visitor will read: app labels, emails, errors, the website, search pages, blog posts and social posts. Internal docs and code comments are exempt.

## In one line

A designer who has put a lot of Figma prototypes online, explaining it to a colleague. Calm, plain, quick, a little warm. Never salesy.

## Who we write for

- **Job-seeking designers** with a Figma portfolio who need a link to send to recruiters (the first audience, decided 13 Nov).
- **Freelancers and agency designers** sharing client work, often behind a password.
- **Students** with case studies.
- **Visitors from search** who typed a task ("Figma prototype to website") and want to know in one screen whether this does it.

International, English, often reading quickly between other work.

## The rules

1. **Plain words.** Publish, share, put online, it's live. Not leverage, unlock, empower, seamless, revolutionary, all-in-one, game-changing, stunning, effortless.
2. **Short.** One idea per sentence; most sentences under 20 words.
3. **Specific and true.** Every claim is in `PRODUCT.md`. Every number is true today or labelled "Example". Prices come only from `PRICING-FACTS.md` and are written "from" or linked, because they vary by country.
4. **Say what it does not do.** FigmaFolio shows your Figma prototype in a frame. It does not make real web pages, sitemaps, RSS feeds or exported code. Say so where a visitor would assume otherwise.
5. **No clichés and no filler.** No "Knowledge is power", "Make your portfolio stand out", "professional appearance and credibility". Say the concrete thing.
6. **Warm, not cute.** At most one light touch per screen. No exclamation marks, and never in errors.

## Punctuation and style

- No em dashes or en dashes in prose. Use a full stop, comma, colon or brackets. Ranges with "to".
- Sentence case everywhere: headings, buttons, menu items, emails. Page titles too ("Password protect a Figma prototype").
- Buttons are plain verbs with no "...": "Publish", "Copy link".
- British spelling (colour, organise, analyse), except inside quoted product names.
- "I", not "we", only in a founder's own voice. Product copy and search pages use neither: write about the product and the reader ("Paste your link", "FigmaFolio checks it as you paste").

## Product words

| Use | Avoid |
|---|---|
| prototype, site, portfolio | digital asset, experience |
| publish, put online, it's live | deploy, launch your vision |
| Figma prototype link | seamless integration |
| custom domain, your own domain | professional branding |
| password protection, for NDA work | secure your confidential assets |
| desktop and mobile prototypes, one link | fully responsive, adapts to every device (it does not adapt: it picks the right prototype) |
| changes in Figma show on the site | real-time (not checked), auto-sync |
| free to start, from $3 a month | affordable, cheap, plans for every need |

## Search page rules

These apply to every page written to be found on Google or by an AI assistant.

1. **The answer comes first.** The first 100 words say what the page is about and what FigmaFolio does about it. No scene-setting.
2. **One page, one task.** The title and the H1 name the task a person would type, in sentence case, under 60 characters for the title.
3. **Every claim has a source.** Facts about FigmaFolio come from `PRODUCT.md`. Facts about other tools come from that tool's own page, read and dated on the day, and the page says when ("Checked 20 Nov 2026").
4. **"Not stated" over a guess.** If a competitor's page is silent, write "Not stated". Never fill the gap from memory.
5. **Be fair to the other tool.** Comparison pages include a "where they are the better choice" list. Carrd is cheaper. Figma Sites makes real pages.
6. **No invented proof.** No made-up testimonials, review counts, user numbers or "trusted by". Real numbers only, dated.
7. **Last updated** is shown on every page and changes only when the facts are re-checked.
8. **Links.** Link to the pricing page rather than quoting a price in running text. Link to the matching feature page and one related task page.
9. **FigmaFolio only.** Do not sell user testing here. It lives in Aero. One footer link, nothing in the body.
10. **Descriptions** are written by hand per page, under 155 characters, plain, no "Discover" or "Unlock".

## Local pages (country pages such as /ph/)

Decided 21 and 22 Nov. A page written for one country is a normal Figmafolio page in the local reader's voice. It follows the rules above except where this section says otherwise. Plain words, short sentences, true and sourced claims and no hype still apply.

1. **Light local language is wanted.** Write the way big local brands do (Globe, Lazada, Jollibee): mostly English with short local words and phrases mixed in, in headlines and body. For the Philippines that is light Taglish ("Live na ang portfolio mo", "sulit", "lang"). A few words per section, never whole pages of Filipino.
2. **English stays English** in buttons, plan names, feature names, prices, legal lines and anything a person must act on. Designers read English at work.
3. **A native speaker reads every local line before it ships.** Until then the page's code comment says so. Claude's drafts are not enough.
4. **Advertise as normal.** Same features, same order and same layout as the main site, in the local voice, with the local price. Do not compare with other countries' prices.
5. **Money is written as billed.** Figmafolio bills in US dollars everywhere, so a local page shows US dollars and says so. Never show a local-currency amount that checkout does not charge. Never convert by hand.
6. **Prices come from the price record**, read when the site builds (`src/data/regional-prices.ts`), never typed into a page.
7. **Same facts as the main site.** A local page never says something the main site does not.

## Lines Duane likes (reuse)

- "Figma file. Go live in 1 min." (the "1 min" needs a timed test before it ships)
- "Your site is your prototype. Change it in Figma and the site changes too."

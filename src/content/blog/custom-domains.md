---
draft: false
title: "Use your own domain"
snippet: "Show your prototype at yourname.com. On the Solo and Pro plans."
image:
  src: "/figmafolio-favicon.png"
  alt: "Figmafolio"
publishDate: "2024-09-03"
author: "Figmafolio"
category: "Product update"
tags: ["figmafolio", "custom domain", "feature"]
---

Custom domains came in September 2024. Instead of a figmafolio.com address, people open `yourname.com`.

## How to connect one

Add your domain to the site in Figmafolio. Then, in your domain registrar's DNS settings, add two records:

| Type | Name | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

Add an entry for both `@` and `www`.

## Plans

Custom domains are on Solo and Pro. The trial and Basic plans use a figmafolio.com address.

## Later updates

- September 2026: you can [remove or switch a domain](/blog/remove-or-switch-custom-domain) yourself.
- November 2026: [www now works](/blog/www-for-custom-domains) when you add the plain domain.

Read more on the [custom domain feature page](/features/custom-domain).

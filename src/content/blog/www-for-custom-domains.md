---
draft: false
title: "www now works with your custom domain"
snippet: "Add example.com and www.example.com now opens it too."
image:
  src: "/figmafolio-favicon.png"
  alt: "Figmafolio"
publishDate: "2026-11-13"
author: "Figmafolio"
category: "Product update"
tags: ["figmafolio", "update"]
---

Before this change, adding a custom domain such as `example.com` only attached that exact name. If someone typed `www.example.com`, it had no certificate and the page did not open.

Now, when you add a domain without `www`, Figmafolio also sets up `www` for you and sends it to your main address. Subdomains, and domains you add that already start with `www`, are left as they are.

Domains added before this change are fixed when you next open your dashboard.

You still add the `www` record in your domain settings, as the instructions in the site settings say.

Custom domains are on the Solo and Pro plans. See [custom domain](/features/custom-domain).

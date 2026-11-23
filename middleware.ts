export const config = {
  matcher: ["/((?!_astro|assets).*)"],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  // Treat "/how-it-works/" the same as "/how-it-works". Our canonical tags and
  // sitemap use the trailing-slash form, so it must stay on this site.
  const pathname = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;

  // Paths that should NOT redirect (stay on landing page)
  const landingPagePaths = ["/", "/about", "/contact", "/pricing", "/how-it-works", "/style-guide", "/figma-prototype-to-website", "/figma-portfolio-own-domain", "/is-figmafolio-free", "/free-figma-portfolio-website", "/figma-sites-alternative", "/password-protect-figma-prototype", "/figma-prototype-desktop-and-mobile-one-link", "/share-figma-prototype-anyone-can-open", "/siter-alternative", "/framer-alternative", "/uxfolio-alternative", "/carrd-alternative", "/password-protected-portfolio", "/figma-portfolio", "/share-interactive-figma-prototype-with-clients", "/anima-alternative"];

  if (landingPagePaths.includes(pathname)) {
    return;
  }

  // Prefix matches (blog, features, country pages)
  const landingPagePrefixes = ["/blog", "/features", "/ph"];
  for (const prefix of landingPagePrefixes) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      return;
    }
  }

  // Favicon files
  if (pathname.startsWith("/favicon")) {
    return;
  }

  // File requests (has extension like .js, .css, .png)
  if (pathname.includes(".")) {
    return;
  }

  // Redirect everything else to app.figmafolio.com
  return Response.redirect(`https://app.figmafolio.com${pathname}`, 302);
}

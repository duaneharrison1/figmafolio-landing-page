import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_astro|assets).*)"],
};

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Paths that should NOT redirect (stay on landing page)
  const landingPagePaths = ["/", "/about", "/contact", "/pricing", "/how-it-works"];

  if (landingPagePaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Prefix matches (blog, features)
  const landingPagePrefixes = ["/blog", "/features"];
  for (const prefix of landingPagePrefixes) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      return NextResponse.next();
    }
  }

  // Favicon files
  if (pathname.startsWith("/favicon")) {
    return NextResponse.next();
  }

  // File requests (has extension like .js, .css, .png)
  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  // Redirect everything else to app.figmafolio.com
  return NextResponse.redirect(`https://app.figmafolio.com${pathname}`, 302);
}

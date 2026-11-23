// Fails the build when a page in src/pages is missing from the allowlist in
// middleware.ts. A page missing from it redirects to app.figmafolio.com.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const mw = readFileSync("middleware.ts", "utf8");
const prefixes = ["blog", "features", "ph"];
const missing = [];
for (const f of readdirSync("src/pages")) {
  if (statSync(join("src/pages", f)).isDirectory()) continue;
  const name = f.replace(/\.(astro|md|mdx)$/, "");
  if (name === "404" || name === "index" || prefixes.includes(name)) continue;
  if (!mw.includes(`"/${name}"`)) missing.push(`/${name}`);
}
for (const d of readdirSync("src/pages")) {
  if (statSync(join("src/pages", d)).isDirectory() && !prefixes.includes(d)) missing.push(`/${d}/ (new folder: add a prefix)`);
}
if (missing.length) {
  console.error("middleware.ts does not allow these pages, so they would redirect to the app:\n  " + missing.join("\n  "));
  process.exit(1);
}
console.log("check-middleware: ok");

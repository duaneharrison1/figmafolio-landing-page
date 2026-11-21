// Style check for SEO pages and the page kit.
// A file is checked when it lives in src/components/kit/ or imports from "@/components/kit/".
// It fails on a hex colour, a Tailwind arbitrary colour (text-[#...]), a Tailwind palette
// class (text-gray-500, bg-green-100...) or an inline style colour. Use the --ff-* tokens
// (bg-ff-brand, text-ff-ink...) instead. See docs/figmafolio/DESIGN_SYSTEM_PLAN.md.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../src", import.meta.url).pathname;
const palette = "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose";
const rules = [
  [/#[0-9a-fA-F]{3,8}\b/, "hex colour"],
  [new RegExp(`\\b(?:bg|text|border|ring|fill|stroke|from|to|via|divide|outline|shadow)-(?:${palette})-\\d{2,3}\\b`), "Tailwind palette class"],
  [/\b(?:bg|text|border)-(?:white|black)\b/, "bare white/black (use ff-bg / ff-ink)"],
  [/style="[^"]*(?:color|background)\s*:/i, "inline colour style"],
];

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const failures = [];
for (const file of walk(root).filter((f) => /\.(astro|ts|tsx|js|mdx)$/.test(f))) {
  const text = readFileSync(file, "utf8");
  const inKit = file.includes("/components/kit/");
  if (!inKit && !text.includes("@/components/kit/")) continue;
  text.split("\n").forEach((line, i) => {
    for (const [re, label] of rules) {
      if (re.test(line)) failures.push(`${file.replace(root + "/", "src/")}:${i + 1}  ${label}: ${line.trim()}`);
    }
  });
}

if (failures.length) {
  console.error("Style check failed. SEO pages and the kit must use tokens only:\n");
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("Style check passed.");

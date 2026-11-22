// Regional plan prices for pages that name a country (such as /ph/).
// Source of truth: the Firestore doc config/pricing, the same record the pricing page and the app read.
// It is read once when the site builds. If that read fails, the values below stand in. They were read
// from the live record on 21 November 2026. Prices are US dollars in every tier: billing is in USD.
export type PlanKey = "basic" | "solo" | "pro";
export type PlanPrice = { monthly: string; yearly: string; yearlyTotal: string };
export type TierPrices = Record<PlanKey, PlanPrice>;
export type RegionalPrices = {
  tiers: Record<string, TierPrices>;
  countries: Record<string, string[]>;
  /** ISO date the prices were read. */
  checkedOn: string;
  live: boolean;
};

const FALLBACK: RegionalPrices = {
  tiers: {
    US: {
      basic: { monthly: "$3", yearly: "$2.33", yearlyTotal: "$28" },
      solo: { monthly: "$6", yearly: "$4.75", yearlyTotal: "$57" },
      pro: { monthly: "$19", yearly: "$16.58", yearlyTotal: "$199" },
    },
    PH: {
      basic: { monthly: "$1.50", yearly: "$1.17", yearlyTotal: "$14" },
      solo: { monthly: "$3", yearly: "$2.33", yearlyTotal: "$28" },
      pro: { monthly: "$9.50", yearly: "$7.58", yearlyTotal: "$91" },
    },
  },
  countries: { PH: ["PH", "MY", "CN", "AR", "BR"] },
  checkedOn: "2026-11-21",
  live: false,
};

const URL =
  "https://firestore.googleapis.com/v1/projects/figmawebapp/databases/(default)/documents/config/pricing";

let cached: Promise<RegionalPrices> | undefined;

async function read(): Promise<RegionalPrices> {
  try {
    const res = await fetch(URL, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return FALLBACK;
    const doc: any = await res.json();
    const priceFields = doc.fields?.prices?.mapValue?.fields;
    const tierFields = doc.fields?.tiers?.mapValue?.fields;
    if (!priceFields) return FALLBACK;

    const tiers: Record<string, TierPrices> = {};
    for (const [tier, value] of Object.entries<any>(priceFields)) {
      const plans: any = value.mapValue?.fields ?? {};
      const out: any = {};
      for (const key of ["basic", "solo", "pro"]) {
        const f = plans[key]?.mapValue?.fields;
        if (!f?.monthly?.stringValue) return FALLBACK; // an incomplete record is not trusted
        out[key] = {
          monthly: f.monthly.stringValue,
          yearly: f.yearly?.stringValue ?? "",
          yearlyTotal: f.yearlyTotal?.stringValue ?? "",
        };
      }
      tiers[tier] = out;
    }
    if (!tiers.US || !tiers.PH) return FALLBACK;

    const countries: Record<string, string[]> = {};
    for (const [tier, value] of Object.entries<any>(tierFields ?? {})) {
      countries[tier] = (value.arrayValue?.values ?? []).map((v: any) => v.stringValue);
    }
    return { tiers, countries, checkedOn: new Date().toISOString().slice(0, 10), live: true };
  } catch {
    return FALLBACK;
  }
}

export function getRegionalPrices(): Promise<RegionalPrices> {
  cached ??= read();
  return cached;
}

/** "$1.50" becomes 1.5 */
export function dollars(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, ""));
}

/** "$1.50" becomes "US$1.50" */
export function usd(price: string): string {
  return "US" + price;
}

export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "(800) 555-0199";
export const PHONE_TEL   = process.env.NEXT_PUBLIC_PHONE_TEL    ?? "8005550199";
export const BRAND_NAME  = process.env.NEXT_PUBLIC_BRAND_NAME   ?? "Pure Plumb Services";
export const SITE_URL    = process.env.NEXT_PUBLIC_SITE_URL     ?? "https://pureplumbservices.com";

// Niche labels — edit these to match your industry
// Examples: "Plumbing" / "HVAC" / "Roofing" / "Landscaping" / "Electrical"
export const NICHE          = process.env.NEXT_PUBLIC_NICHE          ?? "Plumbing";
// Examples: "Plumbers" / "HVAC Technicians" / "Roofers"
export const NICHE_PLURAL   = process.env.NEXT_PUBLIC_NICHE_PLURAL   ?? "Plumbers";
// Examples: "Plumber" / "HVAC Technician" / "Roofer"
export const NICHE_SINGULAR = process.env.NEXT_PUBLIC_NICHE_SINGULAR ?? "Plumber";
// Schema.org @type — see https://schema.org/LocalBusiness subtypes
// Examples: "PlumbingService" / "HVACBusiness" / "RoofingContractor" / "Electrician"
export const SCHEMA_TYPE    = process.env.NEXT_PUBLIC_SCHEMA_TYPE    ?? "PlumbingService";

// Google Analytics measurement ID — e.g. G-XXXXXXXXXX (leave blank to disable)
export const GA_ID      = process.env.NEXT_PUBLIC_GA_ID      ?? "";
// Google AdSense publisher ID — e.g. ca-pub-1234567890123456 (leave blank to disable)
export const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID ?? "";
// Google Search Console HTML tag verification token (content="" value only)
export const GSC_TOKEN  = process.env.NEXT_PUBLIC_GSC_TOKEN  ?? "";

// Content variation salt — used to offset spintax selection across different sites
export const CONTENT_SALT = parseInt(process.env.NEXT_PUBLIC_CONTENT_SALT ?? "0", 10);

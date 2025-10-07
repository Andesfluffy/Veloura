type AnalyticsEvent =
  | "cta_hero_primary"
  | "cta_hero_secondary"
  | "cta_pricing_plan"
  | "lead_form_submit"
  | "pricing_plan_impression";

type Payload = Record<string, unknown>;

export function track(event: AnalyticsEvent, payload: Payload = {}) {
  if (process.env.NODE_ENV !== "production") {
    console.info(`[analytics] ${event}`, payload);
  }
  // Placeholder for production analytics integration.
}

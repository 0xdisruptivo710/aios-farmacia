const WEBHOOK_URL =
  "https://aios-n8n-webhook.yspmhc.easypanel.host/webhook/lp-farmacia";

export type WebhookEvent =
  | "page_view"
  | "cta_click"
  | "whatsapp_click"
  | "form_submit"
  | "section_view";

interface WebhookPayload {
  event: WebhookEvent;
  timestamp: string;
  source: string;
  data?: Record<string, unknown>;
}

export function sendWebhook(
  event: WebhookEvent,
  source: string,
  data?: Record<string, unknown>
): void {
  const payload: WebhookPayload = {
    event,
    timestamp: new Date().toISOString(),
    source,
    data,
  };

  // Use sendBeacon for reliability (works even if page is closing)
  // Falls back to fetch
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    const sent = navigator.sendBeacon(WEBHOOK_URL, blob);
    if (!sent) {
      fetchFallback(body);
    }
  } else {
    fetchFallback(body);
  }
}

function fetchFallback(body: string): void {
  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // Silently fail — never block user interaction
  });
}

/** Track a CTA/WhatsApp click — call before navigation */
export function trackClick(source: string, action?: string): void {
  sendWebhook("cta_click", source, { action: action ?? "click" });
}

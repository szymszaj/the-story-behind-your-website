/**
 * Google Analytics Configuration
 *
 * Instrukcje:
 * 1. Przejdź do https://analytics.google.com
 * 2. Utwórz nowy property dla twojej domeny
 * 3. Skopiuj Measurement ID (G-XXXXXXXXXXXX)
 * 4. Wklej go poniżej
 * 5. Odkomentuj kod i dodaj do index.html
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

export const GA_CONFIG = {
  // Zmień to na swój Measurement ID z Google Analytics
  measurementId: "G-XXXXXXXXXXXX",

  // Śledzenie widoków strony
  pageView: (path: string) => {
    if (typeof window !== "undefined" && "gtag" in window) {
      window.gtag("event", "page_view", {
        page_path: path,
      });
    }
  },

  // Śledzenie zdarzeń
  trackEvent: (category: string, action: string, label?: string) => {
    if (typeof window !== "undefined" && "gtag" in window) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
      });
    }
  },

  // Śledzenie konwersji (np. wysłanie formularza)
  trackConversion: (conversionId: string) => {
    if (typeof window !== "undefined" && "gtag" in window) {
      window.gtag("event", "conversion", {
        send_to: conversionId,
      });
    }
  },
};

/**
 * Przykłady użycia:
 *
 * // W komponencie
 * import { GA_CONFIG } from '@/config/analytics';
 *
 * // Śledzenie widoku strony
 * useEffect(() => {
 *   GA_CONFIG.pageView(window.location.pathname);
 * }, [location]);
 *
 * // Śledzenie eventu
 * onClick={() => GA_CONFIG.trackEvent("button", "click", "cta-button")}
 *
 * // Śledzenie konwersji
 * onSubmit={() => GA_CONFIG.trackConversion("AW-XXXXXXXX/XXXXXXXXXXX")}
 */

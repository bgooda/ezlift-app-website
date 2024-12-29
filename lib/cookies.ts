export type CookieConsent = {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
};

export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem('cookie-consent');
  if (!stored) return null;
  
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function storeConsent(consent: CookieConsent): void {
  localStorage.setItem('cookie-consent', JSON.stringify(consent));
}
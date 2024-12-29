"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CookieConsent, defaultConsent, getStoredConsent, storeConsent } from "@/lib/cookies";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = getStoredConsent();
    if (!storedConsent) {
      setShowBanner(true);
    } else {
      setConsent(storedConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(newConsent);
    storeConsent(newConsent);
    setShowBanner(false);
    setOpen(false);
  };

  const handleRejectAll = () => {
    const newConsent: CookieConsent = {
      ...defaultConsent,
      necessary: true,
    };
    setConsent(newConsent);
    storeConsent(newConsent);
    setShowBanner(false);
    setOpen(false);
  };

  const handleSavePreferences = () => {
    storeConsent(consent);
    setShowBanner(false);
    setOpen(false);
  };

  const handleToggle = (key: keyof CookieConsent) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setConsent(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner && !open) return null;

  return (
    <>
      {/* Main Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 py-4 px-4 md:px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cookie className="h-5 w-5 text-primary" />
              <p className="text-sm">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
                <Link href="/cookies" className="text-primary hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Customize
              </Button>
              <Button variant="outline" size="sm" onClick={handleRejectAll}>
                Reject All
              </Button>
              <Button size="sm" onClick={handleAcceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Customize your cookie preferences. Some cookies are necessary for the website to function and cannot be disabled.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Necessary Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Required for the website to function properly
                </p>
              </div>
              <Switch checked disabled />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Analytics Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Help us understand how you use our website
                </p>
              </div>
              <Switch
                checked={consent.analytics}
                onCheckedChange={() => handleToggle('analytics')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Marketing Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Used to deliver personalized advertisements
                </p>
              </div>
              <Switch
                checked={consent.marketing}
                onCheckedChange={() => handleToggle('marketing')}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={handleRejectAll}>
              Reject All
            </Button>
            <Button variant="outline" onClick={handleAcceptAll}>
              Accept All
            </Button>
            <Button onClick={handleSavePreferences}>
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
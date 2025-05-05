"use client";

import { useEffect } from "react";

export default function GoogleAdsConversion() {
  useEffect(() => {
    // @ts-expect-error - gtag is added by Google Ads script
    if (typeof window.gtag !== "undefined") {
      // @ts-expect-error - gtag is added by Google Ads script
      window.gtag("event", "conversion", {
        send_to: "AW-17053760527/ZCEDCI7ansIaEI_47sM_",
      });
    }
  }, []);

  return null;
}

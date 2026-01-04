// components/AmplitudeInitializer.tsx
"use client";

import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

const AmplitudeInitializer = () => {
  useEffect(() => {
    if (AMPLITUDE_API_KEY) {
      amplitude.init(AMPLITUDE_API_KEY, {
        autocapture: {
          elementInteractions: true,
          formInteractions: false,
          fileDownloads: false,
        },
      });
      console.log("Amplitude initialized");
    } else {
      console.error("Missing Amplitude API Key");
    }
  }, []);

  return null; // This component only initializes Amplitude and doesn't render anything
};

export default AmplitudeInitializer;


// Track custom events across your app
export const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
  amplitude.track(eventName, properties);
};
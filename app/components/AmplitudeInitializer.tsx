"use client";
import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

const AmplitudeInitializer = () => {
  useEffect(() => {
    if (AMPLITUDE_API_KEY) {
      try {
        amplitude.init(AMPLITUDE_API_KEY, {
          autocapture: {
            formInteractions: false,
            fileDownloads: false,
            elementInteractions: false,
          },
          serverZone: "EU"
        });
        console.log("Amplitude initialized successfully.");
      } catch (err) {
        console.error("Error initializing Amplitude:", err);
      }
    } else {
      console.error("Missing Amplitude API Key.");
    }
  }, []); // Empty dependency array ensures it runs once on mount.

  return null; // This component doesn't render anything.
};

export default AmplitudeInitializer;
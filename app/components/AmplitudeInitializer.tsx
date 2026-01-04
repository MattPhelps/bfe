"use client";
import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

export default function AmplitudeInitializer() {
  useEffect(() => {
    amplitude.init(
      process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!,
      undefined,
      {
        serverUrl: "https://api.eu.amplitude.com",
        logLevel: amplitude.Types.LogLevel.Debug,
      }
    );
  }, []);

  return null;
}

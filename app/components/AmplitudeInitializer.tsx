"use client";
import { useEffect } from "react";
import { initAmplitude } from "../libs/amplitude";

export default function AmplitudeInitializer() {
  useEffect(() => {
    initAmplitude();
  }, []);
  return null;
}

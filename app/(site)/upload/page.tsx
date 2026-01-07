"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import UploadDropzone from "@/app/components/UploadDropZone";
import { trackEvent } from "@/app/libs/amplitude";
import BodyFatEstimatorContent from "@/app/components/BodyFatEstimatorContent";
import TryExamples from "@/app/components/TryExamples";

function UploadPageContent() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl");

  const [estimate, setEstimate] = useState("...");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageUrl) {
      fetchAndEstimate(imageUrl);
    }
  }, [imageUrl]);

  const fetchAndEstimate = async (imageUrl: string) => {
  setLoading(true);
  try {
    // ✅ Resolve relative paths like /examples/example1.webp
    const resolvedUrl =
      imageUrl.startsWith("/")
        ? `${window.location.origin}${imageUrl}`
        : imageUrl;

    const response = await fetch(resolvedUrl, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) {
      throw new Error(`Not an image: ${contentType}`);
    }

    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64WithMime = reader.result as string;

      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64WithMime }),
      });

      const data = await res.json();

      if (data?.estimate) {
        const estimateText = Array.isArray(data.estimate)
          ? data.estimate.join(" ").trim()
          : String(data.estimate).trim();

        trackEvent("Estimate Bodyfat", { estimate: estimateText });
        setEstimate(estimateText);
      } else {
        setEstimate("Error");
      }

      setLoading(false);
    };

    reader.readAsDataURL(blob);
  } catch (err) {
    console.error("Estimation error:", err);
    setEstimate("Error");
    setLoading(false);
  }
};


if (!imageUrl) {
  return (
    <>
      <div className="hero min-h-screen -mt-24 flex items-center justify-center">
        <div className="flex flex-col items-center mt-10 gap-6">

          {/* Keep the upload area narrow */}
          <div className="text-center lg:text-left w-full max-w-md">
            <h1 className="text-center text-2xl lg:text-3xl font-bold mb-12">
              Upload an Image to Estimate Body Fat %
            </h1>
            <UploadDropzone />
          </div>

          {/* Give TryExamples more width so it can do the side-by-side layout */}
          <div className="w-full max-w-lg mt-6 lg:max-w-xl">
            <TryExamples />
          </div>

        </div>
      </div>

      <BodyFatEstimatorContent variant="upload" />
    </>
  );
}



  return (
    <section className="hero flex flex-col items-center justify-start min-h-screen pt-0 lg:pt-0">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-4xl mt-4 lg:mt-0">
        {/* Uploaded Image */}
        <div className="lg:sticky top-0 flex-shrink-0">
          <img
            src={imageUrl}
            alt="Uploaded image"
            className="w-64 sm:w-80 lg:w-[22rem] rounded-lg shadow-xl"
          />
        </div>

        {/* Estimate Display */}
        <div className="flex-1 overflow-y-auto max-h-screen px-4 lg:pl-8 scroll-smooth">
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Estimated Body Fat:</h2>
            <p className="text-4xl font-bold text-secondary">
              {loading ? "Analyzing..." : estimate}
            </p>
            {estimate === "Error" && (
              <p className="text-red-500 text-sm mt-2">
                Something went wrong. Try another image.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
      {loading ? "" : "Results don't seem accurate? Take a full-body photo in your underwear facing the camera head-on in a well-lit room.  "} 
      </div>
      <a href="/upload">
      {loading ? "" : <button className="btn btn-primary btn-outline btn-lg text-white mt-6">Estimate Again<span className="text-lg">→</span></button>} 
            </a>
            <div className="mt-60">
            <BodyFatEstimatorContent variant="results" />
            </div>
    </section>
    
  );
}

export default function UploadPage() {
 
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <UploadPageContent />
    </Suspense>
  );
}
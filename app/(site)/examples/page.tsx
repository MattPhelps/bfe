import { Metadata } from "next";
import Pricing from "@/app/components/Pricing";
import PricingFAQ from "@/app/components/PricingFAQ";

const title = "BodyFatEstimator Examples";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function ExamplesPage() {
  return (
   <>
   <div className="hero min-h-screen flex items-center justify-center">
   <div className="flex flex-col items-center mt-10 gap-6">
   <h1 className="text-2xl lg:text-3xl max-w-3xl font-bold text-center">Body Fat Estimate Examples</h1>
    <p className="py-2 text-lg max-w-3xl text-center">Used by thousands for regular check-ins and long-term weight loss and body recomposition tracking.</p>
      <a>
        <button className="btn btn-primary btn-lg text-white">Get Your Body Fat % <span className="text-lg">→</span></button>
      </a>
{/*
              <h2 className="text-2xl lg:text-3xl font-bold">Get Your Estimate</h2>
              <p className="py-6 text-lg">
              Used by thousands for regular check-ins and long-term progress tracking
              </p>
              <a href="#pricing">
                <button className="btn btn-primary btn-lg text-white">Choose Your Package</button>
              </a>
          </div>
           */}
    </div>
    </div>
   </>
  );
  
}

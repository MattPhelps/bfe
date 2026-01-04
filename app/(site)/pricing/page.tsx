import { Metadata } from "next";
import Pricing from "@/app/components/Pricing";
import PricingFAQ from "@/app/components/PricingFAQ";

const title = "Pricing";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function PricingPage() {
  return (
   <>
   <div className="hero min-h-screen flex items-center justify-center">
   <div className="flex flex-col items-center mt-10 gap-6">
   <h1 className="text-xl lg:text-4xl max-w-3xl font-bold text-center">Accurate Body Fat Estimates for 42x Less Than a Physical DEXA Scan</h1>
    <p className="py-2 text-lg max-w-3xl text-center">The average cost of professional body fat estimate in the US is $125.50 per session. Our packages start from $3.</p>
      <Pricing />
      <PricingFAQ />
    </div>
    </div>
   </>
  );
  
}

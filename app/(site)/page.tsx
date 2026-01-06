import { Metadata } from "next";
import Hero from "../components/Hero";
import Examples from "../components/Examples";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Comparison from "../components/Comparison";
import HeroWithUpload from "../components/HeroWithUpload";

const title = "Body Fat Estimator – What % Body Fat Are You?";
const description = "Calculate your body fat percentage with our Body Fat Estimator. Get a quick and accurate estimation to track your weigh loss progress and optimize your body fat %.";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
      <HeroWithUpload />
      <Comparison />
      <FAQ />
      <CTA />
       {/* <Examples />  */}
   </>
  );
  
}

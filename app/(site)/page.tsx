import { Metadata } from "next";
import Hero from "../components/Hero";
import Examples from "../components/Examples";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Comparison from "../components/Comparison";
import HeroWithUpload from "../components/HeroWithUpload";

const title = "Body Fat Estimator – What Body Fat % Are You?";
const description = "Upload a photo and let our AI calculate your body fat percentage. Get a quick and accurate body fat % estimation to track your progress.";

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

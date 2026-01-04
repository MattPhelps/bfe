import { Metadata } from "next";
import FAQ from "@/app/components/FAQ";

const title = "FAQ";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function FAQPage() {
  return (
   <>
   <div className="hero min-h-screen -mt-40 flex items-center justify-center">
   <div className="flex flex-col items-center mt-40 lg:mt-10 gap-6">
      <FAQ />
    </div>
    </div>
   </>
  );
  
}

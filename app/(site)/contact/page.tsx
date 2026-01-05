import { Metadata } from "next";
import FAQ from "@/app/components/FAQ";

const title = "Contact";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function ContactPage() {
  return (
   <>
   <div className="hero min-h-screen -mt-40 flex items-center justify-center">
   <div className="flex flex-col items-center mt-40 lg:mt-10 gap-6">
      <h1 className="text-3xl lg:text-4xl font-bold text-center">Contact</h1>
      <p className="text-center max-w-2xl px-4 lg:px-0">
        Have questions, feedback, or need assistance? We'd love to hear from you! Reach out to us via email at{" "}
        <a
          href="mailto:matt@leandme.com"
          className="text-primary"
        >
          matt@leandme.com
        </a>
      </p>
    </div>
    </div>
   </>
  );
  
}

import { Metadata } from "next";

const title = "FAQ";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function SupportPage() {
  return (
   <>
  <div className=" flex items-center justify-center">
  <div className="flex flex-col items-center mt-10 gap-6">
   <h2 className="text-xl lg:text-4xl text-center font-bold">
              Support
            </h2>
            <p className="py-6 text-lg mb-6 text-center">
          Have a question or need help? Reach out to our support team by sending us an <a href="mailto:matt@leandme.com" className="text-primary">email</a> and we’ll get back to you as soon as we can.
          </p>
    </div>
    </div>
   </>
  );
  
}

import PaymentMethodsBar from "@/app/components/PaymentMethodsBar";


export default function Pricing() {

  const PAYMENT_LOGOS = [
  { src: "/payment-methods/visa.png", alt: "Visa" },
  { src: "/payment-methods/paypal.svg", alt: "PayPal" },
  { src: "/payment-methods/gpay.png", alt: "Google Pay" },
];


  return (
    <div className="hero  flex items-center mb-10 justify-center">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-8 p-6 lg:flex-row lg:justify-center lg:gap-24 mt-2">

          {/* Card 1 */}
          <div className="card bg-base-100 w-full max-w-lg shadow-xl">
            <div className="card-body">
              <h2 className="text-md lg:text-lg text-left">
                Rough Estimate
              </h2>
              <div className="flex items-center mr-12 mt-3">
                <span className="text-4xl font-extrabold">$0</span>
                <span className="text-xs text-gray-500 ml-2"></span>
              </div>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className="mr-2 text-gray-500">–</span>
                  Free
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="mr-2 text-grray-500">–</span>
                  Rough accuracy
                </li>
              </ul>
              <div className="card-actions mt-6">
                <a
                  href="/upload"
                  target=""
                  rel="noopener noreferrer"
                  className="btn bg-gray-300 text-lg text-white w-full"
                >
                  <span className="font-semibold text-base">
                  Try Now
                </span>
                </a>
                <p className="text-sm text-center text-gray-500 mt-2">
                  
                </p>
              </div>
            </div>
          </div>


          {/* Card 2 */}
          <div id="pricing" className="card bg-base-100 w-full max-w-lg shadow-xl">
            <div className="card-body">
              <h2 className="text-md lg:text-lg text-left">
                Advanced Estimate
              </h2>
              <div className="flex items-center mr-12 mt-3">
                <span className="text-4xl font-extrabold">$2.99</span>
                <span className="text-xs text-gray-500 ml-2">/once</span>
              </div>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className="mr-2 text-[#00b57a]">✓</span>
                  1 highly accurate estimate
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="mr-2 text-[#00b57a]">✓</span>
                  Advanced multi-image analysis
                </li>
              </ul>
              <div className="card-actions mt-6">
                <a
                  href="https://buy.stripe.com/bIY6qkbfOdvCffi6oo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg text-white w-full"
                >
                  <span className="text-white font-semibold text-base">
                  Buy Now
                </span>
                </a>
                <p className="text-sm text-center text-gray-500 mt-2">
                  🔒 100% Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full max-w-lg">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold shadow-sm">
                MOST POPULAR
              </div>
            </div>


         <div className="card bg-base-100 w-full max-w-lg shadow-xl border-2 border-green-500 shadow-green-100/50">
            <div className="card-body">
              <h2 className="text-md lg:text-lg text-left">
                Progress Tracking
                 {/*
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  MOST CHOSEN
                </span>
 */}

              </h2>
              <div className="flex items-center mr-12 mt-3">
                <span className="text-lg text-gray-500 line-through mr-2">$45</span>
                <span className="text-4xl font-extrabold">$19</span>
                <span className="text-xs text-gray-500 ml-2">/once</span>
              </div>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className=" mr-2 text-green-600">✓</span>
                  <span className="bg-[#D6EFE4] px-1 rounded">50</span>&nbsp; highly accurate estimates
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="mr-2 text-green-600">✓</span>
                  Advanced multi-image analysis
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="mr-2 text-green-600">✓</span>
                  Track your progress
                </li> 
              </ul>
              <div className="card-actions mt-6">
                <a
                  href="https://buy.stripe.com/9AQ8ysdnWdvCaZ2aEG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg text-white w-full"
                >
                  <span className="text-white font-semibold text-base">
                  Buy Now
                </span>
                </a>
                <p className="text-sm text-center text-green-600 mt-2">
                  🔒  100% Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <PaymentMethodsBar logos={PAYMENT_LOGOS} />
      </div>
    </div>
  );
}

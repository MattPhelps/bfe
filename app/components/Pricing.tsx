export default function Pricing() {
  return (
    <div className="hero  flex items-center mb-20 justify-center">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-8 p-6 lg:flex-row lg:justify-center lg:gap-24 mt-2">
          {/* Card 1 */}
          <div className="card bg-base-100 w-full max-w-lg shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center text-3xl lg:text:4xl font-bold">
                Snapshot
              </h2>
              <div className="flex justify-center items-center mr-12 mt-6">
                <span className="text-lg text-gray-500 line-through mr-2">$6</span>
                <span className="text-4xl font-extrabold">$3</span>
                <span className="text-xs text-gray-500 ml-2">USD</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  1 body fat estimate
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  Highly accurate results
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  7 day money-back guarantee
                </li>
              </ul>
              <div className="card-actions mt-6">
                <a
                  href="https://buy.stripe.com/bIY6qkbfOdvCffi6oo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg text-white w-full"
                >
                  Get 1 Scan
                </a>
                <p className="text-sm text-center text-gray-500 mt-2">
                  🔒 Pay once. No subscription.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 w-full max-w-lg shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center text-3xl lg:text:4xl font-bold">
                Progress
              </h2>
              <div className="flex justify-center items-center mr-12 mt-6">
                <span className="text-lg text-gray-500 line-through mr-2">$18</span>
                <span className="text-4xl font-extrabold">$9</span>
                <span className="text-xs text-gray-500 ml-2">USD</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  10 body fat estimates
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  Highly accurate results
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  7 day money-back guarantee
                </li>
              </ul>
              <div className="card-actions mt-6">
                <a
                  href="https://buy.stripe.com/cN2bKEes0fDKffiaEF" // Replace with your actual Stripe link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg text-white w-full"
                >
                  Get 10 Scans
                </a>
                <p className="text-sm text-center text-gray-500 mt-2">
                🔒 Pay once. No subscription.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 w-full max-w-lg shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center text-3xl lg:text:4xl font-bold">
                Athlete
                <div className="badge text-white bg-[#00AA6E]">VALUE</div>
              </h2>
              <div className="flex justify-center items-center mr-12 mt-6">
                <span className="text-lg text-gray-500 line-through mr-2">$50</span>
                <span className="text-4xl font-extrabold">$25</span>
                <span className="text-xs text-gray-500 ml-2">USD</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="bg-[#D6EFE4] px-1 rounded">Unlimited</span>&nbsp;body fat estimates
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  Highly accurate results
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  7 day money-back guarantee
                </li>
              </ul>
              <div className="card-actions mt-6">
                <a
                  href="https://buy.stripe.com/9AQ8ysdnWdvCaZ2aEG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg text-white w-full"
                >
                  Get Unlimited Scans
                </a>
                <p className="text-sm text-center text-gray-500 mt-2">
                  🔒 Pay once. Use forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

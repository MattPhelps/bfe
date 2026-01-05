export default function Comparison() {
    return (
      <div className="hero min-h-screen mt-40 lg:mt-0 flex items-center justify-center">
        <div className="w-full px-6 lg:px-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-center">Affordable Body Fat Tracking</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-12">
            {/* Manual Roasting */}
            <div className="card bg-[#FFEAEC] w-full lg:w-1/3 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center justify-center text-xl font-bold">DEXA Scans</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    $100–$200 per scan
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Need an appointment and have to travel to a clinic
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Need to undress in front of a stranger
                  </li>
                  <li className="flex items-center text-neutral">
                  <span className="text-red-500 mr-2">❌</span>
                  Not practical for frequent tracking
                </li>
                <li className="flex items-center text-neutral">
                  <span className="text-red-500 mr-2">❌</span>
                  Small radiation exposure (low, but non-zero)
                </li>
                <li className="flex items-center text-neutral">
                  <span className="text-red-500 mr-2">❌</span>
                  Involves lying still in a medical setting
                </li>
                </ul>
              </div>
            </div>
  
            {/* AI Roasting */}
            <div className="card bg-[#DEFCED] w-full lg:w-1/3 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center justify-center text-xl font-bold">Body Fat Estimator AI</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center text-neutral">
                    <span className="text-green-500 mr-2">✅</span>
                    FREE
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="mr-2">✅</span>
                    Upload a picture and get instant, accurate results from anywhere
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="mr-2">✅</span>
                    100% private, take a picture at home
                  </li>
                  <li className="flex items-center text-neutral">
                  <span className="text-green-500 mr-2">✅</span>
                  Ideal for weekly or monthly progress checks
                </li>
                <li className="flex items-center text-neutral">
                  <span className="text-green-500 mr-2">✅</span>
                  Instant results in seconds
                </li>
                <li className="flex items-center text-neutral">
                  <span className="text-green-500 mr-2">✅</span>
                  No appointments, no travel
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
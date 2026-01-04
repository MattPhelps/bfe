import ReviewBox from "./ReviewBox";

export default function Hero() {
    return (
      <div className="hero min-h-screen lg:-mt-28 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> 
          <h1 className="text-4xl lg:text-5xl font-bold">
            Find Out Your Body Fat % - Instantly
          </h1>
            <p className="py-6 text-lg mt-6">
            Upload a photo and let our AI analyze your body composition in seconds. Fast, accurate, and hassle-free body fat estimate.
            </p>
            <a href="/upload">
              <button className="btn btn-primary btn-lg text-white mt-6">Get My Body Fat % <span className="text-lg">→</span></button>
            </a>
            <ReviewBox />
          </div>
        </div>
      </div>
    );
  }
  
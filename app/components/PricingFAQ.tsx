export default function PricingFAQ() {
  return (
    <div
      id="faq"
      className="hero mt-10 mb-20 flex items-center justify-center bg-base-100"
    >
      <div className="hero-content w-full px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="flex justify-center mb-4">
            <p className="text-xs lg:text-sm text-center text-gray-600  px-4 py-2 rounded-full">
              🔒 Your photos are private and used only to generate your estimate
            </p>
          </div>

          <h2 className="text-2xl lg:text-3xl text-center font-bold">
            Frequently Asked Questions
          </h2>
          <p className="py-6 text-lg mb-6 text-center">
            Answers to common questions about our professional AI body fat estimation service for individuals and personal trainers.
          </p>

          {/* FAQ Items */}
          <div className="space-y-4">
            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg lg:text-xl">
                Which plan should I choose?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  Use <b>Free</b> to try it once. Choose <b>Single Accurate Estimate</b> if
                  you want one high-confidence result. Pick <b>Progress Tracking</b> if
                  you’re cutting, bulking, or recomposing and want to track changes over time.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                What’s the difference between Free and Single Accurate Estimate?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  Free is a quick “rough check.” Single Accurate Estimate uses a more careful
                  analysis and includes the money-back guarantee.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                Are my photos safe?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  Yes. Your photos are processed securely and are never shared, sold, or used for training public AI models. 
                  Images are only used to generate your body fat estimate and are deleted automatically after processing.
                </p>
              </div>
            </div>


            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                How do credits/estimates work?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  1 estimate = 1 photo analyzed. Progress Tracking gives you a bundle of estimates
                  so you can check in repeatedly without paying each time.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                Do my estimates expire?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  No — unused estimates don’t expire. Use them whenever you want.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                How accurate is this?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  It’s an estimate (not a DEXA scan), but it’s designed to be consistent.
                  For best results: full-body photo, front-facing, good lighting, minimal clothing,
                  same pose each time.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                Can I get a refund if I’m not satisfied?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  Yes. If you’re unhappy with the result, email us within 7 days of purchase for a
                  full refund.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                What payment methods do you support?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  We support major credit cards, Apple Pay, and other Stripe-supported payment methods.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                What do you do with my photos?
              </div>
              <div className="collapse-content">
                <p className="text-base text-gray-600">
                  Photos are used only to generate your estimate. We don’t sell your data. See our{" "}
                  <a className="link" href="/privacy">
                    Privacy Policy
                  </a>{" "}
                  for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

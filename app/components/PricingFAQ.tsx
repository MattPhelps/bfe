export default function PricingFAQ() {
    return (
      <div id="faq" className="hero mt-10 mb-20 flex items-center justify-center bg-base-100">
        <div className="hero-content w-full px-4">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h2 className="text-xl lg:text-4xl text-center font-bold">
              Frequently Asked Questions
            </h2>
            <p className="py-6 text-lg mb-6 text-center">
          Have another question? Reach out to our support team by sending us an <a href="mailto:matt@leandme.com" className="text-primary">email</a> and we’ll get back to you as soon as we can.
          </p>
  
            {/* FAQ Items */}
            <div className="space-y-4">
    
              <div className="collapse collapse-plus bg-base-500 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg lg:text-xl">
                  Should I buy one estimate or unlimited?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  For one-off or hard-to-predict body fat estimate needs, buying 1 or 10 estimates is a great option.

                  For larger or ongoing estimate needs, you'll save on every estimate that you process with an unlimited lifetime deal. With monthly plans starting at just 40 images per month and rollover of any unused credits (up to 5×) you'll benefit from huge savings without making a huge commitment.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-500 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg lg:text-xl">
                What happens if I don't use all my esimates?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  Your leftover estimates will never expire. They can be used at any time in the future.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-500 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg lg:text-xl">
                  Can I get a refund if I'm not satisfied?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  We’re confident in the accuracy of our tool, but if you feel the results are off, you can get a 100% refund if you reach out to us within 7 days of your purchase.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-500 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg lg:text-xl">
                What payment methods do you support?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  We support all major Credit Cards, PayPal and Apple Pay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
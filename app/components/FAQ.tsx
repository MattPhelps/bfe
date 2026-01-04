export default function FAQ() {
  return (
    <div id="faq" className="hero mt-10 lg:mt-40 flex items-center justify-center bg-base-100">
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
                How does it work?
              </div>
              <div className="collapse-content">
                <p className="text-lg">
                Simply upload a clear photo of yourself, and our advanced trained AI analyzes key body measurements and markers to estimate your body fat percentage.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                How long does it take?
              </div>
              <div className="collapse-content">
                <p className="text-lg">
                  Most estimates are completed in less than 20 seconds.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                Is it accurate?
              </div>
              <div className="collapse-content">
                <p className="text-lg">
                Our AI model is trained on a large dataset of body composition scans, making it highly accurate. While it’s not a replacement for medical-grade devices, it provides reliable estimates that align closely with professional methods like DEXA scans.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
              What types of photos should I upload?
              </div>
              <div className="collapse-content">
                <p className="text-lg">
                For best results, upload a well-lit, full-body photo in your underwear/swimwear to ensure the AI can analyze your body accurately. Only one person in each photo.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
              Is my data safe?
              </div>
              <div className="collapse-content">
                <p className="text-lg">
                Yes! We prioritize your privacy. Your photos are processed securely and are never shared, stored, or used for any purpose beyond your analysis. All data is automatically deleted after processing.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg lg:text-xl">
                I have another question...
              </div>
              <div className="collapse-content">
                <p className="text-lg">
                  No worries! Contact me via <a href="mailto:matt@leandme.com" className="text-primary">
            email.
          </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

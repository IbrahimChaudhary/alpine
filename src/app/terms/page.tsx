import { Calendar } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto px-8 py-26 pb-32">

        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Date Badge */}
          <div className="flex border-[0.5px] border-[#2525254f] dark:border-[#fafafa4b] rounded-full px-4 py-2 w-fit mx-auto items-center justify-center gap-2 mb-8">
            <Calendar className="w-5 h-5 text-[#252525] dark:text-[#fafafa]" />
            <span className="text-[20px]  text-[#252525] dark:text-[#fafafa]">
              Jan 14, 2025
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-[44px]  text-[#252525] dark:text-[#fafafa] mb-8">
            Terms of Service
          </h1>

          {/* Introduction */}
          <p className="text-[24px] text-left text-[#252525] dark:text-[#fafafa] leading-tight  mx-auto">
            Welcome to Sonic. By accessing or using our website, products, or services, you agree
            to be bound by the following Terms and Conditions. If you do not agree to these terms,
            please refrain from using our platform.
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-12 text-[#252525] dark:text-[#fafafa]">

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                1.1. By using our services, you confirm that you are at least 18 years old or have
                parent/guardian consent to use our platform.
              </p>
              <p>
                1.2. These Terms and Conditions form a legally binding agreement between you and Sonic.
              </p>
            </div>
          </section>

          {/* 2. Services Provided */}
          <section>
            <h2 className="text-2xl font-bold mb-6">2. Services Provided</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                2.1. Sonic provides tools and solutions powered by artificial intelligence, such as:
              </p>
              <ul className="list-disc ml-8 space-y-2 custom-list-marker"> 
                <li>AI-driven analytics</li>
                <li>Channel integration</li>
                <li>Predictive modeling</li>
              </ul>
              <p>
                2.2. All features are subject to availability and may be updated or discontinued at our discretion.
              </p>
            </div>
          </section>

          {/* 3. User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold mb-6">3. User Responsibilities</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                3.1. You agree to use our services for lawful purposes only.
              </p>
              <p>
                3.2. You are responsible for ensuring that your use of our platform complies with all
                applicable laws and regulations.
              </p>
              <p>
                3.3. Unauthorized use, such as reverse engineering, reselling, or tampering with our AI
                systems, is strictly prohibited.
              </p>
            </div>
          </section>

          {/* 4. Privacy and Data Use */}
          <section>
            <h2 className="text-2xl font-bold mb-6">4. Privacy and Data Use</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                4.1. Your privacy is important to us. By using Sonic, you agree to our Privacy Policy.
              </p>
              <p>
                4.2. Data collected from your usage may be used to improve our AI algorithms and
                enhance our services.
              </p>
              <p>
                4.3. Sensitive or personally identifiable information will never be shared without your
                consent, except as required by law.
              </p>
            </div>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-6">5. Intellectual Property</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                5.1. All content, designs, and AI algorithms provided by Sonic are the intellectual
                property of Sonic.
              </p>
              <p>
                5.2. You may not duplicate, copy, distribute, or exploit any part of our services without
                prior written consent.
              </p>
            </div>
          </section>

          {/* 6. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-6">6. Limitation of Liability</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                6.1. Sonic is provided &quot;as is&quot; without warranties of any kind.
              </p>
              <p>
                6.2. We are not responsible for any losses, damages, or liabilities arising from the use of
                our services.
              </p>
              <p>
                6.3. While we strive for accuracy, our AI outputs are not guaranteed to be error-free or
                appropriate for all use cases.
              </p>
            </div>
          </section>

          {/* 7. Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-6">7. Termination</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                7.1. We reserve the right to suspend or terminate your access to our services if you
                violate these Terms and Conditions.
              </p>
              <p>
                7.2. Upon termination, your right to use the platform ceases immediately.
              </p>
            </div>
          </section>

          {/* 8. Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-6">8. Changes to Terms</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                8.1. We may update these Terms and Conditions periodically. Any changes will be
                posted on this page with a new effective date.
              </p>
              <p>
                8.2. Continued use of our services constitutes acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* 9. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-6">9. Governing Law</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                9.1. These terms are governed by the laws of [Your Country/Region]. Any disputes will
                be resolved in the courts of [Your Jurisdiction].
              </p>
            </div>
          </section>

          {/* 10. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-6">10. Contact Us</h2>
            <div className="space-y-4 text-[24px] leading-tight ">
              <p>
                If you have questions or concerns about these Terms and Conditions, please contact us at:
              </p>
              <p>
                <a
                  href="mailto:sonic@example.com"
                  className="text-[#252525] dark:text-[#fafafa] underline font-medium hover:opacity-80 transition-opacity"
                >
                  sonic@example.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
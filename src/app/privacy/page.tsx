import { Calendar } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-26 pb-32">

        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Date Badge */}
          <div className="flex border-[0.5px] border-[#2525254f] dark:border-[#fafafa4b] rounded-full px-4 py-2 w-fit mx-auto items-center justify-center gap-2 mb-8">
            <Calendar className="w-5 h-5 text-[#252525] dark:text-[#fafafa]" />
            <span className="text-[20px] text-[#252525] dark:text-[#fafafa]">
              Jan 14, 2025
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-[44px] text-[#252525] dark:text-[#fafafa] mb-8">
            Privacy Policy
          </h1>

          {/* Introduction */}
          <p className="text-[24px] text-left text-[#252525] dark:text-[#fafafa] leading-tight mx-auto mb-8">
            This Privacy Policy describes Our policies and procedures on the collection, use and
            disclosure of Your information when You use the Service and tells You about Your
            privacy rights and how the law protects You.
          </p>

          <p className="text-[24px] text-left text-[#252525] dark:text-[#fafafa] leading-tight mx-auto">
            We use Your Personal data to provide and improve the Service. By using the Service,
            You agree to the collection and use of information in accordance with this Privacy
            Policy. This Privacy Policy has been created with the help of the{" "}
            <a href="#" className="underline font-medium">Privacy Policy Generator</a>.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-[#252525] dark:text-[#fafafa]">

          {/* Interpretation and Definitions */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Interpretation and Definitions</h2>

            <h3 className="text-xl font-bold mb-4">Interpretation</h3>
            <p className="text-[24px] leading-tight mb-6">
              The words of which the initial letter is capitalized have meanings defined under the
              following conditions. The following definitions shall have the same meaning regardless
              of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-bold mb-4">Definitions</h3>
            <p className="text-[24px] leading-tight mb-4">For the purposes of this Privacy Policy:</p>

            <ul className="list-disc ml-8 space-y-6 custom-list-marker text-[24px] leading-tight">
              <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Example Site.</li>
              <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
              <li><strong>Country</strong> refers to: California, United States</li>
              <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Website</strong> refers to Example Site, accessible from <a href="#" className="underline">www.example.com</a></li>
            </ul>
          </section>

          {/* Collecting and Using Your Personal Data */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-bold mb-4">Types of Data Collected</h3>

            <h4 className="text-lg font-bold mb-4">Personal Data</h4>
            <p className="text-[24px] leading-tight mb-4">
              While using Our Service, We may ask You to provide Us with certain personally
              identifiable information that can be used to contact or identify You. Personally
              identifiable information may include, but is not limited to:
            </p>

            <ul className="list-disc ml-8 space-y-2 custom-list-marker text-[24px] leading-tight mb-6">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Usage Data</li>
            </ul>

            <h4 className="text-lg font-bold mb-4">Usage Data</h4>
            <p className="text-[24px] leading-tight mb-4">
              Usage Data is collected automatically when using the Service.
            </p>
            <p className="text-[24px] leading-tight mb-6">
              Usage Data may include information such as Your Device&apos;s Internet Protocol address
              (e.g. IP address), browser type, browser version, the pages of our Service that You visit,
              the time and date of Your visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
          </section>

          {/* Use of Your Personal Data */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Use of Your Personal Data</h2>
            <p className="text-[24px] leading-tight mb-4">The Company may use Personal Data for the following purposes:</p>

            <ul className="list-disc ml-8 space-y-6 custom-list-marker text-[24px] leading-tight">
              <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
              <li><strong>To manage Your Account</strong>: to manage Your registration as a user of the Service.</li>
              <li><strong>For the performance of a contract</strong>: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</li>
              <li><strong>To contact You</strong>: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
            </ul>
          </section>

          {/* Security of Your Personal Data */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Security of Your Personal Data</h2>
            <p className="text-[24px] leading-tight">
              The security of Your Personal Data is important to Us, but remember that no method of
              transmission over the Internet, or method of electronic storage is 100% secure. While
              We strive to use commercially acceptable means to protect Your Personal Data, We
              cannot guarantee its absolute security.
            </p>
          </section>

          {/* Children&apos;s Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Children&apos;s Privacy</h2>
            <p className="text-[24px] leading-tight">
              Our Service does not address anyone under the age of 13. We do not knowingly collect
              personally identifiable information from anyone under the age of 13. If You are a parent
              or guardian and You are aware that Your child has provided Us with Personal Data,
              please contact Us.
            </p>
          </section>

          {/* Changes to this Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Changes to this Privacy Policy</h2>
            <p className="text-[24px] leading-tight mb-4">
              We may update Our Privacy Policy from time to time. We will notify You of any changes
              by posting the new Privacy Policy on this page.
            </p>
            <p className="text-[24px] leading-tight">
              You are advised to review this Privacy Policy periodically for any changes. Changes to
              this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="text-[24px] leading-tight mb-4">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>
            <p className="text-[24px] leading-tight">
              By email:{" "}
              <a
                href="mailto:example@example.com"
                className="text-[#252525] dark:text-[#fafafa] underline font-medium hover:opacity-80 transition-opacity"
              >
                example@example.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
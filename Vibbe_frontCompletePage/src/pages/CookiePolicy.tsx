import React from "react";
import { Helmet } from "react-helmet";

export default function CookiePolicyPage() {
  // Page title typography (Public Sans)
  const pageTitleClass =
    "text-[40px] md:text-[52px] lg:text-[56px] <xl:text-1em></xl:text-1em> font-bold tracking-tight mb-8";

  // Section headings (Inter)
  const sectionHeadingClass =
    "text-[20px] md:text-[28px] font-semibold leading-tight mb-3";

  // Paragraphs (Inter)
  const paragraphClass = "text-[15px] md:text-[18px] leading-relaxed mt-3";

  return (
    <div
      className="min-h-screen bg-white text-black px-6 md:px-12 py-10"
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <Helmet>
        <title>Cookie Policy | Vibbe</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1
          className={pageTitleClass}
          style={{
            fontFamily:
              "'Public Sans', Inter, system-ui, -apple-system",
          }}
        >
          Cookie Policy
        </h1>

        {/* 1. Introduction */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>1. Introduction</h2>
          <p className={paragraphClass}>
            This Cookie Policy explains how Vibbe uses cookies and similar
            technologies to operate, protect, and enhance our platform.
            These technologies help us recognize your device, keep your
            account secure, understand your activity, personalize your
            experience, and improve performance. By using Vibbe, you agree
            to the use of cookies as described in this policy.
          </p>
        </section>

        {/* 2. Essential Cookies */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>2. Essential Cookies</h2>
          <p className={paragraphClass}>
            Essential cookies enable core platform functionality such as
            secure login, session maintenance, fraud prevention, and system
            stability. These cookies ensure Vibbe works properly across
            devices and browsers. Without them, certain features may not
            function as intended.
          </p>
        </section>

        {/* 3. Performance & Analytics Cookies */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>
            3. Performance & Analytics Cookies
          </h2>
          <p className={paragraphClass}>
            Vibbe uses analytics cookies to understand how users interact
            with the platform. These cookies help measure performance,
            identify issues, monitor user behavior, and analyze trends. This
            information allows us to improve speed, usability, and feature
            quality.
          </p>
        </section>

        {/* 4. Personalization Cookies */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>
            4. Personalization & Recommendation Cookies
          </h2>
          <p className={paragraphClass}>
            To deliver a personalized experience, Vibbe uses cookies that
            help tailor the content you see. These technologies allow us to
            understand your interests, the creators or communities you
            engage with, and the content you prefer—helping Vibbe show more
            relevant recommendations.
          </p>
        </section>

        {/* 5. Advertising / Sponsored Content */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>
            5. Advertising & Sponsored Content Cookies
          </h2>
          <p className={paragraphClass}>
            If Vibbe introduces ads, cookies may be used to measure ad
            performance, prevent repetition, and deliver relevant promotions.
            Some cookies may be set by trusted advertising partners who must
            follow strict privacy and security standards.
          </p>
        </section>

        {/* 6. Third-Party Cookies */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>6. Third-Party Cookies</h2>
          <p className={paragraphClass}>
            Vibbe may allow third-party services to set cookies for analytics,
            security, or technical support. These partners may collect limited
            information but are required to handle data lawfully and
            responsibly.
          </p>
        </section>

        {/* 7. Security Cookies */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>
            7. Cookies for Security & Integrity
          </h2>
          <p className={paragraphClass}>
            Cookies help detect suspicious activity, reduce harmful behavior,
            prevent spam, and protect community safety. These technologies
            identify unusual device patterns or unauthorized actions to keep
            Vibbe secure.
          </p>
        </section>

        {/* 8. Cookie Duration */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>8. Cookie Duration</h2>
          <p className={paragraphClass}>
            Some cookies last only during your session, while others remain on
            your device to remember preferences or enable a consistent
            experience across visits. You can manage or delete cookies in your
            browser settings—but disabling essential cookies may interfere with
            functionality.
          </p>
        </section>

        {/* 9. Policy Updates */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>9. Updates to This Policy</h2>
          <p className={paragraphClass}>
            Vibbe may update this Cookie Policy due to technical improvements,
            regulatory changes, or updates to platform functionality. The “Last
            Updated” date will be revised accordingly. Continued use of Vibbe
            after updates constitutes acceptance.
          </p>
        </section>

        {/* 10. Contact */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>10. Contact Us</h2>
          <p className={paragraphClass}>
            If you have questions about this Cookie Policy or how Vibbe uses
            cookies and related technologies, please contact us at:
          </p>
          <p className={paragraphClass}>
            <strong>Email:</strong> vibbeit@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
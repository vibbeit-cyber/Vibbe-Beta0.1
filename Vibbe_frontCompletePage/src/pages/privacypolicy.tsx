import React from "react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicyPage() {
  // Page title typography (Public Sans, larger than section headings)
  const pageTitleClass =
    "text-[40px] md:text-[52px] lg:text-[56px] xl:text-[56px] font-bold tracking-tight mb-8";

  // Section headings (Inter) - responsive but smaller than page title
  const sectionHeadingClass =
    "text-[20px] md:text-[28px] font-semibold leading-tight mb-3";

  // Paragraphs (Inter) - responsive
  const paragraphClass = "text-[15px] md:text-[18px] leading-relaxed mt-3";

  return (
    <div
      className="min-h-screen bg-white text-black px-6 md:px-12 py-10"
      style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto" }}
    >
      <Helmet>
        <title>Privacy Policy | Vibbe</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">

        {/* Page heading - uses Public Sans via inline style (ensure font is loaded in index.html) */}
        <h1
          className={pageTitleClass}
          style={{ fontFamily: "'Public Sans', Inter, system-ui, -apple-system" }}
        >
          Privacy Policy
        </h1>

        {/* 1. Introduction */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>1. Introduction to Vibbe and This Policy</h2>
          <p className={paragraphClass}>
            This Privacy Policy explains how Vibbe (“we”, “us”, “our”) collects, uses,
            stores, shares, and protects the personal and usage information you provide
            when you use Vibbe (through our website, mobile app, or other services). By
            using Vibbe, you consent to the practices described in this policy. If you
            do not agree, please do not use Vibbe.
          </p>
          <p className={paragraphClass}>
            This policy also governs how we handle data when you interact with integrated
            third-party platforms (e.g., social-login via Instagram/Meta or other APIs).
          </p>
          <p className={paragraphClass}>
            We recognize that privacy is important. We strive to be transparent about what
            information we collect and how we use it.
          </p>
          <p className={paragraphClass}>
            This document describes your rights, our obligations, and how you can contact us
            about your data.
          </p>
          <p className={paragraphClass}>
            Please read all sections carefully. We may update this policy from time to time;
            continued use of Vibbe after changes means you accept them.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>2. Information We Collect from You</h2>
          <p className={paragraphClass}>
            We collect information you voluntarily give us when you sign up, contact support,
            or use Vibbe — such as your name, email address, profile information, and any content
            you upload (text, images, etc.).
          </p>
          <p className={paragraphClass}>
            We also collect usage data — e.g., which pages you visit, content you view, how long
            you stay, what you click, shares/likes/comments you do — to understand how Vibbe is used.
          </p>
          <p className={paragraphClass}>
            We gather device and technical information: your device type, operating system, unique
            device identifiers, IP addresses, browser or app version — this helps us ensure Vibbe
            works well on all devices and helps diagnose issues.
          </p>
          <p className={paragraphClass}>
            We store cookies, session data, and similar tracking information to remember your preferences,
            login status, and to provide a smoother user experience.
          </p>
          <p className={paragraphClass}>
            If you login via a third-party service (e.g., social login), we may receive limited data from
            that service (for example username, profile picture, email) only if you grant permission.
          </p>
        </section>

        {/* 3. How We Use Your Information */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>3. How We Use Your Information</h2>
          <p className={paragraphClass}>
            We use your information to provide, operate, maintain, and improve Vibbe’s core services —
            including account creation, content posting, messaging or social features, and ensuring the
            app/site functions correctly.
          </p>
          <p className={paragraphClass}>
            We personalize your experience — by recommending content, remembering your preferences (e.g.
            language, theme), and tailoring Vibbe’s interface to suit your device and usage pattern.
          </p>
          <p className={paragraphClass}>
            We communicate with you: sending important updates, security alerts, changes to policies or features,
            or responding to requests/support tickets.
          </p>
          <p className={paragraphClass}>
            We use data to run diagnostics, detect and prevent fraud, abuse, spam, and other harmful activities —
            ensuring user safety and protecting community integrity.
          </p>
          <p className={paragraphClass}>
            We analyze how Vibbe is used — understanding which features are popular, where users drop off, how content
            performs — to guide future improvements and maintain performance and reliability.
          </p>
        </section>

        {/* 4. Data Sharing */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>4. Data Sharing & Third-Party Services</h2>
          <p className={paragraphClass}>
            We may share limited user information with trusted third-party service providers who help us run Vibbe:
            e.g., hosting companies, database services, analytics providers, cloud storage or content delivery networks.
          </p>
          <p className={paragraphClass}>
            Whenever we share with third parties, we require them to comply with strict confidentiality and security
            obligations and prohibit them from using your data for unrelated purposes.
          </p>
          <p className={paragraphClass}>
            If you choose to connect via a third-party login (like Instagram/Meta), we share only the minimum data
            necessary and only as permitted by you and the third-party’s authorization.
          </p>
          <p className={paragraphClass}>
            We do not sell or license your personal data to advertisers or unrelated third parties for profit.
          </p>
          <p className={paragraphClass}>
            If Vibbe is merged, acquired, or otherwise undergoes a corporate change (sale, transfer, reorganization),
            your data may be transferred — but only under the terms of this privacy policy or a similar agreement.
          </p>
        </section>

        {/* 5. Cookies */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>5. Cookies, Tracking Technologies & Local Storage</h2>
          <p className={paragraphClass}>
            We use cookies, web beacons, local storage, and similar technologies to store user preferences (like language
            or theme), login status, and to improve the user experience.
          </p>
          <p className={paragraphClass}>
            Some cookies or local storage are essential for Vibbe to work properly (e.g., session cookies) — disabling them
            may cause certain features to malfunction.
          </p>
          <p className={paragraphClass}>
            Other cookies are used to understand usage patterns — for analytics, performance tracking, or debugging —
            helping us make Vibbe faster, safer, and more stable.
          </p>
          <p className={paragraphClass}>
            You may choose to disable or clear cookies via your browser or device settings. However, this may limit or disable
            some features or degrade functionality.
          </p>
          <p className={paragraphClass}>
            In case of any legal or regulatory requirement, we may also use anonymous or aggregated tracking to comply with
            audits or data-security assessments.
          </p>
        </section>

        {/* 6. Data Security */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>6. Data Security and Protection Measures</h2>
          <p className={paragraphClass}>
            We implement technical safeguards (such as encryption, secure servers, firewalls) to protect your data during
            storage and transmission.
          </p>
          <p className={paragraphClass}>
            Access to your personal data by our team is limited — only employees or contractors who need access for legitimate
            tasks (customer support, maintenance, analytics) can view data.
          </p>
          <p className={paragraphClass}>
            We regularly audit our systems and processes to detect security vulnerabilities and apply updates or patches as
            needed to prevent unauthorized access.
          </p>
          <p className={paragraphClass}>
            If we use third-party vendors for storage or processing, we ensure they comply with industry-standard security protocols
            and data-privacy regulations.
          </p>
          <p className={paragraphClass}>
            While we strive for high security, no system is perfectly safe — we cannot guarantee absolute protection. In the unlikely
            event of a data breach, we will notify affected users promptly (see Section 17).
          </p>
        </section>

        {/* 7. Data Retention */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>7. Data Retention & Deletion Policy</h2>
          <p className={paragraphClass}>
            We retain user data only as long as necessary to provide Vibbe’s services, maintain account history, handle disputes,
            or comply with legal obligations.
          </p>
          <p className={paragraphClass}>
            If you request account deletion or deactivation (see Section 10), we will delete or anonymize your personal data, except
            for data we are legally required to retain (e.g. transaction logs, compliance records).
          </p>
          <p className={paragraphClass}>
            Deleted or anonymized data will no longer be identifiable to you. Aggregated or anonymized data may be retained for analytics,
            research, or statistical purposes.
          </p>
          <p className={paragraphClass}>
            We periodically review our data holdings and delete or archive data that is no longer necessary.
          </p>
          <p className={paragraphClass}>
            We will notify you if there are changes to retention periods, especially if such changes affect your rights or data security.
          </p>
        </section>

        {/* 8. User Rights */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>8. Your Rights Regarding Your Data</h2>
          <p className={paragraphClass}>
            You have the right to access the personal data we hold about you. You may contact us to request a copy at any time.
          </p>
          <p className={paragraphClass}>
            If any of your data is inaccurate or outdated, you may request correction or update to ensure accuracy.
          </p>
          <p className={paragraphClass}>
            You may request the deletion of your personal data or entire account — we will comply, subject to legal or contractual obligations.
          </p>
        </section>

        {/* 9. Children */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>9. Children’s Privacy & Age Restrictions</h2>
          <p className={paragraphClass}>Vibbe is intended for users who are:</p>
          <p className={paragraphClass}>At least 13 years old globally, and</p>
          <p className={paragraphClass}>At least 16 years old in GDPR regions (EU/EEA/UK).</p>
          <p className={paragraphClass}>
            We do not knowingly collect personal information from minors younger than these age thresholds.
          </p>
          <p className={paragraphClass}>
            If we become aware that we have collected data from a minor below the required age, we will promptly delete it upon verification.
          </p>
          <p className={paragraphClass}>
            Parents or legal guardians may contact us to request deletion or access to their child’s data.
          </p>
          <p className={paragraphClass}>
            If local laws require parental consent at a different age, we will comply accordingly and update this policy.
          </p>
        </section>

        {/* 10. Account Deactivation */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>10. Account Deactivation and Deletion</h2>
          <p className={paragraphClass}>
            You may choose to deactivate or delete your account at any time through settings or by contacting support.
          </p>
          <p className={paragraphClass}>
            Deactivation temporarily hides your profile and content; deletion permanently removes your data (subject to retention for compliance).
          </p>
          <p className={paragraphClass}>
            After deletion, you must not attempt to recreate an account with the same credentials for a certain waiting period [if applicable].
          </p>
          <p className={paragraphClass}>
            Any content or data that other users have shared (e.g. comments or messages) may persist unless you specifically request removal of those.
          </p>
          <p className={paragraphClass}>
            We may keep certain metadata (like anonymized usage statistics) even after deletion, but without identifying you personally.
          </p>
        </section>

        {/* 11. Third-Party Links */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>11. Third-Party Links, Services & Content</h2>
          <p className={paragraphClass}>
            Vibbe may contain links to external websites or services we do not control. This policy does not apply to those third-party sites once you leave Vibbe.
          </p>
          <p className={paragraphClass}>
            We are not responsible for how external sites collect or use your data — you should read their policies before providing information.
          </p>
          <p className={paragraphClass}>
            If you choose to use third-party services (e.g. social-login, external payment gateways), your interaction with them is subject to their privacy practices.
          </p>
          <p className={paragraphClass}>
            We recommend you review and understand the privacy policies of all third-party services before connecting them to your Vibbe account.
          </p>
          <p className={paragraphClass}>
            Any content shared by you via third-party services may also be subject to that service’s terms and policies.
          </p>
        </section>

        {/* 12. Payments */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>12. Payments, Billing & Financial Information (If Applicable)</h2>
          <p className={paragraphClass}>
            If Vibbe offers paid services or in-app purchases, payments will be processed via secure, reputable third-party payment providers.
          </p>
          <p className={paragraphClass}>
            We do not store or have access to your full credit card or banking details.
          </p>
          <p className={paragraphClass}>
            We may store transaction receipts, payment confirmation, subscription status — but payment data is handled by the payment processor.
          </p>
          <p className={paragraphClass}>
            Billing history, invoices, or receipts may be retained for a defined period for compliance, refunds, or supporting you in disputes.
          </p>
          <p className={paragraphClass}>
            If you request refunds, cancellations, or subscription termination, we will handle them per our terms and notify you accordingly.
          </p>
        </section>

        {/* 13. Analytics */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>13. Analytics, Aggregated Data & Research Use</h2>
          <p className={paragraphClass}>
            We may analyze aggregated usage data to understand how users interact with Vibbe — e.g., what features are popular, usage patterns, performance issues.
          </p>
          <p className={paragraphClass}>
            Aggregated data does not identify individuals — personal identifiers are removed before analysis.
          </p>
          <p className={paragraphClass}>
            We may use aggregated data to improve Vibbe, design new features, or share general statistics (e.g. number of users) publicly — but never with personal identifiers.
          </p>
          <p className={paragraphClass}>
            We may use aggregated, anonymized data for academic or market research, improvement of user experience, or internal reporting.
          </p>
          <p className={paragraphClass}>
            Such data may also support growth decisions, user-demographic insights, or community metrics — always respecting user privacy and anonymity.
          </p>
        </section>

        {/* 14. Advertising */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>14. Behavioral Advertising & Marketing (If Introduced Later)</h2>
          <p className={paragraphClass}>
            If Vibbe introduces targeted advertising or marketing, we will obtain explicit consent from you before using your data for marketing purposes.
          </p>
          <p className={paragraphClass}>
            You will have the option to opt-out or disable such marketing communications or targeted ads.
          </p>
          <p className={paragraphClass}>
            We will not share your data with advertisers in a way that directly identifies you, unless you explicitly consent.
          </p>
          <p className={paragraphClass}>
            Any marketing data processing will comply with relevant privacy laws and regulations in your jurisdiction.
          </p>
          <p className={paragraphClass}>
            We will clearly disclose to you which data is used for marketing/advertising, and allow you to manage or withdraw that consent.
          </p>
        </section>

        {/* 15. Device Info */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>15. Device Information & Optional Location Data</h2>
          <p className={paragraphClass}>
            If Vibbe requires device-level permissions (e.g. location, camera, storage), we will request explicit permission from you.
          </p>
          <p className={paragraphClass}>
            If you grant permission, we may collect location or device metadata — but only use it for the purpose you agreed to (e.g. showing location-based content).
          </p>
          <p className={paragraphClass}>
            You have the option to disable permissions at any time — Vibbe will still work, but location-based features will be disabled.
          </p>
          <p className={paragraphClass}>
            We will not track or store continuous location history unless explicitly asked and consented to.
          </p>
          <p className={paragraphClass}>
            Any optional data collection will always be clearly described when requesting permission.
          </p>
        </section>

        {/* 16. International Transfers */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>16. International Data Transfers</h2>
          <p className={paragraphClass}>
            Because Vibbe’s servers or service providers may be located in different countries, your data may be transferred, stored, and processed internationally.
          </p>
          <p className={paragraphClass}>
            By using Vibbe, you consent to this transfer, subject to compliance with relevant data-protection laws.
          </p>
          <p className={paragraphClass}>
            We commit to securing such transfers via encryption and contractual safeguards.
          </p>
          <p className={paragraphClass}>
            If you are located in countries with special data-protection regulations (e.g. GDPR regions), we will comply with applicable legal obligations — including data transfer protections such as Standard Contractual Clauses (SCCs).
          </p>
          <p className={paragraphClass}>
            We will notify you if such transfers may affect your privacy rights or data safeguards, or if laws change.
          </p>
        </section>

        {/* 17. Data Breach */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>17. Data Breach Notification and Response</h2>
          <p className={paragraphClass}>
            In the event of a data breach that affects user data, we will promptly investigate and assess the severity.
          </p>
          <p className={paragraphClass}>
            If we determine user personal data may have been exposed, we will notify all affected users without undue delay, providing clear information on what was compromised.
          </p>
          <p className={paragraphClass}>
            We will also inform relevant authorities, if required by law, and cooperate fully with investigations.
          </p>
          <p className={paragraphClass}>
            After a breach, we will take remedial measures: reset compromised credentials, enhance security, audit systems, and prevent recurrence.
          </p>
          <p className={paragraphClass}>
            We will publicly post a summary of the breach response and ongoing measures to restore trust and transparency (unless prohibited legally).
          </p>
        </section>

        {/* 18. Consent */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>18. User Consent and Legal Basis for Processing</h2>
          <p className={paragraphClass}>
            By creating an account or using Vibbe, you provide consent to the data practices described here.
          </p>
          <p className={paragraphClass}>
            For any data processing that requires explicit consent (e.g. marketing, behavioral advertising, location data), we request consent separately and allow you to withdraw it at any time.
          </p>
          <p className={paragraphClass}>
            We retain records of your consent history for compliance and audit purposes.
          </p>
          <p className={paragraphClass}>
            If laws require additional consent (depending on your jurisdiction), we will implement required mechanisms (age verification, parental consent, explicit opt-in).
          </p>
          <p className={paragraphClass}>
            If you do not consent or withdraw consent, we will restrict processing to essential services only.
          </p>
        </section>

        {/* 19. Changes */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>19. Changes to This Privacy Policy & How We Notify You</h2>
          <p className={paragraphClass}>
            We may update this policy whenever we add new features, change data practices, or due to legal or regulatory updates.
          </p>
          <p className={paragraphClass}>
            When we make material changes (affecting your rights or data usage), we will notify you — via email, in-app notification, or a prominent notice on Vibbe’s homepage.
          </p>
          <p className={paragraphClass}>
            You will have an opportunity to review changes and — if you disagree — discontinue using Vibbe. Continued use will be considered acceptance of the updated policy.
          </p>
          <p className={paragraphClass}>
            We will update the “Last Updated” date at the top to reflect changes.
          </p>
          <p className={paragraphClass}>
            We may provide a summary of changes for clarity (what was changed, added, or removed).
          </p>
        </section>

        {/* 20. Governing Law */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>20. Governing Law, Jurisdiction & Dispute Resolution</h2>
          <p className={paragraphClass}>
            This Privacy Policy and any disputes arising from it are governed by the laws applicable to global digital services, with reference to Vibbe Inc’s operational jurisdiction.
          </p>
          <p className={paragraphClass}>
            If any part of this policy is found invalid or unenforceable under local law, the rest of the policy remains valid.
          </p>
          <p className={paragraphClass}>
            Any dispute relating to this policy will be resolved in a competent court of law based on global jurisdiction standards, unless otherwise required by local privacy or consumer-protection laws.
          </p>
          <p className={paragraphClass}>
            You and Vibbe agree to attempt amicable negotiation first. If negotiation fails, both parties may seek legal remedies.
          </p>
          <p className={paragraphClass}>
            This clause does not override mandatory consumer protection or data-protection laws in your jurisdiction.
          </p>
        </section>

        {/* 21. Contact */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>21. Feedback, Complaints & Contacting Us</h2>
          <p className={paragraphClass}>
            If you have questions, privacy concerns, or requests (access, deletion, correction), you can contact us at:
          </p>
          <p className={paragraphClass}>vibbeit@gmail.com</p>
          <p className={paragraphClass}>
            You may also request our official correspondence address by emailing us.
          </p>
          <p className={paragraphClass}>
            We commit to responding to all legitimate requests within a reasonable time (e.g. 30 days), unless legal constraints apply.
          </p>
          <p className={paragraphClass}>
            If you believe your data rights are violated, you may file a complaint — we will investigate and provide resolution or explanation.
          </p>
          <p className={paragraphClass}>
            We encourage you to provide feedback on this policy or on Vibbe’s privacy practices to help us improve.
          </p>
        </section>

        {/* 22. Violations */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>22. Violations, Enforcement & Sanctions</h2>
          <p className={paragraphClass}>
            If any user violates Vibbe’s Terms of Service or this Privacy Policy (e.g. unauthorized data scraping, misuse, sharing others’ data), we reserve the right to suspend or terminate their account.
          </p>
          <p className={paragraphClass}>
            We may remove content, block IPs, or take legal action if necessary to protect user privacy and service integrity.
          </p>
          <p className={paragraphClass}>
            We may report criminal violations (fraud, hacking, harassment) to law enforcement in accordance with applicable laws.
          </p>
          <p className={paragraphClass}>
            We also reserve the right to update internal policies or impose additional safeguards if any violation reveals weaknesses.
          </p>
          <p className={paragraphClass}>
            Users who act in good faith but inadvertently break rules may be notified, warned, and given opportunity to rectify before suspension — unless the violation is severe.
          </p>
        </section>

      </div>
    </div>
  );
}
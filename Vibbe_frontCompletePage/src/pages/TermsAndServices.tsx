import React from "react";
import { Helmet } from "react-helmet";

export default function TermsAndServices() {
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
        <title>Terms And Services | Vibbe</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Page heading - uses Public Sans via inline style (ensure font is loaded in index.html) */}
        <h1
          className={pageTitleClass}
          style={{ fontFamily: "'Public Sans', Inter, system-ui, -apple-system" }}
        >
          Terms And Services
        </h1>

        {/* 1. Introduction */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>1. Introduction</h2>
          <p className={paragraphClass}>
            Vibbe provides a digital platform that allows users to create content, interact socially, and access various online
            features. By accessing Vibbe, creating an account, or using any service, you agree to comply with these Terms and Conditions.
            If you do not agree to these Terms, you must stop using Vibbe immediately.
          </p>
          <p className={paragraphClass}>
            Vibbe may update these Terms periodically, and continued use of the service means that you accept the updated version.
          </p>
        </section>

        {/* 2. Eligibility */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>2. Eligibility and Age Requirements</h2>
          <p className={paragraphClass}>
            Vibbe is available only to users who are at least 13 years old worldwide. Users in GDPR regions such as the EU, EEA,
            and UK must be at least 16 years old. Users who do not meet these age requirements are strictly prohibited from creating
            or using an account. Vibbe may remove accounts found to be created in violation of age or eligibility rules.
          </p>
        </section>

        {/* 3. Your Vibbe Account */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>3. Your Vibbe Account</h2>

          <h3 className="text-[16px] md:text-[18px] font-medium mt-2">3.1 Account Responsibility</h3>
          <p className={paragraphClass}>
            You must provide accurate, complete, and updated information when creating your Vibbe account. You are responsible for all
            activity that occurs under your account.
          </p>

          <h3 className="text-[16px] md:text-[18px] font-medium mt-4">3.2 Account Security</h3>
          <p className={paragraphClass}>
            You must protect your login credentials and avoid sharing them with others. Notify Vibbe immediately if you suspect
            unauthorized access. Vibbe is not liable for losses caused by your failure to secure your account or device.
          </p>

          <h3 className="text-[16px] md:text-[18px] font-medium mt-4">3.3 Account Restrictions</h3>
          <p className={paragraphClass}>
            You may not impersonate any person, brand, or organization, create accounts using false information, or maintain multiple
            accounts for harmful, deceptive, or abusive purposes. Vibbe may request identity verification to confirm ownership or resolve disputes.
          </p>
        </section>

        {/* 4. User Content and Rights */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>4. User Content and Rights</h2>

          <h3 className="text-[16px] md:text-[18px] font-medium mt-2">4.1 Ownership</h3>
          <p className={paragraphClass}>
            You retain ownership of the content you upload, such as photos, videos, text, and profile details.
          </p>

          <h3 className="text-[16px] md:text-[18px] font-medium mt-4">4.2 License to Vibbe</h3>
          <p className={paragraphClass}>
            By uploading content you grant Vibbe a worldwide, royalty-free license to host, store, display, share, distribute, and process
            your content for operational purposes. Vibbe may modify content only when necessary for formatting, compatibility, or technical functioning.
            This license ends when you delete your content, except where content has been shared by other users, is stored in backups, or must
            be retained for legal or compliance reasons.
          </p>
        </section>

        {/* 5. Prohibited Activities */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>5. Prohibited Activities</h2>
          <p className={paragraphClass}>You must not use Vibbe to:</p>
          <ul className={paragraphClass + " list-disc ml-6"}>
            <li>Post or spread hate speech, threats, harassment, or violent content</li>
            <li>Upload sexually explicit, exploitative, or inappropriate content</li>
            <li>Participate in scams, fraud, or deceptive activities</li>
            <li>Upload malware, viruses, or harmful code</li>
            <li>Scrape, reverse-engineer, or bypass Vibbe’s security systems</li>
            <li>Artificially manipulate engagement using bots or automation tools</li>
          </ul>
          <p className={paragraphClass}>
            Violations may lead to content removal, feature limits, or account termination.
          </p>
        </section>

        {/* 6. Content Moderation */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>6. Content Moderation</h2>
          <p className={paragraphClass}>
            Vibbe uses automated systems and human moderators to detect and remove harmful or illegal content. Actions may include deleting content,
            reducing visibility, restricting features, or suspending accounts. Enforcement may occur without prior notice depending on severity.
            Moderation decisions may be reviewed where applicable.
          </p>
        </section>

        {/* 7. Messaging and Interactions */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>7. Messaging and Interactions</h2>
          <p className={paragraphClass}>
            Vibbe provides messaging and interactive features that must be used respectfully and lawfully. You may not send harassment, threats,
            abusive messages, share private information without consent, or send spam. Messages are not end-to-end encrypted but are stored
            securely for operational and safety purposes; Vibbe may access messages when required for investigations or legal compliance.
          </p>
        </section>

        {/* 8. Intellectual Property */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>8. Intellectual Property Rights</h2>
          <p className={paragraphClass}>
            Vibbe owns trademarks, logos, software, branding, and proprietary materials. You may not copy, distribute, or modify platform content,
            reverse-engineer the service, or use Vibbe’s brand assets for commercial purposes without permission.
          </p>
        </section>

        {/* 9. Third-Party Services */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>9. Third-Party Services</h2>
          <p className={paragraphClass}>
            Vibbe may integrate with third-party login providers, analytics, cloud partners, and payment processors. These services operate independently
            and follow their own terms. Vibbe is not responsible for their performance, data handling, or failures. Your use of third-party features
            is subject to their policies.
          </p>
        </section>

        {/* 10. Payments */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>10. Payments and Subscriptions (If Offered)</h2>
          <p className={paragraphClass}>
            Premium features may be offered through paid subscriptions or in-app purchases. All payments are processed by secure third-party payment providers.
            Vibbe does not store full credit or debit card information. Refunds, cancellations, and renewals follow Vibbe’s payment policy and app store rules.
          </p>
        </section>

        {/* 11. Service Availability */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>11. Service Availability</h2>
          <p className={paragraphClass}>
            Vibbe may modify, update, or discontinue features at any time. Vibbe does not guarantee uninterrupted service, perfect system performance,
            or permanent availability. Vibbe is not responsible for downtime from maintenance, technical issues, or external disruptions.
          </p>
        </section>

        {/* 12. Suspension or Termination */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>12. Account Suspension or Termination</h2>
          <p className={paragraphClass}>
            Vibbe may suspend or terminate accounts that violate these Terms, pose risks, or engage in harmful or illegal activity. Severe violations
            may lead to immediate termination without warning. Users may delete their account at any time; termination may result in loss of access
            to stored content.
          </p>
        </section>

        {/* 13. Disclaimers */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>13. Disclaimers</h2>
          <p className={paragraphClass}>
            Vibbe is provided on an “as is” and “as available” basis. Vibbe does not guarantee error-free functioning, uninterrupted service, or
            accuracy of user-generated content. You use Vibbe at your own risk.
          </p>
        </section>

        {/* 14. Limitation of Liability */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>14. Limitation of Liability</h2>
          <p className={paragraphClass}>
            Vibbe is not liable for indirect, incidental, or consequential damages, harm caused by other users, or technical failures. Vibbe’s maximum
            liability is limited to amounts you have paid for services, if any.
          </p>
        </section>

        {/* 15. Governing Law */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>15. Governing Law and Dispute Resolution</h2>
          <p className={paragraphClass}>
            These Terms are governed by laws applicable to Vibbe’s operational jurisdiction. Users should attempt to resolve disputes informally; unresolved
            disputes will be handled by competent courts as required by applicable law. Mandatory consumer-protection laws override conflicting terms.
          </p>
        </section>

        {/* 16. Changes to Terms */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>16. Changes to These Terms</h2>
          <p className={paragraphClass}>
            Vibbe may revise these Terms for new features, legal updates, or business changes. Users will be notified of major updates via email, in-app alerts,
            or website announcements. Continued use after updates means you accept the revised Terms.
          </p>
        </section>

        {/* 17. Contact */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>17. Contact Information</h2>
          <p className={paragraphClass}>
            For questions, reports, or feedback, contact: <br />
            <strong>📧 vibbeit@gmail.com</strong>
          </p>
          <p className={paragraphClass}>
            You may request Vibbe’s official mailing address for legal correspondence.
          </p>
        </section>

        {/* 18. Violations and Enforcement */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>18. Violations and Enforcement</h2>
          <p className={paragraphClass}>
            Vibbe may remove content, restrict account access, suspend or terminate accounts, or block devices/IPs for violations. Severe or illegal
            activities may be reported to law enforcement. Users acting in good faith may be warned and given an opportunity to rectify minor violations.
          </p>
        </section>
      </div>
    </div>
  );
}
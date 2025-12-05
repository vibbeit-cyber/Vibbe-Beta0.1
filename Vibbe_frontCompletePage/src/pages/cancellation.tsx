import React from "react";
import { Helmet } from "react-helmet";

export default function CancellationPolicyPage() {
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
        <title>Cancellation | Vibbe</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <h1
          className={pageTitleClass}
          style={{ fontFamily: "'Public Sans', Inter, system-ui, -apple-system" }}
        >
          Cancellation
        </h1>

        {/* 1. Overview */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>1. Overview</h2>
          <p className={paragraphClass}>
            This Cancellation & Account Deletion Policy explains how users may cancel subscriptions,
            stop payments, and permanently delete their Vibbe account. By using Vibbe, you agree to
            follow the rules outlined in this policy whenever you request cancellation or deletion.
            All cancellation processes are carried out in accordance with platform requirements, app
            store rules, and applicable legal obligations.
          </p>
        </section>

        {/* 2. Cancelling Your Vibbe Account */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>2. Cancelling Your Vibbe Account</h2>
          <p className={paragraphClass}>
            You may delete your Vibbe account at any time through the in-app settings under
            “Account → Delete Account.” Once you confirm deletion, the process is irreversible, and
            you will no longer have access to your profile or associated content. We encourage users to
            save or back up any important data before deleting their account. Vibbe may delay account
            deletion if the account is currently under investigation for security issues, fraud, policy
            violations, or legal requirements.
          </p>
        </section>

        {/* 3. What Happens After Account Deletion */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>3. What Happens After Account Deletion</h2>
          <p className={paragraphClass}>
            When your account is deleted, your profile, username, posts, comments, and visible activity
            will be removed from public access. However, some content may still appear where other users
            have shared or interacted with it, such as messages, reposts, or tagged content. Certain
            data may remain for a limited time in system backups until routine deletion cycles are
            completed. Vibbe may also retain specific information when required by law, for safety, fraud
            prevention, or compliance.
          </p>
        </section>

        {/* 4. Cancelling Subscriptions */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>4. Cancelling Subscriptions</h2>
          <p className={paragraphClass}>
            If you subscribed to Vibbe through the Google Play Store or Apple App Store, subscription
            cancellations must be managed directly through the respective app store’s subscription
            settings. Vibbe cannot cancel third-party subscriptions on your behalf. Cancelling your
            subscription stops future billing but does not provide refunds for previous payments. After
            cancellation, you will continue to enjoy premium features until the end of the current
            billing period. Users must cancel at least 24 hours before renewal to avoid being billed for
            the next cycle.
          </p>
        </section>

        {/* 5. Refunds */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>5. Refunds</h2>
          <p className={paragraphClass}>
            Refunds for subscriptions or in-app purchases follow the policies of the app store through
            which you made the purchase. Vibbe does not issue direct refunds for subscription charges or
            one-time purchases. Refund eligibility depends on app store terms, regional consumer
            protection laws, and specific purchase conditions. Most promotional offers and one-time
            purchases are non-refundable.
          </p>
        </section>

        {/* 6. In-App Purchase Cancellations */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>6. In-App Purchase Cancellations</h2>
          <p className={paragraphClass}>
            One-time purchases made within the Vibbe app cannot be cancelled once completed. Consumable
            items or digital benefits may not be recoverable if you delete your account. Vibbe does not
            restore in-app purchases or subscription benefits if your account is banned due to policy
            violations or harmful behavior.
          </p>
        </section>

        {/* 7. Account Suspension & Termination */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>7. Account Suspension & Termination</h2>
          <p className={paragraphClass}>
            Vibbe may suspend or permanently terminate accounts found to be violating community
            guidelines, terms of service, or legal regulations. Users whose accounts are terminated for
            such violations are not eligible for refunds. Cancellation or deletion requests may also be
            paused if an account is under investigation for safety issues, legal requirements, or fraud.
          </p>
        </section>

        {/* 8. Underage Account Cancellation */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>8. Underage Account Cancellation</h2>
          <p className={paragraphClass}>
            If Vibbe discovers that an account was created by a user below the minimum age requirement,
            the account may be removed immediately without prior notice. Parents or legal guardians may
            request the deletion of an underage user’s account by contacting Vibbe at
            vibbeit@gmail.com. Vibbe may require identity verification to process such requests.
          </p>
        </section>

        {/* 9. Cancelling Linked Third-Party Services */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>9. Cancelling Linked Third-Party Services</h2>
          <p className={paragraphClass}>
            If you have signed up using third-party login providers or connected external accounts, you
            must manage or cancel those services directly through the respective providers. Vibbe cannot
            terminate or modify external accounts or subscriptions linked through third-party
            integrations, and such providers may retain your information according to their own privacy
            and retention policies.
          </p>
        </section>

        {/* 10. Data Retention After Cancellation */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>10. Data Retention After Cancellation</h2>
          <p className={paragraphClass}>
            After account deletion or cancellation, Vibbe may retain certain data for security, legal
            compliance, fraud prevention, tax obligations, and audit purposes. Any retained data will not
            be used for advertising or personalization. Backup copies of your account information may
            take up to 90 days to be fully removed from the system. Specific transaction records may be
            retained for longer as required by law.
          </p>
        </section>

        {/* 11. Account Recovery */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>11. Account Recovery</h2>
          <p className={paragraphClass}>
            Once your account deletion is fully processed, the account cannot be restored. In some cases,
            Vibbe may temporarily delay permanent deletion to provide a short recovery window, but this
            is not guaranteed and may not be available in all regions. Deleted accounts that exceed the
            processing period cannot be reactivated.
          </p>
        </section>

        {/* 12. Appeals & Support Requests */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>12. Appeals & Support Requests</h2>
          <p className={paragraphClass}>
            If you face issues during cancellation or believe your account was mistakenly removed or
            suspended, you may contact our support team at vibbeit@gmail.com. Appeals for wrongful
            suspension, accidental deletion, or billing concerns may require identity verification or
            supporting documentation. Vibbe will review requests and respond based on internal policies
            and legal obligations.
          </p>
        </section>

        {/* 13. Special Circumstances */}
        <section className="mb-8">
          <h2 className={sectionHeadingClass}>13. Special Circumstances</h2>
          <p className={paragraphClass}>
            Vibbe may refuse or temporarily delay cancellation requests in cases involving legal
            investigations, payment disputes, safety concerns, or fraud detection. In certain
            circumstances, Vibbe may also remove accounts that have remained inactive for extended
            periods to maintain platform integrity. Local laws may provide users with additional
            cancellation or data rights depending on their region.
          </p>
        </section>

        {/* 14. Changes to This Policy */}
        <section className="mb-12">
          <h2 className={sectionHeadingClass}>14. Changes to This Policy</h2>
          <p className={paragraphClass}>
            Vibbe may update this Cancellation & Account Deletion Policy to reflect new features, app
            store requirements, legal obligations, or operational changes. Whenever significant updates
            occur, Vibbe will inform users through email, app notifications, or public announcements.
            Continued use of Vibbe after changes indicates acceptance of the revised policy.
          </p>
        </section>

      </div>
    </div>
  );
}
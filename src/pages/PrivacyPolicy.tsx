
export default function PrivacyPolicy() {
  const effectiveDate = "2025-07-01"; // update as needed
  const supportEmail = "studyco.eduonline@gmail.com"; // replace if needed

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-6 md:p-12 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur rounded-2xl shadow-lg p-8 md:p-12">
        <header className="mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">StudyCo</h1>
          <p className="mt-2 text-sm text-gray-600">Privacy Policy — Effective Date: {effectiveDate}</p>
        </header>

        <main className="space-y-6 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="mt-2 text-gray-700">
              StudyCo ("we", "us", or "our") respects your privacy and is committed to protecting it. This
              Privacy Policy explains how we collect, use, and safeguard the information you provide when you use
              the StudyCo mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
              <li>
                <strong>Account Information:</strong> Name, class/course, phone number, and Google account details
                when you sign in with Google or phone OTP.
              </li>
              <li>
                <strong>Device Information:</strong> Device identifier (device ID) used to prevent multiple logins and
                for security purposes.
              </li>
              <li>
                <strong>Profile Data:</strong> Bookmarks, recently opened materials, purchased items, and user
                preferences.
              </li>
              <li>
                <strong>Content & Usage:</strong> Which materials you open or download within the app (to enable
                features like Recent Openings and Offline Downloads). We do NOT track browsing of external links.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. How We Collect & Store Data</h2>
            <p className="mt-2 text-gray-700">
              We use Firebase services (Firebase Authentication, Cloud Firestore, Cloud Functions, Cloud Storage,
              and Firebase Cloud Messaging) to securely manage and store your data. When you sign in, your account
              information and profile data are stored in Cloud Firestore under your user record.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Payments</h2>
            <p className="mt-2 text-gray-700">
              Paid study materials and classes are processed through <strong>Google Play Billing</strong>. We do not
              collect or store your credit or debit card details. Payment verification and purchase delivery may
              be handled via Firebase Cloud Functions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. External Links & Third-Party Content</h2>
            <p className="mt-2 text-gray-700">
              Some cards or links inside the app may direct you to third-party resources (e.g., free tutorials,
              videos, or blog posts). We do not own or host those resources and do not track your activity on those
              external sites. We encourage you to review the privacy policies of any third-party services you
              visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Data Sharing & Disclosure</h2>
            <p className="mt-2 text-gray-700">
              We do not sell or trade your personal information. We may share data with the following parties only as
              required to provide the service:
            </p>
            <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
              <li>
                <strong>Google:</strong> For Google Sign-In and Google Play Billing.
              </li>
              <li>
                <strong>Firebase:</strong> For authentication, storage, messaging, and backend functions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Downloads & Offline Access</h2>
            <p className="mt-2 text-gray-700">
              Materials you download for offline use are stored encrypted in the app’s storage and are accessible
              only through StudyCo. Offline files are protected to prevent unauthorized sharing outside the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Analytics, Ads & Tracking</h2>
            <p className="mt-2 text-gray-700">
              StudyCo does not use Google Analytics, AdMob, or other analytics/tracking SDKs by default. If we
              introduce analytics later, we will update this policy and notify users accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Children’s Privacy</h2>
            <p className="mt-2 text-gray-700">
              We do not knowingly collect personal data from children under 13 without parental consent. If you
              believe a child under 13 has provided personal information, contact us to request deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Your Rights & Data Deletion</h2>
            <p className="mt-2 text-gray-700">
              You can request account deletion and removal of your data at any time. Account deletion is available
              from the Profile section within the app. After you request deletion, we will remove your data from
              our systems, except where we are required to retain information for legal or legitimate business
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">11. Security</h2>
            <p className="mt-2 text-gray-700">
              We implement reasonable security measures, including data encryption in transit and at rest, to
              protect your information. No method of transmission over the internet or electronic storage is 100%
              secure — but we strive to keep your data safe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">12. Changes to This Policy</h2>
            <p className="mt-2 text-gray-700">
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you
              via the app and update the Effective Date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">13. Contact Us</h2>
            <p className="mt-2 text-gray-700">
              If you have questions about this Privacy Policy or want to request data deletion, contact us at:
            </p>
            <p className="mt-3 font-medium text-gray-800">
              Email: <a className="text-indigo-600 underline" href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          </section>

          <footer className="mt-8 text-sm text-gray-600">
            <p>StudyCo — Thank you for trusting us with your learning.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
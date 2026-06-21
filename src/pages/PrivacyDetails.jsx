import SectionHeading from '../components/common/SectionHeading';
import { AnimatedSection, PageTransition } from '../utils/animations';

const PrivacyPolicy = () => (
  <PageTransition>
    <section className="pt-12 pb-20 lg:pb-28">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading badge="Legal" title="Privacy Policy" subtitle="Last updated: June 2026" />
        <AnimatedSection className="mt-12 space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">1. Information We Collect</h3>
            <p>ResumeCraft Pro stores your resume data locally in your browser's local storage. We do not collect, transmit, or store any personal information on external servers. All data remains on your device.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">2. How We Use Your Data</h3>
            <p>Your resume data is used solely to provide the resume building functionality within the application. Since data is stored locally, you have full control over your information at all times.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">3. Data Storage</h3>
            <p>All resume data is stored in your browser's localStorage. You can clear this data at any time by using the Reset button in the resume builder or by clearing your browser's local storage.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">4. Third-Party Services</h3>
            <p>We do not share your data with any third-party services. PDF generation happens entirely within your browser using client-side libraries.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">5. Contact</h3>
            <p>For privacy-related inquiries, contact us at <a href="mailto:abhiitaliya5@gmail.com" className="text-primary hover:underline">abhiitaliya5@gmail.com</a>.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default PrivacyPolicy;

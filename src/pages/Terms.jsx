import SectionHeading from '../components/common/SectionHeading';
import { AnimatedSection, PageTransition } from '../utils/animations';

const Terms = () => (
  <PageTransition>
    <section className="pt-12 pb-20 lg:pb-28">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading badge="Legal" title="Terms & Conditions" subtitle="Last updated: June 2026" />
        <AnimatedSection className="mt-12 space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">1. Acceptance of Terms</h3>
            <p>By accessing and using ResumeCraft Pro, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the service.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">2. Use of Service</h3>
            <p>ResumeCraft Pro is provided free of charge for personal and professional resume creation. You may create, edit, and download unlimited resumes for your own use.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">3. User Content</h3>
            <p>You retain full ownership of all content you create using ResumeCraft Pro. We do not claim any rights to your resume data or personal information.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">4. Disclaimer</h3>
            <p>ResumeCraft Pro is provided "as is" without warranties of any kind. We do not guarantee that using our templates will result in job interviews or employment.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">5. Limitation of Liability</h3>
            <p>ResumeCraft Pro and its developer shall not be liable for any damages arising from the use or inability to use the service.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">6. Contact</h3>
            <p>For questions about these terms, contact <a href="mailto:abhiitaliya5@gmail.com" className="text-primary hover:underline">abhiitaliya5@gmail.com</a>.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default Terms;

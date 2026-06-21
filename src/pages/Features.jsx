import {
  FiEye, FiDownload, FiLayers, FiShield, FiSave, FiSmartphone,
  FiUpload, FiPrinter, FiMoon, FiAward,
} from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { AnimatedCard, PageTransition } from '../utils/animations';

const features = [
  { icon: FiEye, title: 'Live Resume Preview', desc: 'Watch your resume come to life as you type. Every change reflects instantly in the preview panel.', color: 'primary' },
  { icon: FiDownload, title: 'PDF Download', desc: 'Generate high-quality, print-ready PDF files with a single click. Perfect for job applications.', color: 'secondary' },
  { icon: FiLayers, title: 'Multiple Templates', desc: 'Choose from Corporate Professional, Creative Modern, and Minimal Elegant designs.', color: 'accent' },
  { icon: FiShield, title: 'ATS Friendly', desc: 'All templates are optimized to pass Applicant Tracking Systems used by recruiters worldwide.', color: 'success' },
  { icon: FiSave, title: 'Auto Save', desc: 'Your progress is automatically saved to local storage. Pick up right where you left off.', color: 'primary' },
  { icon: FiSmartphone, title: 'Mobile Responsive', desc: 'Build and edit your resume on any device — desktop, tablet, or mobile phone.', color: 'secondary' },
  { icon: FiUpload, title: 'Import & Export', desc: 'Import and export your resume data as JSON files for backup and portability.', color: 'accent' },
  { icon: FiPrinter, title: 'Print Resume', desc: 'Print your resume directly from the browser with optimized print styles.', color: 'success' },
  { icon: FiMoon, title: 'Dark Mode', desc: 'Switch between light and dark themes for a comfortable editing experience.', color: 'primary' },
  { icon: FiAward, title: 'Professional Designs', desc: 'Premium-quality templates crafted by design professionals for maximum impact.', color: 'secondary' },
];

const colorMap = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
  success: 'bg-success/10 text-success',
};

const Features = () => (
  <PageTransition>
    <section className="pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          badge="Features"
          title="Powerful Features for Perfect Resumes"
          subtitle="Everything you need to create, customize, and download professional resumes"
        />
      </div>
    </section>

    <section className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedCard key={f.title} delay={i * 0.08} className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className={`p-4 rounded-2xl w-fit mb-5 ${colorMap[f.color]} group-hover:scale-110 transition-transform`}>
                <f.icon className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button to="/builder" size="lg">Start Building Your Resume</Button>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Features;

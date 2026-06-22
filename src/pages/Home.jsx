import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiDownload, FiEye, FiLayers, FiCheck, FiStar,
  FiUsers, FiZap, FiShield, FiSmartphone,
} from 'react-icons/fi';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import Accordion from '../components/common/Accordion';
import { AnimatedSection, AnimatedCard, PageTransition } from '../utils/animations';
import { TEMPLATES } from '../utils/constants';

const stats = [
  { value: '50K+', label: 'Resumes Created' },
  { value: '15K+', label: 'Happy Users' },
  { value: '98%', label: 'Success Rate' },
  { value: '4.9', label: 'User Rating' },
];

const features = [
  { icon: FiEye, title: 'Live Preview', desc: 'See changes instantly as you type' },
  { icon: FiDownload, title: 'PDF Export', desc: 'Download print-ready PDF resumes' },
  { icon: FiLayers, title: '8 Templates', desc: 'Professional designs for every industry' },
  { icon: FiShield, title: 'ATS Friendly', desc: 'Optimized for applicant tracking systems' },
  { icon: FiZap, title: 'Auto Save', desc: 'Never lose your progress' },
  { icon: FiSmartphone, title: 'Responsive', desc: 'Build on any device, anywhere' },
];

const steps = [
  { step: '01', title: 'Choose Template', desc: 'Pick from our professionally designed resume templates.' },
  { step: '02', title: 'Fill Your Details', desc: 'Add your experience, education, skills, and more.' },
  { step: '03', title: 'Preview & Download', desc: 'Review your resume and download as PDF instantly.' },
];

const testimonials = [
  { name: 'Sarah Johnson', role: 'Software Engineer', text: 'ResumeCraft Pro helped me land interviews at top tech companies. The templates are stunning!', rating: 5 },
  { name: 'Michael Chen', role: 'Product Manager', text: 'The live preview feature is a game-changer. I created my perfect resume in under 30 minutes.', rating: 5 },
  { name: 'Emily Rodriguez', role: 'UX Designer', text: 'Beautiful templates and incredibly easy to use. Highly recommend for any job seeker.', rating: 5 },
];

const faqs = [
  { question: 'Is ResumeCraft Pro free to use?', answer: 'Yes! ResumeCraft Pro is completely free. Create, edit, and download unlimited resumes without any cost.' },
  { question: 'Are the resumes ATS-friendly?', answer: 'Absolutely. All our templates are designed to pass Applicant Tracking Systems while maintaining visual appeal.' },
  { question: 'Can I switch templates after filling my data?', answer: 'Yes! Switch between templates anytime. Your data stays intact and adapts to the new design instantly.' },
  { question: 'Is my data saved automatically?', answer: 'Yes, your resume data is automatically saved to your browser\'s local storage. You can also export/import JSON files.' },
  { question: 'Can I download my resume as PDF?', answer: 'Yes! Click the PDF download button in the resume builder to get a high-quality, print-ready PDF.' },
];

const Home = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative w-full pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 pointer-events-none" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full min-w-0 order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
              <FiZap /> #1 Free Resume Builder
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[1.15] mb-4 sm:mb-6 w-full">
              Build Professional Resumes in{' '}
              <span className="gradient-text">Minutes</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-xl">
              Create ATS-friendly resumes with beautiful templates and download instantly.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button to="/builder" size="lg">Create Resume</Button>
              <Button to="/templates" variant="secondary" size="lg">Explore Templates</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full min-w-0 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md glass rounded-2xl p-5 sm:p-6 shadow-2xl shadow-primary/10 gradient-border">
              <div className="bg-slate-50/90 dark:bg-slate-900/90 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-800/50">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-slate-800 dark:text-slate-200 text-sm shrink-0">
                      AI
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white leading-tight">Abhishek Italiya</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Full Stack Developer</p>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 text-right shrink-0">
                    <p>✉ abhiitaliya5@gmail.com</p>
                    <p className="mt-0.5">📍 Surat, Gujarat, India</p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-200/60 dark:bg-slate-800/60 my-3" />

                <div className="space-y-2">
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed transition-all duration-200 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded-lg cursor-default">
                    • Developed and scaled high-performance React & Node.js web applications.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed transition-all duration-200 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded-lg cursor-default">
                    • Optimized database indexing and caching to reduce API load times by 40%.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed transition-all duration-200 hover:text-primary hover:bg-primary/5 px-2 py-1 rounded-lg cursor-default">
                    • Designed clean, responsive layouts optimized for ATS screening parameters.
                  </p>
                  <div className="flex gap-2 mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                    {['React', 'Node.js', 'TypeScript', 'Tailwind'].map((s) => (
                      <span key={s} className="px-2.5 py-0.5 text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700/80 font-semibold">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-white dark:bg-slate-900/50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
            <p className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading badge="Features" title="Everything You Need" subtitle="Powerful tools to create the perfect resume" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((f, i) => (
            <AnimatedCard key={f.title} delay={i * 0.1} className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <f.icon className="text-primary text-xl" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>

    {/* Templates Preview */}
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading badge="Templates" title="Professional Templates" subtitle="Choose from our curated collection of resume designs" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {TEMPLATES.slice(0, 3).map((t, i) => (
            <AnimatedCard key={t.id} delay={i * 0.15} className="group h-full">
              <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="h-64 relative overflow-hidden shrink-0" style={{ background: `linear-gradient(135deg, ${t.color}15, ${t.color}30)` }}>
                  <div className="absolute inset-6 bg-white rounded-xl shadow-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{t.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{t.description}</p>
                  </div>
                  <Link to="/builder" className="text-sm font-semibold text-primary hover:underline mt-auto">Use Template →</Link>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/templates" variant="secondary" size="lg">
            Browse All Templates
          </Button>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading badge="Process" title="How It Works" subtitle="Create your resume in three simple steps" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.15} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-bg flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary/30">
                {s.step}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{s.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading badge="Why Us" title="Why Choose ResumeCraft Pro?" />
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            '100% Free — No hidden costs or subscriptions',
            'ATS-Optimized templates for maximum visibility',
            'Real-time preview with instant template switching',
            'Auto-save to browser — never lose your work',
            'Export to PDF, JSON, or print directly',
            'Dark mode for comfortable editing',
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-success/10">
                <FiCheck className="text-success" />
              </div>
              <span className="text-slate-700 dark:text-slate-300">{item}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading badge="Testimonials" title="Loved by Job Seekers" subtitle="See what our users have to say" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <AnimatedCard key={t.name} delay={i * 0.1} className="glass rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FiStar key={j} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatedSection className="gradient-bg rounded-3xl p-10 lg:p-16 text-center text-white shadow-2xl shadow-primary/30">
          <FiUsers className="text-4xl mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build Your Resume?</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Join thousands of professionals who landed their dream jobs with ResumeCraft Pro.
          </p>
          <Button to="/builder" variant="secondary" size="lg" className="!bg-white !text-primary hover:!bg-white/90">
            Get Started Free
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default Home;

import { FiMail, FiGithub, FiLinkedin, FiTarget, FiEye, FiCode } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiFramer, SiVite } from 'react-icons/si';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { AnimatedSection, AnimatedCard, PageTransition } from '../utils/animations';

const techStack = [
  { icon: SiReact, name: 'React.js', color: '#61DAFB' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiFramer, name: 'Framer Motion', color: '#BB4B96' },
  { icon: SiVite, name: 'Vite', color: '#646CFF' },
];

const About = () => (
  <PageTransition>
    <section className="pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          badge="About"
          title="About ResumeCraft Pro"
          subtitle="Empowering professionals to create stunning resumes effortlessly"
        />
      </div>
    </section>

    <section className="pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection className="glass rounded-2xl p-8 lg:p-12">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            ResumeCraft Pro is a modern, free resume builder designed to help job seekers create
            professional, ATS-friendly resumes in minutes. Built with cutting-edge web technologies,
            it offers a seamless experience with live preview, multiple templates, and instant PDF download.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you're a fresh graduate or an experienced professional, ResumeCraft Pro provides
            the tools you need to stand out in today's competitive job market.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.1} className="glass rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <FiTarget className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To democratize access to professional resume creation tools, enabling every job seeker
            to present their best self to potential employers — regardless of design skills or budget.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="glass rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-secondary/10">
              <FiEye className="text-secondary text-xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To become the go-to platform for resume creation worldwide, continuously innovating
            with new templates, features, and AI-powered suggestions to help people land their dream jobs.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading badge="Tech Stack" title="Technologies Used" center />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-3xl mx-auto">
          {techStack.map((tech, i) => (
            <AnimatedCard key={tech.name} delay={i * 0.1} className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <tech.icon className="text-3xl mx-auto mb-3" style={{ color: tech.color }} />
              <p className="font-semibold text-slate-900 dark:text-white text-sm">{tech.name}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading badge="Developer" title="Meet the Developer" center />
        <AnimatedSection className="glass rounded-2xl p-8 lg:p-12 mt-10 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-primary/30">
            AI
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Abhishek Italiya</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Full Stack Developer & Open Source Enthusiast</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:abhiitaliya5@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              <FiMail /> abhiitaliya5@gmail.com
            </a>
            <a href="https://github.com/abhishek-italiya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              <FiGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhishek-italiya-765a20298/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <FiCode /> Built with React, Tailwind CSS, and Framer Motion
          </div>
          <div className="mt-8">
            <Button to="/builder" size="lg">Try ResumeCraft Pro</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default About;

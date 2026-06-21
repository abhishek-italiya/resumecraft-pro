import { Link } from 'react-router-dom';
import { FiFileText, FiMail, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import Button from '../common/Button';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl gradient-bg">
                <FiFileText className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Resume<span className="text-accent">Craft</span> Pro
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Build professional, ATS-friendly resumes in minutes with beautiful templates and instant PDF download.
            </p>
            <Button
              href="https://digitalheroesco.com"
              variant="primary"
              size="sm"
              className="!inline-flex"
            >
              Built for Digital Heroes
              <FiExternalLink className="text-sm" />
            </Button>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/features', label: 'Features' },
                { to: '/templates', label: 'Templates' },
                { to: '/builder', label: 'Resume Builder' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Live Resume Preview</li>
              <li>PDF Download</li>
              <li>Multiple Templates</li>
              <li>ATS Friendly</li>
              <li>Auto Save</li>
              <li>Dark Mode</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Developer</h4>
            <div className="space-y-3">
              <p className="text-sm font-medium text-white">Abhishek Italiya</p>
              <a
                href="mailto:abhiitaliya5@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors break-all"
              >
                <FiMail /> abhiitaliya5@gmail.com
              </a>
              <a
                href="https://github.com/abhishek-italiya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-italiya-765a20298/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ResumeCraft Pro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

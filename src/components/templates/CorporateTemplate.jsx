import { formatDate } from '../../utils/validation';
import {
  FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe,
} from 'react-icons/fi';

const ContactLine = ({ icon: Icon, text, href }) => {
  if (!text) return null;
  const className = "inline-flex items-center gap-1.5 text-xs text-slate-600";
  const content = (
    <>
      <Icon className="shrink-0 text-blue-600" size={12} />
      <span className="truncate">{text.replace(/^https?:\/\/(www\.)?/, '')}</span>
    </>
  );
  return href ? (
    <a href={href.startsWith('http') ? href : `https://${href}`} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
  ) : (
    <span className={className}>{content}</span>
  );
};

const CorporateTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-white text-slate-800 p-8 min-h-[1123px] text-sm leading-relaxed flex flex-col" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="border-b-2 border-blue-600 pb-4 mb-6 shrink-0" data-page-break="avoid">
        <div className="flex items-start gap-4">
          {personal.profileImage && (
            <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover border-2 border-blue-600 shrink-0" />
          )}
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold text-blue-800 uppercase tracking-wide leading-none">{personal.fullName}</h1>
            <p className="text-base text-slate-600 mt-1">{personal.title}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2">
              <ContactLine icon={FiMail} text={personal.email} />
              <ContactLine icon={FiPhone} text={personal.phone} />
              <ContactLine icon={FiMapPin} text={personal.address} />
              <ContactLine icon={FiLinkedin} text={personal.linkedin} href={personal.linkedin} />
              <ContactLine icon={FiGithub} text={personal.github} href={personal.github} />
              <ContactLine icon={FiGlobe} text={personal.portfolio} href={personal.portfolio} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        {summary && (
          <Section title="Professional Summary">
            <p className="text-slate-700 resume-text-break text-justify">{summary}</p>
          </Section>
        )}

        {experience?.length > 0 && experience[0].company && (
          <Section title="Professional Experience">
            <div className="flex flex-col gap-4">
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 leading-snug">{exp.position}</h3>
                    <span className="text-xs text-slate-500 font-mono shrink-0 ml-2">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                  </div>
                  <p className="text-blue-700 font-medium text-xs">{exp.company}</p>
                  <p className="text-slate-600 text-xs resume-text-break text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {education?.length > 0 && education[0].college && (
          <Section title="Education">
            <div className="flex flex-col gap-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-col gap-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 leading-snug">{edu.degree}</h3>
                    <span className="text-xs text-slate-500 font-mono shrink-0 ml-2">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                  </div>
                  <p className="text-blue-700 text-xs">{edu.college}{edu.cgpa && ` | CGPA: ${edu.cgpa}`}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {skills?.categories?.length > 0 && skills.categories[0].name && (
          <Section title="Skills">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {skills.categories.map((cat) => (
                <div key={cat.id} className="flex flex-col gap-0.5" data-page-break="avoid">
                  <p className="font-bold text-xs text-slate-800 leading-none">{cat.name}</p>
                  <p className="text-xs text-slate-600 resume-text-break">{cat.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {projects?.length > 0 && projects[0].name && (
          <Section title="Projects">
            <div className="flex flex-col gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="flex flex-col gap-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 leading-snug">{proj.name}</h3>
                    {proj.github && <a href={proj.github} className="text-xs text-blue-700 hover:underline shrink-0 ml-2">Repository</a>}
                  </div>
                  <p className="text-xs text-slate-600 resume-text-break">{proj.description}</p>
                  {proj.technologies && <p className="text-xs text-blue-700 font-mono resume-text-break">Tech: {proj.technologies}</p>}
                </div>
              ))}
            </div>
          </Section>
        )}

        {certifications?.length > 0 && certifications[0].name && (
          <Section title="Certifications">
            <div className="flex flex-col gap-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col gap-0.5" data-page-break="avoid">
                  <p className="font-bold text-xs">{cert.name} - <span className="font-normal text-slate-600">{cert.issuer}</span></p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {languages?.length > 0 && languages[0].name && (
          <Section title="Languages">
            <p className="text-xs resume-text-break">{languages.map((l) => `${l.name} (${l.proficiency})`).join(' | ')}</p>
          </Section>
        )}

        {achievements?.length > 0 && achievements[0].title && (
          <Section title="Achievements">
            <div className="flex flex-col gap-2">
              {achievements.map((ach) => (
                <div key={ach.id} className="flex flex-col gap-0.5" data-page-break="avoid">
                  <p className="font-bold text-xs leading-snug">{ach.title}</p>
                  <p className="text-xs text-slate-600 resume-text-break">{ach.description}</p>
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="flex flex-col gap-2 mb-6" data-page-break="avoid">
    <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider border-b border-slate-200 pb-1 w-full">{title}</h2>
    {children}
  </div>
);

export default CorporateTemplate;

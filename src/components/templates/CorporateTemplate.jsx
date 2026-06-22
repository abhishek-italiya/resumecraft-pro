import { formatDate } from '../../utils/validation';
import {
  FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe,
} from 'react-icons/fi';

const ContactLine = ({ icon: Icon, text, href }) => {
  if (!text) return null;
  const content = (
    <span className="flex items-center gap-1.5 text-xs text-slate-600">
      <Icon className="shrink-0 text-blue-600" size={12} />
      <span className="truncate">{text.replace(/^https?:\/\/(www\.)?/, '')}</span>
    </span>
  );
  return href ? (
    <a href={href.startsWith('http') ? href : `https://${href}`} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : content;
};

const CorporateTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-white text-slate-800 p-8 min-h-[842px] text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="border-b-2 border-blue-600 pb-4 mb-5">
        <div className="flex items-start gap-4">
          {personal.profileImage && (
            <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover border-2 border-blue-600" />
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-800 uppercase tracking-wide">{personal.fullName}</h1>
            <p className="text-base text-slate-600 mt-1">{personal.title}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
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

      {summary && (
        <Section title="Professional Summary">
          <p className="text-slate-700">{summary}</p>
        </Section>
      )}

      {experience?.length > 0 && experience[0].company && (
        <Section title="Professional Experience">
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-slate-800">{exp.position}</h3>
                <span className="text-xs text-slate-500">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
              </div>
              <p className="text-blue-700 font-medium text-xs">{exp.company}</p>
              <p className="text-slate-600 mt-1 text-xs">{exp.description}</p>
            </div>
          ))}
        </Section>
      )}

      {education?.length > 0 && education[0].college && (
        <Section title="Education">
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                <span className="text-xs text-slate-500">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
              </div>
              <p className="text-blue-700 text-xs">{edu.college}{edu.cgpa && ` | CGPA: ${edu.cgpa}`}</p>
            </div>
          ))}
        </Section>
      )}

      {skills?.categories?.length > 0 && skills.categories[0].name && (
        <Section title="Skills">
          <div className="grid grid-cols-2 gap-2">
            {skills.categories.map((cat) => (
              <div key={cat.id}>
                <p className="font-bold text-xs text-slate-800">{cat.name}</p>
                <p className="text-xs text-slate-600">{cat.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {projects?.length > 0 && projects[0].name && (
        <Section title="Projects">
          {projects.map((proj) => (
            <div key={proj.id} className="mb-3">
              <h3 className="font-bold text-slate-800">{proj.name}</h3>
              <p className="text-xs text-slate-600">{proj.description}</p>
              {proj.technologies && <p className="text-xs text-blue-700 mt-0.5">Tech: {proj.technologies}</p>}
            </div>
          ))}
        </Section>
      )}

      {certifications?.length > 0 && certifications[0].name && (
        <Section title="Certifications">
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-2">
              <p className="font-bold text-xs">{cert.name} - <span className="font-normal text-slate-600">{cert.issuer}</span></p>
            </div>
          ))}
        </Section>
      )}

      {languages?.length > 0 && languages[0].name && (
        <Section title="Languages">
          <p className="text-xs">{languages.map((l) => `${l.name} (${l.proficiency})`).join(' | ')}</p>
        </Section>
      )}

      {achievements?.length > 0 && achievements[0].title && (
        <Section title="Achievements">
          {achievements.map((ach) => (
            <div key={ach.id} className="mb-2">
              <p className="font-bold text-xs">{ach.title}</p>
              <p className="text-xs text-slate-600">{ach.description}</p>
            </div>
          ))}
        </Section>
      )}
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-4">
    <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">{title}</h2>
    {children}
  </div>
);

export default CorporateTemplate;

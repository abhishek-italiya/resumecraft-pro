import { formatDate } from '../../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

const BoldHeaderTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-white text-slate-800 min-h-[1123px] text-sm flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Bold Top Banner */}
      <div className="w-full bg-[#1E1B4B] text-white p-8 flex flex-row items-center gap-6 shrink-0" data-page-break="avoid">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover border-2 border-indigo-400 shrink-0" />
        )}
        <div className="flex-1 text-left flex flex-col">
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1 leading-none">{personal.fullName}</h1>
          <p className="text-indigo-300 text-sm font-semibold mb-3 tracking-wide uppercase">{personal.title}</p>
          
          <div className="flex flex-wrap justify-start gap-x-4 gap-y-1.5 text-xs text-indigo-100">
            {personal.email && (
              <span className="inline-flex items-center gap-1.5"><FiMail size={12} className="text-indigo-400 shrink-0" />{personal.email}</span>
            )}
            {personal.phone && (
              <span className="inline-flex items-center gap-1.5"><FiPhone size={12} className="text-indigo-400 shrink-0" />{personal.phone}</span>
            )}
            {personal.address && (
              <span className="inline-flex items-center gap-1.5"><FiMapPin size={12} className="text-indigo-400 shrink-0" />{personal.address}</span>
            )}
          </div>
        </div>

        {(personal.linkedin || personal.github || personal.portfolio) && (
          <div className="flex flex-col gap-2 justify-center text-xs border-l border-indigo-900/60 pl-6 shrink-0">
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-indigo-200 hover:text-white transition-colors">
                <FiLinkedin size={12} className="shrink-0" /> linkedin
              </a>
            )}
            {personal.github && (
              <a href={personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-indigo-200 hover:text-white transition-colors">
                <FiGithub size={12} className="shrink-0" /> github
              </a>
            )}
            {personal.portfolio && (
              <a href={personal.portfolio} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-indigo-200 hover:text-white transition-colors">
                <FiGlobe size={12} className="shrink-0" /> portfolio
              </a>
            )}
          </div>
        )}
      </div>

      <div className="w-full flex flex-row flex-1 p-8 gap-8">
        {/* Left column - 35% */}
        <div className="w-[35%] shrink-0 flex flex-col border-r border-slate-100 pr-6">
          {skills?.categories?.length > 0 && skills.categories[0].name && (
            <div className="flex flex-col gap-3 mb-6" data-page-break="avoid">
              <SectionTitle>Key Skills</SectionTitle>
              {skills.categories.map((cat) => (
                <div key={cat.id} className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-slate-700 leading-none">{cat.name}</p>
                  <p className="text-xs text-slate-500 resume-text-break">{cat.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          )}

          {education?.length > 0 && education[0].college && (
            <div className="flex flex-col gap-3 mb-6" data-page-break="avoid">
              <SectionTitle>Education</SectionTitle>
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-col gap-1">
                  <h4 className="font-bold text-slate-800 text-xs leading-tight">{edu.degree}</h4>
                  <p className="text-xs text-indigo-600 font-medium">{edu.college}</p>
                  <p className="text-[10px] text-slate-400 font-medium font-mono">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}{edu.cgpa && ` · ${edu.cgpa} CGPA`}</p>
                </div>
              ))}
            </div>
          )}

          {certifications?.length > 0 && certifications[0].name && (
            <div className="flex flex-col gap-2 mb-6" data-page-break="avoid">
              <SectionTitle>Certifications</SectionTitle>
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col gap-0.5">
                  <p className="font-bold text-xs text-slate-700 leading-tight">{cert.name}</p>
                  <p className="text-[10px] text-slate-500">{cert.issuer}</p>
                </div>
              ))}
            </div>
          )}

          {languages?.length > 0 && languages[0].name && (
            <div className="flex flex-col gap-2 mb-6" data-page-break="avoid">
              <SectionTitle>Languages</SectionTitle>
              <p className="text-xs text-slate-600 leading-relaxed resume-text-break">
                {languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}
              </p>
            </div>
          )}
        </div>

        {/* Right column - 65% */}
        <div className="flex-1 flex flex-col">
          {summary && (
            <div className="flex flex-col gap-2 mb-6" data-page-break="avoid">
              <SectionTitle>Summary</SectionTitle>
              <p className="text-slate-600 text-xs leading-relaxed text-justify resume-text-break">{summary}</p>
            </div>
          )}

          {experience?.length > 0 && experience[0].company && (
            <div className="flex flex-col gap-4 mb-6">
              <div data-page-break="avoid"><SectionTitle>Experience</SectionTitle></div>
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-1 mb-2" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 text-sm leading-snug">{exp.position}</h3>
                    <span className="text-[10px] text-slate-400 font-semibold font-mono shrink-0 ml-2">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
                  </div>
                  <p className="text-indigo-600 text-xs font-semibold">{exp.company}</p>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify resume-text-break">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {projects?.length > 0 && projects[0].name && (
            <div className="flex flex-col gap-4 mb-6">
              <div data-page-break="avoid"><SectionTitle>Projects</SectionTitle></div>
              {projects.map((proj) => (
                <div key={proj.id} className="flex flex-col gap-1 mb-2" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-slate-800 text-xs leading-snug">{proj.name}</h4>
                    {proj.github && <a href={proj.github} className="text-[10px] text-indigo-600 hover:underline shrink-0 ml-2">Repository</a>}
                  </div>
                  <p className="text-xs text-slate-600 resume-text-break">{proj.description}</p>
                  {proj.technologies && <p className="text-[10px] text-indigo-500 font-semibold font-mono resume-text-break">{proj.technologies}</p>}
                </div>
              ))}
            </div>
          )}

          {achievements?.length > 0 && achievements[0].title && (
            <div className="flex flex-col gap-3 mb-6">
              <div data-page-break="avoid"><SectionTitle>Achievements</SectionTitle></div>
              {achievements.map((ach) => (
                <div key={ach.id} className="flex flex-col gap-0.5 mb-1" data-page-break="avoid">
                  <p className="text-xs font-bold text-slate-800 leading-snug">{ach.title}</p>
                  <p className="text-xs text-slate-600 resume-text-break">{ach.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 border-b border-indigo-100 pb-1 w-full">{children}</h2>
);

export default BoldHeaderTemplate;

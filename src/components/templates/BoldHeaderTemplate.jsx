import { formatDate } from '../../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

const BoldHeaderTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-white text-slate-800 min-h-[842px] text-sm flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Bold Top Banner */}
      <div className="bg-[#1E1B4B] text-white p-8 flex flex-col md:flex-row items-center gap-6">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover border-2 border-indigo-400" />
        )}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">{personal.fullName}</h1>
          <p className="text-indigo-300 text-sm font-semibold mb-3 tracking-wide uppercase">{personal.title}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1.5 text-xs text-indigo-100">
            {personal.email && (
              <span className="flex items-center gap-1"><FiMail size={12} className="text-indigo-400" />{personal.email}</span>
            )}
            {personal.phone && (
              <span className="flex items-center gap-1"><FiPhone size={12} className="text-indigo-400" />{personal.phone}</span>
            )}
            {personal.address && (
              <span className="flex items-center gap-1"><FiMapPin size={12} className="text-indigo-400" />{personal.address}</span>
            )}
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-3 justify-center text-xs border-t border-indigo-900 md:border-t-0 md:border-l border-indigo-900/60 pt-3 md:pt-0 md:pl-6 shrink-0">
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-200 hover:text-white transition-colors">
              <FiLinkedin size={12} /> linkedin
            </a>
          )}
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-200 hover:text-white transition-colors">
              <FiGithub size={12} /> github
            </a>
          )}
          {personal.portfolio && (
            <a href={personal.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-200 hover:text-white transition-colors">
              <FiGlobe size={12} /> portfolio
            </a>
          )}
        </div>
      </div>

      {/* Content Split */}
      <div className="flex flex-1 p-8 gap-8">
        {/* Left column - 35% */}
        <div className="w-[35%] flex flex-col gap-6 border-r border-slate-100 pr-6">
          {skills?.categories?.length > 0 && skills.categories[0].name && (
            <div>
              <SectionTitle>Key Skills</SectionTitle>
              {skills.categories.map((cat) => (
                <div key={cat.id} className="mb-3">
                  <p className="text-xs font-bold text-slate-700 mb-1">{cat.name}</p>
                  <p className="text-xs text-slate-500">{cat.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          )}

          {education?.length > 0 && education[0].college && (
            <div>
              <SectionTitle>Education</SectionTitle>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <h4 className="font-bold text-slate-800 text-xs">{edu.degree}</h4>
                  <p className="text-xs text-indigo-600 font-medium">{edu.college}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}{edu.cgpa && ` · ${edu.cgpa} CGPA`}</p>
                </div>
              ))}
            </div>
          )}

          {certifications?.length > 0 && certifications[0].name && (
            <div>
              <SectionTitle>Certifications</SectionTitle>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-2">
                  <p className="font-bold text-xs text-slate-700">{cert.name}</p>
                  <p className="text-[10px] text-slate-500">{cert.issuer}</p>
                </div>
              ))}
            </div>
          )}

          {languages?.length > 0 && languages[0].name && (
            <div>
              <SectionTitle>Languages</SectionTitle>
              <p className="text-xs text-slate-600 leading-relaxed">
                {languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}
              </p>
            </div>
          )}
        </div>

        {/* Right column - 65% */}
        <div className="flex-1 flex flex-col gap-6">
          {summary && (
            <div>
              <SectionTitle>Summary</SectionTitle>
              <p className="text-slate-600 text-xs leading-relaxed text-justify">{summary}</p>
            </div>
          )}

          {experience?.length > 0 && experience[0].company && (
            <div>
              <SectionTitle>Experience</SectionTitle>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-slate-800 text-sm">{exp.position}</h3>
                    <span className="text-[10px] text-slate-400 font-semibold">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
                  </div>
                  <p className="text-indigo-600 text-xs font-semibold mb-1">{exp.company}</p>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {projects?.length > 0 && projects[0].name && (
            <div>
              <SectionTitle>Projects</SectionTitle>
              {projects.map((proj) => (
                <div key={proj.id} className="mb-3">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-slate-800 text-xs">{proj.name}</h4>
                    {proj.github && <a href={proj.github} className="text-[10px] text-indigo-600 hover:underline">Repository</a>}
                  </div>
                  <p className="text-xs text-slate-600">{proj.description}</p>
                  {proj.technologies && <p className="text-[10px] text-indigo-500 font-semibold mt-0.5">{proj.technologies}</p>}
                </div>
              ))}
            </div>
          )}

          {achievements?.length > 0 && achievements[0].title && (
            <div>
              <SectionTitle>Achievements</SectionTitle>
              {achievements.map((ach) => (
                <div key={ach.id} className="mb-2">
                  <p className="text-xs font-bold text-slate-800">{ach.title}</p>
                  <p className="text-xs text-slate-600">{ach.description}</p>
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
  <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 border-b border-indigo-100 pb-1 mb-3">{children}</h2>
);

export default BoldHeaderTemplate;

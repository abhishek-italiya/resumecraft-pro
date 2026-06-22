import { formatDate } from '../../utils/validation';

const ExecutiveTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-[#FCFDFE] text-slate-900 p-12 min-h-[1123px] text-sm flex flex-col" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
      {/* Header */}
      <div className="text-center mb-6 flex flex-col items-center shrink-0" data-page-break="avoid">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border border-slate-300 shrink-0" />
        )}
        <h1 className="text-3xl font-normal tracking-wide text-slate-800 mb-1 leading-none">{personal.fullName}</h1>
        <p className="text-slate-500 italic tracking-wider text-xs uppercase mb-3">{personal.title}</p>
        <div className="flex flex-wrap justify-center text-xs text-slate-600 border-y border-slate-200 py-2 w-full max-w-2xl mx-auto gap-x-4 gap-y-1">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {personal.address && <span>• {personal.address}</span>}
        </div>
        <div className="flex justify-center mt-2 text-xs text-blue-700 gap-4">
          {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>}
          {personal.github && <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>}
          {personal.portfolio && <a href={personal.portfolio} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        {/* Summary */}
        {summary && (
          <ExecSection title="Professional Summary">
            <p className="text-slate-700 text-xs leading-relaxed text-justify italic resume-text-break">{summary}</p>
          </ExecSection>
        )}

        {/* Experience */}
        {experience?.length > 0 && experience[0].company && (
          <ExecSection title="Professional Experience">
            <div className="flex flex-col gap-4">
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-1 mb-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 text-sm leading-snug">{exp.position}</h3>
                    <span className="text-[11px] text-slate-500 italic font-mono shrink-0 ml-2">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold">{exp.company}</p>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify resume-text-break">{exp.description}</p>
                </div>
              ))}
            </div>
          </ExecSection>
        )}

        {/* Education */}
        {education?.length > 0 && education[0].college && (
          <ExecSection title="Education">
            <div className="flex flex-col gap-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline gap-4 mb-1" data-page-break="avoid">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-bold text-slate-800 text-sm leading-snug">{edu.degree}</h3>
                    <p className="text-xs text-slate-600">{edu.college}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] text-slate-500 italic font-mono">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
                    {edu.cgpa && <p className="text-[11px] text-slate-600 font-semibold font-mono">CGPA: {edu.cgpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </ExecSection>
        )}

        {/* Skills */}
        {skills?.categories?.length > 0 && skills.categories[0].name && (
          <ExecSection title="Areas of Expertise">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
              {skills.categories.map((cat) => (
                <p key={cat.id} className="text-slate-700 resume-text-break" data-page-break="avoid">
                  <span className="font-bold text-slate-800">{cat.name}:</span> {cat.skills.join(', ')}
                </p>
              ))}
            </div>
          </ExecSection>
        )}

        {/* Projects */}
        {projects?.length > 0 && projects[0].name && (
          <ExecSection title="Key Projects">
            <div className="flex flex-col gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="flex flex-col gap-1 mb-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 text-sm leading-snug">{proj.name}</h3>
                    {proj.liveDemo && <a href={proj.liveDemo} className="text-xs text-blue-700 hover:underline shrink-0 ml-2">Live Demo</a>}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed resume-text-break">{proj.description}</p>
                  {proj.technologies && <p className="text-[11px] text-slate-500 italic font-mono resume-text-break">Technologies: {proj.technologies}</p>}
                </div>
              ))}
            </div>
          </ExecSection>
        )}

        {/* Additional sections (2-column layout for small sections) */}
        <div className="grid grid-cols-2 gap-6 mt-2 mb-6" data-page-break="avoid">
          {certifications?.length > 0 && certifications[0].name && (
            <div className="flex flex-col">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-300 pb-1 mb-2">Certifications</h2>
              {certifications.map((cert) => (
                <p key={cert.id} className="text-xs text-slate-700 mb-1 resume-text-break">
                  <span className="font-bold">{cert.name}</span> — {cert.issuer} ({formatDate(cert.date)})
                </p>
              ))}
            </div>
          )}

          {languages?.length > 0 && languages[0].name && (
            <div className="flex flex-col">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-300 pb-1 mb-2">Languages</h2>
              <p className="text-xs text-slate-700 leading-relaxed resume-text-break">
                {languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}
              </p>
            </div>
          )}
        </div>

        {achievements?.length > 0 && achievements[0].title && (
          <ExecSection title="Awards & Achievements">
            <div className="flex flex-col gap-2">
              {achievements.map((ach) => (
                <div key={ach.id} className="flex flex-col gap-0.5 mb-1" data-page-break="avoid">
                  <p className="text-xs font-bold text-slate-800 leading-snug">{ach.title}</p>
                  <p className="text-xs text-slate-600 italic resume-text-break">{ach.description}</p>
                </div>
              ))}
            </div>
          </ExecSection>
        )}
      </div>
    </div>
  );
};

const ExecSection = ({ title, children, className = '' }) => (
  <div className={`flex flex-col gap-2 mb-6 ${className}`} data-page-break="avoid">
    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-slate-300 pb-1 w-full">{title}</h2>
    {children}
  </div>
);

export default ExecutiveTemplate;

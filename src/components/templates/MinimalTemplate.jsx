import { formatDate } from '../../utils/validation';

const MinimalTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-white text-slate-800 p-10 min-h-[1123px] text-sm flex flex-col" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="text-center mb-6 flex flex-col items-center shrink-0" data-page-break="avoid">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-16 h-16 rounded-full object-cover mx-auto mb-3 shrink-0" />
        )}
        <h1 className="text-3xl font-light tracking-widest uppercase text-slate-900 leading-none">{personal.fullName}</h1>
        <p className="text-slate-500 mt-1 tracking-wide">{personal.title}</p>
        <div className="flex flex-wrap justify-center mt-3 text-xs text-slate-500 gap-x-3 gap-y-1 w-full max-w-lg">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>| {personal.phone}</span>}
          {personal.address && <span>| {personal.address}</span>}
        </div>
        <div className="flex justify-center mt-1.5 text-xs text-cyan-600 gap-4">
          {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>}
          {personal.github && <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>}
          {personal.portfolio && <a href={personal.portfolio} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>}
        </div>
      </div>

      <div className="w-16 h-px bg-slate-300 mx-auto mb-6 shrink-0" data-page-break="avoid" />

      <div className="flex flex-col flex-1">
        {summary && (
          <MinSection title="Summary">
            <p className="text-slate-600 text-xs leading-relaxed text-center max-w-lg mx-auto resume-text-break">{summary}</p>
          </MinSection>
        )}

        {experience?.length > 0 && experience[0].company && (
          <MinSection title="Experience">
            <div className="flex flex-col gap-4 w-full">
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-1 mb-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium text-slate-800 leading-snug">{exp.position}</h3>
                    <span className="text-[10px] text-slate-400 tracking-wide font-mono shrink-0 ml-2">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
                  </div>
                  <p className="text-xs text-cyan-600 font-semibold">{exp.company}</p>
                  <p className="text-xs text-slate-500 leading-relaxed text-justify resume-text-break">{exp.description}</p>
                </div>
              ))}
            </div>
          </MinSection>
        )}

        {education?.length > 0 && education[0].college && (
          <MinSection title="Education">
            <div className="flex flex-col gap-3 w-full">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline gap-4 mb-1" data-page-break="avoid">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-medium text-slate-800 leading-snug">{edu.degree}</h3>
                    <p className="text-xs text-slate-500">{edu.college}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-slate-400 font-mono">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
                    {edu.cgpa && <p className="text-[10px] text-cyan-600 font-semibold font-mono">CGPA: {edu.cgpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </MinSection>
        )}

        {skills?.categories?.length > 0 && skills.categories[0].name && (
          <MinSection title="Skills">
            <div className="flex flex-col gap-1.5 w-full">
              {skills.categories.map((cat) => (
                <p key={cat.id} className="text-xs text-slate-600 resume-text-break" data-page-break="avoid">
                  <span className="font-medium text-slate-800">{cat.name}:</span> {cat.skills.join(' · ')}
                </p>
              ))}
            </div>
          </MinSection>
        )}

        {projects?.length > 0 && projects[0].name && (
          <MinSection title="Projects">
            <div className="flex flex-col gap-3 w-full">
              {projects.map((proj) => (
                <div key={proj.id} className="flex flex-col gap-1 mb-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium text-slate-800 leading-snug">{proj.name}</h3>
                    {proj.github && <a href={proj.github} className="text-[10px] text-cyan-600 hover:underline shrink-0 ml-2">Repository</a>}
                  </div>
                  <p className="text-xs text-slate-500 resume-text-break">{proj.description}</p>
                  {proj.technologies && <p className="text-[10px] text-cyan-600 font-mono resume-text-break">{proj.technologies}</p>}
                </div>
              ))}
            </div>
          </MinSection>
        )}

        {certifications?.length > 0 && certifications[0].name && (
          <MinSection title="Certifications">
            <div className="flex flex-col gap-1.5 w-full">
              {certifications.map((cert) => (
                <p key={cert.id} className="text-xs text-slate-600 resume-text-break" data-page-break="avoid">{cert.name} — {cert.issuer}</p>
              ))}
            </div>
          </MinSection>
        )}

        {languages?.length > 0 && languages[0].name && (
          <MinSection title="Languages">
            <p className="text-xs text-slate-600 resume-text-break">{languages.map((l) => `${l.name} (${l.proficiency})`).join(' · ')}</p>
          </MinSection>
        )}

        {achievements?.length > 0 && achievements[0].title && (
          <MinSection title="Achievements">
            <div className="flex flex-col gap-2 w-full">
              {achievements.map((ach) => (
                <div key={ach.id} className="flex flex-col gap-0.5 mb-1" data-page-break="avoid">
                  <p className="text-xs font-medium text-slate-800 leading-snug">{ach.title}</p>
                  <p className="text-xs text-slate-500 resume-text-break">{ach.description}</p>
                </div>
              ))}
            </div>
          </MinSection>
        )}
      </div>
    </div>
  );
};

const MinSection = ({ title, children }) => (
  <div className="flex flex-col gap-2 mb-6 w-full" data-page-break="avoid">
    <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 text-center border-b border-slate-100 pb-1 mb-2 w-full">{title}</h2>
    {children}
  </div>
);

export default MinimalTemplate;

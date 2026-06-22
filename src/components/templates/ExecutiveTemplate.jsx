import { formatDate } from '../../utils/validation';

const ExecutiveTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-[#FCFDFE] text-slate-900 p-12 min-h-[1123px] text-sm" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
      {/* Header */}
      <div className="text-center mb-6">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border border-slate-300" />
        )}
        <h1 className="text-3xl font-normal tracking-wide text-slate-800 mb-1">{personal.fullName}</h1>
        <p className="text-slate-500 italic tracking-wider text-xs uppercase mb-3">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-600 border-y border-slate-200 py-2 max-w-2xl mx-auto">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {personal.address && <span>• {personal.address}</span>}
        </div>
        <div className="flex justify-center gap-4 mt-2 text-xs text-blue-700">
          {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>}
          {personal.github && <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>}
          {personal.portfolio && <a href={personal.portfolio} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <ExecSection title="Professional Summary">
          <p className="text-slate-700 text-xs leading-relaxed text-justify italic">{summary}</p>
        </ExecSection>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience[0].company && (
        <ExecSection title="Professional Experience">
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-800 text-sm">{exp.position}</h3>
                <span className="text-[11px] text-slate-500 italic">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
              </div>
              <p className="text-xs text-slate-600 font-semibold mb-1.5">{exp.company}</p>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">{exp.description}</p>
            </div>
          ))}
        </ExecSection>
      )}

      {/* Education */}
      {education?.length > 0 && education[0].college && (
        <ExecSection title="Education">
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-bold text-slate-800 text-sm">{edu.degree}</h3>
                <span className="text-[11px] text-slate-500 italic">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
              </div>
              <p className="text-xs text-slate-600">{edu.college}{edu.cgpa && ` · CGPA: ${edu.cgpa}`}</p>
            </div>
          ))}
        </ExecSection>
      )}

      {/* Skills */}
      {skills?.categories?.length > 0 && skills.categories[0].name && (
        <ExecSection title="Areas of Expertise">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
            {skills.categories.map((cat) => (
              <p key={cat.id} className="text-slate-700">
                <span className="font-bold text-slate-800">{cat.name}:</span> {cat.skills.join(', ')}
              </p>
            ))}
          </div>
        </ExecSection>
      )}

      {/* Projects */}
      {projects?.length > 0 && projects[0].name && (
        <ExecSection title="Key Projects">
          {projects.map((proj) => (
            <div key={proj.id} className="mb-3">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-bold text-slate-800 text-sm">{proj.name}</h3>
                {proj.liveDemo && <a href={proj.liveDemo} className="text-xs text-blue-700 hover:underline">Live Demo</a>}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{proj.description}</p>
              {proj.technologies && <p className="text-[11px] text-slate-500 italic mt-0.5">Technologies: {proj.technologies}</p>}
            </div>
          ))}
        </ExecSection>
      )}

      {/* Additional sections (2-column layout for small sections) */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {certifications?.length > 0 && certifications[0].name && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-300 pb-1 mb-2">Certifications</h2>
            {certifications.map((cert) => (
              <p key={cert.id} className="text-xs text-slate-700 mb-1">
                <span className="font-bold">{cert.name}</span> — {cert.issuer} ({formatDate(cert.date)})
              </p>
            ))}
          </div>
        )}

        {languages?.length > 0 && languages[0].name && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-300 pb-1 mb-2">Languages</h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}
            </p>
          </div>
        )}
      </div>

      {achievements?.length > 0 && achievements[0].title && (
        <ExecSection title="Awards & Achievements" className="mt-4">
          {achievements.map((ach) => (
            <div key={ach.id} className="mb-2">
              <p className="text-xs font-bold text-slate-800">{ach.title}</p>
              <p className="text-xs text-slate-600 italic">{ach.description}</p>
            </div>
          ))}
        </ExecSection>
      )}
    </div>
  );
};

const ExecSection = ({ title, children, className = '' }) => (
  <div className={`mb-5 ${className}`}>
    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-700 border-b-2 border-double border-slate-300 pb-1 mb-3">{title}</h2>
    {children}
  </div>
);

export default ExecutiveTemplate;

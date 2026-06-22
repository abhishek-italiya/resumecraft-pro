import { formatDate } from '../../utils/validation';

const ModernCompactTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages } = data;

  return (
    <div className="bg-white text-slate-800 p-8 min-h-[1123px] text-xs flex flex-col" style={{ fontFamily: '"Inter", "system-ui", sans-serif' }}>
      {/* Top section: Two column Header */}
      <div className="flex flex-row justify-between items-center border-b border-slate-200 pb-4 mb-6 shrink-0" data-page-break="avoid">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{personal.fullName}</h1>
          <p className="text-slate-500 font-medium text-xs mt-0.5">{personal.title}</p>
        </div>
        <div className="text-right text-[10px] text-slate-500 flex flex-col gap-0.5 font-mono">
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
          {personal.address && <p>{personal.address}</p>}
          <div className="flex gap-2 justify-end mt-1 text-slate-700 font-sans">
            {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">ln</a>}
            {personal.github && <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">gh</a>}
            {personal.portfolio && <a href={personal.portfolio} target="_blank" rel="noreferrer" className="hover:underline">web</a>}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        {/* Summary */}
        {summary && (
          <div className="flex flex-row gap-4 mb-6" data-page-break="avoid">
            <div className="w-[25%] shrink-0 font-bold text-slate-900 uppercase tracking-wider text-[10px]">About</div>
            <div className="flex-1 text-slate-600 leading-relaxed text-justify resume-text-break">{summary}</div>
          </div>
        )}

        {/* Skills */}
        {skills?.categories?.length > 0 && skills.categories[0].name && (
          <div className="flex flex-row gap-4 mb-6 border-t border-slate-100 pt-4" data-page-break="avoid">
            <div className="w-[25%] shrink-0 font-bold text-slate-900 uppercase tracking-wider text-[10px]">Skills</div>
            <div className="flex-1 flex flex-col gap-2">
              {skills.categories.map((cat) => (
                <span key={cat.id} className="text-slate-600 resume-text-break">
                  <strong className="text-slate-800 font-semibold">{cat.name}:</strong> {cat.skills.join(', ')}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {experience?.length > 0 && experience[0].company && (
          <div className="flex flex-row gap-4 mb-6 border-t border-slate-100 pt-4">
            <div className="w-[25%] shrink-0 font-bold text-slate-900 uppercase tracking-wider text-[10px]" data-page-break="avoid">Experience</div>
            <div className="flex-1 flex flex-col gap-4">
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-1 mb-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 text-[13px] leading-snug">{exp.position}</h3>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
                  </div>
                  <p className="text-slate-500 font-semibold">{exp.company}</p>
                  <p className="text-slate-600 leading-relaxed text-justify resume-text-break">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects?.length > 0 && projects[0].name && (
          <div className="flex flex-row gap-4 mb-6 border-t border-slate-100 pt-4">
            <div className="w-[25%] shrink-0 font-bold text-slate-900 uppercase tracking-wider text-[10px]" data-page-break="avoid">Projects</div>
            <div className="flex-1 flex flex-col gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="border-l border-slate-200 pl-3 flex flex-col gap-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-slate-800 leading-snug">{proj.name}</h4>
                    {proj.github && <a href={proj.github} className="text-[10px] text-slate-400 hover:underline font-mono shrink-0 ml-2">repo</a>}
                  </div>
                  <p className="text-slate-600 resume-text-break">{proj.description}</p>
                  {proj.technologies && <p className="text-[10px] text-slate-400 font-mono resume-text-break">{proj.technologies}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education?.length > 0 && education[0].college && (
          <div className="flex flex-row gap-4 mb-6 border-t border-slate-100 pt-4">
            <div className="w-[25%] shrink-0 font-bold text-slate-900 uppercase tracking-wider text-[10px]" data-page-break="avoid">Education</div>
            <div className="flex-1 flex flex-col gap-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline gap-4 mb-1" data-page-break="avoid">
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-bold text-slate-800 leading-snug">{edu.degree}</h4>
                    <p className="text-slate-500">{edu.college}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-slate-400 font-mono">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
                    {edu.cgpa && <p className="text-[10px] text-slate-600 font-semibold font-mono">CGPA: {edu.cgpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom items row: languages, certifications */}
        <div className="flex flex-row gap-4 mb-6 border-t border-slate-100 pt-4 mt-auto" data-page-break="avoid">
          <div className="w-[25%] shrink-0 font-bold text-slate-900 uppercase tracking-wider text-[10px]">Additions</div>
          <div className="flex-1 grid grid-cols-2 gap-4 text-[11px]">
            {certifications?.length > 0 && certifications[0].name && (
              <div className="flex flex-col gap-1.5">
                <h5 className="font-bold text-slate-700 leading-none">Certifications</h5>
                {certifications.map((cert) => (
                  <p key={cert.id} className="text-slate-500 resume-text-break">{cert.name} ({cert.issuer})</p>
                ))}
              </div>
            )}
            {languages?.length > 0 && languages[0].name && (
              <div className="flex flex-col gap-1.5">
                <h5 className="font-bold text-slate-700 leading-none">Languages</h5>
                <p className="text-slate-500 resume-text-break">{languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCompactTemplate;

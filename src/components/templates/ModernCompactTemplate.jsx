import { formatDate } from '../../utils/validation';

const ModernCompactTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages } = data;

  return (
    <div className="bg-white text-slate-800 p-8 min-h-[1056px] text-xs flex flex-col gap-5" style={{ fontFamily: '"Inter", "system-ui", sans-serif' }}>
      {/* Top section: Two column Header */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">{personal.fullName}</h1>
          <p className="text-slate-500 font-medium text-xs mt-0.5">{personal.title}</p>
        </div>
        <div className="text-right text-[10px] text-slate-500 space-y-0.5 font-mono">
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
          {personal.address && <p>{personal.address}</p>}
          <div className="flex gap-2 justify-end mt-1 text-slate-700">
            {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">ln</a>}
            {personal.github && <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">gh</a>}
            {personal.portfolio && <a href={personal.portfolio} target="_blank" rel="noreferrer" className="hover:underline">web</a>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 font-bold text-slate-900 uppercase tracking-wider text-[10px]">About</div>
          <div className="col-span-9 text-slate-600 leading-relaxed">{summary}</div>
        </div>
      )}

      {/* Skills */}
      {skills?.categories?.length > 0 && skills.categories[0].name && (
        <div className="grid grid-cols-12 gap-4 border-t border-slate-100 pt-4">
          <div className="col-span-3 font-bold text-slate-900 uppercase tracking-wider text-[10px]">Skills</div>
          <div className="col-span-9 flex flex-wrap gap-x-4 gap-y-1.5">
            {skills.categories.map((cat) => (
              <span key={cat.id} className="text-slate-600">
                <strong className="text-slate-800 font-semibold">{cat.name}:</strong> {cat.skills.join(', ')}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience[0].company && (
        <div className="grid grid-cols-12 gap-4 border-t border-slate-100 pt-4">
          <div className="col-span-3 font-bold text-slate-900 uppercase tracking-wider text-[10px]">Experience</div>
          <div className="col-span-9 space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-slate-800 text-[13px]">{exp.position}</h3>
                  <span className="text-[10px] text-slate-400 font-mono">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
                </div>
                <p className="text-slate-500 font-semibold mb-1">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed text-justify">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && projects[0].name && (
        <div className="grid grid-cols-12 gap-4 border-t border-slate-100 pt-4">
          <div className="col-span-3 font-bold text-slate-900 uppercase tracking-wider text-[10px]">Projects</div>
          <div className="col-span-9 space-y-3">
            {projects.map((proj) => (
              <div key={proj.id} className="border-l border-slate-200 pl-3">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-slate-800">{proj.name}</h4>
                  {proj.github && <a href={proj.github} className="text-[10px] text-slate-400 hover:underline font-mono">repo</a>}
                </div>
                <p className="text-slate-600 mt-0.5">{proj.description}</p>
                {proj.technologies && <p className="text-[10px] text-slate-400 font-mono mt-0.5">{proj.technologies}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education[0].college && (
        <div className="grid grid-cols-12 gap-4 border-t border-slate-100 pt-4">
          <div className="col-span-3 font-bold text-slate-900 uppercase tracking-wider text-[10px]">Education</div>
          <div className="col-span-9 space-y-2">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                  <p className="text-slate-500">{edu.college}{edu.cgpa && ` · ${edu.cgpa} CGPA`}</p>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom items row: languages, certifications, achievements */}
      <div className="grid grid-cols-12 gap-4 border-t border-slate-100 pt-4 mt-auto">
        <div className="col-span-3 font-bold text-slate-900 uppercase tracking-wider text-[10px]">Additions</div>
        <div className="col-span-9 grid grid-cols-2 gap-4 text-[11px]">
          {certifications?.length > 0 && certifications[0].name && (
            <div>
              <h5 className="font-bold text-slate-700 mb-1">Certifications</h5>
              {certifications.map((cert) => (
                <p key={cert.id} className="text-slate-500 mb-0.5">{cert.name} ({cert.issuer})</p>
              ))}
            </div>
          )}
          {languages?.length > 0 && languages[0].name && (
            <div>
              <h5 className="font-bold text-slate-700 mb-1">Languages</h5>
              <p className="text-slate-500">{languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernCompactTemplate;

import { formatDate } from '../../utils/validation';

const MinimalTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-white text-slate-800 p-10 min-h-[842px] text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="text-center mb-8">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-16 h-16 rounded-full object-cover mx-auto mb-3" />
        )}
        <h1 className="text-3xl font-light tracking-widest uppercase text-slate-900">{personal.fullName}</h1>
        <p className="text-slate-500 mt-1 tracking-wide">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-3 text-xs text-slate-500">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>| {personal.phone}</span>}
          {personal.address && <span>| {personal.address}</span>}
        </div>
        <div className="flex justify-center gap-3 mt-1 text-xs text-cyan-600">
          {personal.linkedin && <a href={personal.linkedin}>LinkedIn</a>}
          {personal.github && <a href={personal.github}>GitHub</a>}
          {personal.portfolio && <a href={personal.portfolio}>Portfolio</a>}
        </div>
      </div>

      <div className="w-16 h-px bg-slate-300 mx-auto mb-8" />

      {summary && (
        <MinSection title="Summary">
          <p className="text-slate-600 text-xs leading-relaxed text-center max-w-lg mx-auto">{summary}</p>
        </MinSection>
      )}

      {experience?.length > 0 && experience[0].company && (
        <MinSection title="Experience">
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-slate-800">{exp.position}</h3>
                <span className="text-[10px] text-slate-400 tracking-wide">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
              </div>
              <p className="text-xs text-cyan-600 mb-1">{exp.company}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </MinSection>
      )}

      {education?.length > 0 && education[0].college && (
        <MinSection title="Education">
          {education.map((edu) => (
            <div key={edu.id} className="mb-3 flex justify-between items-baseline">
              <div>
                <h3 className="font-medium text-slate-800">{edu.degree}</h3>
                <p className="text-xs text-slate-500">{edu.college}{edu.cgpa && ` · ${edu.cgpa} CGPA`}</p>
              </div>
              <span className="text-[10px] text-slate-400">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
            </div>
          ))}
        </MinSection>
      )}

      {skills?.categories?.length > 0 && skills.categories[0].name && (
        <MinSection title="Skills">
          {skills.categories.map((cat) => (
            <p key={cat.id} className="text-xs text-slate-600 mb-1">
              <span className="font-medium text-slate-800">{cat.name}:</span> {cat.skills.join(' · ')}
            </p>
          ))}
        </MinSection>
      )}

      {projects?.length > 0 && projects[0].name && (
        <MinSection title="Projects">
          {projects.map((proj) => (
            <div key={proj.id} className="mb-3">
              <h3 className="font-medium text-slate-800">{proj.name}</h3>
              <p className="text-xs text-slate-500">{proj.description}</p>
              {proj.technologies && <p className="text-[10px] text-cyan-600 mt-0.5">{proj.technologies}</p>}
            </div>
          ))}
        </MinSection>
      )}

      {certifications?.length > 0 && certifications[0].name && (
        <MinSection title="Certifications">
          {certifications.map((cert) => (
            <p key={cert.id} className="text-xs text-slate-600 mb-1">{cert.name} — {cert.issuer}</p>
          ))}
        </MinSection>
      )}

      {languages?.length > 0 && languages[0].name && (
        <MinSection title="Languages">
          <p className="text-xs text-slate-600">{languages.map((l) => `${l.name} (${l.proficiency})`).join(' · ')}</p>
        </MinSection>
      )}

      {achievements?.length > 0 && achievements[0].title && (
        <MinSection title="Achievements">
          {achievements.map((ach) => (
            <div key={ach.id} className="mb-2">
              <p className="text-xs font-medium text-slate-800">{ach.title}</p>
              <p className="text-xs text-slate-500">{ach.description}</p>
            </div>
          ))}
        </MinSection>
      )}
    </div>
  );
};

const MinSection = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 text-center mb-4">{title}</h2>
    {children}
  </div>
);

export default MinimalTemplate;

import { formatDate } from '../../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiBriefcase, FiBookOpen, FiActivity, FiGlobe } from 'react-icons/fi';

const ElegantAccentTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages } = data;

  return (
    <div className="bg-white text-slate-800 p-10 min-h-[1123px] text-sm flex flex-col" style={{ fontFamily: '"Inter", sans-serif' }}>
      {/* Header */}
      <div className="flex flex-col items-center text-center border-b-4 border-amber-500 pb-6 mb-6 shrink-0" data-page-break="avoid">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover mb-4 border border-amber-200 shadow-md shrink-0" />
        )}
        <h1 className="text-3xl font-light text-slate-900 tracking-wider mb-1 leading-none">
          {(personal.fullName || '').split(' ').map((name, index, arr) => 
            index === arr.length - 1 ? (
              <span key={index} className="font-bold text-amber-600">{name}</span>
            ) : (
              name + ' '
            )
          )}
        </h1>
        <p className="text-slate-500 font-medium tracking-widest text-xs uppercase mb-4">{personal.title}</p>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-slate-600">
          {personal.email && (
            <span className="flex items-center gap-1.5"><FiMail className="text-amber-500 shrink-0" /> {personal.email}</span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1.5"><FiPhone className="text-amber-500 shrink-0" /> {personal.phone}</span>
          )}
          {personal.address && (
            <span className="flex items-center gap-1.5"><FiMapPin className="text-amber-500 shrink-0" /> {personal.address}</span>
          )}
        </div>

        <div className="flex justify-center gap-3 mt-2 text-xs text-amber-700">
          {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>}
          {personal.github && <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>}
          {personal.portfolio && <a href={personal.portfolio} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        {/* Summary */}
        {summary && (
          <div className="flex flex-col gap-2 mb-6" data-page-break="avoid">
            <SectionHeader icon={FiActivity}>Executive Summary</SectionHeader>
            <p className="text-slate-600 text-xs leading-relaxed text-justify resume-text-break">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience?.length > 0 && experience[0].company && (
          <div className="flex flex-col gap-4 mb-6">
            <div data-page-break="avoid"><SectionHeader icon={FiBriefcase}>Experience</SectionHeader></div>
            {experience.map((exp) => (
              <div key={exp.id} className="flex flex-col gap-1 mb-1" data-page-break="avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-800 text-sm leading-snug">{exp.position}</h3>
                  <span className="text-xs text-slate-400 font-medium font-mono shrink-0 ml-2">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
                </div>
                <p className="text-amber-600 text-xs font-semibold">{exp.company}</p>
                <p className="text-xs text-slate-600 leading-relaxed text-justify resume-text-break">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects?.length > 0 && projects[0].name && (
          <div className="flex flex-col gap-4 mb-6">
            <div data-page-break="avoid"><SectionHeader icon={FiGlobe}>Key Projects</SectionHeader></div>
            <div className="grid grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div key={proj.id} className="border border-slate-100 p-3 rounded-lg bg-amber-50/10 flex flex-col gap-1" data-page-break="avoid">
                  <h4 className="font-bold text-slate-800 text-xs leading-snug">{proj.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed resume-text-break">{proj.description}</p>
                  {proj.technologies && <p className="text-[10px] text-amber-600 font-semibold font-mono resume-text-break">{proj.technologies}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education?.length > 0 && education[0].college && (
          <div className="flex flex-col gap-4 mb-6">
            <div data-page-break="avoid"><SectionHeader icon={FiBookOpen}>Education</SectionHeader></div>
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline gap-4 mb-1" data-page-break="avoid">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-bold text-slate-800 text-sm leading-snug">{edu.degree}</h3>
                  <p className="text-xs text-slate-500">{edu.college}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-slate-400 font-medium font-mono">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
                  {edu.cgpa && <p className="text-[10px] text-amber-600 font-semibold font-mono">CGPA: {edu.cgpa}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Split details row */}
        <div className="grid grid-cols-3 gap-6 mt-2" data-page-break="avoid">
          {skills?.categories?.length > 0 && skills.categories[0].name && (
            <div className="col-span-1 flex flex-col">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-amber-200 pb-1 mb-2">Skills</h4>
              {skills.categories.map((cat) => (
                <div key={cat.id} className="mb-2 flex flex-col gap-0.5">
                  <p className="text-[11px] font-bold text-slate-700 leading-none">{cat.name}</p>
                  <p className="text-[10px] text-slate-500 resume-text-break">{cat.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          )}

          {certifications?.length > 0 && certifications[0].name && (
            <div className="col-span-1 flex flex-col">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-amber-200 pb-1 mb-2">Certificates</h4>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-2 flex flex-col gap-0.5">
                  <p className="text-[11px] font-bold text-slate-700 leading-tight">{cert.name}</p>
                  <p className="text-[10px] text-slate-500 resume-text-break">{cert.issuer}</p>
                </div>
              ))}
            </div>
          )}

          {languages?.length > 0 && languages[0].name && (
            <div className="col-span-1 flex flex-col">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-amber-200 pb-1 mb-2">Languages</h4>
              <p className="text-xs text-slate-600 leading-relaxed resume-text-break">
                {languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, children }) => (
  <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-amber-200 pb-1 w-full">
    <Icon className="text-amber-500 text-xs shrink-0" />
    {children}
  </h2>
);

export default ElegantAccentTemplate;

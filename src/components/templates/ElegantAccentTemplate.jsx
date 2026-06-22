import { formatDate } from '../../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiBriefcase, FiBookOpen, FiActivity, FiGlobe } from 'react-icons/fi';

const ElegantAccentTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages } = data;

  return (
    <div className="bg-white text-slate-800 p-10 min-h-[1123px] text-sm flex flex-col gap-6" style={{ fontFamily: '"Inter", sans-serif' }}>
      {/* Header */}
      <div className="flex flex-col items-center text-center border-b-4 border-amber-500 pb-6">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover mb-4 border border-amber-200 shadow-md" />
        )}
        <h1 className="text-3xl font-light text-slate-900 tracking-wider mb-1">
          {personal.fullName.split(' ').map((name, index) => 
            index === personal.fullName.split(' ').length - 1 ? (
              <span key={index} className="font-bold text-amber-600">{name}</span>
            ) : (
              name + ' '
            )
          )}
        </h1>
        <p className="text-slate-500 font-medium tracking-widest text-xs uppercase mb-4">{personal.title}</p>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-slate-600">
          {personal.email && (
            <span className="flex items-center gap-1"><FiMail className="text-amber-500" /> {personal.email}</span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1"><FiPhone className="text-amber-500" /> {personal.phone}</span>
          )}
          {personal.address && (
            <span className="flex items-center gap-1"><FiMapPin className="text-amber-500" /> {personal.address}</span>
          )}
        </div>

        <div className="flex justify-center gap-3 mt-2 text-xs text-amber-700">
          {personal.linkedin && <a href={personal.linkedin} className="hover:underline">LinkedIn</a>}
          {personal.github && <a href={personal.github} className="hover:underline">GitHub</a>}
          {personal.portfolio && <a href={personal.portfolio} className="hover:underline">Portfolio</a>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div>
          <SectionHeader icon={FiActivity}>Executive Summary</SectionHeader>
          <p className="text-slate-600 text-xs leading-relaxed text-justify">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience[0].company && (
        <div>
          <SectionHeader icon={FiBriefcase}>Experience</SectionHeader>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-800 text-sm">{exp.position}</h3>
                <span className="text-xs text-slate-400 font-medium">{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
              </div>
              <p className="text-amber-600 text-xs font-semibold mb-1">{exp.company}</p>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && projects[0].name && (
        <div>
          <SectionHeader icon={FiGlobe}>Key Projects</SectionHeader>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div key={proj.id} className="border border-slate-100 p-3 rounded-lg bg-amber-50/10">
                <h4 className="font-bold text-slate-800 text-xs mb-1">{proj.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-1">{proj.description}</p>
                {proj.technologies && <p className="text-[10px] text-amber-600 font-semibold">{proj.technologies}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education[0].college && (
        <div>
          <SectionHeader icon={FiBookOpen}>Education</SectionHeader>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3 flex justify-between items-baseline">
              <div>
                <h3 className="font-bold text-slate-800 text-sm">{edu.degree}</h3>
                <p className="text-xs text-slate-500">{edu.college}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 font-medium">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
                {edu.cgpa && <p className="text-[10px] text-amber-600 font-semibold">CGPA: {edu.cgpa}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Split details row */}
      <div className="grid grid-cols-3 gap-6 mt-2">
        {skills?.categories?.length > 0 && skills.categories[0].name && (
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-amber-200 pb-1 mb-2">Skills</h4>
            {skills.categories.map((cat) => (
              <div key={cat.id} className="mb-2">
                <p className="text-[11px] font-bold text-slate-700">{cat.name}</p>
                <p className="text-[10px] text-slate-500">{cat.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        )}

        {certifications?.length > 0 && certifications[0].name && (
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-amber-200 pb-1 mb-2">Certificates</h4>
            {certifications.map((cert) => (
              <div key={cert.id} className="mb-2">
                <p className="text-[11px] font-bold text-slate-700 leading-tight">{cert.name}</p>
                <p className="text-[10px] text-slate-500">{cert.issuer}</p>
              </div>
            ))}
          </div>
        )}

        {languages?.length > 0 && languages[0].name && (
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-amber-200 pb-1 mb-2">Languages</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, children }) => (
  <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-amber-200 pb-1 mb-3">
    <Icon className="text-amber-500 text-xs" />
    {children}
  </h2>
);

export default ElegantAccentTemplate;

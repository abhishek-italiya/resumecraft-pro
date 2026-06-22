import { formatDate } from '../../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

const CreativeTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-white text-slate-800 min-h-[842px] flex text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-[35%] shrink-0 bg-gradient-to-b from-purple-700 to-purple-900 text-white p-6">
        {personal.profileImage && (
          <img src={personal.profileImage} alt={personal.fullName} className="w-24 h-24 rounded-2xl object-cover mx-auto mb-4 border-2 border-white/30" />
        )}
        <h1 className="text-xl font-bold text-center mb-1">{personal.fullName}</h1>
        <p className="text-purple-200 text-center text-xs mb-6">{personal.title}</p>

        <SidebarSection title="Contact">
          {personal.email && <SidebarItem icon={FiMail} text={personal.email} />}
          {personal.phone && <SidebarItem icon={FiPhone} text={personal.phone} />}
          {personal.address && <SidebarItem icon={FiMapPin} text={personal.address} />}
          {personal.linkedin && <SidebarItem icon={FiLinkedin} text="LinkedIn" href={personal.linkedin} />}
          {personal.github && <SidebarItem icon={FiGithub} text="GitHub" href={personal.github} />}
          {personal.portfolio && <SidebarItem icon={FiGlobe} text="Portfolio" href={personal.portfolio} />}
        </SidebarSection>

        {skills?.categories?.length > 0 && skills.categories[0].name && (
          <SidebarSection title="Skills">
            {skills.categories.map((cat) => (
              <div key={cat.id} className="mb-3">
                <p className="text-xs font-bold text-purple-200 mb-1">{cat.name}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] bg-white/15 px-2 py-0.5 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </SidebarSection>
        )}

        {languages?.length > 0 && languages[0].name && (
          <SidebarSection title="Languages">
            {languages.map((l) => (
              <p key={l.id} className="text-xs mb-1">{l.name} - {l.proficiency}</p>
            ))}
          </SidebarSection>
        )}

        {certifications?.length > 0 && certifications[0].name && (
          <SidebarSection title="Certifications">
            {certifications.map((cert) => (
              <p key={cert.id} className="text-xs mb-1.5">{cert.name}</p>
            ))}
          </SidebarSection>
        )}
      </div>

      <div className="flex-1 p-6">
        {summary && (
          <MainSection title="About Me">
            <p className="text-slate-600 text-xs leading-relaxed">{summary}</p>
          </MainSection>
        )}

        {experience?.length > 0 && experience[0].company && (
          <MainSection title="Experience">
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 relative pl-4 border-l-2 border-purple-400">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-purple-500" />
                <h3 className="font-bold text-slate-800">{exp.position}</h3>
                <p className="text-purple-600 text-xs font-medium">{exp.company}</p>
                <p className="text-[10px] text-slate-400 mb-1">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</p>
                <p className="text-xs text-slate-600">{exp.description}</p>
              </div>
            ))}
          </MainSection>
        )}

        {education?.length > 0 && education[0].college && (
          <MainSection title="Education">
            {education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                <p className="text-purple-600 text-xs">{edu.college}</p>
                <p className="text-[10px] text-slate-400">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}{edu.cgpa && ` | CGPA: ${edu.cgpa}`}</p>
              </div>
            ))}
          </MainSection>
        )}

        {projects?.length > 0 && projects[0].name && (
          <MainSection title="Projects">
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 p-3 bg-purple-50 rounded-lg">
                <h3 className="font-bold text-slate-800">{proj.name}</h3>
                <p className="text-xs text-slate-600 mt-1">{proj.description}</p>
                {proj.technologies && <p className="text-[10px] text-purple-600 mt-1">{proj.technologies}</p>}
              </div>
            ))}
          </MainSection>
        )}

        {achievements?.length > 0 && achievements[0].title && (
          <MainSection title="Achievements">
            {achievements.map((ach) => (
              <div key={ach.id} className="mb-2">
                <p className="font-bold text-xs">{ach.title}</p>
                <p className="text-xs text-slate-600">{ach.description}</p>
              </div>
            ))}
          </MainSection>
        )}
      </div>
    </div>
  );
};

const SidebarSection = ({ title, children }) => (
  <div className="mb-5">
    <h2 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2 border-b border-white/20 pb-1">{title}</h2>
    {children}
  </div>
);

const SidebarItem = ({ icon: Icon, text, href }) => {
  const className = "inline-flex items-center gap-2 text-xs mb-1.5 text-purple-100 truncate w-full";
  const content = (
    <>
      <Icon size={12} className="shrink-0" />
      <span className="truncate">{text}</span>
    </>
  );
  return href ? (
    <a href={href.startsWith('http') ? href : `https://${href}`} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
  ) : (
    <span className={className}>{content}</span>
  );
};

const MainSection = ({ title, children }) => (
  <div className="mb-5">
    <h2 className="text-sm font-bold text-purple-700 mb-3 flex items-center gap-2">
      <span className="w-8 h-0.5 bg-purple-500" />
      {title}
    </h2>
    {children}
  </div>
);

export default CreativeTemplate;

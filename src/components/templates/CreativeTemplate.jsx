import { formatDate } from '../../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

const CreativeTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-white text-slate-800 min-h-[1123px] flex flex-row text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar - 35% */}
      <div className="w-[35%] shrink-0 bg-gradient-to-b from-purple-700 to-purple-900 text-white p-6 flex flex-col gap-6">
        <div className="flex flex-col items-center text-center shrink-0 mb-2" data-page-break="avoid">
          {personal.profileImage && (
            <img src={personal.profileImage} alt={personal.fullName} className="w-24 h-24 rounded-2xl object-cover border-2 border-white/30 mb-4 shrink-0" />
          )}
          <h1 className="text-xl font-bold mb-1 leading-tight text-white">{personal.fullName}</h1>
          <p className="text-purple-200 text-xs">{personal.title}</p>
        </div>

        <SidebarSection title="Contact">
          <div className="flex flex-col gap-2">
            {personal.email && <SidebarItem icon={FiMail} text={personal.email} />}
            {personal.phone && <SidebarItem icon={FiPhone} text={personal.phone} />}
            {personal.address && <SidebarItem icon={FiMapPin} text={personal.address} />}
            {personal.linkedin && <SidebarItem icon={FiLinkedin} text="LinkedIn" href={personal.linkedin} />}
            {personal.github && <SidebarItem icon={FiGithub} text="GitHub" href={personal.github} />}
            {personal.portfolio && <SidebarItem icon={FiGlobe} text="Portfolio" href={personal.portfolio} />}
          </div>
        </SidebarSection>

        {skills?.categories?.length > 0 && skills.categories[0].name && (
          <SidebarSection title="Skills">
            <div className="flex flex-col gap-3">
              {skills.categories.map((cat) => (
                <div key={cat.id} className="flex flex-col gap-1.5" data-page-break="avoid">
                  <p className="text-xs font-bold text-purple-200 leading-none">{cat.name}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] bg-white/15 px-2 py-0.5 rounded-full resume-text-break">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SidebarSection>
        )}

        {languages?.length > 0 && languages[0].name && (
          <SidebarSection title="Languages">
            <div className="flex flex-col gap-1">
              {languages.map((l) => (
                <p key={l.id} className="text-xs leading-tight" data-page-break="avoid">{l.name} - {l.proficiency}</p>
              ))}
            </div>
          </SidebarSection>
        )}

        {certifications?.length > 0 && certifications[0].name && (
          <SidebarSection title="Certifications">
            <div className="flex flex-col gap-1.5">
              {certifications.map((cert) => (
                <p key={cert.id} className="text-xs leading-snug resume-text-break" data-page-break="avoid">{cert.name}</p>
              ))}
            </div>
          </SidebarSection>
        )}
      </div>

      {/* Main Content - 65% */}
      <div className="flex-1 p-6 flex flex-col">
        {summary && (
          <MainSection title="About Me">
            <p className="text-slate-600 text-xs leading-relaxed text-justify resume-text-break">{summary}</p>
          </MainSection>
        )}

        {experience?.length > 0 && experience[0].company && (
          <MainSection title="Experience">
            <div className="flex flex-col gap-4">
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-1 relative pl-4 border-l-2 border-purple-400 mb-1" data-page-break="avoid">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-purple-500" />
                  <h3 className="font-bold text-slate-800 leading-snug">{exp.position}</h3>
                  <p className="text-purple-600 text-xs font-medium">{exp.company}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</p>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify resume-text-break">{exp.description}</p>
                </div>
              ))}
            </div>
          </MainSection>
        )}

        {education?.length > 0 && education[0].college && (
          <MainSection title="Education">
            <div className="flex flex-col gap-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-col gap-1 mb-1" data-page-break="avoid">
                  <h3 className="font-bold text-slate-800 leading-snug">{edu.degree}</h3>
                  <p className="text-purple-600 text-xs font-medium">{edu.college}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}{edu.cgpa && ` | CGPA: ${edu.cgpa}`}</p>
                </div>
              ))}
            </div>
          </MainSection>
        )}

        {projects?.length > 0 && projects[0].name && (
          <MainSection title="Projects">
            <div className="flex flex-col gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="flex flex-col gap-1.5 p-3 bg-purple-50 rounded-lg mb-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 leading-snug">{proj.name}</h3>
                    {proj.github && <a href={proj.github} className="text-[10px] text-purple-600 hover:underline shrink-0 ml-2">Repository</a>}
                  </div>
                  <p className="text-xs text-slate-600 resume-text-break">{proj.description}</p>
                  {proj.technologies && <p className="text-[10px] text-purple-600 font-mono resume-text-break">{proj.technologies}</p>}
                </div>
              ))}
            </div>
          </MainSection>
        )}

        {achievements?.length > 0 && achievements[0].title && (
          <MainSection title="Achievements">
            <div className="flex flex-col gap-2">
              {achievements.map((ach) => (
                <div key={ach.id} className="flex flex-col gap-0.5 mb-1" data-page-break="avoid">
                  <p className="font-bold text-xs leading-snug">{ach.title}</p>
                  <p className="text-xs text-slate-600 resume-text-break">{ach.description}</p>
                </div>
              ))}
            </div>
          </MainSection>
        )}
      </div>
    </div>
  );
};

const SidebarSection = ({ title, children }) => (
  <div className="flex flex-col gap-2 mb-6" data-page-break="avoid">
    <h2 className="text-xs font-bold uppercase tracking-wider text-purple-300 border-b border-white/20 pb-1 w-full">{title}</h2>
    {children}
  </div>
);

const SidebarItem = ({ icon: Icon, text, href }) => {
  const className = "inline-flex items-center gap-2 text-xs text-purple-100 truncate w-full";
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
  <div className="flex flex-col gap-2 mb-6" data-page-break="avoid">
    <h2 className="text-sm font-bold text-purple-700 flex items-center gap-2 w-full">
      <span className="w-8 h-0.5 bg-purple-500 shrink-0" />
      {title}
    </h2>
    {children}
  </div>
);

export default CreativeTemplate;

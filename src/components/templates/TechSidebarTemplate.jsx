import { formatDate } from '../../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

const TechSidebarTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-[#FAFBFD] text-slate-800 min-h-[1056px] flex text-sm" style={{ fontFamily: '"Fira Code", "Courier New", Courier, monospace, system-ui' }}>
      {/* Sidebar - 32% */}
      <div className="w-[32%] bg-[#1E293B] text-slate-200 p-6 flex flex-col justify-between">
        <div>
          {personal.profileImage && (
            <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-emerald-400" />
          )}
          <h1 className="text-xl font-bold text-center text-white tracking-tight mb-1">{personal.fullName}</h1>
          <p className="text-emerald-400 text-center text-xs font-semibold mb-6 uppercase tracking-wider">{personal.title}</p>

          <SidebarSection title="[SYS.INFO]">
            {personal.email && <SidebarItem icon={FiMail} text={personal.email} />}
            {personal.phone && <SidebarItem icon={FiPhone} text={personal.phone} />}
            {personal.address && <SidebarItem icon={FiMapPin} text={personal.address} />}
            {personal.linkedin && <SidebarItem icon={FiLinkedin} text="linkedin/in" href={personal.linkedin} />}
            {personal.github && <SidebarItem icon={FiGithub} text="github/dev" href={personal.github} />}
            {personal.portfolio && <SidebarItem icon={FiGlobe} text="portfolio" href={personal.portfolio} />}
          </SidebarSection>

          {skills?.categories?.length > 0 && skills.categories[0].name && (
            <SidebarSection title="[TECH.STACK]">
              {skills.categories.map((cat) => (
                <div key={cat.id} className="mb-3">
                  <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">{cat.name}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700/50">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </SidebarSection>
          )}

          {languages?.length > 0 && languages[0].name && (
            <SidebarSection title="[LANGS]">
              {languages.map((l) => (
                <p key={l.id} className="text-[11px] text-slate-300 mb-1">{l.name} - <span className="text-slate-400">{l.proficiency}</span></p>
              ))}
            </SidebarSection>
          )}
        </div>
        
        <div className="text-[9px] text-slate-500 border-t border-slate-800 pt-4">
          // Compiled using ResumeCraft Pro
        </div>
      </div>

      {/* Main Content Area - 68% */}
      <div className="flex-1 p-8 bg-white flex flex-col justify-start">
        {summary && (
          <MainSection title="console.log('Summary')">
            <p className="text-slate-600 text-xs leading-relaxed">{summary}</p>
          </MainSection>
        )}

        {experience?.length > 0 && experience[0].company && (
          <MainSection title="const experience = [...]">
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 group">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-800 text-sm">{exp.position}</h3>
                  <span className="text-[10px] text-slate-400 font-mono">{formatDate(exp.startDate)} {"=>"} {formatDate(exp.endDate)}</span>
                </div>
                <p className="text-emerald-600 text-xs font-semibold mb-1">@ {exp.company}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </MainSection>
        )}

        {projects?.length > 0 && projects[0].name && (
          <MainSection title="const projects = [...]">
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 p-3 bg-slate-50 rounded border border-slate-100 hover:border-emerald-200 transition-colors">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-slate-800 text-xs">{proj.name}</h4>
                  {proj.github && <a href={proj.github} className="text-[10px] text-emerald-600 hover:underline">src_code</a>}
                </div>
                <p className="text-xs text-slate-500 mt-1">{proj.description}</p>
                {proj.technologies && (
                  <div className="flex gap-1.5 flex-wrap mt-1.5">
                    {proj.technologies.split(',').map((tech, i) => (
                      <span key={i} className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono font-medium">{tech.trim()}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </MainSection>
        )}

        {education?.length > 0 && education[0].college && (
          <MainSection title="class Education { ... }">
            {education.map((edu) => (
              <div key={edu.id} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-800 text-xs">{edu.degree}</h3>
                  <span className="text-[10px] text-slate-400 font-mono">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                </div>
                <p className="text-slate-500 text-xs">{edu.college}{edu.cgpa && ` | GPA: ${edu.cgpa}`}</p>
              </div>
            ))}
          </MainSection>
        )}

        {certifications?.length > 0 && certifications[0].name && (
          <MainSection title="const certifications = [...]">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="border-l-2 border-slate-300 pl-2">
                  <p className="font-semibold text-slate-700 leading-tight">{cert.name}</p>
                  <p className="text-[10px] text-slate-400">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </MainSection>
        )}

        {achievements?.length > 0 && achievements[0].title && (
          <MainSection title="const achievements = [...]">
            {achievements.map((ach) => (
              <div key={ach.id} className="mb-2">
                <p className="font-bold text-xs text-slate-700">{ach.title}</p>
                <p className="text-xs text-slate-500">{ach.description}</p>
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
    <h2 className="text-[11px] font-bold text-emerald-400 tracking-wider mb-2 pb-0.5 border-b border-slate-700 font-mono">{title}</h2>
    {children}
  </div>
);

const SidebarItem = ({ icon: Icon, text, href }) => {
  const content = (
    <span className="flex items-center gap-2 text-xs mb-1.5 text-slate-300 hover:text-white transition-colors">
      <Icon size={12} className="text-emerald-400 shrink-0" /> <span className="truncate">{text}</span>
    </span>
  );
  return href ? <a href={href.startsWith('http') ? href : `https://${href}`} target="_blank" rel="noopener noreferrer" className="truncate">{content}</a> : content;
};

const MainSection = ({ title, children }) => (
  <div className="mb-4">
    <h2 className="text-xs font-bold text-slate-400 mb-2 font-mono">{title}</h2>
    {children}
  </div>
);

export default TechSidebarTemplate;

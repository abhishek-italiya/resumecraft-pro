import { formatDate } from '../../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

const TechSidebarTemplate = ({ data }) => {
  const { personal, summary, education, experience, projects, skills, certifications, languages, achievements } = data;

  return (
    <div className="bg-[#FAFBFD] text-slate-800 min-h-[1123px] flex flex-row text-sm" style={{ fontFamily: '"Fira Code", "Courier New", Courier, monospace, system-ui' }}>
      {/* Sidebar - 32% */}
      <div className="w-[32%] shrink-0 bg-[#1E293B] text-slate-200 p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center shrink-0 mb-2" data-page-break="avoid">
            {personal.profileImage && (
              <img src={personal.profileImage} alt={personal.fullName} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-emerald-400 shrink-0" />
            )}
            <h1 className="text-xl font-bold text-white tracking-tight mb-1 leading-tight">{personal.fullName}</h1>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">{personal.title}</p>
          </div>

          <SidebarSection title="[SYS.INFO]">
            <div className="flex flex-col gap-2">
              {personal.email && <SidebarItem icon={FiMail} text={personal.email} />}
              {personal.phone && <SidebarItem icon={FiPhone} text={personal.phone} />}
              {personal.address && <SidebarItem icon={FiMapPin} text={personal.address} />}
              {personal.linkedin && <SidebarItem icon={FiLinkedin} text="linkedin/in" href={personal.linkedin} />}
              {personal.github && <SidebarItem icon={FiGithub} text="github/dev" href={personal.github} />}
              {personal.portfolio && <SidebarItem icon={FiGlobe} text="portfolio" href={personal.portfolio} />}
            </div>
          </SidebarSection>

          {skills?.categories?.length > 0 && skills.categories[0].name && (
            <SidebarSection title="[TECH.STACK]">
              <div className="flex flex-col gap-3">
                {skills.categories.map((cat) => (
                  <div key={cat.id} className="flex flex-col gap-1.5" data-page-break="avoid">
                    <p className="text-[11px] font-bold text-slate-400 uppercase leading-none">{cat.name}</p>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700/50 resume-text-break">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SidebarSection>
          )}

          {languages?.length > 0 && languages[0].name && (
            <SidebarSection title="[LANGS]">
              <div className="flex flex-col gap-1">
                {languages.map((l) => (
                  <p key={l.id} className="text-[11px] text-slate-300 leading-tight" data-page-break="avoid">{l.name} - <span className="text-slate-400">{l.proficiency}</span></p>
                ))}
              </div>
            </SidebarSection>
          )}
        </div>
        
        <div className="text-[9px] text-slate-500 border-t border-slate-800 pt-4 shrink-0" data-page-break="avoid">
          // Compiled using ResumeCraft Pro
        </div>
      </div>

      {/* Main Content Area - 68% */}
      <div className="flex-1 p-8 bg-white flex flex-col justify-start">
        {summary && (
          <MainSection title="console.log('Summary')">
            <p className="text-slate-600 text-xs leading-relaxed text-justify resume-text-break">{summary}</p>
          </MainSection>
        )}

        {experience?.length > 0 && experience[0].company && (
          <MainSection title="const experience = [...]">
            <div className="flex flex-col gap-4">
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-1 mb-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-800 text-sm leading-snug">{exp.position}</h3>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">{formatDate(exp.startDate)} {"=>"} {formatDate(exp.endDate)}</span>
                  </div>
                  <p className="text-emerald-600 text-xs font-semibold">@ {exp.company}</p>
                  <p className="text-xs text-slate-500 leading-relaxed text-justify resume-text-break">{exp.description}</p>
                </div>
              ))}
            </div>
          </MainSection>
        )}

        {projects?.length > 0 && projects[0].name && (
          <MainSection title="const projects = [...]">
            <div className="flex flex-col gap-4">
              {projects.map((proj) => (
                <div key={proj.id} className="flex flex-col gap-1.5 p-3 bg-slate-50 rounded border border-slate-100 mb-1" data-page-break="avoid">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-slate-800 text-xs leading-snug">{proj.name}</h4>
                    {proj.github && <a href={proj.github} className="text-[10px] text-emerald-600 hover:underline shrink-0 ml-2">src_code</a>}
                  </div>
                  <p className="text-xs text-slate-500 resume-text-break">{proj.description}</p>
                  {proj.technologies && (
                    <div className="flex gap-1.5 flex-wrap mt-1">
                      {proj.technologies.split(',').map((tech, i) => (
                        <span key={i} className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono font-medium resume-text-break">{tech.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </MainSection>
        )}

        {education?.length > 0 && education[0].college && (
          <MainSection title="class Education { ... }">
            <div className="flex flex-col gap-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline gap-4 mb-1" data-page-break="avoid">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-bold text-slate-800 text-xs leading-snug">{edu.degree}</h3>
                    <p className="text-slate-500 text-xs">{edu.college}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-slate-400 font-mono">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                    {edu.cgpa && <p className="text-[10px] text-emerald-600 font-semibold font-mono">GPA: {edu.cgpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </MainSection>
        )}

        {certifications?.length > 0 && certifications[0].name && (
          <MainSection title="const certifications = [...]">
            <div className="grid grid-cols-2 gap-4 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="border-l-2 border-slate-300 pl-2 flex flex-col gap-0.5" data-page-break="avoid">
                  <p className="font-semibold text-slate-700 leading-tight resume-text-break">{cert.name}</p>
                  <p className="text-[10px] text-slate-400 resume-text-break">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </MainSection>
        )}

        {achievements?.length > 0 && achievements[0].title && (
          <MainSection title="const achievements = [...]">
            <div className="flex flex-col gap-2">
              {achievements.map((ach) => (
                <div key={ach.id} className="flex flex-col gap-0.5 mb-1" data-page-break="avoid">
                  <p className="font-bold text-xs text-slate-700 leading-snug">{ach.title}</p>
                  <p className="text-xs text-slate-500 resume-text-break">{ach.description}</p>
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
    <h2 className="text-[11px] font-bold text-emerald-400 tracking-wider border-b border-slate-700 pb-1 font-mono w-full">{title}</h2>
    {children}
  </div>
);

const SidebarItem = ({ icon: Icon, text, href }) => {
  const className = "inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors truncate w-full";
  const content = (
    <>
      <Icon size={12} className="text-emerald-400 shrink-0" />
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
    <h2 className="text-xs font-bold text-slate-400 font-mono border-b border-slate-100 pb-1 w-full">{title}</h2>
    {children}
  </div>
);

export default TechSidebarTemplate;

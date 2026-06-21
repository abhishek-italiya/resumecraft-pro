import { FiPlus, FiTrash2 } from 'react-icons/fi';
import Input from '../common/Input';
import Textarea from '../common/Textarea';

const FormSection = ({ title, icon: Icon, children, defaultOpen = true }) => (
  <details open={defaultOpen} className="glass rounded-2xl overflow-hidden group">
    <summary className="flex items-center gap-3 p-4 cursor-pointer list-none font-semibold text-slate-800 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      {Icon && <Icon className="text-primary" />}
      {title}
    </summary>
    <div className="px-4 pb-4 space-y-4">{children}</div>
  </details>
);

export const PersonalInfoForm = ({ data, onChange }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => onChange('profileImage', ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormSection title="Personal Information">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative">
          {data.profileImage ? (
            <img src={data.profileImage} alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-primary" />
          ) : (
            <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 text-xs">Photo</div>
          )}
          <label className="absolute -bottom-1 -right-1 p-1.5 bg-primary text-white rounded-full cursor-pointer hover:bg-primary/80 transition-colors">
            <FiPlus size={12} />
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
        </div>
        <p className="text-xs text-slate-500">Upload a professional profile photo</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Full Name" value={data.fullName} onChange={(e) => onChange('fullName', e.target.value)} placeholder="John Doe" />
        <Input label="Professional Title" value={data.title} onChange={(e) => onChange('title', e.target.value)} placeholder="Software Engineer" />
        <Input label="Email" type="email" value={data.email} onChange={(e) => onChange('email', e.target.value)} placeholder="john@email.com" />
        <Input label="Phone" value={data.phone} onChange={(e) => onChange('phone', e.target.value)} placeholder="+1 234 567 8900" />
        <Input label="Address" value={data.address} onChange={(e) => onChange('address', e.target.value)} placeholder="City, Country" />
        <Input label="LinkedIn" value={data.linkedin} onChange={(e) => onChange('linkedin', e.target.value)} placeholder="linkedin.com/in/username" />
        <Input label="GitHub" value={data.github} onChange={(e) => onChange('github', e.target.value)} placeholder="github.com/username" />
        <Input label="Portfolio Website" value={data.portfolio} onChange={(e) => onChange('portfolio', e.target.value)} placeholder="yourwebsite.com" />
      </div>
    </FormSection>
  );
};

export const SummaryForm = ({ value, onChange }) => (
  <FormSection title="Professional Summary">
    <Textarea
      label="Summary"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      maxLength={500}
      placeholder="Write a compelling professional summary..."
    />
  </FormSection>
);

export const EducationForm = ({ items, onChange }) => {
  const update = (id, field, val) => {
    onChange(items.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const add = () => {
    onChange([...items, { id: crypto.randomUUID(), college: '', degree: '', cgpa: '', startDate: '', endDate: '' }]);
  };

  const remove = (id) => onChange(items.filter((item) => item.id !== id));

  return (
    <FormSection title="Education">
      {items.map((edu, index) => (
        <div key={edu.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3 relative">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-primary">Education #{index + 1}</span>
            {items.length > 1 && (
              <button onClick={() => remove(edu.id)} className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                <FiTrash2 size={14} />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="College" value={edu.college} onChange={(e) => update(edu.id, 'college', e.target.value)} />
            <Input label="Degree" value={edu.degree} onChange={(e) => update(edu.id, 'degree', e.target.value)} />
            <Input label="CGPA" value={edu.cgpa} onChange={(e) => update(edu.id, 'cgpa', e.target.value)} />
            <Input label="Start Date" type="month" value={edu.startDate} onChange={(e) => update(edu.id, 'startDate', e.target.value)} />
            <div className="flex flex-col gap-1">
              <Input
                label="End Date"
                type="month"
                disabled={edu.endDate === 'Present'}
                value={edu.endDate === 'Present' ? '' : edu.endDate}
                onChange={(e) => update(edu.id, 'endDate', e.target.value)}
              />
              <label className="flex items-center gap-1.5 mt-0.5 cursor-pointer select-none text-xs text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={edu.endDate === 'Present'}
                  onChange={(e) => update(edu.id, 'endDate', e.target.checked ? 'Present' : '')}
                  className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-3.5 w-3.5"
                />
                Currently study here / Present
              </label>
            </div>
          </div>
        </div>
      ))}
      <button onClick={add} className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        <FiPlus /> Add Education
      </button>
    </FormSection>
  );
};

export const ExperienceForm = ({ items, onChange }) => {
  const update = (id, field, val) => {
    onChange(items.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const add = () => {
    onChange([...items, { id: crypto.randomUUID(), company: '', position: '', description: '', startDate: '', endDate: '' }]);
  };

  const remove = (id) => onChange(items.filter((item) => item.id !== id));

  return (
    <FormSection title="Experience">
      {items.map((exp, index) => (
        <div key={exp.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-primary">Experience #{index + 1}</span>
            {items.length > 1 && (
              <button onClick={() => remove(exp.id)} className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                <FiTrash2 size={14} />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Company" value={exp.company} onChange={(e) => update(exp.id, 'company', e.target.value)} />
            <Input label="Position" value={exp.position} onChange={(e) => update(exp.id, 'position', e.target.value)} />
            <Input label="Start Date" type="month" value={exp.startDate} onChange={(e) => update(exp.id, 'startDate', e.target.value)} />
            <div className="flex flex-col gap-1">
              <Input
                label="End Date"
                type="month"
                disabled={exp.endDate === 'Present'}
                value={exp.endDate === 'Present' ? '' : exp.endDate}
                onChange={(e) => update(exp.id, 'endDate', e.target.value)}
              />
              <label className="flex items-center gap-1.5 mt-0.5 cursor-pointer select-none text-xs text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={exp.endDate === 'Present'}
                  onChange={(e) => update(exp.id, 'endDate', e.target.checked ? 'Present' : '')}
                  className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-3.5 w-3.5"
                />
                Currently work here / Present
              </label>
            </div>
          </div>
          <Textarea label="Description" value={exp.description} onChange={(e) => update(exp.id, 'description', e.target.value)} rows={3} />
        </div>
      ))}
      <button onClick={add} className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        <FiPlus /> Add Experience
      </button>
    </FormSection>
  );
};

export const ProjectsForm = ({ items, onChange }) => {
  const update = (id, field, val) => {
    onChange(items.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const add = () => {
    onChange([...items, { id: crypto.randomUUID(), name: '', description: '', technologies: '', github: '', liveDemo: '' }]);
  };

  const remove = (id) => onChange(items.filter((item) => item.id !== id));

  return (
    <FormSection title="Projects">
      {items.map((proj, index) => (
        <div key={proj.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-primary">Project #{index + 1}</span>
            {items.length > 1 && (
              <button onClick={() => remove(proj.id)} className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                <FiTrash2 size={14} />
              </button>
            )}
          </div>
          <Input label="Project Name" value={proj.name} onChange={(e) => update(proj.id, 'name', e.target.value)} />
          <Textarea label="Description" value={proj.description} onChange={(e) => update(proj.id, 'description', e.target.value)} rows={2} />
          <Input label="Technologies Used" value={proj.technologies} onChange={(e) => update(proj.id, 'technologies', e.target.value)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="GitHub Link" value={proj.github} onChange={(e) => update(proj.id, 'github', e.target.value)} />
            <Input label="Live Demo Link" value={proj.liveDemo} onChange={(e) => update(proj.id, 'liveDemo', e.target.value)} />
          </div>
        </div>
      ))}
      <button onClick={add} className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        <FiPlus /> Add Project
      </button>
    </FormSection>
  );
};

export const SkillsForm = ({ data, onChange }) => {
  const updateCategory = (id, field, val) => {
    onChange({
      categories: data.categories.map((cat) => (cat.id === id ? { ...cat, [field]: val } : cat)),
    });
  };

  const addSkill = (catId, skill) => {
    if (!skill.trim()) return;
    updateCategory(catId, 'skills', [...data.categories.find((c) => c.id === catId).skills, skill.trim()]);
  };

  const removeSkill = (catId, index) => {
    const cat = data.categories.find((c) => c.id === catId);
    updateCategory(catId, 'skills', cat.skills.filter((_, i) => i !== index));
  };

  const addCategory = () => {
    onChange({
      categories: [...data.categories, { id: crypto.randomUUID(), name: '', skills: [] }],
    });
  };

  const removeCategory = (id) => {
    onChange({ categories: data.categories.filter((c) => c.id !== id) });
  };

  return (
    <FormSection title="Skills">
      {data.categories.map((cat) => (
        <div key={cat.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="flex justify-between items-center gap-2">
            <Input label="Category Name" value={cat.name} onChange={(e) => updateCategory(cat.id, 'name', e.target.value)} placeholder="e.g. Frontend" />
            {data.categories.length > 1 && (
              <button onClick={() => removeCategory(cat.id)} className="p-1.5 text-red-500 mt-6"><FiTrash2 size={14} /></button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {skill}
                <button onClick={() => removeSkill(cat.id, i)} className="hover:text-red-500">&times;</button>
              </span>
            ))}
          </div>
          <SkillInput onAdd={(skill) => addSkill(cat.id, skill)} />
        </div>
      ))}
      <button onClick={addCategory} className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        <FiPlus /> Add Category
      </button>
    </FormSection>
  );
};

const SkillInput = ({ onAdd }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAdd(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <input
      type="text"
      placeholder="Type skill and press Enter"
      onKeyDown={handleKeyDown}
      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white"
    />
  );
};

export const CertificationsForm = ({ items, onChange }) => {
  const update = (id, field, val) => {
    onChange(items.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const add = () => onChange([...items, { id: crypto.randomUUID(), name: '', issuer: '', date: '' }]);
  const remove = (id) => onChange(items.filter((item) => item.id !== id));

  return (
    <FormSection title="Certifications">
      {items.map((cert, index) => (
        <div key={cert.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-primary">Certification #{index + 1}</span>
            {items.length > 1 && <button onClick={() => remove(cert.id)} className="p-1.5 text-red-500"><FiTrash2 size={14} /></button>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Name" value={cert.name} onChange={(e) => update(cert.id, 'name', e.target.value)} />
            <Input label="Issuer" value={cert.issuer} onChange={(e) => update(cert.id, 'issuer', e.target.value)} />
            <Input label="Date" type="month" value={cert.date} onChange={(e) => update(cert.id, 'date', e.target.value)} />
          </div>
        </div>
      ))}
      <button onClick={add} className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        <FiPlus /> Add Certification
      </button>
    </FormSection>
  );
};

export const LanguagesForm = ({ items, onChange }) => {
  const update = (id, field, val) => {
    onChange(items.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const add = () => onChange([...items, { id: crypto.randomUUID(), name: '', proficiency: 'Intermediate' }]);
  const remove = (id) => onChange(items.filter((item) => item.id !== id));

  return (
    <FormSection title="Languages">
      {items.map((lang) => (
        <div key={lang.id} className="flex gap-3 items-end">
          <div className="flex-1 grid grid-cols-2 gap-3">
            <Input label="Language" value={lang.name} onChange={(e) => update(lang.id, 'name', e.target.value)} />
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Proficiency</label>
              <select
                value={lang.proficiency}
                onChange={(e) => update(lang.id, 'proficiency', e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Fluent</option>
                <option>Native</option>
              </select>
            </div>
          </div>
          {items.length > 1 && (
            <button onClick={() => remove(lang.id)} className="p-2 text-red-500 mb-1"><FiTrash2 size={14} /></button>
          )}
        </div>
      ))}
      <button onClick={add} className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        <FiPlus /> Add Language
      </button>
    </FormSection>
  );
};

export const AchievementsForm = ({ items, onChange }) => {
  const update = (id, field, val) => {
    onChange(items.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const add = () => onChange([...items, { id: crypto.randomUUID(), title: '', description: '' }]);
  const remove = (id) => onChange(items.filter((item) => item.id !== id));

  return (
    <FormSection title="Achievements">
      {items.map((ach, index) => (
        <div key={ach.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-primary">Achievement #{index + 1}</span>
            {items.length > 1 && <button onClick={() => remove(ach.id)} className="p-1.5 text-red-500"><FiTrash2 size={14} /></button>}
          </div>
          <Input label="Title" value={ach.title} onChange={(e) => update(ach.id, 'title', e.target.value)} />
          <Textarea label="Description" value={ach.description} onChange={(e) => update(ach.id, 'description', e.target.value)} rows={2} />
        </div>
      ))}
      <button onClick={add} className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        <FiPlus /> Add Achievement
      </button>
    </FormSection>
  );
};

export default FormSection;

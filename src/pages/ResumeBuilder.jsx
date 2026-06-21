import { useState, useRef } from 'react';
import {
  FiDownload, FiPrinter, FiSave, FiRotateCcw, FiUpload, FiCopy,
  FiEye, FiEdit3, FiExternalLink,
} from 'react-icons/fi';
import { useResume } from '../hooks/useResume';
import { TEMPLATES } from '../utils/constants';
import { downloadPDF, printResume } from '../utils/pdfExport';
import ResumePreview, { ScaledResumePreview } from '../components/preview/ResumePreview';
import {
  PersonalInfoForm, SummaryForm, EducationForm, ExperienceForm,
  ProjectsForm, SkillsForm, CertificationsForm, LanguagesForm, AchievementsForm,
} from '../components/forms/ResumeForms';
import Button from '../components/common/Button';

const ResumeBuilder = () => {
  const {
    resume, updatePersonal, updateSection, setTemplate,
    resetResume, handleExportJSON, handleImportJSON, handleCopyData,
    lastSaved, showToast,
  } = useResume();

  const [mobileView, setMobileView] = useState('form');
  const [downloading, setDownloading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadPDF('resume-pdf-export', resume.personal.fullName || 'resume');
      showToast('PDF downloaded successfully');
    } catch (err) {
      console.error('PDF generation error:', err);
      showToast('Failed to generate PDF', 'error');
    }
    setDownloading(false);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) handleImportJSON(file);
    e.target.value = '';
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 w-full">
      {/* Off-screen container for PDF export to bypass mobile hidden panel and CSS transform issues */}
      <div
        id="resume-print-container"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          width: '595px', // Matches A4_WIDTH
        }}
      >
        <ResumePreview data={resume} id="resume-pdf-export" />
      </div>

      {/* Toolbar */}
      <div className="shrink-0 z-30 glass border-b border-slate-200/50 dark:border-slate-700/50">
        {/* Row 1: Template + status */}
        <div className="max-w-[1800px] mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <select
              value={resume.template}
              onChange={(e) => setTemplate(e.target.value)}
              className="min-w-0 flex-1 sm:flex-none sm:max-w-xs px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium truncate"
            >
              {TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
            {lastSaved && (
              <span className="hidden sm:flex text-xs text-success items-center gap-1 shrink-0">
                <FiSave size={12} /> Saved
              </span>
            )}
          </div>
          <Button
            href="https://digitalheroesco.com"
            variant="primary"
            size="sm"
            className="shrink-0 !text-xs sm:!text-sm"
          >
            <span className="hidden sm:inline">Built for Digital Heroes</span>
            <span className="sm:hidden">Digital Heroes</span>
            <FiExternalLink className="shrink-0" />
          </Button>
        </div>

        {/* Row 2: Actions — horizontal scroll on mobile */}
        <div className="max-w-[1800px] mx-auto px-3 sm:px-4 pb-2.5 sm:pb-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <ToolbarBtn icon={FiDownload} label="PDF" onClick={handleDownload} loading={downloading} />
            <ToolbarBtn icon={FiPrinter} label="Print" onClick={printResume} />
            <ToolbarBtn icon={FiUpload} label="Import" onClick={() => fileInputRef.current?.click()} />
            <ToolbarBtn icon={FiCopy} label="Copy" onClick={handleCopyData} />
            <ToolbarBtn icon={FiSave} label="Export" onClick={handleExportJSON} />
            <ToolbarBtn icon={FiRotateCcw} label="Reset" onClick={resetResume} danger />
            <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
          </div>
        </div>

        {/* Mobile Edit / Preview tabs */}
        <div className="lg:hidden flex border-t border-slate-200/50 dark:border-slate-700/50">
          <button
            type="button"
            onClick={() => setMobileView('form')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
              mobileView === 'form'
                ? 'text-primary border-b-2 border-primary bg-primary/5'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <FiEdit3 size={16} /> Edit Form
          </button>
          <button
            type="button"
            onClick={() => setMobileView('preview')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
              mobileView === 'preview'
                ? 'text-primary border-b-2 border-primary bg-primary/5'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <FiEye size={16} /> Preview
          </button>
        </div>
      </div>

      {/* Main split layout */}
      <div className="flex flex-1 min-h-0 w-full max-w-[1800px] mx-auto flex-col lg:flex-row">
        {/* Form panel — 40% */}
        <div
          className={`
            lg:w-[40%] xl:w-[38%] lg:min-w-[300px] lg:max-w-[520px]
            flex flex-col min-h-0
            border-r border-slate-200/50 dark:border-slate-700/50
            ${mobileView === 'preview' ? 'hidden lg:flex' : 'flex flex-1 lg:flex-none'}
          `}
        >
          <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 lg:p-5 space-y-3 sm:space-y-4">
            <PersonalInfoForm data={resume.personal} onChange={updatePersonal} />
            <SummaryForm value={resume.summary} onChange={(val) => updateSection('summary', val)} />
            <ExperienceForm items={resume.experience} onChange={(val) => updateSection('experience', val)} />
            <EducationForm items={resume.education} onChange={(val) => updateSection('education', val)} />
            <ProjectsForm items={resume.projects} onChange={(val) => updateSection('projects', val)} />
            <SkillsForm data={resume.skills} onChange={(val) => updateSection('skills', val)} />
            <CertificationsForm items={resume.certifications} onChange={(val) => updateSection('certifications', val)} />
            <LanguagesForm items={resume.languages} onChange={(val) => updateSection('languages', val)} />
            <AchievementsForm items={resume.achievements} onChange={(val) => updateSection('achievements', val)} />
          </div>
        </div>

        {/* Preview panel — 60% */}
        <div
          className={`
            lg:flex-1 flex flex-col min-h-0
            bg-slate-100 dark:bg-slate-900/60
            ${mobileView === 'form' ? 'hidden lg:flex' : 'flex flex-1'}
          `}
        >
          <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 lg:p-6">
            <div className="sticky top-0 z-10 mb-3 lg:hidden">
              <p className="text-xs text-center text-slate-500 dark:text-slate-400 bg-slate-200/80 dark:bg-slate-800/80 rounded-lg py-2 px-3">
                Pinch or scroll to view full resume preview
              </p>
            </div>
            <ScaledResumePreview data={resume} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolbarBtn = ({ icon: Icon, label, onClick, loading, danger }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={loading}
    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs font-medium rounded-lg transition-colors shrink-0 ${
      danger
        ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 bg-white/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60'
    }`}
  >
    <Icon size={14} className="shrink-0" />
    <span>{loading ? '...' : label}</span>
  </button>
);

export default ResumeBuilder;

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { defaultResume } from '../utils/constants';
import { saveResume, loadResume, clearResume, exportJSON, importJSON, copyToClipboard } from '../utils/storage';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState(() => loadResume() || defaultResume);
  const [lastSaved, setLastSaved] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      saveResume(resume);
      setLastSaved(new Date());
    }, 500);
    return () => clearTimeout(timer);
  }, [resume]);

  const updateResume = useCallback((updates) => {
    setResume((prev) => ({ ...prev, ...updates }));
  }, []);

  const updatePersonal = useCallback((field, value) => {
    setResume((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  }, []);

  const updateSection = useCallback((section, data) => {
    setResume((prev) => ({ ...prev, [section]: data }));
  }, []);

  const setTemplate = useCallback((templateId) => {
    setResume((prev) => ({ ...prev, template: templateId }));
  }, []);

  const resetResume = useCallback(() => {
    setResume(defaultResume);
    clearResume();
    showToast('Resume reset to default');
  }, [showToast]);

  const handleExportJSON = useCallback(() => {
    exportJSON(resume);
    showToast('Resume exported as JSON');
  }, [resume, showToast]);

  const handleImportJSON = useCallback(async (file) => {
    try {
      const data = await importJSON(file);
      setResume(data);
      showToast('Resume imported successfully');
    } catch {
      showToast('Failed to import JSON', 'error');
    }
  }, [showToast]);

  const handleCopyData = useCallback(async () => {
    const success = await copyToClipboard(resume);
    showToast(success ? 'Resume data copied to clipboard' : 'Failed to copy', success ? 'success' : 'error');
  }, [resume, showToast]);

  return (
    <ResumeContext.Provider
      value={{
        resume,
        updateResume,
        updatePersonal,
        updateSection,
        setTemplate,
        resetResume,
        handleExportJSON,
        handleImportJSON,
        handleCopyData,
        lastSaved,
        toast,
        showToast,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error('useResume must be used within ResumeProvider');
  return context;
};

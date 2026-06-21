import { STORAGE_KEY } from './constants';

export const saveResume = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
};

export const loadResume = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const clearResume = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const exportJSON = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.personal?.fullName?.replace(/\s+/g, '_') || 'resume'}_data.json`;
  a.click();
  URL.revokeObjectURL(url);
};

export const importJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        resolve(data);
      } catch {
        reject(new Error('Invalid JSON file'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};

export const copyToClipboard = async (data) => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    return true;
  } catch {
    return false;
  }
};

export const getTheme = () => {
  return localStorage.getItem('resumecraft-pro-theme') || 'light';
};

export const setTheme = (theme) => {
  localStorage.setItem('resumecraft-pro-theme', theme);
};

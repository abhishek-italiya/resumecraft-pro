export const validateContact = (form) => {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Name is required';
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};

export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  if (dateStr === 'Present') return 'Present';
  try {
    const parts = dateStr.split('-');
    if (parts.length < 2) return dateStr;
    const [year, month] = parts;
    const monthVal = parseInt(month, 10);
    if (isNaN(monthVal) || monthVal < 1 || monthVal > 12) return dateStr;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[monthVal - 1]} ${year}`;
  } catch {
    return dateStr;
  }
};

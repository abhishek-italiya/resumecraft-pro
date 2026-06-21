import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX, FiAlertCircle } from 'react-icons/fi';

const Toast = ({ message, type = 'success' }) => {
  const icons = {
    success: <FiCheck className="text-success" />,
    error: <FiX className="text-red-500" />,
    info: <FiAlertCircle className="text-primary" />,
  };

  const colors = {
    success: 'border-success/30 bg-success/10',
    error: 'border-red-500/30 bg-red-500/10',
    info: 'border-primary/30 bg-primary/10',
  };

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3 rounded-xl glass shadow-xl border border-slate-200/50 dark:border-slate-700/50"
        >
          <div className={`p-1.5 rounded-lg ${colors[type]}`}>
            {icons[type]}
          </div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;

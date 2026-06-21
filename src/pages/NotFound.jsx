import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import Button from '../components/common/Button';

const NotFound = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <p className="text-8xl font-bold gradient-text mb-4">404</p>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Page Not Found</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button to="/" size="lg"><FiHome /> Go Home</Button>
        <Button to="/builder" variant="outline" size="lg"><FiArrowLeft /> Build Resume</Button>
      </div>
    </motion.div>
  </div>
);

export default NotFound;

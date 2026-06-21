import { motion } from 'framer-motion';

const SectionHeading = ({ badge, title, subtitle, center = true, className = '' }) => (
  <div className={`${center ? 'text-center' : ''} ${className}`}>
    {badge && (
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary"
      >
        {badge}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;

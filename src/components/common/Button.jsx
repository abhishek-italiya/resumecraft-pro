import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary: 'gradient-bg text-white hover:shadow-lg hover:shadow-primary/30 border-2 border-transparent',
  secondary: 'bg-white dark:bg-slate-800 text-primary border-2 border-primary hover:bg-primary hover:text-white',
  outline: 'border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary',
  ghost: 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-2 border-transparent',
  accent: 'bg-accent text-white hover:shadow-lg hover:shadow-accent/30 border-2 border-transparent',
  danger: 'bg-red-500 text-white hover:bg-red-600 border-2 border-transparent',
};

const sizes = {
  sm: 'px-3 py-2 text-xs sm:px-4 sm:text-sm',
  md: 'px-5 py-2.5 text-sm sm:px-6',
  lg: 'px-6 py-3 text-sm sm:px-8 sm:text-base',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) => {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

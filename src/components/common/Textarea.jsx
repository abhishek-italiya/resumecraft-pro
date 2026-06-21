const Textarea = ({ label, error, maxLength, value, className = '', ...props }) => (
  <div className="space-y-1.5">
    {label && (
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
        {maxLength && (
          <span className="text-xs text-slate-400">
            {(value || '').length}/{maxLength}
          </span>
        )}
      </div>
    )}
    <textarea
      value={value}
      maxLength={maxLength}
      className={`w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none ${error ? 'border-red-500' : ''} ${className}`}
      {...props}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

export default Textarea;

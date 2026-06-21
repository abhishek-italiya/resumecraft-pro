import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const Accordion = ({ items }) => {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const AccordionItem = ({ question, answer }) => {
  return (
    <details className="group glass rounded-2xl overflow-hidden">
      <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-slate-800 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
        {question}
        <FiChevronDown className="text-primary transition-transform group-open:rotate-180" />
      </summary>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-5 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed"
      >
        {answer}
      </motion.div>
    </details>
  );
};

export default Accordion;

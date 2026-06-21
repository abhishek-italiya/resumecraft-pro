import { useNavigate } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { AnimatedCard, PageTransition } from '../utils/animations';
import { TEMPLATES } from '../utils/constants';
import { useResume } from '../hooks/useResume';

const Templates = () => {
  const navigate = useNavigate();
  const { setTemplate } = useResume();

  const handleUseTemplate = (templateId) => {
    setTemplate(templateId);
    navigate('/builder');
  };

  return (
    <PageTransition>
      <section className="pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Templates"
            title="Choose Your Perfect Template"
            subtitle="Professionally designed templates to make your resume stand out"
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {TEMPLATES.map((t, i) => (
              <AnimatedCard key={t.id} delay={i * 0.15}>
                <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="h-64 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${t.color}15, ${t.color}30)` }}>
                    <div className="absolute inset-6 bg-white rounded-xl shadow-xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{t.description}</p>
                    <ul className="space-y-2 mb-6">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <FiCheck className="text-success shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button onClick={() => handleUseTemplate(t.id)} className="w-full">
                      Use Template
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Templates;

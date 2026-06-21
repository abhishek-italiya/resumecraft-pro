import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import Button from '../components/common/Button';
import { PageTransition } from '../utils/animations';
import { validateContact } from '../utils/validation';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContact(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageTransition>
      <section className="pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Contact"
            title="Get In Touch"
            subtitle="Have questions or feedback? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <FiMail className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href="mailto:abhiitaliya5@gmail.com" className="font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">
                      abhiitaliya5@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <FiMapPin className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium text-slate-900 dark:text-white">Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <FiPhone className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Developer</p>
                    <p className="font-medium text-slate-900 dark:text-white">Abhishek Italiya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <FiCheckCircle className="text-5xl text-success mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input label="Name" value={form.name} onChange={handleChange('name')} error={errors.name} placeholder="Your name" />
                      <Input label="Email" type="email" value={form.email} onChange={handleChange('email')} error={errors.email} placeholder="your@email.com" />
                    </div>
                    <Input label="Subject" value={form.subject} onChange={handleChange('subject')} error={errors.subject} placeholder="How can we help?" />
                    <Textarea label="Message" value={form.message} onChange={handleChange('message')} error={errors.message} rows={5} placeholder="Write your message here..." />
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <FiSend /> Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;

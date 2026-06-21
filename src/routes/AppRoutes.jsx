import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Templates from '../pages/Templates';
import ResumeBuilder from '../pages/ResumeBuilder';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyDetails';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="features" element={<Features />} />
      <Route path="templates" element={<Templates />} />
      <Route path="builder" element={<ResumeBuilder />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;

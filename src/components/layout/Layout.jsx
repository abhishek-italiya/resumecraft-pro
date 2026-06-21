import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Toast from '../common/Toast';
import { useResume } from '../../hooks/useResume';

const Layout = () => {
  const { toast } = useResume();
  const location = useLocation();
  const isBuilder = location.pathname.startsWith('/builder');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [location.pathname]);

  return (
    <div
      className={`${
        isBuilder
          ? 'h-screen h-dvh overflow-hidden'
          : 'min-h-screen min-h-dvh'
      } flex flex-col w-full bg-light-bg dark:bg-dark-bg transition-colors duration-300`}
    >
      <Navbar />
      <main
        className={`flex-1 w-full ${
          isBuilder
            ? 'flex flex-col min-h-0 pt-16 lg:pt-20'
            : 'pt-16 lg:pt-20'
        }`}
      >
        <Outlet />
      </main>
      {!isBuilder && <Footer />}
      <Toast message={toast?.message} type={toast?.type} />
    </div>
  );
};

export default Layout;

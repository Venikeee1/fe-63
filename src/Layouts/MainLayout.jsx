import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<>Loading</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

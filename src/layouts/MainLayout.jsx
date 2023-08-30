import { Outlet } from 'react-router-dom';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />

      <main>
        {' '}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

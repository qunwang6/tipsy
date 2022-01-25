import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex grow flex-col items-center p-6 md:p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

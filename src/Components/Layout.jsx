
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header'
import Footer from './Footer';
function Layout() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(current);
  }, []);

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
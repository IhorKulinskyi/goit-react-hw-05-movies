import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './SharedLayout.scss';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

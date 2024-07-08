import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="/movies">Movie Search</Link></li> 
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
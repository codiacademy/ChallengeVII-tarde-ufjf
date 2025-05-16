import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link className={location.pathname === '/' ? 'active' : ''} to="/">Dashboard</Link>
          </li>
          <li>
            <Link className={location.pathname === '/gastos' ? 'active' : ''} to="/gastos">Gastos</Link>
          </li>
          <li>
            <Link className={location.pathname === '/vendas' ? 'active' : ''} to="/vendas">Vendas</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

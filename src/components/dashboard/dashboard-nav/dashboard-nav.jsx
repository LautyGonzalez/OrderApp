import { useState } from "react";
import "./dashboard-nav.css"
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; 

const DashboardNav= () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className="nav-links">
        <h2 className="dashboard-content">OrderApp</h2>
        <NavLink to="/admin" end>
          Inicio
        </NavLink>
        <NavLink to="/admin/orders">
          Pedidos
        </NavLink>
        <NavLink to="/admin/branches">
          Sucursales
        </NavLink>
        <NavLink to="/admin/menu">
          Menú
        </NavLink>
      </nav>
    </div>
  );
}

export default DashboardNav;
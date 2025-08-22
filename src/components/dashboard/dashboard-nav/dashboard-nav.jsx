import { useState } from "react";
import "./dashboard-nav.css"
import { Menu, X } from "lucide-react";

const DashboardNav= () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className="nav-links">
        <button>Inicio</button>
        <button>Pedidos</button>
        <button>Sucursales</button>
        <button>Menú</button>
      </nav>
    </div>
  );
}

export default DashboardNav;
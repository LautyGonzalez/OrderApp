import { useState } from "react";
import "./dashboard-nav.css"

function DashboardNav() {
  return (
    <div className="container">
        <h1 className="tittle">Order</h1>
        <div className="navbar">
            <li>
                <ul>
                    <button>Inicio</button>
                </ul>
                <ul>
                    <button>Pedidos</button>
                </ul>
                <ul>
                    <button>Sucursales</button>
                </ul>
                <ul>
                    <button>Menu</button>
                </ul>
            </li>
        </div>
      
    </div>
  );
}

export default DashboardNav;
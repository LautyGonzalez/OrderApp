// src/pages/admin/Admin.jsx
import { sucursales } from "./dataSucursales";
import CardSucursal from "../library/cardSucursal/CardSucursal";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-container">
      <h1 className="titulo">Sucursales</h1>
      <div className="cards-container">
        {sucursales.map((sucursal) => (
          <CardSucursal key={sucursal.id} {...sucursal} />
        ))}
      </div>
    </div>
  );
};

export default Admin;

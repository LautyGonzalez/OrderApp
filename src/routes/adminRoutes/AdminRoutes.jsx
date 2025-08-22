import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import Admin from "../components/admin/Admin";          // Sucursales
import Products from "../components/admin/Products";
import Menu from "../components/admin/Menu";
import Employees from "../components/admin/Employees";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Dashboard />}>
        <Route index element={<Admin />} />          {/* Default: sucursales */}
        <Route path="products" element={<Products />} />
        <Route path="menu" element={<Menu />} />
        <Route path="employees" element={<Employees />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;

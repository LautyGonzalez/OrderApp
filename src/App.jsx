import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import SuperAdmin from "./components/superAdmin/SuperAdmin";
import Admin from "./components/admin/Admin";
import Products from "./components/products/Products";
import Menu from "./components/menu/Menu";
import Employees from "./components/employees/Employees";
import MainLayout from "./components/mainLayiut/MainLayout";
import EmployeHome from "./components/employeHome/EmployeHome";

function App() {
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas privadas con layout que incluye Navbar */}
        <Route element={<MainLayout />}>
          {/* SuperAdmin */}
          <Route path="/superadmin" element={<SuperAdmin />} />

          {/* Admin con Dashboard */}
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<Admin />} />
            <Route path="products" element={<Products />} />
            <Route path="menu" element={<Menu />} />
            <Route path="employees" element={<Employees />} />
          </Route>

          {/* Empleado */}
          <Route path="/employee" element={<EmployeHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

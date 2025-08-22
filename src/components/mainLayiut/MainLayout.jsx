import { Outlet } from "react-router-dom";
import DashboardNav from "../dashboard/dashboard-nav/dashboard-nav";

function MainLayout() {
  return (
    <>
      <DashboardNav />
      <Outlet /> {/* acá se va a renderizar el contenido según la ruta */}
    </>
  );
}

export default MainLayout;

import { useState } from "react";
import DashboardNav from "./dashboard-nav/dashboard-nav";
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <div className="dashboard-content">
        <h1>OrderApp</h1>
        <p>Aquí va el contenido del dashboard...</p>
      </div>
    </div>
  );
}

export default Dashboard;
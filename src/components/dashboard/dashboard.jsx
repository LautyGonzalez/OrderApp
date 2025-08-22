import { useState } from "react";
import DashboardNav from "./dashboard-nav/dashboard-nav";
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNav />
    </div>
  );
}

export default Dashboard;
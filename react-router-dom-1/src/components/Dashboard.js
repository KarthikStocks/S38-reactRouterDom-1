import React from "react";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

function Dashboard() {
  return (
    <div className="info">
      <TopNavigation />
      <h1>Stock Market Dashboard</h1>
      <p>Overview of market trends and stock performance.</p>
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;

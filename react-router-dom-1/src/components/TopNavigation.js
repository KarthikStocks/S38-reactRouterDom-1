import React from "react";
import { Link } from "react-router-dom";

function TopNavigation() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/market-insights">Market Insights</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/">Signout</Link>
    </nav>
  );
}

export default TopNavigation;

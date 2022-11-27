import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="layout">
        <ul className="menu bg-base-100 w-56">
          <li>
            <Link to="myorders">My Orders</Link>
          </li>
          <li>
            <Link to="addproducts">Add a Product</Link>
          </li>
          <li>
            <Link to="allsellers">All Sellers</Link>
          </li>
          <li>
            <Link to="allbuyers">All Buyers</Link>
          </li>
        </ul>
        <div>
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

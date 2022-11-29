import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useBuyer from "../../../Hooks/useBuyer";
import useSeller from "../../../Hooks/useSeller";
import { AuthContext } from "../../Contexts/UserContexts";
import Navbar from "../../shared/Navbar/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="layout">
        <ul className="menu bg-base-100 w-56">
          {isBuyer && (
            <li>
              <Link to="myorders">My Bookings</Link>
            </li>
          )}
          {isSeller && (
            <>
            <li>
              <Link to="addproducts">Add a Product</Link>
            </li>
            <li>
              <Link to="myproducts">My Products</Link>
            </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <Link to="allsellers">All Sellers</Link>
              </li>
              <li>
                <Link to="allbuyers">All Buyers</Link>
              </li>
            </>
          )}
        </ul>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

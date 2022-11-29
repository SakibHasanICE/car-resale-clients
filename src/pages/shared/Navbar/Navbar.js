import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContexts";
import img from "../../images/navimg.jpg"

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  
  const handleLogOut=()=>{
     logOut()
    .then(()=>{})
    .catch=(err=>console.log(err))
  }
    const menus = (
        <React.Fragment>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {user?.email?
          <>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={()=>handleLogOut()}>Sign Out</button>
          </li>
          </>
          :<li>
            <Link to="login">Login</Link>
           </li>
          }
        </React.Fragment>
        );
  return (
    <div>
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {menus}
            
          </ul>
        </div>
        <img className="w-20 ml-14 rounded-2xl" src={img} alt="" />
        <Link to='/' className="btn btn-ghost normal-case text-xl">Car Resale</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menus}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Navbar;

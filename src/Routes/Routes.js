import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CatagoryList from "../pages/CatagoryList/CatagoryList/CatagoryList";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard"
import MyBooking from "../pages/Dashboard/MyBooking/MyBooking"
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct"
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers"
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers"
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoute from "./SellerRoute/SellerRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path: "/catagory/:CatagoryName",
                element:<PrivateRoutes><CatagoryList></CatagoryList></PrivateRoutes>,
                loader: ({ params }) =>
                fetch(`http://localhost:5000/catagory/${params.CatagoryName}`),
              },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>,
        children:[
            {
                path:'myorders',
                element:<BuyerRoute><MyBooking></MyBooking></BuyerRoute>,
            },
            {
                path:'addproducts',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>,
            },
            {
                path: 'allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>,
            },
            {
                path: 'allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>,
                loader:()=>fetch('http://localhost:5000/users')
            },
    ]
    }
])
export default router;
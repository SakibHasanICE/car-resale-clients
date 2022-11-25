import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CatagoryList from "../pages/CatagoryList/CatagoryList/CatagoryList";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
                element: <CatagoryList></CatagoryList>,
                loader: ({ params }) =>
                fetch(`http://localhost:5000/catagory/${params.CatagoryName}`),
              },
        ]
    }
])
export default router;
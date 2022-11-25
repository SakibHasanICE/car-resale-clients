import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CatagoryList from "../pages/CatagoryList/CatagoryList/CatagoryList";
import Home from "../pages/Home/Home/Home";

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
                path: "/catagory",
                element: <CatagoryList></CatagoryList>,
                // loader: ({ params }) =>
                //   fetch(`https://quick-delivery-server.vercel.app/service/${params.id}`),
              },
        ]
    }
])
export default router;
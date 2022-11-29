import { RouterProvider } from "react-router-dom";
import {Helmet} from "react-helmet";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div
      className="max w-[1220px] mx-auto
    "
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Car Resale</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

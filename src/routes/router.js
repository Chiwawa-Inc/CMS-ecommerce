import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Contact from "../pages/contact";
import Products from "../pages/products";
import Services from "../pages/services";
import Home from "../pages/home"

// import
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>
            },

            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;

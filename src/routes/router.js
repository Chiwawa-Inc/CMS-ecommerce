import { createBrowserRouter } from "react-router-dom"

import App from "../App";
import Contact from "../pages/contact";
import Products from "../pages/products";
import Services from "../pages/services";
import Home from "../pages/home"
import Blogs from "../pages/Blogs"
import ServiceDetailPage  from "../pages/services/serviceDetailPage";

// import
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
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
                path: "/blogs",
                element: <Blogs/>,
            },

            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/servicedetailpage",
                element: <ServiceDetailPage/>,
            },
        ],
    },
])

export default router

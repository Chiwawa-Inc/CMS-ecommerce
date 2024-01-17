import { createHashRouter } from "react-router-dom"

import App from "../App";
import Contact from "../pages/contact";
import Products from "../pages/products";
import Services from "../pages/services";
import Home from "../pages/home"
import Blogs from "../pages/Blogs"
import ServiceDetailPage  from "../pages/services/serviceDetailPage";
import DetailPage from "../pages/services/Electrical/Auditing";
import InstalllDetailPage from "../pages/services/Electrical/Installation";
import AnalysisDetailPage from "../pages/services/Electrical/Analysis";
import ProtectionDetailPage from "../pages/services/Electrical/Protection";

// import
const router = createHashRouter([
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
            {
                path: "electricalAuditing",
                element: <DetailPage/>,
            },
            {
                path: "installation",
                element: <InstalllDetailPage/>
            },
            {
                path: "analysis",
                element: <AnalysisDetailPage/>
            },
            {
                path: "protection",
                element: <ProtectionDetailPage/>
            },
        ],
    },
])

export default router

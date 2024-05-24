import { createHashRouter } from "react-router-dom"

import App from "../App";
import Contact from "../pages/contact";
import Products from "../pages/products";
import Services from "../pages/services";
import Home from "../pages/home"
import Blogs from "../pages/Blogs"
import MepDetailPage  from "../pages/services/MepDetailPage";
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
                path: "/blogs",
                element: <Blogs/>,
            },
            
            {
                path: "/contact",
                element: <Contact />,
            },
            
            {
                path: "/services",
                element: <Services />,
            },

            {
                path: "services/mepDetailPage",
                element: <MepDetailPage/>,
            },
            {
                path: "services/electricalAuditing",
                element: <DetailPage/>,
            },
            {
                path: "services/installation",
                element: <InstalllDetailPage/>
            },
            {
                path: "services/analysis",
                element: <AnalysisDetailPage/>
            },
            {
                path: "services/protection",
                element: <ProtectionDetailPage/>
            },
        ],
    },
])

export default router

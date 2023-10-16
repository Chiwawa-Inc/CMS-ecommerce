import { useEffect, useState } from "react"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import moment from "moment"
import { Outlet } from "react-router-dom"

import Navbar from "./components/Navbar"

const api = new WooCommerceRestApi({
    url: "https://autotechpl.com",
    consumerKey: "ck_79059382deb2cd289bab5cdf3005cce1e3f96e73",
    consumerSecret: "cs_29463a2ba26b158b68ab85f9e09610604a93e181",
    version: "wc/v3",
})

function App() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchOrders()
    }, [])

    let fetchOrders = () => {
        api.get("products", {
            per_page: 20,
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data, "----------------------")
                    setOrders(response.data)
                }
            })
            .catch((error) => {})
    }

    return (
        <div className="App">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default App

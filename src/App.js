import { useEffect, useState } from "react"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import moment from "moment"
import { Outlet } from "react-router-dom"

import Navbar from "./components/Navbar"

const api = new WooCommerceRestApi({
    url: "https://server.autotechpl.com",
    consumerKey: "ck_1872a1428a4b359d525af3461e0ed652fdffcdd4",
    consumerSecret: "cs_3668d8c0f2a2323c2c941c7722450394dae31549",
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
                    setOrders(response.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="App">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default App

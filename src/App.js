import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import moment from "moment";

const api = new WooCommerceRestApi({
    url: "https://autotechpl.com",
    consumerKey: "ck_79059382deb2cd289bab5cdf3005cce1e3f96e73",
    consumerSecret: "cs_29463a2ba26b158b68ab85f9e09610604a93e181",
    version: "wc/v3",
});

function App() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    let fetchOrders = () => {
        api.get("products", {
            per_page: 20,
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data, "----------------------");
                    setOrders(response.data);
                }
            })
            .catch((error) => {});
    };

    return (
        <div className="App">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Adress</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td>{order.id}</td>
                                <td>
                                    {moment(order.date).format("DD-MM-YYYY")}
                                </td>
                                <td>{order.total}</td>
                                <td>
                                    {order.billing && order.billing.first_name}
                                </td>
                                <td>{order.billing && order.billing.email}</td>
                                <td>
                                    {order.billing && order.billing.address_1}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default App;

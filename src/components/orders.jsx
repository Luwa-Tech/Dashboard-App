import {ordersData, groupNumber} from "../data"
import OrdersChart from "../components/ordersChart"

const Orders = () => {
    const ordersEls = ordersData.map(item => {
        return (
            <div className="orders_data-container">
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.type}</p>
                </div>

                <div>
                    <h3>+${groupNumber(item.change)}</h3>
                    <p>items {item.items}</p>
                </div>
            </div>
        )
    })

    return (
        <section className="orders-section">
                <section>
                <img className="logo" src="./logo.png" alt="logo"/> 
                <p>Orders Today</p>
                </section>

                <section>
                    <p>Amount</p>
                    <h3>${groupNumber(4500)}</h3>
                </section>

                <section>
                    {ordersEls}
                </section>

                <section>
                    <p>Split by orders</p>
                    <OrdersChart />
                </section>
        </section>
    )
}

export default Orders
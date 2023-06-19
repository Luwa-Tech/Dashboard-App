import {ordersData, groupNumber} from "../data"
import OrdersChart from "../components/ordersChart"

const Orders = () => {
    const ordersEls = ordersData.map(item => {
        return (
            <div className="orders_data-container">
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.type}</p>
                </div>

                <div>
                    <h4><span>+${groupNumber(item.change)}</span></h4>
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
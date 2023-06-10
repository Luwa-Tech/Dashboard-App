import { cardsData, groupNumber } from "../data"
import Statistics from "../components/statistics"

const Dashboard = () => {
    const cardItems = cardsData.map(item => {
        return (
            <div key={item.title} className="cards--data_item">
                <div>
                    <span className="title">{`${item.title}`}</span>
                    <span className="change">+{item.change}%</span>
                </div>
                <h2 className="amount"><span>$</span>{groupNumber(item.amount)}</h2>
            </div>
        )
    })
    return (
        <main >
            <section className="card-section">
                <div>
                    <h2>Dashboard</h2>
                    <select>
                        <option>1 week</option>
                        <option>1 month</option>
                        <option>1 year</option>
                    </select>
                </div>

                <div className="card-flex">
                    {cardItems}
                </div>
            </section>

            <section>
                <Statistics />
            </section>
            <section>orders today</section>
        </main>
    )
}

export default Dashboard
import {BsArrowUpShort} from "react-icons/bs"
import { groupNumber } from "../data"
import StatisticsChart from "./statisticsChart"

const Statistics = () => {
    return (
        <section className="statistics-container">
            <h2>Overview Statistics</h2>
            <section className="statistics-cards">
                <div className="statistics-icon_container">
                    <div className="statistics-arrowIcon">
                    <BsArrowUpShort size={35}/>
                    </div>
                    <div>
                        <p>Tap item this month</p>
                        <h3>Office comps</h3>
                    </div>

                </div>

                
                <div>
                    <p>Items</p>
                    <h3>{groupNumber(455)}</h3>
                </div>
                

               
                <div>
                    <p>Profit</p>
                    <h3>${groupNumber(370000)}</h3>
                </div>
                

                
                <div>
                    <p>Daily Average</p>
                    <h3>${groupNumber(2000)}</h3>
                </div>
                
            </section>
            <StatisticsChart />
        </section>
    )
}

export default Statistics
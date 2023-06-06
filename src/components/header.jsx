import moment from "moment/moment";

const Header = () => {
    const date = moment().format("dddd, Do MMM YYYY");
    return (
        <section>
            <p className="header--date">{date}</p>
            
        </section>
    )
}

export default Header
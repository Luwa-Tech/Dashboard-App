import moment from "moment/moment"
import { BiSearch } from "react-icons/bi"
import ToggleSwitch from "./toggle"

const Header = () => {
    const date = moment().format("dddd, Do MMM YYYY");
    return (
        <section className="header-section">
            <p className="header-date">{date}</p>
            <div className="header-search_bar">
            <BiSearch size={20}/>
            <input type="text" placeholder="Search input" />
          </div>

          <div className="header-profile">
            <ToggleSwitch />
            <img className="header-profile_image" src="./profile.png" alt="profile image" />
            <div>
                <p>James Bond</p>
                <p>jamesbond@mail.com</p>
            </div>
          </div>

        </section>
    )
}

export default Header
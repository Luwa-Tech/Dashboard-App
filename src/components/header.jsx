import moment from "moment/moment"
import { BiSearch } from "react-icons/bi"

const Header = () => {
    const date = moment().format("dddd, Do MMM YYYY");
    return (
        <section className="header-section">
            <p className="header-date">{date}</p>
            <div className="header-search_bar">
            <BiSearch size={20} color="white"/>
            <input type="text" placeholder="Search input" />
          </div>

          <div className="header-profile">
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
import { NavLink } from "react-router-dom"
import {MdSpaceDashboard} from "react-icons/md"
import {AiFillCalendar, AiOutlineTable} from "react-icons/ai"
import {FaTasks} from "react-icons/fa"


const sideBarItems = [
    {
        "id": 1,
        "path": "/",
        "pageName": "Dashboard",
        "icon": <MdSpaceDashboard size={25} color="white"/>
    },
    {
        "id": 2,
        "path": "calendar",
        "pageName": "Calendar",
        "icon": <AiFillCalendar size={25} color="white"/>
    },
    {
        "id": 3,
        "path": "board",
        "pageName": "Trello Board",
        "icon": <FaTasks size={25} color="white"/>
    },
    {
        "id": 4,
        "path": "users",
        "pageName": "Users",
        "icon": <AiOutlineTable size={25} color="white"/>
    },
]

const SideBar = () => {
    const navElements = sideBarItems.map(item => {
        return (
                <NavLink to={item.path} key={item.id}>
                    <div className="items">
                        {item.icon}
                    </div>
                </NavLink>  
            )
    })


    return (
        <div className="sidebar--container">
            <img className="logo" src="./logo.png" alt="logo"/>        
            <nav className="sidebar-nav_elements">
                {navElements}
            </nav>
        </div>
    )
}

export default SideBar
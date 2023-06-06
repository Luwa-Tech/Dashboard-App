import css from "./SideBar.module.css"
import { NavLink } from "react-router-dom"
import {MdSpaceDashboard} from "react-icons/md"
import {AiFillCalendar, AiOutlineTable} from "react-icons/ai"
import {FaTasks, FaAngleLeft, FaAngleRight} from "react-icons/fa"
import { useState } from "react"

const sideBarItems = [
    {
        "id": 1,
        "path": "/",
        "pageName": "Dashboard",
        "icon": <MdSpaceDashboard size={30}/>
    },
    {
        "id": 2,
        "path": "calendar",
        "pageName": "Calendar",
        "icon": <AiFillCalendar size={30}/>
    },
    {
        "id": 3,
        "path": "board",
        "pageName": "Trello Board",
        "icon": <FaTasks size={30}/>
    },
    {
        "id": 4,
        "path": "users",
        "pageName": "Users",
        "icon": <AiOutlineTable size={30}/>
    },
]

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    //sidebar toggle function
    const toggleSideBar = () => setIsOpen(prev => !prev)

    const navElements = sideBarItems.map(item => {
        return (
                <NavLink to={item.path} key={item.id}>
                    <div>
                        <span>{item.icon}</span>
                        <p>{item.pageName}</p>
                    </div>
                </NavLink>  
            )
    })


    return (
        <div className={css.container}>
            <img src="./logo.png" alt="logo"/>

            <div onClick={toggleSideBar}>{isOpen ? <FaAngleLeft /> : <FaAngleRight />}</div>
            <nav>
                {navElements}
            </nav>
        </div>
    )
}

export default SideBar
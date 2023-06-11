import { Outlet } from "react-router-dom"

import SideBar from "../components/sideBar"
import Header from "../components/header"



const Layout = () => {
    return (
        <div className="layout">
        <SideBar />
        <Header />
        <Outlet />
        </div>
    )
}

export default Layout
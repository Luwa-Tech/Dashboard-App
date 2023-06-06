import { Outlet } from "react-router-dom"

import SideBar from "../components/sideBar"
import Header from "../components/header"



const Layout = () => {
    return (
        <>
        <SideBar />
        <main className="layout">
        <Header />
        <Outlet />
        </main>
        </>
    )
}

export default Layout
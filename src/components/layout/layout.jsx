import { Outlet } from "react-router-dom"
import SideBar from "../sidebar/sidebar"
import css from "./Layout.module.css"


const Layout = () => {
    return (
        <>
        <SideBar />
        <main className={css.layout}>
        <Outlet />
        </main>
        </>
    )
}

export default Layout
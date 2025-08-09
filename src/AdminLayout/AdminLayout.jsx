import './AdminLayout.css'
import Header from '../sections/Header/Header'
import { Outlet } from 'react-router-dom'
import SideBar from '../sections/SideBar/SideBar'

function AdminLayout() {
    return (
        <div id="layoutContainer">
            <div id="AdminMainContainer">
                <Header />
                <div id="mainPagesContainer">
                    <Outlet />
                </div>
            </div>
            <div id="sideBarContainer">
                <SideBar />
            </div>
        </div>
    )
}

export default AdminLayout
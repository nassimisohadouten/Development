// Import needed files and packages
import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import '../style/main.scss'


// Function that returns the base layout of the page
const Layout = () => {
    const location = useLocation()

    useEffect(() => {
    }, [location])

    return (
        <>
            <Outlet />
            <BottomNav />
        </>
    )
}

// Exporting the function to make it accesible from other files
export default Layout;
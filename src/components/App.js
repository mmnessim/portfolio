import React from "react";
import { Header } from "./header/header";
import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";

export function App() {
    return(
        <div id="app-container" className="text-center">
            <Header />
            <NavBar />
            <Outlet />
            <p>footer</p>
        </div>
    )
}
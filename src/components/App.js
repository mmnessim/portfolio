import React from "react";
import { Header } from "./header/header";
import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";

export function App(props) {
    return(
        <div id="app-container" className="text-center">
            <Header />
            <NavBar />
            Welcome {props.store.user}
            <Outlet />
            <Footer />
        </div>
    )
}
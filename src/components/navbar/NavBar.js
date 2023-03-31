import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    return(
        <div className="nav-bar row">
            <Link to={'/'} className='btn col-sm navlink'>Home</Link>
            <span className="btn col-sm navlink">About Me</span>
            <span className="btn col-sm navlink">API Demo</span>
            <span className="btn col-sm navlink">Writing Samples</span>
            <span className="btn col-sm navlink">Music</span>
        </div>
    )
}
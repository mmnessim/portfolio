import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    return(
        <div className="nav-bar row">
            <Link to={'/'} className='btn col-sm navlink'>Home</Link>
            <Link to={'/about'} className='btn col-sm navlink'>About Me</Link>
            <Link to={'/coding'} className="btn col-sm navlink">Coding Examples</Link>
            <Link to={'/writing'} className="btn col-sm navlink">Writing Samples</Link>
            <span className="btn col-sm navlink">Music</span>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    return(
        <div className="nav-bar row">
            <Link to={'/'} className='btn col-sm navlink'>Home</Link>
            <Link to={'/blog'} className="btn col-sm navlink">Blog</Link>
            <Link to={'/about'} className='btn col-sm navlink'>About Me</Link>
            <Link to={'/coding'} className="btn col-sm navlink">Coding Examples</Link>
            <Link to={'/writing'} className="btn col-sm navlink">Writing Samples</Link>
            <Link to={'/music'} className="btn col-sm navlink">Music</Link>
        </div>
    )
}
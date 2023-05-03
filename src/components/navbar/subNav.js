import React from "react";
import { Link, Outlet } from 'react-router-dom';

export function SubNav() {
    return(
        <div>
            <Link to={'/coding/apidemo'} className="btn col-sm navlink">API Demo</Link>
            <Link to={'/coding/wordle'} className="btn col-sm navlink">Wordle Clone</Link>
            <Link to={'/coding/login'} className="btn col-sm navlink">Member's Area</Link>
            <Outlet />
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import './header.css'

export function Header() {
    return (
        <div>
        <div className="container-fluid row">
            <h1 className="display-3 fw-bold col-9">Mounir Nessim</h1>
            <span className="login-btn col-3"><Link to={'/coding/login'} className="navlink">Login</Link></span>
        </div>
        <div className="row container">
            <h2 className="display-6">Educator, Programmer, Musician</h2>
        </div>
        </div>  
    )
}
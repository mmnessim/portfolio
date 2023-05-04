import React from "react";
import { store } from "../..";
import { Link } from "react-router-dom";
import { Arrangements } from "./arrangements";

export function MemberContainer() {
    
    if (store.getState().authenticated !== true) {
        return (
            <div>
                <p>You must sign in to access this page</p>
                <Link to={'/coding/login'} className="btn navlink">Sign In</Link>
            </div>
        )
    } else {
        return (
            <div className="container">
                <Arrangements />
            </div>
        )
    }
}
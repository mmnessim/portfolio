import React from "react";
import { store } from "../..";

export function Logout() {
    const state = store.getState();

    if (state.authenticated === true) {
    return(
        <div>
            <button className="btn navlink">Log Out</button>
        </div>
    )}
}
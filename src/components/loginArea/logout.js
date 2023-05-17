import React from "react";
import { store } from "../..";

export function Logout() {
    const state = store.getState();

    const handleLogout = (e) => {
        fetch('https://profile-backend.herokuapp.com/database/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': state.email,
        })
    })
        .then((response) => {
            return response.json()
        })
        .then((actualData) => {
            console.log(actualData);
            store.dispatch({type: "LOGOUT", action: {authenticated: null, user: "Guest"}})
        })
        window.location.reload();
    }

    if (store.getState().authenticated === true) {
    return(
        <div>
            <button className="btn navlink" onClick={handleLogout}>Log Out</button>
        </div>
    )}
}
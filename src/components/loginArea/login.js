import React, { useState } from "react";
import { store } from "../..";
import { Link } from "react-router-dom";
import { MemberContainer } from "../members/memberContainer";
import { Logout } from "./logout";

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [login, setLogin] = useState();

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://profile-backend.herokuapp.com/database/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
        })
    })
            .then((res) => {
                console.log(res.body)
                return res.json();
            })
            .then((actualData) => {
                console.log(actualData)
                setError(actualData.message);
                setLogin(actualData.authenticated);
                store.dispatch({type: "LOGIN", payload: {authenticated: actualData.authenticated, user: actualData.username, email: email}})
            })
    }
 
        if (!store.getState().authenticated) {
        return(
            <div className="container">
                <p>To access some more of my coding projects, musical arrangements, and more, you can sign in or create an account. Your account information will be saved and stored in my database. To ensure password security, your password will be hashed and salted with bcrypt and will not be stored on the databse as plaintext. For the most security, I recommend not using a password that you use for any other site. If you want to see the "Member's Area" without creating an account, you can sign in with guest@gmail.com and the password "guest"</p>
                {error}
                <h3>Login</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label for="email">Enter your email: </label>
                    <input type="email" onChange={handleEmail} id="email"></input> <br />
                    <label for="password">Enter your password: </label>
                    <input type="password" onChange={handlePassword} id="password"></input> <br />
                    <button onClick={handleSubmit} className="btn navlink">Log In</button>
                </form>
                <Link to={'/create-account'} className="btn navlink">Create an account</Link>
            </div>
        )} else if (store.getState().authenticated === true && login) {
            return (
                <div>
                    <MemberContainer />
                    <Logout />
                </div>
            )
        }
}
import React, { useState } from "react";
import { store } from "../..";
import { Link } from "react-router-dom";
import { MemberContainer } from "../members/memberContainer";

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
        fetch('http://localhost:3001/database/login', {
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
                store.dispatch({type: "LOGIN", payload: {authenticated: actualData.authenticated, user: actualData.username, email: email} })
            })
    }
        if (!login) {
        return(
            <div>
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
        )} else if (login === true) {
            return (
                <div>
                    <MemberContainer />
                </div>
            )
        }
}
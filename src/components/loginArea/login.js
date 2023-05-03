import React, {useEffect, useState} from "react";
import { store } from "../..";

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [data, setData] = useState();
    const [display, setDisplay] = useState();

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
                setData(actualData)
            })
    }

    useEffect(() => {
        if (data) {
            console.log(data.authenticated)
        }
    }, [data])
    if (data && data.authenticated) {
        store.dispatch({type: "LOGIN", payload: {authenticated: true, user: data.user_id}})
        return (
            <div>
                <h3>Welcome back!</h3>
                {store.getState().user}
            </div>
        )
    } else {
    return(
        <div>
            <h3>Login</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="email">Enter your email: </label>
                <input type="email" onChange={handleEmail} id="email"></input> <br />
                <label for="password">Enter your password: </label>
                <input type="password" onChange={handlePassword} id="password"></input> <br />
                <input type="submit"></input>
                <button onClick={handleSubmit}>Login</button>
            </form>
            {display}
        </div>
    )
}
}
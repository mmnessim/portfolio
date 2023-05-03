import React, {useEffect, useState} from "react";
import { store } from "../..";

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [data, setData] = useState();


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

    if (data && data.authenticated === true) {
        store.dispatch({type: "LOGIN", payload: {authenticated: true, user: data.username}})
        return (
            <div>
                <h3>Welcome back!</h3>
                {store.getState().user}
            </div>
        )
    } else if (data && data.authenticated === false) {
        store.dispatch({type: "INCORRECT", payload: {authenticated: false, user: 'Guest'}})
        return(<div>
            <h3>Incorrect username or password</h3>
        </div>)
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
        </div>
    )
}
}
import React, {useState} from "react";
import { LevelSelector } from "./levelSelector";

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
                setData(actualData)
            })
            .then(() => {
                if (data.authenticated === true) {
                    setDisplay();
                }
            })
    }

    return(
        <div>
                <input type="email" onChange={handleEmail}></input>
                <input type="password" onChange={handlePassword}></input>
                <button onClick={handleSubmit}>Submit</button>
                {display}
        </div>
    )
}
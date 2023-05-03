import React, {useState} from "react";
import { Link } from "react-router-dom";

export function Form() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/database/newuser', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            })
        })
            .then((response) => {
                console.log(response)
                if (response.ok) {
                    setMessage(<div><p>Account created!</p> <Link to={'/coding/login'} className="btn navlink">Login</Link></div>)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return(
    <div>
        <p>Create an account</p>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleFirstName} placeholder="First Name" required></input>
            <br />
            <input type='text' onChange={handleLastName} placeholder="Last Name" required></input>
            <br />
            <input type='email' onChange={handleEmail} placeholder="e-mail" required></input>
            <br />
            <input type="password" onChange={handlePassword} placeholder="password"></input>
            <br />
            <input type='submit'></input>
        </form>
        {message}
    </div>)
}
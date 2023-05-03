import React, {useState} from "react";
import { Login } from "../loginArea/login";

export function Form() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        //e.preventDefault();
        fetch('http://localhost:3001/database/newuser', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email
            })
        })
            .then((response) => {
                console.log(response)
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
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleFirstName} placeholder="First Name" required></input>
            <br />
            <input type='text' onChange={handleLastName} placeholder="Last Name" required></input>
            <br />
            <input type='email' onChange={handleEmail} placeholder="e-mail" required></input>
            <br />
            <input type='submit'></input>
        </form>
    </div>)
}
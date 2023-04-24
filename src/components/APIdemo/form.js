import React, {useState} from "react";

export function Form() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/database/form/post', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'email': email
            })
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleName} placeholder="name" required></input>
            <br />
            <input type='email' onChange={handleEmail} placeholder="email" required></input>
            <br />
            <input type='submit'></input>
        </form>
    </div>)
}
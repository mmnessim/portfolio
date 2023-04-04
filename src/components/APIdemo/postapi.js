import React, {useState, useEffect} from 'react';
import { GetAPI } from './getapi';

export function PostAPI() {
    const [query, setQuery] = useState();
    const handleQuery = () => {
        let rand = Math.random();
        setQuery(rand);
    }

    const [pName, setpName] = useState();
    const [age, setAge] = useState();
    const [instr, setInstr] = useState();
    

    useEffect(() => {
        if (pName) {
            fetch('http://localhost:3001/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': pName,
                'age': age,
                'instrument': instr
            })
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .catch((err) => {
                console.log(err)
            })
    };
},[query])

    const handleName = (e) => {
        setpName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleInstr = (e) => {
        setInstr(e.target.value);
    }

    return(
        //Need to make proper HTML form with submit
        <div>
            <button onClick={handleQuery}>Test {query}</button>
            <br />
            <label for='name'>Name: </label>
            <input type='text' id='name' name='name' placeholder='First and last name' className='form-control' onChange={handleName}></input>
            <label for='age'>Age: </label>
            <input type='number' id='age' name='age' placeholder='0' className='form-control' onChange={handleAge}></input>
            <label for='instrument'>Instrument: </label>
            <input type='text' id='instrument' name='instrument' placeholder='Enter instrument' className='form-control' onChange={handleInstr}></input>
        </div>
    )
}
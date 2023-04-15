import React, {useState, useEffect} from "react";
import { WORDS as words } from "./words";
import { Compare } from "./compare";

export function Input(props) {
    const [input, setInput] = useState();
    const [error, setError] = useState();
    const [guess, setGuess] = useState();

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        if (input) {
            if (input.length === 5 && !words.includes(input)) {
                setError('Invalid word')
            } else if (input.length === 5 && words.includes(input)) {
                setGuess(input)
            }
        }
        else {
            setError(null)
        }
    }, [input]);
    
    return(
        <div>
            <p>{error}</p>
            <input type='text' onChange={handleInput}></input>
            <Compare 
            word={props.word} 
            guess={guess} />
        </div>
    )
}
import React, {useState, useEffect} from "react";
import { WORDS as words } from "./words";
import { Compare } from "./compare";

export function Input(props) {
    const [input, setInput] = useState();
    const [error, setError] = useState();
    const [guess, setGuess] = useState();
    const [giveup, setGiveup] = useState();
    const [giveupMessage, setGiveupMessage] = useState();

    const handleInput = (e) => {
        setInput(e.target.value.toLowerCase());
    }

    useEffect(() => {
        if (input) {
            if (input.length === 5 && !words.includes(input)) {
                setError('Invalid word');
                setGuess(null);
            } else if (input.length === 5 && words.includes(input)) {
                setGuess(input);
                setError();
            }
        }
        else {
            setError(null)
        }
    }, [input]);

    const handleGiveUp = () => {
        const element = <h3>The word was {props.giveup}</h3>
        setGiveup(true);
        setGiveupMessage(element);
    }
    
    return(
        <div>
            <p>{error}</p>
            <input type='text' onChange={handleInput}></input>
            <Compare 
            word={props.word} 
            guess={guess} 
            giveup={giveup} />
            <button onClick={handleGiveUp} className="btn">Give up?</button>
            {giveupMessage}
        </div>
    )
}
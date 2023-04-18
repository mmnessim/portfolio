import React, { useState } from "react";

export function Output(props) {
    const [counter, setCounter] = useState(0);
    const incrementer = () => {
        setCounter(counter + 1);
    }
    const [win, setWin] = useState();

    const rightPlace = {backgroundColor: 'green'}
    const wrongPlace = {backgroundColor: 'orange'}

    const [display, setDisplay] = useState([]);
 
    const handleDisplay = () => {
        let style = [];
        if (props.guess) {
        const newGuess = props.guess;
        for (let i = 0; i < newGuess.length; i++) {
            if (newGuess[i] === props.word[i]) {
                style[i] = rightPlace;
            } else if (props.wrongPlace.includes(newGuess[i])) {
                style[i] = wrongPlace;
            }
        }
        const newDisplay = ([
            <div>
                <button className="btn-sml" style={style[0]}>{newGuess[0]}</button>
                <button className="btn-sml" style={style[1]}>{newGuess[1]}</button>
                <button className="btn-sml" style={style[2]}>{newGuess[2]}</button>
                <button className="btn-sml" style={style[3]}>{newGuess[3]}</button>
                <button className="btn-sml" style={style[4]}>{newGuess[4]}</button>
            </div>]
        )
        setDisplay((prev) => [newDisplay, ...prev]);
        incrementer();
        if (props.win && counter < 5) {
            setWin(<h1>You win!</h1>)
        } else if (counter >= 5) {
            setWin(<h1>The word was {props.word}</h1>)
        }
    }
}

    return(
        <div>
            {win}
            <button onClick={handleDisplay} className="btn">Guess</button>
            <br />
            {display}
            <br />
        </div>
    )
}
import React from "react";
import { Output } from "./output";

export function Compare(props) {
    const correctArray = ['', '', '', '', ''];
    const wrongPlaceArray = [];
    const wrongLetterArray = [];
    let win = false;
    const word = props.word;
    const guess = props.guess;
    if (guess) {
    for (let i = 0; i < word.length; i++) {
        if (guess[i] === word[i]) {
            correctArray[i] = guess[i]
        } else if (word.includes(guess[i]) && !correctArray.includes(guess[i])) {
            wrongPlaceArray.push(guess[i])
        } else {
            wrongLetterArray.push(guess[i])
        }
    }
    if (guess[0] === word[0] && guess[1] === word[1] && guess[2] === word[2] && guess[3] === word[3] && guess[4] === word[4]) {
        win = true
    }
}

    return(
        <div>
            <Output 
            word={word}
            guess={guess}
            correctPlace={correctArray}
            wrongPlace={wrongPlaceArray}
            wrongLetter={wrongLetterArray} 
            win={win}/>
        </div>
    )
}
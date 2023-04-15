import React from "react";
import { Output } from "./output";

export function Compare(props) {
    const correctArray = ['', '', '', '', ''] 
    const wrongPlaceArray = []

    const word = props.word;
    const guess = props.guess;
    if (guess) {
    for (let i = 0; i < word.length; i++) {
        if (guess[i] === word[i]) {
            correctArray[i] = guess[i]
        } else if (word.includes(guess[i]) && !correctArray.includes(guess[i])) {
            wrongPlaceArray.push(guess[i])
        }
    }
}


    return(
        <div>
            word {word}
            <br />
            guess {guess}
            <br />
            right letter right place {correctArray}
            <br />
            right letter wrong place {wrongPlaceArray}
            <Output 
            word={word}
            guess={guess}
            correctPlace={correctArray}
            wrongPlace={wrongPlaceArray} />
        </div>
    )
}
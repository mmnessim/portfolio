import React from 'react';
import {WORDS as words} from './words'
import { Input } from './input';

export function WordleContainer() {
    //choose a word at random from the array and turn it into an array of 5 letters
    const length = words.length;
    const index = Math.floor(Math.random() * length);
    const word = words[index].split('');
    console.log(word)
    return(
        <div>
            <Input 
            word={word}
            />
        </div>
    )
}
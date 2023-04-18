import React, { useState } from "react";
import { JWPepperSearch } from "./jwpeppersearch";

export function LevelSelector() {
    //set level and pass it as a prop to JWPepperSearch component
    const [level, setLevel] = useState('easy');

    return(
        <div>
            <button className="btn lvl-select" onClick={() => {setLevel('very%20easy')}}>Very Easy</button>
            <button className="btn lvl-select" onClick={() => {setLevel('easy')}}>Easy</button>
            <button className="btn lvl-select" onClick={() => {setLevel('medium-easy')}}>Medium Easy</button>
            <button className="btn lvl-select" onClick={() => {setLevel('medium')}}>Medium</button>
            <button className="btn lvl-select" onClick={() => {setLevel('medium-advanced')}}>Medium Advanced</button>
            <button className="btn lvl-select" onClick={() => {setLevel('advanced')}}>Advanced</button>
            <button className="btn lvl-select" onClick={() => {setLevel('collegiate')}}>Collegiate</button>
            <JWPepperSearch 
            level={level} />
        </div>
    )
}
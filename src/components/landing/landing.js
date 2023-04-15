import React from "react";
import { WordleContainer } from "../wordleClone/wordleContainer";

export function Landing() {
    return(
        <div className="container-fluid">
            <h3>Web Development Portfolio and Demo</h3>
            <p>This site is a sample of my work in Web Development. I employ standard HTML, CSS, and JavaScript, in conjunction with Bootstrap and React for the front-end. For the back-end, I use Express and PostgreSQL. </p>
            <WordleContainer />
        </div>
    )
}
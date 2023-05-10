import React from "react";

export function Landing(props) {
    return(
        <div className="container">
            <h3>Web Development Portfolio and Demo</h3>
            <p>This site is a sample of my work in Web Development. I employ standard HTML, CSS, and JavaScript, in conjunction with Bootstrap and React for the frontend. For the backend, I used Express.js and PostgreSQL. The frontend is deployed with Netlify, and the backend is deployed with Heroku.</p>
            <p>
                All code can be found on my github at these repositories:
            </p> 
            <a href="https://github.com/mmnessim/portfolio" target="_blank" rel="noreferrer">Frontend</a> <br />
            <a href="https://github.com/mmnessim/jwpepper-server" target="_blank" rel="noreferrer">Backend</a>
        </div>
    )
}
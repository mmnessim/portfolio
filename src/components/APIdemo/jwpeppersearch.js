import React, { useState, useEffect } from 'react';
import './apiDemo.css';

export function JWPepperSearch(props) {
    const [data, setData] = useState([]);

    const query = props.level;
    //Fetch data each time query changes
    useEffect(() => {
        fetch(`https://jwpepper-server.onrender.com/scores/level/${query}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Request failed');
                }
                return res.json();
            })
            .then((actualData) => {
                setData(actualData);
            })
    },[query])
    
    let displayArray = [];
    console.log(data[0])
    
    const handleDisplay = (array) => {
        //reset array before repopulating each time
        displayArray = []; 
        if (!data[0]) {
            displayArray.push(<h4>Loading...</h4>)
        }
        //Makes a li element for each composer and piece
        for (let i = 0; i < array.length; i++) {
          displayArray.push(<li>{array[i].title} by {array[i].composer}</li>)
        }
      }
    handleDisplay(data);
    

    return (
        <div className='container comp-list'>
           {displayArray}
        </div>
    )
}
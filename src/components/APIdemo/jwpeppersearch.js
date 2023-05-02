import React, { useState, useEffect } from 'react';
import './apiDemo.css';

export function JWPepperSearch(props) {
    const [data, setData] = useState([]);
    const [show, setShow] = useState()

    const query = props.level;
    //Fetch data each time query changes
    useEffect(() => {
        fetch(`https://profile-backend.herokuapp.com/scores/level/${query}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Request failed');
                }
                return res.json();
            })
            .then((actualData) => {
                setData(actualData);
            })
    },[props.level])
    
    let displayArray = [];
    console.log(data[0])
    
    const handleDisplay = (array) => {
        //reset array before repopulating each time
        displayArray = []; 
        if (!data[0] && props.show === true) {
            displayArray.push(<h4>Loading...</h4>)
        } else if (props.show === true) {
        //Makes a li element for each composer and piece
        for (let i = 0; i < array.length; i++) {
          displayArray.push(<li>{array[i].title} by {array[i].composer}</li>)
        }}
      }
    handleDisplay(data);

    return (
        <div className='container comp-list'>
            {show}
            {displayArray}
        </div>
    )
}
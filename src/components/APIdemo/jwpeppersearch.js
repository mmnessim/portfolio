import React, { useState, useEffect } from 'react';

export function JWPepperSearch() {
    const [data, setData] = useState(['']);

    //Fetch data
    useEffect(() => {
        //Early stages, not set up with buttons yet
        fetch('https://mnessim-test-app.herokuapp.com/level/easy')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Request failed');
                }
                console.log(res);
                return res.json();
            })
            .then((actualData) => {
                setData(actualData);
                console.log(data[1]);
            })
    },[])
    
    let displayArray = [];
    
    const handleDisplay = (array) => {
        //Makes a li element for each composer and piece
        for (let i = 0; i < array.length; i++) {
          displayArray.push(<li>{array[i].title} by {array[i].composer}</li>)
        }
      }
    handleDisplay(data);
    

    return (
        <div>
           {displayArray}
        </div>
    )
}
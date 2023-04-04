import React, {useState, useEffect} from "react";

export function DisplaySQL() {
    const [data, setData] = useState();
    let display = [];
    useEffect(() => {
        fetch('http://localhost:3001/all')
            .then((res) => {
                return res.json()
            })
            .then((actualData) => {
                console.log(actualData);
                setData(actualData);
            })
    }, [])
    const handleDisplay = () => {
        display = []
        if (data) {;
        for (let i = 0; i < data.length; i++) {
            display.push(<span>{data[i].name} {data[i].instrument} {data[i].age}, </span>)
        }} 
        console.log(display)
    }
    handleDisplay();

    return (
        <div>
            <p>Hello</p>
            <button onClick={handleDisplay}>Click me</button>
            <br />
            {display}
        </div>
    )
}
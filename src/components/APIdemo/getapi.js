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
            display.push(<div><span>{data[i].name}, {data[i].instrument}, {data[i].age} </span> <br /> </div>)
        }} 
    }
    handleDisplay();

    return (
        <div>
            <br />
            {display}
        </div>
    )
}
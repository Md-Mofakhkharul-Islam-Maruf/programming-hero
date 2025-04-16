import { useState } from "react";

export default function Count(){
    
    const style = {
        border: '2px solid red',
        height: '150px',
        width: '400px'
    }
    
    const [count, setcount]=useState(0);

    const handleAdd =() =>{
        const newCount= count+6
        setcount(newCount)
    }
    return (
        <div style={style}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
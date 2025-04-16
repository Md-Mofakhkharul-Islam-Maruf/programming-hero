import { useState } from "react"

export default function Batsman() {
    const [count, setCount] = useState(0);
    const [sixes, countSixes]=useState(0);

    const single = () => {
        const updateRuns= count+1;
        setCount(updateRuns);
    }
    const four = () => {
        const updateRuns= count+4;
        setCount(updateRuns);
    }
    const six = () => {
        const updateRuns= count+6;
        setCount(updateRuns);
        const updateSixes=sixes+1;
        countSixes(updateSixes)

    }

    return (
        <div>
            <h3>Player: Tamim Iqbal</h3>
            <p><small>Total six: {sixes}</small></p>
            <h1>Score: {count}</h1>
            <button onClick={single}>Single</button>
            <button onClick={four}>Four</button>
            <button onClick={six}>Six</button>
        </div>
    )
}
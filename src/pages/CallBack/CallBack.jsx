import { useState } from "react";

export default function CallBack() {

    let [count, setCount] = useState(0);
    
    let handleCounter = () => {
        setCount((currCount) => {
            return currCount + 1;
        })
        setCount((currCount) => {
            return currCount + 1;
        })
        setCount((currCount) => {
            return currCount + 1;
        })
    }

    return (
        <>
            <h3>Count = {count}</h3>
            <button onClick={handleCounter}>Increase Count</button>
        </>
    )
}
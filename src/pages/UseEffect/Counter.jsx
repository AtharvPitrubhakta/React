import { useEffect, useState } from "react"

export default function Counter() {

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let handleClickX = () => {
        setCountx((currCount) => currCount + 1);
    }

    let handleClickY = () => {
        setCounty((currCount) => currCount + 1);
    }

    useEffect(function printSomething() {
        console.log("this is a side effect");
    }, [countx]);

    return (
        <div>
            <h3>Count = {countx}</h3>
            <button onClick={handleClickX}>+1</button>
            <h3>Count = {county}</h3>
            <button onClick={handleClickY}>+1</button>
        </div>
    )
}
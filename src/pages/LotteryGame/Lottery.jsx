import { useState } from "react"
// import "./Lottery.css";
import { genTicket, sum } from "../../helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}) {

    let [ticket, setTicket] = useState(genTicket(n));
    // let isWinning = sum(ticket) === winningSum;
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket} style={{margin: "auto"}}>Buy New Ticket</button>
            <br/>
            <h3>{isWinning && "Congratulations, You Win!"}</h3>
        </div>
    )
}
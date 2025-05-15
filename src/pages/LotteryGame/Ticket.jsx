import TicketNum from "./TicketNum";
import '../LotteryGame/Ticket.css';

export default function Ticket({ ticket }) {
    return (
        <>
            <h3>Ticket</h3>
            <div className="Ticket">
                {
                    ticket.map((num, idx) => {
                        return (
                            <TicketNum
                                num={num} 
                                key={idx} 
                                style={{backgroundColor: num === 15 ? "red" : "white", height: "20px", width: "20px", display: "inline-block", margin: "5px" }}    
                            />
                        )
                    })
                } 
                    
            </div>
        </>
    )
    
}
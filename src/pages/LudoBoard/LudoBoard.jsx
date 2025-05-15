import { useState } from "react"

export default function LudoBoard() {

    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    let [arr, setArr] = useState(["no moves"]); 

    let updateBlue = () => {        
        // setMoves((prevState) => {
        //     return ({ ...prevState, blue: prevState.blue += 1 });
        // })    

        // arr.push("blue moves");
        setArr((prevArr) => {
            return ([...prevArr, "blue moves"])
        });
        console.log(arr);
    }

    let updateYellow = () => {        
        setMoves((prevState) => {
            return ({ ...prevState, yellow: prevState.yellow += 1 });
        })    
    }

    let updateGreen = () => {        
        setMoves((prevState) => {
            return ({ ...prevState, green: prevState.green += 1 });
        })    
    }

    let updateRed = () => {        
        setMoves((prevState) => {
            return ({ ...prevState, red: prevState.red += 1 });
        })    
    }

    return (
        <div>
            <h1>Game Begins!</h1>
            <p>{arr}</p>
            <div className="board" style={{padding: "20px"}}>
                <p style={{fontSize: "16px"}}>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue", color: "white", border: "none", padding: "8px 12px", fontSize: "16px", fontWeight: "bold", borderRadius: "5px", margin: "10px", marginBottom: "20px"}} onClick={updateBlue}>+1</button>
                <p style={{fontSize: "16px"}}>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black", border: "none", padding: "8px 12px", fontSize: "16px", fontWeight: "bold", borderRadius: "5px", margin: "10px", marginBottom: "20px"}} onClick={updateYellow}>+1</button>
                <p style={{fontSize: "16px"}}>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green", color: "white", border: "none", padding: "8px 12px", fontSize: "16px", fontWeight: "bold", borderRadius: "5px", margin: "10px", marginBottom: "20px"}} onClick={updateGreen}>+1</button>
                <p style={{fontSize: "16px"}}>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red", color: "white", border: "none", padding: "8px 12px", fontSize: "16px", fontWeight: "bold", borderRadius: "5px", margin: "10px", marginBottom: "20px"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}
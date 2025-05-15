import { useRef } from "react";
import ChildUser from "./childUser";


export default function ParentUser() {

    const inputRef = useRef(null);

    const updateInput = () => {
        inputRef.current.value = 1000;
        inputRef.current.focus();
        inputRef.current.style.color="red";
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>Forward Ref</h1>
            <ChildUser ref={inputRef}/>
            <button onClick={updateInput}>Update Input Field</button>
        </div>
    );
}

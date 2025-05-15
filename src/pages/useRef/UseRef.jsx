import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "darkgray";
    inputRef.current.placeholder = "Enter Password";
  };

  const toggleHandler = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  const h1Handler = () => {
    if (h1Ref.current.style.color != "green") {
      h1Ref.current.style.color = "green";
    } else {
      h1Ref.current.style.color = "#2a2a72";
    }
  };

  return (
    <>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <br />
      <input ref={inputRef} type="text" placeholder="Enter user name" />
      <br />
      <br />
      <button onClick={inputHandler}>Focus On Input Field</button>
      <br />
      <h1 ref={h1Ref}>Code Step By Step</h1>
      <button onClick={h1Handler}>Handler</button>
    </>
  );
}

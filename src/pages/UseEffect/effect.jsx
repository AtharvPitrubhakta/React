import { useEffect, useState } from "react";
import PropsEffect from "./propsEffect";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);

  //   useEffect(() => {
  //     // callOnce(); // This will be called only once when the component mounts
  //     countEffect(); // This will be called every time the count changes
  //   }, [count]);

  //   function countEffect() {
  //     console.log("Count effect called", count);
  //   }

  //   function callOnce() {
  //     console.log("callOnce function called");
  //   }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
        <button onClick={() => setData(data + 1)}>Data: {data}</button>
        <button onClick={() => setDisplay(!display)}>Toggle</button>
      </div>
      {display ? <PropsEffect count={count} data={data} /> : null}
    </div>
  );
}

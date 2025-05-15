import { useEffect } from "react";

export default function PropsEffect({ count, data }) {
  // useEffect(() => {
  //   getCounter();
  // },[]);

  // useEffect(() => {
  //   getData();
  // }, [data]);


  // const getCounter = () => {
  //   console.log("Counter effect called", count);
  // };

  // const getData = () => {
  //   console.log("Data effect called", data);
  // }

  // Mounting phase only
  useEffect(() => {
    console.log("Mounting phase only");
  }, [])

  // Updating phase only
  useEffect(() => {
    console.log("Updating phase only");
  },[count])

  useEffect(() => {    
    return () => {
      console.log("Unmounting phase only");
    }
  }, [])


  return (
    <div>
      <h1>Props Effect</h1>
      <h2>{count}</h2>
      <h2>{data}</h2>
    </div>
  );
}

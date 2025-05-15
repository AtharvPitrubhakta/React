import { useState, useTransition } from "react";

export default function TransitionHook() {
  // Using State Hook
  // const [isPending, setIsPending] = useState(false);

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setIsPending(true);
  //     // setTimeout(() => {
  //     //     setIsPending(false);
  //     // }, 1000);

  //     await new Promise(res => setTimeout(res, 2000));
  //     setIsPending(false);
  // }

  // Using Transition Hook
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
      console.log("Transition Completed");
    });
  };

  return (
    <>
      <h1>useTransition Hook in React js 19</h1>
      {isPending ? (
        <img
          src="https://media.giphy.com/media/3o7aD2sa1e4v0g5Y8I/giphy.gif"
          alt="Loading..."
          style={{ width: "200px", height: "100px", margin: "20px" }}
        />
      ) : null}
      <button disabled={isPending} onClick={handleSubmit}>
        Click Me
      </button>
    </>
  );
}

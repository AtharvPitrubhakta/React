import { useFormStatus } from "react-dom";

export default function FormStatus() {

    const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit");
  };

  function CustomForm() {

    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          margin: "auto",
        }}
      >
        <input type="text" placeholder="Enter Name" />
        <input type="password" placeholder="Enter Password" />
        <button disabled={pending} >{pending ? "Submitting..." : "Submit"}</button>
      </div>
    );
  }

  return (
    <div>
      <h1>useFormStatus Hook in React JS 19</h1>
      <form
        action={handleSubmit}
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   gap: "10px",
        //   margin: "auto",
        // }}
      >
        <CustomForm />
      </form>
    </div>
  );
}

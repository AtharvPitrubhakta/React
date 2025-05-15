
export default function User({ displayName, name, getUser }) {
    // const name = "Shiva";
    // This function is passed as a prop from the parent component
    return (
        <div>
            <h1>Call parent component function from child component</h1>
            <button style={{margin: "auto"}} onClick={() => displayName(name)}>Display Name</button>
            <br/>
            <button style={{margin: "auto"}} onClick={() => getUser()}>Get User</button>
        </div>
    )
}
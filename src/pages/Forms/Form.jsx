import { useState } from "react"

export default function Form() {
    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        passWord: "",
    })

    // let handleNameChange = (e) => {
    //     // console.log(e.target.value);
    //     setFullName(e.target.value);
    // }

    // let handleUsername = (event) => {
    //     setUserName(event.target.value);
    // }

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(fieldName);
        // console.log(newValue);

        setFormData( (currData) => {
            // currData[fieldName] = newValue;
            // return {...currData};
            // return {...currData, [fieldName] : newValue}; 
            return {...currData, [event.target.name] : event.target.value};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData( {
            fullName: "",
            userName: "",
            passWord: "",
        })
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="fullName" style={{margin: "auto"}}>Full Name:</label>
            <input 
                type="text" 
                placeholder="enter full name" 
                value={formData.fullName} 
                onChange={handleInputChange}
                id="fullName"
                name="fullName" 
            />
            <br></br>
            <br></br>
            <label htmlFor="userName" style={{margin: "auto"}}>Username:</label>
            <input 
                type="text" 
                placeholder="enter username" 
                value={formData.userName} 
                onChange={handleInputChange}
                id="userName"
                name="userName"
            />
            <br></br>
            <br></br>
            <label htmlFor="passWord" style={{margin: "auto"}}>Password:</label>
            <input 
                type="text" 
                placeholder="enter password" 
                value={formData.passWord} 
                onChange={handleInputChange}
                id="passWord"
                name="passWord"
            />
            <button>Submit</button>
        </form>
    )
}
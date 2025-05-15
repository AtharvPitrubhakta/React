// before the verion of react 19 we can forwardRef like this
// import { forwardRef } from "react";

// const UserInput = (props, ref) => {
//     return (
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// }

// export default forwardRef(UserInput);

// In react 19

const UserInput = (props) => {
    return (<div>
        <input type="text" ref={props.ref}/>
    </div>)
}

export default UserInput;
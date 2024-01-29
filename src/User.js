import React from "react";
import App from "./App";
function User(props){
    let name = props.data.name;
    return(
        <div> 
            <h1>User Component - {name}</h1>
        </div>
    )
}
export default User;
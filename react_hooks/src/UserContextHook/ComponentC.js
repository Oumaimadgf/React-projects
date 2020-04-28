import React  , {useContext} from "react";
import ComponentF from "./ComponentF";
import {UserContext} from "./UserContext";

function ComponentC(){

    const user= useContext(UserContext)
     console.log(user)


    return(
        <div className='App'>
           <h2> welcome {user}</h2>
        </div>
    )

}


export default ComponentC;
import React , {useContext} from "react";
import {UserContext} from "./UserContext";

function ComponentF() {

    return (
        <UserContext.Consumer>
            {(value) => {
                return (
                    // console.log(value)


                      <h1>hello {value}</h1>

                )
            }
            }


        </UserContext.Consumer>

    )
}
export default ComponentF;
import React from "react";
import {MyContext} from "./MyContext";
import User from "../user.png";
import ProfileData from "./PofileData";

const ContentData = () =>{
    // console.log(props);

    return(
        <MyContext.Consumer>
            { (value) => {
                return(
                // console.log(value)

                    <div className="Collapse" id="collapseExample">
                       <div className=" card card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Name :</strong> {value.name}</li>
                                <li className="list-group-item"><strong>Age : </strong>{value.age}</li>

                             </ul>

                       </div>
                        <br/>
                    </div>






                )
            }
            }


        </MyContext.Consumer>

    )



}


export default ContentData;



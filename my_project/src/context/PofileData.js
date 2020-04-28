import React from "react";
import ContentData from "./ContentData";
import {MyContext} from "./MyContext";
const ProfileData = (props) =>{

    // console.log(props);
  return(

                <div>

                <p>

                    <a className="btn btn-primary"  href="#CollapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Informations sur {props.welcome.name} ?
                    </a>

                </p>
                 <ContentData/>

                 </div>)









}


export default ProfileData;
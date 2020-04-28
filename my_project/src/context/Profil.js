import React from "react";
import User from "../user.png";
import ProfileData from "./PofileData";
import {MyContext} from "./MyContext";
class Profil extends React.Component{



  render() {
      let value =this.context;
      console.log(value);
      return (

                   <div className="container">
                      <h1>{this.props.info.name}</h1>
                       <p> <strong>Age : </strong>{value.age}</p>
                      <img src={User} alt="ouma" className="img-thumbnail mb-3" />

                  <ProfileData welcome={this.props.info}/>
                  </div>






      );
  }


}
Profil.contextType = MyContext;
// console.log(Profiles.contextType);


export default Profil;
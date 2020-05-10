import React, {Component} from 'react';
import {firebaseApp} from "../../firebase/firebase";

class Home extends Component {
    constructor() {
        super();
        this.logout=this.logout.bind();

    }

    logout(){
        firebaseApp.auth().signOut();


    }

    render() {
        return (
            <div className="form-group" >

             <h1>You are home</h1>
                <button id="button" onClick={()=>{this.logout()}}>LOGOUT</button>
            </div>

        );
    }

}



export default Home;
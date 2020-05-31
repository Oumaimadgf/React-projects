import React, {Component} from 'react';
import {connect} from "react-redux";
import { users} from "../../firebase/firebase";

import {SetUser} from "../../action";
import {SET_USER} from "../../constants";
class Profile extends Component {
constructor(props) {
    super(props);
    this.state={
        user:[],
        loading: false,
    }
}
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    componentDidMount() {
        this.setState({ loading: true });
        users.on('value', e => {

           const user_email =this.props.email
            e.forEach(user => {
                const {email,firstname,lastname} = user.val();
                if (user_email == email) {
                    this.state.user.push({email, firstname, lastname,id:user.key});
                    this.setState({ loading: false });
                }

            })
            console.log('user',  this.state.user);
            // SetUser(this.state.user);
        })

    }

    SetProfile(){
        // console.log('users',this.state.user);


    }

    render() {
        // console.log('users',  this.state.user);

        return (

            <div className="container bootstrap-snippet header-container">
                <div className="bg-white">
                    <div className="container py-5">
                        <div className="media col-md-10 col-lg-8 col-xl-7 p-0 my-4 mx-auto">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt
                                 className="d-block ui-w-100 rounded-circle"/>

                                <div className="media-body ml-5">
                                        {
                                            this.state.user.map((user, index) => {
                                                return (
                                                    <div  className="font-weight-bold mb-4" key={index} >
                                                        <h4 className="font-weight-bold mb-4">Welcome {user.firstname} to your profile</h4>

                                                        <form>

                                                            <div className="form-group">
                                                                <label  htmlFor="exampleInputEmail1">Email address</label>
                                                                <input  onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required="true"/>
                                                                <small id="emailHelp" className="form-text text-muted">{user.email}.</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="FirstName">FirstName</label>
                                                                <input onChange={this.handleChange} type="text" name="FirstName" className="form-control"  placeholder="Enter your FirstName"required="true"/>
                                                                <small id="emailHelp" className="form-text text-muted">{user.firstname}</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="FirstName">FirstName</label>
                                                                <input  onChange={this.handleChange} type="text" name="FirstName" className="form-control"  placeholder="Enter your FirstName"required="true"/>
                                                                <small id="emailHelp" className="form-text text-muted">{user.lastname}</small>
                                                            </div>

                                                            <button onClick={this.SetProfile} style={{marginLeft: '25px'}} className="btn btn-primary " disabled="true">Editer Profile</button>
                                                        </form>

                                                    </div>


                                                )
                                            })

                                        }


                                </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

function mapStateToProps(state){
    const {email} = state;
    console.log('email', state);
    return{
        email
    }
}

export default connect(mapStateToProps,SetUser)(Profile );
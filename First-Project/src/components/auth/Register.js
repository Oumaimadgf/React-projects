import React, {Component} from 'react';
import {Alert} from "reactstrap";
import {Link} from "react-router-dom";
import {firebaseApp, users} from "../../firebase/firebase";
import {ADMIN} from "../../constants";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state={
            email:'',
            password:'',
            FirstName:'',
            LastName:'',
            isAdmin:false,
            error:{
                message:''
            },
            visible:false,
            success:'',
        }
        this.Create = this.Create.bind(this);
    }


    handleSubmit = e => {
        console.log(this.state);
        e.preventDefault();

    };
    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    Create(e){
        e.preventDefault();
        console.log('state',this.state);
        const { FirstName, email, LastName,password, isAdmin } = this.state;
       // const roles={}
       //  if (isAdmin) {
       //      roles[ADMIN] = ADMIN;
       //  }
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{
            console.log('success');
            users.push({FirstName,LastName,email,password});
            this.setState({success:'successfully',visible:true});

        })
            .catch((error) => {
                console.log('error',error);
                this.setState({error});
                this.setState({visible:true});
            })
    }
    render() {
        const {
            email,
            password,
            FirstName,
            LastName,
            isAdmin
        } = this.state;
        const isInvalid =
            password === '' ||
            email === '' ||
            FirstName === ''||
            LastName === '';

        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="#">Admin</a>
                    </div>
                    {/*-- /.login-logo -->*/}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <Alert color="primary" isOpen={this.state.visible} >{this.state.error.message}</Alert>

                            <form  method="post">
                                <div className="input-group mb-3">
                                    <input value={this.state.FirstName} onChange={this.handleChange} type="text" name="FirstName"className="form-control" placeholder="FirstName"/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input value={this.state.LastName} onChange={this.handleChange} type="text" className="form-control" name="LastName" placeholder="LastName"/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user"></span>
                                            </div>
                                        </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input  onChange={this.handleChange} type="email" name="email" className="form-control" placeholder="Email"/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>



                                <div className="input-group mb-3">
                                    <input  value={this.state.password} onChange={this.handleChange} type="password"  name="password" className="form-control" placeholder="Password"/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <label>*/}
                                {/*        Admin:*/}
                                {/*        <input*/}
                                {/*            name="isAdmin"*/}
                                {/*            type="checkbox"*/}
                                {/*            checked={isAdmin}*/}
                                {/*            onChange={this.onChangeCheckbox}*/}
                                {/*        />*/}
                                {/*    </label>*/}
                                {/*</div>*/}

                                <div className="row">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={this.Create} disabled={isInvalid}>Sign Up</button>
                                    </div>

                                </div>
                            </form>

                            <br/>
                            <div><Link to={'/login'}>Already a user ? sign in instead</Link></div>

                        </div>

                    </div>
                </div></div>
        );
    }
}

export default Register;
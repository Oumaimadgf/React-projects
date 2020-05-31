import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {firebaseApp} from "../../firebase/firebase";
import {Alert} from "reactstrap";

class Login extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: '',
            password: '',
            error:{
                message:''
            },
            visible:false,

        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log('success')



        }).catch((error) => {
            console.log('error',error);
            this.setState({error});
            this.setState({visible:true});
            // this.props.history.push("/home");
        });
    }




    render() {
        const { email, password } = this.state;

        const isInvalid = password === '' || email === '';
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
                                    <input  onChange={this.handleChange} type="email" name="email" className="form-control" placeholder="Email"/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="input-group mb-3">
                                    <input  value={this.state.password} onChange={this.handleChange} type="password"  name="password" className="form-control" placeholder="Password"/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={this.login} disabled={isInvalid}>Sign In</button>
                                    </div>

                                </div>
                            </form>

                            <br/>
                            <div><Link to={'/register'}>Don't have an account ? Sign Up </Link></div>

                        </div>

                    </div>
                </div></div>
        );
    }
}

export default Login;
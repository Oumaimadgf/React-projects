import React, {Component} from 'react';
import {Link} from "react-router-dom";
class register extends Component {

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:'',

    }
    handleSubmit = e => {
        console.log(this.state);
        e.preventDefault();

    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Register form</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input
                            name="FirstName"
                            type="text"
                            placeholder="Enter your FirstName"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input
                            name="LastName"
                            type="text"
                            placeholder="Enter your LastName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <button className="submit">register</button>
                    </div>
                    <div><Link to={'/login'}>Already a user ? sign in instead</Link></div>
                </form>
            </div>
        );
    }
}

export default register;
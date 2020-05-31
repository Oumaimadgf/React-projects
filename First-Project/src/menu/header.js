import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Home from "../components/auth/Home";
import {firebaseApp} from "../firebase/firebase";

class Header extends Component {
    constructor() {
        super();
        this.logout=this.logout.bind();

    }

    logout(){
        firebaseApp.auth().signOut();


    }
    render() {
        return (
            <div>

                <nav className="main-header navbar navbar-expand navbar-white navbar-light">


                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                                <i className="fas fa-bars"/></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link"><strong>Home</strong></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link"> <strong>Contact</strong></a>
                        </li>
                    </ul>

                    <form className="form-inline ml-3">
                        <div className="input-group input-group-sm">
                            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search"/>
                                     </button>
                                </div>
                        </div>
                    </form>


                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown">
                                <li className="nav-item d-none d-sm-inline-block"  data-toggle="dropdown">
                                    <a href="#" className="nav-link">
                                        <i className="fas fa-user"/>
                                         <strong>Profile</strong>
                                    </a>
                                </li>

                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">User Profile</span>
                                <div className="dropdown-divider"/>
                                <Link  onClick={()=>{this.logout()}} className="dropdown-item">
                                    <i className=" fas fa-sign-out-alt mr-2"/> LOG OUT
                                </Link>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-user"/> Your Profile
                                </a>
                            </div>
                        </li>

                    </ul>
                </nav>

            </div>
        );
    }
}

export default Header;
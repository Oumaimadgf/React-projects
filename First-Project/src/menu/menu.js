import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from "./header";
class Menu extends Component {
    render() {
        return(
            <div>
                <Header/>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                 
                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
                                     className="brand-image img-circle elevation-3"
                                />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Espace Admin!</a>
                            </div>
                        </div>

                        {/*-- Sidebar Menu -->*/}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                                data-accordion="false">

                                <li className="nav-item has-treeview menu-open">
                                    <Link to ="/home" className="nav-link active">
                                        <i className="nav-icon fas fa-book"/>
                                        <p>
                                           Home
                                            <i className="right fas fa-angle-left"/>
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item has-treeview">
                                    <Link to="/users" className="nav-link">
                                        <i className="nav-icon fas fa-edit"/>
                                        <p>
                                            Users
                                            <i className="fas fa-angle-left right"/>
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item has-treeview menu-open " >
                                    <Link to = "#" className="nav-link">
                                        <i className="nav-icon fas fa-table"/>
                                        <p>
                                            Goal
                                            <i className="fas fa-angle-left right"/>
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview ">
                                        <li className="nav-item">
                                            <Link to="/add" className="nav-link">
                                                <i className="far fa-circle nav-icon text-info"/>
                                                <p>Add Goal</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/list" className="nav-link">
                                                <i className="far fa-circle nav-icon text-warning"/>
                                                <p>List Of Goals</p>
                                            </Link>
                                        </li>

                                    </ul>

                                </li>
                            </ul>
                        </nav>

                    </div>




                </aside>
            </div>





        );

    }


}

export default Menu;
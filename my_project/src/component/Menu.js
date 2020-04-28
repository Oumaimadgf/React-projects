import React from 'react';
import {Link,NavLink} from 'react-router-dom';
function Menu(){
    return(


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" to="/">React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Docs <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tutorial">Tutorials</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/community">Community</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/profile" tabIndex="-1" aria-disabled="false">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>





    );

}









export default Menu;








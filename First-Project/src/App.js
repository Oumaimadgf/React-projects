import React, {Component} from 'react';

import './App.css';
import {Router, Switch, BrowserRouter, Redirect, Route} from 'react-router-dom';
import Home from "./components/auth/Home";
import {firebaseApp, users} from "./firebase/firebase";
import history from "./utils/history";
import Menu from "./menu/menu";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducers/reducer_user";
import {logUser, setGoals} from "./action/index";
import AddGoal from "./components/goals/AddGoal";
import GoalList from "./components/goals/GoalList";
import Profile from "./components/auth/profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navigation, {NavigationAuth, NavigationNonAuth} from "./utils/Navigation";


class App extends Component{
    constructor() {
        super();
        this.state = ({
            user: null,
            roles:{}
        });
        this.authListener = this.authListener.bind(this);
        this.store = createStore(reducer);
    }


    componentDidMount() {
        this.authListener();
    }

    authListener() {
        firebaseApp.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                        this.setState({user});
                        // localStorage.setItem('user', user.uid);
                        const {email, uid} = user;
                        console.log('email :', email, 'uid :', uid)
                        this.store.dispatch(logUser(email));
                        history.push("/home");

            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
                history.push("/login");

            }
        });
    }
    render() {
        const user = this.state.user;
     console.log('essayer un teset',user);
        return (
            <Provider store={this.store} value={this.state.user}>
                <Router history={history}>
                    {
                        this.state.user ?
                            <NavigationAuth/>

                        :

                           <NavigationNonAuth/>

                    }







                </Router>



            </Provider>



         )
    }

}


export default(App);

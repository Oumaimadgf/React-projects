import React, {Component} from 'react';

import './App.css';
import {Router, Switch, BrowserRouter, Redirect, Route} from 'react-router-dom';
import Login from "./components/auth/Login";
import register from "./components/auth/register";

import Home from "./components/auth/Home";
import {firebaseApp} from "./firebase/firebase";
import history from "./utils/history";
import Menu from "./menu/menu";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducers/reducer_user";
import {logUser, setGoals} from "./action/index";
import AddGoal from "./components/goals/Addgoal";
import GoalList from "./components/goals/goalList";



class App extends Component{
    constructor() {
        super();
        this.state = ({
            user: null,
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

                this.setState({ user });
                // localStorage.setItem('user', user.uid);
                const{email} =user;
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
        return (
            <Provider store={this.store}>
                <Router history={history}>
                    <Route path="/" component={Menu}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/add" component={AddGoal}/>
                    <Route path="/list" component={GoalList}/>
                </Router>


            </Provider>




         )
    }

}


export default(App);

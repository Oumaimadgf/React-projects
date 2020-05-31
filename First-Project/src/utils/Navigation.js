import {Link, Route, Router} from "react-router-dom";
import React, {Component} from 'react';
import Menu from "../menu/menu";
import AddGoal from "../components/goals/AddGoal";
import GoalList from "../components/goals/GoalList";
import Profile from "../components/auth/profile";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import UsersList from "../components/user/UsersList";
import Home from "../menu/Home";


export const NavigationAuth = () => (
    <div>
        <Route path="/" component={Menu}/>
        <Route path="/home" component={Home}/>
        <Route path="/add" component={AddGoal}/>
        <Route path="/list" component={GoalList} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={UsersList} />
    </div>


);

export const NavigationNonAuth = () => (
    <div>
        <Route exact path="/login" component={Login}/>
        <Route path="/register" component={Register} />

    </div>

);


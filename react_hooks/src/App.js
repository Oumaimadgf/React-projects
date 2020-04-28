import React, {Component} from 'react';
import './App.css';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import ClassCounter from "./Hooks/ClassCounter";
import HookCounter from "./Hooks/HookCounter";
import HookCounterTwo from "./Hooks/HookCounterTwo";
import HookCounterObject from "./Hooks/HookCounterObject";

import HookCounterOne from "./HookEffect/HookCounterOne";
import ClassCount from "./HookEffect/ClassCount";
import ClassMouse from "./HookEffect/ClassMouse";
import HouseMouse from "./HookEffect/HouseMouse";
import HookDate from "./HookEffect/HookDate";
import DataFetching from "./HookEffect/DataFetching";
import ComponentC from "./UserContextHook/ComponentC";
import {UserContext} from "./UserContextHook/UserContext";
import ComponentF from "./UserContextHook/ComponentF";
import CounterOne from "./UseReducerHook/CounterOne";
import CounterTwo from "./UseReducerHook/CounterTwo";

class App extends Component{
 state={
     name: 'vishwas'
}


  render() {

    return (
        <div className="App">
          {/*<PostList/>*/}
          {/*<PostForm/>*/}
          {/*<ClassCounter/>*/}
          {/*<HookCounterObject/>*/}
          {/*<HookCounterOne/>*/}
          {/*<ClassCount/>*/}
          {/*<ClassMouse/>*/}
          {/*<HouseMouse/>*/}
          {/*/!*<HookDate/>*!/*/}
          {/*<DataFetching/>*/}
            <UserContext.Provider value={this.state.name}>
                  {/*<ComponentF/>*/}
                  <ComponentC/>
            </UserContext.Provider>
            <CounterTwo/>
        </div>
    );
  }


}

export default App;

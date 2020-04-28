import React from 'react';
import Docs from "./component/Docs";
import Community from "./component/Community";
import Tutotrials from "./component/Tutorials";
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import ErrorPage from "./component/ErrorPage";
import './App.css';
import Menu from "./component/Menu";
import Profiles from "./component/Profiles";

import Profil from "./context/Profil";
import ProfileData from "./context/PofileData";
import ContentData from "./context/ContentData";
import {MyContext} from "./context/MyContext";


class App extends React.Component {

    // //example1 context
    //
    // state={
    //     user:{
    //         name : 'Lisa',
    //         age:23,
    //     }
    // }
    //
    // render() {
    //
    //
    //     return (
    //
    //         <MyContext.Provider value={this.state.user}>
    //             <Profile info={this.state.user}/>
    //
    //         </MyContext.Provider>
    //
    //
    //
    //
    //
    //     );
    // }


    // example2 router

    constructor(props) {
        super(props);
        this.state = {
            underConst: {
                Docs: false,
                Tutotrials: true,
                Community: false
            },

            user:{
                name : 'Ouma',
                age:23,
            }

        }
    }

    render()
        {return (
            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path= "/" component={Docs} />
                    <Route path= "/tutorial" component={Tutotrials} />
                    <Route path= "/users/:profileId" component={Profiles} />

                    //rediriger à la page docs si la page tutorial est en cours de construction
                    {/*<Route path= "/tutorial" render={()=>(*/}
                    {/*    this.state.underConst.Tutotrials? (<Redirect to="/" />):(<Tutotrials/>)*/}
                    {/*)*/}



                    } />
                    <Route strict path= "/community" component={Community} />
                    <Route strict path= "/profile" render={()=>(
                        <MyContext.Provider value={this.state.user}>
                             <Profil info={this.state.user}/>
                       </MyContext.Provider>
                        )} />


                    <Route component={ErrorPage} />
                </Switch>

            </BrowserRouter>


        );
        }



}
export default App;

import React, {Component} from 'react';
import {goalRef} from "../../firebase/firebase";
import {SetGoals} from "../../action";
import GoalItem from "./goalitem";
import {connect} from "react-redux";
import Menu from "../../menu/menu";


class GoalList extends Component {

    constructor(props) {
        super(props);
        this.state={
            goals : [],
            loading: false,
        }
        this.setState({ loading: true });
    }
    componentDidMount() {
        // this.setState({ loading: true});
        goalRef.on('value', e => {

            e.forEach(goal => {
                const {email,title} = goal.val();
                // const goalObject=goal.val();
                // console.log('goalObject',goalObject);
                const serverkey= goal.key;
                this.state.goals.push({email,title,serverkey});
                this.setState({ loading: false});
            })
            console.log('goals',  this.state.goals);
            // setGoals(goals);
            SetGoals( this.state.goals);

        })

    }

    render() {
        console.log('this.props.goals', this.state.goals);
        return (
      <div>
          <div className="content" style={{marginLeft: "19%"}}>
              <section className="content-header">
                  <div className="container-fluid">
                      <div className="row mb-2">
                          <div className="col-sm-6">

                          </div>
                          <div className="col-sm-6">
                              <ol className="breadcrumb float-sm-right">
                                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                                  <li className="breadcrumb-item active">list of goals</li>
                              </ol>
                          </div>
                      </div>
                  </div>
              </section>
              <div className="card mr-4 ml-4">
                  <div className="card-header">
                      <h3 className="card-title">Goals Lists </h3>
                  </div>
                  {/*-- /.card-header -->*/}
                  <div className="card-body">
                      <table id="example1" className="table table-bordered table-striped  table-hover">
                          <thead>
                          <tr>
                              <th>Title</th>
                              <th>Email</th>
                              <th>Action</th>
                          </tr>
                          </thead>
                          <tbody>

                          {
                              this.state.goals.map((goal,index)=>{
                                  return(

                                      <GoalItem key={index} goal ={goal}/>

                                  )
                              })



                          }



                          </tbody>
                      </table>
                  </div>
                  {/*-- /.card-body -->*/}
              </div>
              {/*-- /.card -->*/}
          </div>
      </div>


        );
    }
}

function mapStateToProps(state){
    const {goals} = state;
    console.log('state goals', state);
    return{
        goals
    }
}

export default connect(null,SetGoals) (GoalList);
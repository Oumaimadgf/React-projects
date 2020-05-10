import React, {Component} from 'react';
import {goalRef} from "../../firebase/firebase";
import {connect} from "react-redux";
import {SetGoals} from "../../action";
import GoalItem from "./goalitem";

class GoalList extends Component {
constructor(props) {
    super(props);
    this.state={
        goals : []
    }

}
    componentDidMount() {
        goalRef.on('value', e => {

            e.forEach(goal => {
                const {email,title} = goal.val();
                // const goalObject=goal.val();
                // console.log('goalObject',goalObject);
                const serverkey= goal.key;
                this.state.goals.push({email,title,serverkey});
            })
            console.log('goals',  this.state.goals);
            // setGoals(goals);
            SetGoals( this.state.goals);

        })

    }

    render() {

        console.log('this.props.goals', this.state.goals);


        return (
            <div className="container-md">
                  <h1>GOALS LISTS</h1>


                {
                        this.state.goals.map((goal,index)=>{
                        return(
                        <GoalItem key={index} goal ={goal}/>


                        )
                        })



            }







            </div>
        )


    }
}

function mapStateToProps(state){
    const {goals} = state;
    console.log('state goals', state);
    return{
        goals
    }
}


export default connect(null,SetGoals)(GoalList);
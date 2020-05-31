import React, {Component} from 'react';
import {completeGoalRef,goalRef} from "../../firebase/firebase";
import {connect} from "react-redux";
class GoalItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            goals : [],
        }

    }

    completeGoal(){
        const {title,serverkey}=this.props.goal;
        const {email}=this.props.goal;
        console.log('email',email,'titre',title,'key',serverkey);
        goalRef.child(serverkey).remove();
        window.location.reload(false);

    }


    render() {
        console.log('this.props.goals', this.props.goal);
        const {email,title}=this.props.goal;
        return (

                 <tr>

                     <td >{title}</td>
                     <td > submitted by : {email}</td>
                     <td> <button className="btn btn-danger" type="button"  onClick={()=>this.completeGoal()}>delete </button></td>

                 </tr>

        );
    }
}
function mapStateToProps(state){
    const {email}=state;
    console.log('user',email);
    return{
        email
    }}

export default connect(mapStateToProps,{completeGoalRef}) (GoalItem);
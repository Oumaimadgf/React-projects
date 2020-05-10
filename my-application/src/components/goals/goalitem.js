import React, {Component} from 'react';
import {completeGoalRef,goalRef} from "../../firebase/firebase";
import {connect} from "react-redux";
class GoalItem extends Component {

    completeGoal(){
        const {title,serverkey}=this.props.goal;
        const {email}=this.props.goal;
        console.log('email',email,'titre',title,'key',serverkey);
        goalRef.child(serverkey).remove();
    }
    render() {
        console.log('this.props.goals', this.props.goal);
        const {email,title}=this.props.goal;
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                 <tr>

                     <td >{title}</td>
                     <td > submitted by : {email}</td>
                     <td> <button className="btn btn-danger" type="button"  onClick={()=>this.completeGoal()}>delete </button></td>

                 </tr>
                </tbody>
            </table>
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
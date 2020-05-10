import React, {Component} from 'react';
import {goalRef} from "../../firebase/firebase";
import {connect} from "react-redux";
import {useAlert} from 'react-alert';
class AddGoal extends Component {

    constructor(props) {
        super(props);
        this.state={
            title:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addGoal=this.addGoal.bind(this);

    }

    handleChange(e) {
        this.setState({ title: e.target.value });
    }
    addGoal(){
        console.log('this.state',this);

        const title=this.state.title;
        const email=this.props.email;
        goalRef.push({title,email});

    }
    render() {
        return (

            <div className="form col-md-4">
                <div><h1>Adding Goals</h1></div>
                <div className="form-group form-inline">
                    <input placeholder="add a goal" className="form-control" onChange={this.handleChange} style={{marginRight:'5px'}}/>

                    <button type="button" onClick={this.addGoal} className="btn btn-success">Add Goal</button>
                </div>



            </div>


        )}
}
function mapStateToProps(state){
    const {email}=state;
    console.log('state in addgoal', state);
    return{
      email
    }}

export default connect(mapStateToProps,null)(AddGoal);
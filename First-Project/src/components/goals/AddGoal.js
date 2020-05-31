import React, {Component} from 'react';
import {goalRef} from "../../firebase/firebase";
import {connect} from "react-redux";
import {Alert} from "reactstrap";
import Menu from "../../menu/menu";
class AddGoal extends Component {

    constructor(props) {
        super(props);
        this.state={
            title:'',
            visible:false,
            success:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.addGoal=this.addGoal.bind(this);

    }

    handleChange(e) {
        this.setState({ title: e.target.value });
    }
    addGoal(e){

        console.log('this.state',this);
        const title=this.state.title;
        const email=this.props.email;
        goalRef.push({title,email});
        this.setState({success:'a goal is added successfully' });
        this.setState({ visible:true  });
        e.preventDefault();


    }




    render() {
        const {
            title
        } = this.state;

        console.log('state',this.state);
        const isValid= title === '';


        return (
            <div>

                <div className="content "style={{marginLeft: "19%"}}> <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Add a Goal</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                    <section className="content">
                        <div className="container-fluid">

                            <div className="row  ">

                                <div className="col-md-8 m-auto">
                                    {/*-- general form elements -->*/}
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Add Goal</h3>
                                        </div>


                                        {/*-- form start -->*/}
                                        <form role="form">
                                            <div className="card-body">
                                                <Alert color="primary" isOpen={this.state.visible} >{this.state.success}</Alert>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputTitle">Title of a goal</label>
                                                    <input value={this.state.email} onChange={this.handleChange} type="text"  id = "title" name="title" className="form-control"  placeholder="Enter title" required="true"/>
                                                    <small  className="form-text text-muted">you should enter the title of goal</small>
                                                </div>

                                                <div className="">
                                                    <button onClick={this.addGoal} type="submit" className="btn btn-primary" disabled={isValid}>Submit</button>
                                                </div>
                                            </div>
                                            {/*-- /.card-body -->*/}


                                        </form>
                                    </div>

                                </div></div></div></section>


                </div>

            </div>








        );
    }
}
function mapStateToProps(state){
    const {email}=state;
    console.log('state in addgoal', state);
    return{
        email
    }}

export default connect(mapStateToProps,null)(AddGoal);
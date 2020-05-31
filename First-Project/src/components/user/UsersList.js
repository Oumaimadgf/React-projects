import React, {Component} from 'react';
import {users} from "../../firebase/firebase";
import Menu from "../../menu/menu";
import {connect} from "react-redux";


class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state={
            users : [],
            loading: false,
        }
        this.setState({ loading: true });
    }
    componentDidMount() {
        // this.setState({ loading: true});
        users.on('value', snapshot => {

            snapshot.forEach(user => {
                this.state.users.push(user.val(),user.key);
                this.setState({ loading: false});
            })
            console.log('users',  this.state.users);

        })

    }

    render() {
        console.log('this.props.users', this.state.users);
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
                                        <li className="breadcrumb-item active">list of users</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="card mr-4 ml-4">
                        <div className="card-header">
                            <h3 className="card-title">Users </h3>
                        </div>
                        {/*-- /.card-header -->*/}
                        <div className="card-body">
                            <table id="#example2" className="table table-bordered table-striped  table-hover">
                                <thead>
                                <tr>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    this.state.users.map((user,index)=>{
                                        return(

                                            <tr>

                                                <td >{user.FirstName}</td>
                                                <td > {user.LastName}</td>
                                                <td> {user.email}</td>
                                                <td></td>

                                            </tr>

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
    const {email} = state;
    console.log('state', state);
    return{
       email
    }
}

export default connect(null) (UsersList);


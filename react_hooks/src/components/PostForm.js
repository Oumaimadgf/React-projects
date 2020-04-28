import React,{Component} from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class  PostForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userId:'',
            title:'',
            body:'',

        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) =>{//eviter l actualisation de la page: on se connecte a l 'objet d'etat
       e.preventDefault()
       console.log(this.state)
       axios.post("https://jsonplaceholder.typicode.com/posts" , this.state) // je vais envoyer mes données a l UrL
           .then(response =>
           {console.log(response);})
           .catch(error =>{
               console.log(error);
           })
    }
    render() {
        const { userId , title, body }=this.state
        return (
            <div className="container">

                <h1>PostForm</h1>

                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="exampleInputUserId">UserId</label>
                        <input type ="text" name="userId" value={userId} onChange={this.changeHandler} placeholder="Enter UserId" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputTitle">Title</label>
                        <input type ="text" name="title" value={title}  onChange={this.changeHandler} placeholder="Enter title" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputbody">Title</label>
                        <input type ="text" name="body" value={body} onChange={this.changeHandler} placeholder="Enter body" required/>

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>


        );
    }


}

export default PostForm;
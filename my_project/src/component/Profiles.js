import React ,{Component} from 'react';
import axios from 'axios';
import User from "../user.png";
class Profiles extends Component {

    state={
        id:{}
    }

    //cette fonction permet de récupere les datas
    componentDidMount() {
        const data = this.props.match.params.profileId ;
        // this.setState({  id : data});
        //  console.log(this.props);

        let payload = {
            token: "0ALCt16GoH1JR8HL0BU5LA",
            data: {
                name: "nameFirst",
                email: "internetEmail",
                phone: "phoneHome",
                _repeat: 10
            }
        };

        axios({
            method: "post",
            url: "https://app.fakejson.com/q",
            data: payload
        }).then(resp => {
            // Do something with fake data
            // console.log(resp.data[data]);
            this.setState({id:resp.data[data]});

        });

    }

    render() {
        return (
          <div className="container mt-3">
            <h1>Profile</h1>
             <img src={User}/>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item"> <strong>Name:</strong>  {this.state.id.name}</li>
                  <li className="list-group-item"> <strong>Email:</strong>  {this.state.id.email}</li>
                  <li className="list-group-item"> <strong>tel:</strong> {this.state.id.phone}</li>

              </ul>
          </div>
        );
    }

}

export default Profiles ;
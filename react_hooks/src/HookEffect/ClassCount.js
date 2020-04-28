import React, {Component} from 'react';

class ClassCount extends Component {
    constructor(props) {
        super(props);

        this.state={
            count: 0 ,
            name:''
        }
    }

    componentDidMount() {
        document.title = `Vous avez cliqué ${this.state.count} fois`;

    }


    componentDidUpdate(prevProps,preState) {
        if(preState.count !== this.state.count){
            console.log("updating document")
            document.title = `Vous avez cliqué ${this.state.count} fois`;
        }


    }

    incrementCount = () =>{
        this.setState({
            count: this.state.count +1
            }

        )

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
             <button onClick={this.incrementCount}>count {this.state.count}</button>
            </div>
        );
    }
}

export default ClassCount;


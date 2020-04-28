import React, {useEffect, useState} from 'react';
class HookDate extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        date: new Date()
    };
}

updateDate() {
    this.setState({ date: new Date() });
}

componentDidMount() {
    this.intervalId = setInterval(() => this.updateDate(), 1000);
}

componentWillUnmount() {
    clearInterval(this.intervalId);
}

render() {
    return <p>Nous sommes le {this.state.date.toLocaleString("fr-FR")}</p>;
}
}


export default HookDate;
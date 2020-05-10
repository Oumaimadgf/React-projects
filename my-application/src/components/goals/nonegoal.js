import React, {Component} from 'react';
import { withAlert } from 'react-alert'

const Appgoal = ({ alert }) => (
    <button
        onClick={() => {
            alert.show('Oh look, an alert!')
        }}
    >
        Show Alert
    </button>
)

export default withAlert()(Appgoal)


import React, {Component} from 'react';
import RequestAccountForm from './ForgetAccountForm';
import {Jumbotron} from 'react-bootstrap';


export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container-fluid">
            <Jumbotron>
                <h1>PII Librarian Application</h1>
            </Jumbotron>
            <RequestAccountForm />
        </div>);
    }
};
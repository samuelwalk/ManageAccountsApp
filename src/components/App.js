import React, {Component} from 'react';
import RequestAccountForm from './ForgetAccountForm';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container-fluid">
            <div className="jumbotron">
                <h1>PII Librarian App Demo</h1>
            </div>
            <RequestAccountForm />
        </div>);
    }
};
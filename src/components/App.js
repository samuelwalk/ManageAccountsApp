import React, {Component} from 'react';
import SearchBar from './SubmitAccountForm';
import RequestAccountForm from './RequestAccountForm';
import ForgetInfoForm from './ForgetInfoForm';
import Navbar from './Navbar';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Hello!</h1>
            {/*<Navbar />*/}
            {/*<SearchBar />*/}
            <RequestAccountForm />
            {/*<ForgetInfoForm />*/}
        </div>);
    }
};
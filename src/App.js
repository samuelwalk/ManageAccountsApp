import React, {Component} from 'react';
import SearchBar from './components/SubmitAccountForm';
import ReqestAccountForm from './components/RequestAccountForm';
import ForgetInfoForm from './components/ForgetInfoForm';
import Navbar from './components/Navbar';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div>
            <Navbar />
            <SearchBar />
            <ReqestAccountForm />
            <ForgetInfoForm />
        </div>);
    }
};
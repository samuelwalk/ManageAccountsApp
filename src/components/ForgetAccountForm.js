import React, {Component} from 'react';
import AccountsApi from '../api/AccountsApi';
import autoBind from 'auto-bind';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            searchInput: '',
            forgetInput: ''
        };
        autoBind(this);
    }

    componentDidMount() {
        AccountsApi.getAccounts().then(response => {
            console.log(response);
            this.setState({
                accounts: response
            });
        });
    }

    getAllAccounts() {
        AccountsApi.getAccounts().then(response => {
            this.setState({
                accounts: response
            });
        }).catch(reason => {
            console.log(reason);
        });
    }

    getAccountById() {
        AccountsApi.getAccount(this.state.searchInput).then(response => {
            this.setState({
                accounts: response
            });
        }).catch(reason => {
            console.log(reason);
        });
    }

    forgetAccountById() {
        AccountsApi.forgetAccount(this.state.forgetInput).then(response => {
            this.setState({
                accounts: response
            });
        }).catch(reason => {
            console.log(reason);
        });
    }

    handleSearchInputChange(e) {
        this.setState({searchInput: e.target.value});
    }

    handleForgetInputChange(e) {
        this.setState({forgetInput: e.target.value});
    }

    handleSearchButtonPress(e) {
        e.preventDefault();
        this.getAccountById();
    }

    handleForgetButtonPress(e) {
        e.preventDefault();
        this.forgetAccountById();
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Find account by ID</h3>
                    <form onSubmit={this.getAccountById}>
                        <input type="text" onChange={this.handleSearchInputChange} />
                    </form>
                    <button onClick={this.handleSearchButtonPress}>Search</button>
                </div>

                <div>
                    <h3>Forget account by ID</h3>
                    <form onSubmit={this.getAccountById}>
                        <input type="text" onChange={this.handleForgetInputChange} />
                    </form>
                    <button onClick={this.handleForgetButtonPress}>Forget</button>
                </div>

                <div>
                    <h3>All Accounts</h3><span><button onClick={this.getAllAccounts}>Refresh</button></span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Account Number</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.accounts && this.state.accounts.map(account => {
                        return (<tr>
                              <td>{account.accountNumber}</td>
                              <td>{account.name}</td>
                              <td>{account.address}</td>
                              <td>{account.phoneNumber}</td>
                              <td>{account.balance}</td>
                          </tr>);
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
};
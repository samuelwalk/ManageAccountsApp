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
            console.log(response);
            this.getAllAccounts();
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
        const btnStyle = {
            display: 'inline-block'
        };

        return (
            <div className="container-fluid">
                <div style={btnStyle}>
                    <h4>Find account by ID</h4>
                    <form onSubmit={this.getAccountById}>
                        <input type="text" onChange={this.handleSearchInputChange} />
                    </form>
                    <button className="btn btn-primary" onClick={this.handleSearchButtonPress}>Search</button>
                    <h4>Forget account by ID</h4>
                    <form onSubmit={this.getAccountById}>
                        <input type="text" onChange={this.handleForgetInputChange} />
                    </form>
                    <button className="btn btn-primary" onClick={this.handleForgetButtonPress}>Forget</button>
                </div>

                <div>
                    <h4>All Accounts</h4>
                    <button style={btnStyle} className="btn btn-primary" onClick={this.getAllAccounts}>Refresh</button>
                </div>
                <div>
                    <table className="table">
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
                                  <td scope="col">{account.accountNumber}</td>
                                  <td scope="col">{account.name}</td>
                                  <td scope="col">{account.address}</td>
                                  <td scope="col">{account.phoneNumber}</td>
                                  <td scope="col">{account.balance}</td>
                              </tr>);
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};
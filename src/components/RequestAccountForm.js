import React, {Component} from 'react';
import AccountsApi from '../api/AccountsApi';
import autoBind from 'auto-bind';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            inputId: '',
            requestedAccount: ''
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
        AccountsApi.getAccount(this.state.inputId).then(response => {
            this.setState({
                accounts: response
            });
        }).catch(reason => {
            console.log(reason);
        });
    }

    handleInputIdChange(e) {
        const inputId = e.target.value();
        this.setState({inputId});
    }

    render() {
        return (
            <div>
                {this.state.requestedAccount};
                <div>
                    <h3>Find account by ID</h3>
                    <form onSubmit={this.getAccountById}>
                        <label>
                            <input type="text" value={this.state.value} onChange={this.handleInputIdChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>


                {this.state.requestedAccount && <div>
                    <h4>Here is the account information you requested</h4>
                    <p>{this.state.requestedAccount}</p>
                </div>}

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
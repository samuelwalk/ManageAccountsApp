import React, {Component} from 'react';
import AccountsApi from '../api/AccountsApi';
import autoBind from 'auto-bind';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: []
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

    requestAccounts() {
        AccountsApi.getAccounts().then(response => {
            this.setState({
                accounts: response
            });
        }).catch(reason => {
            console.log(reason);
        })
    }

    render() {
        return (
            <div>
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
                <br />
                <button onClick={this.requestAccounts}>Refresh</button>
            </div>
        );
    }
};
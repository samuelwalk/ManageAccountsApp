import React, {Component} from 'react';
import AccountsApi from '../api/AccountsApi';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: null
        };
    }

    componentDidMount() {
        AccountsApi.getAccounts().then(data => {
            this.setState({
                accounts: data
            });
        });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.accounts && this.state.accounts.map(account => {
                      <tr>
                          <td>{account.firstName}</td>
                          <td>{account.lastName}</td>
                          <td>{account.address}</td>
                          <td>{account.phoneNumber}</td>
                          <td>{account.balance}</td>
                      </tr>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
};
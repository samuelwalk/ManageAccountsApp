import React, {Component} from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="ui bottom attached active tab segment" data-tab="requestInfo">
                <form class="ui form">
                    <div class="field">
                        <label>Search By Account Number</label>
                        <input type="text" name="account-number" placeholder="Account Number" />
                    </div>
                    <button class="ui button" type="submit">Search</button>
                </form>
                <table class="ui celled table">
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
                        <tr>
                            <td>Sam</td>
                            <td>Walk</td>
                            <td>5454 Blockchain Ln.</td>
                            <td>614-555-7907</td>
                            <td>$15,678</td>
                        </tr>
                        <tr>
                            <td class="error"><i class="attention icon"></i> Classified</td>
                            <td class="error"><i class="attention icon"></i> Classified</td>
                            <td class="error"><i class="attention icon"></i> Classified</td>
                            <td class="error"><i class="attention icon"></i> Classified</td>
                            <td class="error"><i class="attention icon"></i> Classified</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};
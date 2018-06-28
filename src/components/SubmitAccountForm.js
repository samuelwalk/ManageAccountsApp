import React, {Component} from 'react';

export default class SubmitAccountForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="ui bottom attached tab segment" data-tab="submitInfo">
                <form class="ui form">
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div class="field">
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Address" />
                    </div>
                    <div class="field">
                        <label>Phone Number</label>
                        <input type="text" name="phone-number" placeholder="Phone Number" />
                    </div>
                    <div class="field">
                        <label>Balance</label>
                        <input type="text" name="balance" placeholder="Balance" />
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
};
import React, {Component} from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="ui bottom attached tab segment" data-tab="forgetInfo">
                <form class="ui form">
                    <div class="field">
                        <label>Account To Be Forgotten</label>
                        <input type="text" name="first-name" placeholder="Account Number" />
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
};
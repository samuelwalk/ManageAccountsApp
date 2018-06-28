import React, {Component} from 'react';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="ui top attached tabular menu">
                <a class="active item" data-tab="requestInfo">Request Account Information</a>
                <a class="item" data-tab="submitInfo">Submit Account Information</a>
                <a class="item" data-tab="forgetInfo">Place An Account On The Forget List</a>
            </div>
        );
    }
}
import React, {Component} from "react";

export default class Secret extends Component {
    render() {
        return (
            <div>
                THis is a Secret area!!! Go back <a href="/">Home</a>.
                <br/>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
};
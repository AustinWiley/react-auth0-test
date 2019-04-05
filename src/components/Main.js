import React, {Component} from "react";
import API from "../utils/API";


export default class Main extends Component {
    state = {
        UserInfo: [],
         user: this.props.name
       };
     
    //    componentDidMount() {
    //      this.checkUser();
    //    }
     
    //    checkUser = () => {
    //      API.getUser()
    //        .then(res =>
    //          this.setState({ UserInfo: res.data })
    //        )
    //        .catch(err => console.log(err));
    //    };


    render() {
        return(
            <div>
            <p>
            Hello {this.props.name}<br/>ola: {this.state.user}
            Do you want to see the secret area? <a href="/secret">Click me</a> 
          </p>

          {!this.props.auth.isAuthenticated() &&
          <div>
              <hr/>
              Please login first
              <hr/>
              <button onClick={this.props.auth.login}>Login</button>
          </div>
          }
          
          </div>
        )
    }
}
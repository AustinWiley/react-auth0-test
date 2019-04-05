import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";

console.log(this.props.location)
class App extends Component {

  render() {
    {console.log(this.props.location)}
    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Main {...this.props}/>;
        break;
        case "callback":
          mainComponent = <Callback />;
          break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props}/> : <NotFound />
        break;
      default:
        mainComponent = <NotFound />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.name}</h1>
          {mainComponent}
        </header>
      </div>
    );
  }
}

export default App;

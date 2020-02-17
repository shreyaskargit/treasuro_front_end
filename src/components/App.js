import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// import GifLoader from "react-gif-loader";
import history from "../history";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Rules from "./pages/Rules";
import Header from "./Header";
import "./pages/css/style.css";
// import logo from "./pages/css/assets/loader.gif";

export default class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount = async () => {
    await this.setState({ loading: false });
  };

  render() {
    return (
      <>
        <div className="appBox">
          <Router history={history}>
            <div>
              <Header />
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route path="/rules" exact component={Rules} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/:id" component={Home} />
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  }
}

import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
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
    setTimeout(
      function() {
        this.setState({ loading: false });
      }.bind(this),
      4000
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          {/* <img src="./pages/css/assets/loader_final.gif" alt="loader" /> */}
        </div>
      );
    } else {
      return (
        <>
          <div className="appBox">
            <div>
              <div className="birdbox">
                <div className="bird-container bird-container--one">
                  <div className="bird bird--one"></div>
                </div>
                <div className="bird-container bird-container--two">
                  <div className="bird bird--two"></div>
                </div>
                <div className="bird-container bird-container--three">
                  <div className="bird bird--three"></div>
                </div>
                <div className="bird-container bird-container--four">
                  <div className="bird bird--four"></div>
                </div>
              </div>
            </div>
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
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/home" />}
                  />
                </Switch>
              </div>
            </Router>
          </div>
        </>
      );
    }
  }
}

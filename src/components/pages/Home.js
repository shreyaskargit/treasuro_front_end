import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../api/Url";
import Dashboard from "../Dashboard";
import "./css/Home.css";

export default class Home extends React.Component {
  state = {
    data: [],
    question: ""
  };

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    console.log(id);
    let Url = `${BaseUrl}/api/question/submit`;
    let res = await axios.get(Url, {
      headers: {
        "x-auth": localStorage.getItem("token")
      },
      query: {
        answer: id
      }
    });
    console.log(res);
    this.getdetails();
  };

  getdetails = async () => {
    console.log("In getstates");
    let url = `${BaseUrl}/api/user/myProfile`;
    let res = await axios.get(url, {
      headers: {
        "x-auth": localStorage.getItem("token")
      }
    });
    console.log(res.data.data.user);
    const data = {
      username: res.data.data.user.username,
      level: res.data.data.user.level,
      top: res.data.data.user.top
    };
    await this.setState({ data: data });
    const question = "this is a question";
    await this.setState({ question: question });
  };
  render() {
    if (localStorage.getItem("token") == null) {
      return (
        <div className="homeBox">
          <Link to="/login">Login</Link>
          <Link to="signup">Register</Link>
        </div>
      );
    } else {
      return (
        <Dashboard data={this.state.data} question={this.state.question} />
      );
    }
  }
}

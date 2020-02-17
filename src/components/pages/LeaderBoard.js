import React from "react";
import axios from "axios";
import BaseUrl from "../../api/Url";

export default class LeaderBoard extends React.Component {
  state = {
    list: []
  };
  componentDidMount = async () => {
    let url = `${BaseUrl}/api/user/leaderboard`;
    let res = await axios.get(url);
    await this.setState({ list: res.data.data.users });
    this.getList();
  };
  getList = () => {
    console.log(this.state.list);
    return this.state.list.map((item, index) => {
      console.log(item.username);
      return (
        <li key={index}>
          <span>{item.username}</span>
          <span>{item.score}</span>
        </li>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1>LeaderBoard</h1>
        <ol>{this.getList()}</ol>
      </div>
    );
  }
}

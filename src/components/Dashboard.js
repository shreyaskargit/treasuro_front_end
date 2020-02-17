import React from "react";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="userInfo">
          <p>User Name: {this.props.data.username}</p>
          <p>level: {this.props.data.level}</p>
          <p>attempts: {this.props.data.top / 2}</p>
        </div>
        <div className="question">
          <p>{this.props.question}</p>
        </div>
      </div>
    );
  }
}

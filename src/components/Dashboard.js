import React from "react";
import "./pages/css/Dashboard.css";

export default class Dashboard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="dash-box">
        <div className="userInfo">
          {/* <p>
            User Name: <span className="value">{this.props.data.username}</span>
          </p>
          <p>
            level: <span className="value">{this.props.data.level}</span>
          </p>
          <p>
            attempts left: <span className="value">{this.props.data.top / 2}</span>
          </p> */}
          <p>
            User Name: <span className="value">Shreyaskar yadav</span>
          </p>
          <p>
            level: <span className="value">2</span>
          </p>
          <p>
            attempts left:{" "}
            <span className="value">{this.props.data.top / 2}</span>
          </p>
        </div>
        <div className="question">
          {/* <p>{this.props.question}</p> */}
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
      </div>
    );
  }
}

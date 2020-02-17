import React from "react";
import { Link } from "react-router-dom";
import ToggleKnob from "../components/ToggleKnob";
import soundFile from "../TREASURO_AUDIO_FINAL.mp3";
import "./pages/css/Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mute: false,
      // value: 1,
      isOn: false
    };
    this.sidebar = React.createRef();
    this.icon = React.createRef();
    this.url = "./pages/css/assets/TREASURO_AUDIO_FINAL.mp3";
    this.audio = new Audio(this.url);
    this.audio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  }

  async componentDidMount() {
    // await this.handleClick();
  }

  displayMenu = () => {
    this.sidebar.current.style.display = "block";
  };

  handleClose = () => {
    this.sidebar.current.style.display = "none";
  };

  handleClick = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn,
      mute: !this.state.mute
    }));
    console.log(this.state);
  };

  render() {
    return (
      <>
        <nav>
          <div className="menu">
            <span className="icon" onClick={this.displayMenu}>
              &#9781;
            </span>
            <div className="sidebar" ref={this.sidebar}>
              <span
                className="close"
                ref={this.icon}
                onClick={this.handleClose}
              >
                &#215;
              </span>
              <br />
              <Link to="/home">Home</Link>
              <br />
              <span className="sound">
                Sound<span> </span>
                <span className="toggle">
                  <button
                    className={`toggleContainer ${
                      this.state.isOn ? "isActive" : ""
                    }`}
                    onClick={() => this.handleClick()}
                  >
                    <ToggleKnob isOn={this.state.isOn} />
                  </button>
                </span>
              </span>
              <br />
              <Link to="/leaderboard">LeaderBoard</Link>
              <br />
              <Link to="/rules">Rules</Link>
              <br />
              <Link to="/contact">Contact</Link>
              <p className="footer">Powered By MMIL</p>
            </div>
          </div>
        </nav>
        <header className="head"></header>
        <audio src={soundFile} loop muted={this.state.mute} />
      </>
    );
  }
}

/* <Switch
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    styles={{
                      // zIndex: 10010,
                      // width: "100px",
                      // height: "500px",
                      track: {
                        backgroundColor: "white"
                      },
                      trackChecked: {
                        backgroundColor: "blue"
                      },
                      button: {
                        backgroundColor: "blue"
                        // width: "20px",
                        // left: "100%"
                      },
                      buttonChecked: {
                        backgroundColor: "white"
                        // width: "20px"
                      }
                    }}
                  /> */

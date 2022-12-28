import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import logo from './logo.svg';
// import './App.css';
import "./style.css";

class App extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div id="quote-box">
        <div id="slot"></div>
        <div id="paper-container">
          <div id="paper">
            <i className="fa fa-quote-left"></i>
            <div id="text">
              quote text sdf
              <br />
              sd
              <br />
              sdf
            </div>
            <i className="fa fa-quote-right"></i>
            <div id="author">author here</div>
          </div>
        </div>
        <div id="slot-shadow"></div>
        <div id="buttons">
          <div className="button-well">
            <a className="btn" id="tweet-quote" href="twitter.com/intent/tweet">
              {/* <i className="fab fa-twitter-square"></i> */}
              <FontAwesomeIcon icon={"twitter-square"} />
            </a>
            <a className="btn" href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a className="btn" href="#">
              <i className="fab fa-tumblr-square"></i>
            </a>
          </div>
          <div className="button-well">
            <div className="btn">
              <i className="fas fa-eject"></i>
            </div>
            <div className="btn" id="new-quote">
              <i className="fas fa-comment-dots"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

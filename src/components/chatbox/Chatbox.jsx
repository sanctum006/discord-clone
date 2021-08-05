import React from "react";
import "./Chatbox.css";
import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
} from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/Inbox";
import SearchBar from "material-ui-search-bar";
import Hashtag from "./hashtag.png";

function Chatbox() {
  return (
    <div className="chatbox">
      <header className="chatbox__header">
        <div className="chatbox__header__left">
          <img src={Hashtag} alt="hashtag" />
          <h3>main</h3>
        </div>

        <div className="chatbox__header__right">
          <Notifications className="icons" />
          <EditLocationRounded className="icons" />
          <PeopleAltRounded className="icons" />

          <SearchBar
            // value={this.state.value}
            // onChange={(newValue) => this.setState({ value: newValue })}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
            // onChange={() => console.log("onChange")}
            // onRequestSearch={() => console.log("onRequestSearch")}
            inputProps={{
              style: {
                fontFamily: "Arial",
                color: "white",
                fontSize: "15px",
                padding: "0px",
              },
            }}
            style={{
              maxWidth: 600,
              width: 150,
              height: 25,
              backgroundColor: "#202225",
            }}
          />

          <InboxIcon className="icons" />
          <HelpRounded className="icons" />
        </div>
      </header>
    </div>
  );
}

export default Chatbox;

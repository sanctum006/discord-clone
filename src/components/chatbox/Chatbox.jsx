import React from "react";
import "./Chatbox.css";
import {
  HelpRounded,
  Notifications,
  PeopleAltRounded,
} from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/Inbox";
import SearchBar from "material-ui-search-bar";
import Hashtag from "./hashtag.png";
import Message from "./Message/Message";
import Messagebox from "./Messagebox/Messagebox";
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
          <svg
            x="0"
            y="0"
            class="icon-22AiRD"
            aria-hidden="false"
            width="24"
            height="20"
            viewBox="0 0 24 24"
            className="icons"
            transform="scale(1.25)"
            style={{ marginTop: "2px" }}
          >
            <path
              fill="currentColor"
              d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
            ></path>
          </svg>
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
      <div className="chatbox__message__section">
        <Message message="Hello world" />
        <Message message="Hello Sanctum" />
        <Message message="Chalo tumne pull karliya to ab kaam chalu kardo" />
      </div>

      <Messagebox />
    </div>
  );
}

export default Chatbox;

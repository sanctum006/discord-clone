import React from "react";
import "./Chatbox.css";
import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
} from "@material-ui/icons";
function Chatbox() {
  return (
    <div className="chatbox">
      <header className="chatbox__header">
        <div className="chatbox__header__left">
          <h3>
            <span className="chatbox__header__hash">#</span>
            main
          </h3>
        </div>

        <div className="chatHeader__right">
          <Notifications />
          <EditLocationRounded />
          <PeopleAltRounded />

          <div className="chatHeader__search">
            <input placeholder="Search" type="text" />
            <SearchRounded />
          </div>

          <SendRounded />
          <HelpRounded />
        </div>
      </header>
    </div>
  );
}

export default Chatbox;

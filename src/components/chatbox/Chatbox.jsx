import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import db from "../../firebase";

function Chatbox({ channelId, channelName }) {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  let objDiv = document.querySelector(".chatbox__message__section");

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".chatbox__message__section").scrollTop =
        document.querySelector(".chatbox__message__section").scrollHeight;
    }, 2000);
  }, []);

  // useEffect(() => {
  //   window.addEventListener("click", () => {
  //     setEmojiState((s) => -1000);
  //   });
  //   return () => {
  //     window.removeEventListener("click", () => {
  //       setEmojiState((s) => -1000);
  //     });
  //   };
  // }, []);

  return (
    <div className="chatbox">
      <header className="chatbox__header">
        <div className="chatbox__header__left">
          <img src={Hashtag} alt="hashtag" />
          <h3>{channelName}</h3>
        </div>

        <div className="chatbox__header__right">
          <svg
            x="0"
            y="0"
            class="icon-22AiRD"
            aria-hidden="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="icons"
          >
            <path
              fill="currentColor"
              d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"
            ></path>
            <path
              fill="currentColor"
              d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"
            ></path>
          </svg>
          <svg
            x="0"
            y="0"
            class="icon-22AiRD"
            aria-hidden="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="icons"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
            ></path>
          </svg>
          <svg
            x="0"
            y="0"
            class="icon-22AiRD"
            aria-hidden="false"
            width="24"
            height="20"
            viewBox="0 0 24 24"
            className="icons"
            transform="scale(1.1)"
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
        {messages
          .slice(0)
          .reverse()
          .map((message, index) => (
            <Message
              key={index}
              message={message.message}
              timestamp={message.timestamp}
              user={message.user}
            />
          ))}
        {console.log(objDiv ? (objDiv.scrollTop = objDiv?.scrollHeight) : null)}
      </div>
      <Messagebox input={input} setInput={setInput} />
    </div>
  );
}

export default Chatbox;

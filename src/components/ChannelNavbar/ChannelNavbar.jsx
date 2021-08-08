import React, { useEffect, useState } from "react";
import Channel from "../Channel/Channel";
import "./ChannelNavbar.css";
import MicOffIcon from "@material-ui/icons/MicOff";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import RealChannel from "./../Channel/RealChannel";
import db from "../../firebase";
import { auth } from "../../firebase";
function ChannelNavbar() {
  const [connected, setConnected] = useState(true);
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  const channelSection = [
    {
      name: "WELCOME",
      channels: [{ channelName: "welcome-note", type: "tc" }],
    },
    {
      name: "📢INFORMATION",
      channels: [{ channelName: "announcements", type: "tc" }],
    },
    {
      name: "GENERAL",
      type: true,
      channels: [
        { channelName: "🤘🏻main", type: "tc" },
        { channelName: "📚resources", type: "tc" },
        { channelName: "📢 Mahasabha VC", type: "vc" },
      ],
    },
  ];

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const channelss = channelSection.map((channel) => (
    <Channel
      name={channel.name}
      channels={channel.channels}
      connected={connected}
      setConnected={setConnected}
    />
  ));

  return (
    <div className="channelNavbar__container">
      <div className="channelNavbar__topConatainer">
        <p className="channelNavbar__heading">Devsnest</p>
        <button className="channelNavbar__btn">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div className="channelNavbar__middleConatainer">
        {channelss}
        {/* {channels.map(({ id, channel }) => (
          <h1 key={channel}>{channel.channelName}</h1>
        ))} */}
        <RealChannel channels={channels} />
      </div>
      {connected && (
        <div className="channelNavbar__bottomConatainer1">
          <div className="channelNavbar__vc">
            <h1 className="channelNavbar__vcConnected">
              <svg
                class="ping-2NgC8E"
                aria-hidden="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-label="42 ms"
                transform="scale(0.6)"
              >
                <path
                  d="M7.19999 18C7.19999 17.3364 6.77 16.8 6.24019 16.8H3.3598C2.82999 16.8 2.39999 17.3364 2.39999 18V20.4C2.39999 21.0636 2.82999 21.6 3.3598 21.6H6.23923C6.76904 21.6 7.19903 21.0636 7.19903 20.4V18H7.19999Z"
                  fill="currentColor"
                  class="pingForeground-2uAOZ3"
                ></path>
                <path
                  d="M14.4 10.6909C14.4 10.0876 13.9699 9.6 13.44 9.6H10.56C10.0301 9.6 9.60001 10.0876 9.60001 10.6909V20.5091C9.60001 21.1124 10.0301 21.6 10.56 21.6H13.44C13.9699 21.6 14.4 21.1124 14.4 20.5091V10.6909Z"
                  fill="currentColor"
                  class="pingForeground-2uAOZ3"
                ></path>
                <path
                  d="M21.6 3.46667C21.6 2.8768 21.1699 2.4 20.64 2.4H17.76C17.2301 2.4 16.8 2.8768 16.8 3.46667V20.5333C16.8 21.1232 17.2301 21.6 17.76 21.6H20.64C21.1699 21.6 21.6 21.1232 21.6 20.5333V3.46667Z"
                  fill="currentColor"
                  class="pingForeground-2uAOZ3"
                ></path>
              </svg>{" "}
              Voice Connected
            </h1>
            <svg
              aria-hidden="false"
              width="20"
              height="20"
              color="#B9BBBE"
              viewBox="0 0 24 24"
              style={{ cursor: "pointer", position: "relative", right: "10px" }}
              onClick={() => setConnected(false)}
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.1169 1.11603L22.8839 2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z"
              ></path>
            </svg>
          </div>
          <div className="channelNavbar__vcOptions">
            <button className="channelNavbar__btns">
              <svg
                class="buttonIcon-Od8mYw withText-10pQhr"
                aria-hidden="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                color="#B9BBBE"
              >
                <path
                  fill="currentColor"
                  d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"
                ></path>
              </svg>{" "}
              Video
            </button>
            <button className="channelNavbar__btns">
              <svg
                class="buttonIcon-Od8mYw withText-10pQhr"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#B9BBBE"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                ></path>
              </svg>{" "}
              Screen
            </button>
          </div>
        </div>
      )}
      <hr className="channelNavbar__bottomContainerLine" />
      <div className="channelNavbar__bottomConatainer">
        <div className="channelNavbar__user">
          <img
            src={user.photo}
            alt="avatar-img"
            className="channelNavbar__avatar"
          />
          <div className="channelNavbar__userInfo">
            <p>{user.displayName.split(" ")[0]}</p>
            <p className="channelNavbar__bio">Chillin'</p>
          </div>
        </div>
        <div className="channelNavbar__icons">
          <svg
            aria-hidden="false"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="icon mic"
          >
            <path
              d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
              fill="currentColor"
            ></path>
            <path
              d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"
              fill="currentColor"
            ></path>
            <path
              d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"
              fill="currentColor"
            ></path>
            <path
              d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
              class="strikethrough-1n4ekb"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            aria-hidden="false"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="icon"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
                fill="currentColor"
              ></path>
            </svg>
          </svg>
          <svg
            aria-hidden="false"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="icon settings"
            onClick={() => auth.signOut()}
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            ></path>
          </svg>
          {/* <SettingsIcon
            className="icon settings"
            onClick={() => auth.signOut()}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ChannelNavbar;

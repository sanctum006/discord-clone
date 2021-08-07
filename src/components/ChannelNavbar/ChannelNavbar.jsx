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
function ChannelNavbar() {
  const [connected, setConnected] = useState(true);
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  const channelSection = [
    {
      name: "WELCOME",
      channels: [
        { channelName: "welcome-note", type: "tc" },
        { channelName: "self-roles", type: "tc" },
        { channelName: "course-doubts", type: "tc" },
      ],
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
        { channelName: "🏢-job-posting", type: "tc" },
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
            src={user.user?.photo}
            alt="avatar-img"
            className="channelNavbar__avatar"
          />
          <div className="channelNavbar__userInfo">
            <p>{user.user?.displayName.split(" ")[0]}</p>
            <p className="channelNavbar__bio">Chillin'</p>
          </div>
        </div>
        <div className="channelNavbar__icons">
          <MicOffIcon className="icon mic" />
          <HeadsetIcon className="icon" />
          <SettingsIcon className="icon settings" />
        </div>
      </div>
    </div>
  );
}

export default ChannelNavbar;

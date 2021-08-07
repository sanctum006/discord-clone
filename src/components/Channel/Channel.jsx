import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import db from "../../firebase";
import "./Channel.css";

function Channel({
  name,
  channels,
  connected,
  setConnected,
  type,
  channelList,
}) {
  const [state, setState] = useState(true);
  const user = useSelector(selectUser);

  const addChannel = () => {
    const channelName = prompt("Enter Channel Name: ");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="channel__container">
      <h1 className="channel__containerName">
        <div onClick={() => setState(!state)}>
          <i class={`fas fa-chevron-down ${!state && "fa-rotate-270"}`}></i>{" "}
          {name}
        </div>
        {type && (
          <svg
            onClick={addChannel}
            class="circleIcon-1-oi1i"
            aria-hidden="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            transform="scale(0.8)"
          >
            <path
              fill="currentColor"
              d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
            ></path>
          </svg>
        )}
      </h1>
      {state && (
        <div className="channel__channels">
          <ul>
            {channels.map((channel) => (
              <div>
                <li
                  className="channel__channelItem"
                  onClick={() => {
                    channel.type === "vc"
                      ? setConnected(true)
                      : console.log("Nothing");
                  }}
                >
                  {channel.type === "tc" ? (
                    <i class="fas fa-hashtag"></i>
                  ) : (
                    <i class="fas fa-volume-down"></i>
                  )}
                  {channel.channelName}
                </li>
                {channel.type === "vc" && connected && (
                  <li className="channel__channelItem channel__name">
                    <img
                      src={user.user?.photo}
                      alt="avatar-img"
                      className="channel__avatar"
                    />
                    {user.user?.displayName.split(" ")[0]}
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Channel;

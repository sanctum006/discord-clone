import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import db from "../../firebase";
import { setChannelInfo } from "../../features/counter/appSlice";
import "./Channel.css";

function Channel({ channels, type, setConnected, connected }) {
  const [state, setState] = useState(true);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
          GROUPS
        </div>
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
      </h1>
      {state && (
        <div className="channel__channels">
          <ul>
            {channels.map(({ id, channel }) => (
              <div>
                <li
                  className="channel__channelItem"
                  onClick={() => {
                    dispatch(
                      setChannelInfo({
                        channelId: id,
                        channelName: channel.channelName,
                      })
                    );
                  }}
                >
                  <i class="fas fa-hashtag"></i>
                  {channel.channelName}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Channel;

import React, { useState } from "react";
import "./Channel.css";

function Channel({ name, channels, connected, setConnected }) {
  const [state, setState] = useState(true);
  console.log(channels);
  return (
    <div className="channel__container">
      <h1 onClick={() => setState(!state)} className="channel__containerName">
        <i class={`fas fa-chevron-down ${!state && "fa-rotate-270"}`}></i>{" "}
        {name}
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
                    sanctum007
                  </li>
                )}
              </div>
            ))}
            {/* {connected && <li className="channel__channelItem">sanctum007</li>} */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Channel;

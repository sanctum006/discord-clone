import React, { useState } from "react";
import "./Channel.css";

function Channel({ name, channels }) {
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
              <li className="channel__channelItem">
                {channel.type === "tc" ? (
                  <i class="fas fa-hashtag"></i>
                ) : (
                  <i class="fas fa-volume-down"></i>
                )}
                {channel.channelName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Channel;

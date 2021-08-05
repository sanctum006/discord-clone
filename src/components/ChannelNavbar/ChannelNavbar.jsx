import React from "react";
import Channel from "../Channel/Channel";
import "./ChannelNavbar.css";

function ChannelNavbar() {
  const channelSection = [
    {
      name: "WELCOME",
      channels: [
        { channelName: "welcome-note", type: "tc" },
        { channelName: "self-roles", type: "tc" },
        { channelName: "course-doubts", type: "tc" },
        { channelName: "introduction", type: "vc" },
      ],
    },
    {
      name: "📢INFORMATION",
      channels: [{ channelName: "announcements", type: "tc" }],
    },
    {
      name: "GENERAL",
      channels: [
        { channelName: "🤘🏻main", type: "tc" },
        { channelName: "📚resources", type: "tc" },
        { channelName: "🏢-job-posting", type: "tc" },
        { channelName: "📢 Mahasabha VC", type: "vc" },
      ],
    },
  ];

  const channels = channelSection.map((channel) => (
    <Channel name={channel.name} channels={channel.channels} />
  ));

  return (
    <div className="channelNavbar__container">
      <div className="channelNavbar__topConatainer">
        <p className="channelNavbar__heading">Devsnest</p>
        <button className="channelNavbar__btn">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div className="channelNavbar__middleConatainer">{channels}</div>
      <div className="channelNavbar__bottomConatainer">
        <div className="channelNavbar__user">
          <img
            src="https://i.pinimg.com/736x/ef/de/78/efde78cc09aeece4b344c689b6e84ead.jpg"
            alt="avatar-img"
            className="channelNavbar__avatar"
          />
          <div className="channelNavbar__userInfo">
            <p>sanctum007</p>
            <p className="channelNavbar__bio">Chillin'</p>
          </div>
        </div>
        <div className="channelNavbar__icons">
          <i class="fas fa-microphone-slash"></i>
          <i class="fas fa-headphones-alt"></i>
          <i class="fas fa-cog"></i>
        </div>
      </div>
    </div>
  );
}

export default ChannelNavbar;

import React from "react";
import ServerIcon from "../ServerIcon/ServerIcon";
import "./ServerNavbar.css";

function ServerNavbar() {
  const serverArr = [
    {
      name: "Devsnest",
      icon: "https://cdn.discordapp.com/attachments/872515846625439824/872547070144299028/devsnest-logo.png",
    },
    {
      name: "Major League Hacking",
      icon: "data:image/png;base64,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",
    },
  ];

  const servers = serverArr.map((server) => (
    <ServerIcon name={server.name} imgUrl={server.icon} />
  ));
  return (
    <div className="serverNavbar__container">
      <div className="serverIcon__homeContainer tooltip" title="Home">
        <img
          src="https://cdn.discordapp.com/attachments/872515846625439824/872551512495255572/images-removebg-preview.png"
          alt=""
          className="serverIcon__home"
        />
        <span class="tooltiptext">Home</span>
        <span class="tt-border"></span>
      </div>
      <hr className="serverNavbar__line" />
      {servers}
      <div
        className="serverIcon__homeContainer tooltip serverIcon__nav"
        title="Home"
      >
        <svg
          class="circleIcon-1-oi1i"
          aria-hidden="false"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
          ></path>
        </svg>
        <span class="tooltiptext">Add a server</span>
        <span class="tt-border"></span>
      </div>
      <div className="serverIcon__homeContainer tooltip serverIcon__nav">
        <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
          ></path>
        </svg>
        <span class="tooltiptext">Explore Public Servers</span>
        <span class="tt-border"></span>
      </div>
    </div>
  );
}

export default ServerNavbar;

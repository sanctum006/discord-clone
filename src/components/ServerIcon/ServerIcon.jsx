import React from "react";
import "./ServerIcon.css";

function ServerIcon({ name, imgUrl }) {
  console.log(imgUrl);
  return (
    <div
      className="serverIcon__container tooltip"
      style={{ backgroundImage: `url("${imgUrl}")` }}
      title={name}
    >
      <span class="tooltiptext">{name}</span>
      <span class="serverIcon__serverIconBorder"></span>
      {/* <img src={imgUrl} alt="" className="serverIcon__img" /> */}
    </div>
  );
}

export default ServerIcon;

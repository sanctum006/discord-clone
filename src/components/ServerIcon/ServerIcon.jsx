import React from "react";
import "./ServerIcon.css";

function ServerIcon({ name, imgUrl }) {
  console.log(imgUrl);
  return (
    <div
      className="serverIcon__container"
      style={{ backgroundImage: `url("${imgUrl}")` }}
      title={name}
    >
      {/* <img src={imgUrl} alt="" className="serverIcon__img" /> */}
    </div>
  );
}

export default ServerIcon;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import db from "../../firebase";
import { setChannelInfo } from "../../features/counter/appSlice";
import "./Channel.css";
import { Modal } from "@material-ui/core";

function Channel({ channels, type, setConnected, connected }) {
  const [state, setState] = useState(true);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [channelName, setChannelName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addChannel = () => {
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
      setChannelName("");
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
          onClick={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="middle"
      >
        <div className="modal__container">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "10px",
              color: "white",
            }}
          >
            <svg
              onClick={handleClose}
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ cursor: "pointer" }}
              className="cross"
            >
              <path
                fill="currentColor"
                d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
              ></path>
            </svg>
          </div>
          <div className="modal__topContainer">
            <h1>Create Text Channel</h1>
            <p>in General Channels</p>
          </div>
          <div className="modal__middleContainer">
            <h1>CHANNEL NAME</h1>
            <div className="modal__middleContainerInpBox">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                class="inputPrefix-1gzNds"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                ></path>
              </svg>
              <input
                type="text"
                value={channelName}
                placeholder="new-channel"
                onChange={(e) => setChannelName(e.target.value)}
              />
            </div>
          </div>
          <div className="modal__bottomContainer">
            <span onClick={handleClose} style={{ cursor: "pointer" }}>
              Cancel
            </span>
            <button
              onClick={() => {
                handleClose();
                addChannel();
              }}
            >
              Create Channel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Channel;

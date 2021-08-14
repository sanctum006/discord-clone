import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GifIcon from "@material-ui/icons/Gif";
import firebase from "firebase";
import "./Messagebox.css";
import db from "../../../firebase";
import { useSelector } from "react-redux";
import {
  selectChannelId,
  selectChannelName,
} from "../../../features/counter/appSlice";
import { selectUser } from "../../../features/counter/userSlice";
import Emoji from "../Emoji/Emoji";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "97%",
    margin: "0 auto",
    marginBottom: "20px",
    background: "#40444B",
    borderRadius: "8px",
    boxSizing: "border-box",
    color: "white",
    height: "45px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "white",
    fontSize: "1rem",
  },
  inputPlaceholder: {
    color: "#627178",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  GifIcon: {
    background: "#B9BBBE",
    color: "white",
  },
}));

export default function Messagebox({ input, setInput }) {
  const classes = useStyles();
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);
  const [chosenEmoji, setChosenEmoji] = useState({ emoji: "" });
  const [state, setState] = useState(false);

  let objDiv = document.querySelector(".chatbox__message__section");

  const sendMessage = (e) => {
    e.preventDefault();

    if (input) {
      db.collection("channels").doc(channelId).collection("messages").add({
        message: input,
        user: user,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };

  const changeState = () => {
    setState((s) => !s);
  };
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUploaded);
    console.log(fileUploaded);
  };
  return (
    <div>
      {state && (
        <div style={{ position: "absolute", bottom: "80px", right: "20px" }}>
          <Emoji
            chosenEmoji={chosenEmoji}
            setChosenEmoji={setChosenEmoji}
            input={input}
            setInput={setInput}
          />
        </div>
      )}

      <Paper component="form" className={classes.root} onSubmit={sendMessage}>
        <IconButton
          className={classes.iconButton}
          aria-label="menu"
          onClick={handleClick}
        >
          <AddCircleIcon className="icons" />
        </IconButton>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <InputBase
          className={classes.input}
          placeholder={`Message #${channelName}`}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <i class="fas fa-gift icons gift"></i>
        </IconButton>
        {/* <Divider className={classes.divider} orientation="vertical" /> */}
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <svg
            width="24"
            height="24"
            class="icon-3D60ES"
            aria-hidden="false"
            viewBox="0 0 24 24"
            className="icons"
          >
            <path
              fill="currentColor"
              d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"
            ></path>
          </svg>
        </IconButton>
        {/* <Divider className={classes.divider} orientation="vertical" /> */}
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <svg
            width="24"
            height="24"
            class="stickerIcon-3TP7EM"
            aria-hidden="false"
            viewBox="0 0 20 20"
            className="icons sticker"
          >
            <path
              fill="currentColor"
              class=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"
            ></path>
            <path
              fill="currentColor"
              class="hidden-vu5JrP"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"
            ></path>
          </svg>
        </IconButton>
        {/* <Divider className={classes.divider} orientation="vertical" /> */}
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <i onClick={changeState} class="fas fa-smile-beam icons emoji"></i>
        </IconButton>
        {/* <Divider className={classes.divider} orientation="vertical" /> */}
        {/* <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <Emoji className="icons emoji" />
      </IconButton> */}
      </Paper>
    </div>
  );
}

import React from "react";
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

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={sendMessage}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <AddCircleIcon className="icons" />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder={`Message #${channelName}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
        <GifIcon className="iconsmb" />
      </IconButton>
      {/* <Divider className={classes.divider} orientation="vertical" /> */}
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <i class="far fa-sticky-note icons sticker"></i>
      </IconButton>
      {/* <Divider className={classes.divider} orientation="vertical" /> */}
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <i class="fas fa-smile-beam icons emoji"></i>
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
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GifIcon from "@material-ui/icons/Gif";
import "./Messagebox.css";
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

export default function Messagebox() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <AddCircleIcon className="icons" />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Message #main"
        inputProps={{ "aria-label": "Message #main" }}
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
    </Paper>
  );
}

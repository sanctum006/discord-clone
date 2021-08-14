import React, { useEffect, useState } from "react";
import Picker from "emoji-picker-react";
import "./Emoji.css";
function Emoji({ chosenEmoji, setChosenEmoji, input, setInput }) {
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  useEffect(() => {
    setInput(`${input}${chosenEmoji.emoji}`);
  }, [chosenEmoji]);

  return (
    <div style={{ backgroundColor: "red" }}>
      {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )} */}
      <Picker onEmojiClick={onEmojiClick} className="picker" />
    </div>
  );
}

export default Emoji;

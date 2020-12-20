import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const handleInputChange = (e) => {
    const meaning = emojiDictonary[e.target.value];
    // console.log(emojiMeaning);

    if (emojiMeaning === undefined) {
      setEmojiMeaning("Emoji is not in our database");
    }

    setEmojiMeaning(meaning);
  };

  const handleEmojiCLick = (emoji) => {
    const meaning = emojiDictonary[emoji];
    setEmojiMeaning(meaning);
  };

  const emojiDictonary = {
    "😉": "Winking Face",
    "😀": "Grinning Face",
    "🤣": "Rolling on the Floor Laughing",
    "🤩": "Star-Struck",
    "😪": "Sleepy Face",
    "😂": "Face with Tears of Joy"
  };

  const emojiList = Object.keys(emojiDictonary);

  return (
    <div className="App">
      <input placeholder="Insert emoji" onChange={handleInputChange} />
      <h2>{emojiMeaning}</h2>
      <h3>Emojis We Know:</h3>
      {emojiList.map((emoji) => (
        <span
          key={emoji}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => handleEmojiCLick(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}

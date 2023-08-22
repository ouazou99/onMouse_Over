import React, { useState } from "react";

function App(props) {
  const [headingText, setHeadingText] = useState("hello");
  const [isMouse, setIsMouse] = useState(false);

  function handleText() {
    setHeadingText("SUBMITTED");
    setIsMouse(true);
  }
  function hand() {
    setIsMouse(true);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouse ? "white" : "black" }}
        onMouseOver={handleText}
        onClick={hand}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

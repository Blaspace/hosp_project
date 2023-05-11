import React from "react";

function Popup({ message, setMessage }) {
  return (
    message && (
      <div className="status-con">
        <div className="status">
          <h1>!</h1>
          <p>{message}</p>
          <button
            className="status-button"
            onClick={() => setMessage(undefined)}
          >
            OK
          </button>
        </div>
      </div>
    )
  );
}

export default Popup;

import React from "react";

function Note(props) {
  const NObject = props.NObject;
  return (
    <div className="note">
      <h1> {NObject[0]} </h1>
      <p> {NObject[1]} </p>
      <a target="_blank" rel="noreferrer" href={NObject[2]}>
        <button>Click</button>
      </a>
    </div>
  );
}

export default Note;

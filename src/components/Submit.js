import React, { useState } from "react";
import firebase from "./firebase";

const Submit = ({ errors, time, handleRestart }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length !== 0) {
      const scoresRef = firebase.database().ref("scores");
      const score = {
        name: name,
        time: time,
        errors: errors,
      };
      scoresRef.push(score);
      
      handleRestart();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        minLength="3"
        maxLength="16"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value=">" />
    </form>
  );
};

export default Submit;

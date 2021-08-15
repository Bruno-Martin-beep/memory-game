import React, { useState } from "react";
import firebase from "./firebase";

const Submit = ({ errors, time, setIsFinished, isFinished }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length !== 0) {
      const scoresRef = firebase.database().ref("scores");
      const score = {
        name: name,
        time: time,
        errors: errors,
      };
      scoresRef.push(score);
      setIsFinished(false);
    }
  };

  return (
    <div className={`submit-bg ${isFinished && "is-active"}`}>
      <div className="submit-cont">
        <h2 className="submit-margin">CONGRATULATIONS!</h2>
        <div className="contBar-info submit-margin">
          <p className="aling-names">TIME:</p>
          <p className="orbit mainTime">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            <span className="orbit mili-sec">
              :{("0" + ((time / 10) % 100)).slice(-2)}
            </span>
          </p>
          <p className="aling-names">ERRORS:</p>
          <p className="orbit errorsInfo">{errors}</p>
        </div>
        <form className="submit-margin submit-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            minLength="3"
            maxLength="16"
            className="submit-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" value=">" className={`submit-check ${ isFinished && name.length >= 3 && name.length <= 16 && 'is-active' }`} />
        </form>
      </div>
    </div>
  );
};

export default Submit;

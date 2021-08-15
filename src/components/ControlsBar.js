import React from "react";

const ControlsBar = ({ time, errors, handlePause, handleRestart }) => {
  return (
    <div className="contBar-cont">
      <div className="contBar-info">
        <p className="aling-names">TIME:</p>
        <p className="orbit mainTime">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            :{("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          <span className="orbit mili-sec">
            :{("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </p>
        <p className="aling-names">ERRORS:</p>
        <p className="orbit errorsInfo">{errors}</p>
      </div>
      <div className="contBar">
        <h3 className="pause contBar-buttons" onClick={handlePause}>PAUSE</h3>
        <h3 className="contBar-buttons" onClick={handleRestart}>RESTART</h3>
      </div>
    </div>
  );
};

export default ControlsBar;

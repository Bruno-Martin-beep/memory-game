import React from "react";

const ControlsBar = ({ time, errors, handleRestart }) => {
  return (
    <div className="contBar-cont">
      <div className="contBar-info">
        <p className="aling-names contbar-item">TIME:</p>
        <p className="digi mainTime contbar-item">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
          <span className="digi-nm">:</span>
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          <span className="digi mili-sec">
            <span className="digi-nm">:</span>
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </p>
        <p className="aling-names contbar-item">ERRORS:</p>
        <p className="digi mili-sec contbar-item errorsInfo">{errors}</p>
      </div>
      <div className="contBar">
        <h3 className="contbar-item restart" onClick={handleRestart}>
          RESTART
        </h3>
      </div>
    </div>
  );
};

export default ControlsBar;

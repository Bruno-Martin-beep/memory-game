import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTime, selectTime, selectErrors, selectIsPlaying } from "../features/timerSlice";

const ControlsBar = ({ handleRestart }) => {
  const time = useSelector(selectTime);
  const errors = useSelector(selectErrors);
  const isPlaying = useSelector(selectIsPlaying);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      interval = setInterval(() => {
        dispatch(addTime());
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, dispatch]);

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

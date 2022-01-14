import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTime,
  cleartime,
  clearErrors,
  togglePlaying,
  selectTime, 
  selectErrors, 
  selectIsPlaying
} from "../features/timerSlice";
import { 
  setAllcards, 
  setObserver1, 
  setObserver2,
  setIsFinished,
} from "../features/cardListSlice";
import items from "./items";
import gsap from "gsap";

const ControlsBar = ({ doubleAndRandomlyItems }) => {
  const dispatch = useDispatch();
  const time = useSelector(selectTime);
  const errors = useSelector(selectErrors);
  const isPlaying = useSelector(selectIsPlaying);

  const handleRestart = () => {
    gsap.to(".card-left", 0.2, { x: "0" });
    gsap.to(".card-right", 0.2, { x: "0" });
    gsap.to(".card-name-span", 0.2, {
      y: "50%",
      opacity: 0,
      ease: "power1.out",
      skewY: 0,
    });
    let reset = setTimeout(() => {
      dispatch(cleartime());
      dispatch(clearErrors());
      dispatch(togglePlaying(false));
      dispatch(setIsFinished(false))
      dispatch(setAllcards(doubleAndRandomlyItems(items)));
      dispatch(setObserver1(null));
      dispatch(setObserver2(null));
    }, 200);
    return () => clearTimeout(reset);
  };

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

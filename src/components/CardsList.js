import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addError,
  togglePlaying,
  selectIsPlaying,
} from "../features/timerSlice";
import { 
  toggleActive, 
  setObserver1, 
  setObserver2,
  selectObserver1, 
  selectObserver2, 
  selectIsFinished 
} from "../features/cardListSlice";

import left from "../assets/left.webp";
import right from "../assets/right.webp";
import gsap from "gsap";

const CardsList = ({ cardsList }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  const observer1 = useSelector(selectObserver1);
  const observer2 = useSelector(selectObserver2);
  const isFinished = useSelector(selectIsFinished);
  

  const handleSelect = (value) => {
    if (
      !value.active &&
      (observer1 === null || observer2 === null) &&
      !isFinished
    ) {
      if (!isPlaying) {
        dispatch(togglePlaying(true));
      }
      if (observer1 === null) {
        dispatch(toggleActive({ id: value.id, active: true }))
        gsap.to(".card-left-" + value.id, 0.2, { x: "-100%" });
        gsap.to(".card-right-" + value.id, 0.2, { x: "101%" });
        gsap.to(".card-name-span-" + value.id, 0.2, {
          y: "0",
          opacity: 1,
          ease: "power1.out",
          skewY: -10,
        });
        return dispatch(setObserver1(value));
      } else {
        dispatch(toggleActive({ id: value.id, active: true }))
        gsap.to(".card-left-" + value.id, 0.2, { x: "-100%" });
        gsap.to(".card-right-" + value.id, 0.2, { x: "101%" });
        gsap.to(".card-name-span-" + value.id, 0.2, {
          y: "0",
          opacity: 1,
          ease: "power1.out",
          skewY: -10,
        });
        return dispatch(setObserver2(value));
      }
    }
  };

  useEffect(() => {
    const resetItems = () => {
      gsap.to(".card-left-" + observer1.id, 0.2, { x: "0" });
      gsap.to(".card-right-" + observer1.id, 0.2, { x: "0" });
      gsap.to(".card-name-span-" + observer1.id, 0.2, {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 0,
      });

      let revomeImg1 = setTimeout(() => {
        dispatch(toggleActive({ id: observer1.id, active: false }))
      }, 200);

      dispatch(setObserver1(null));

      gsap.to(".card-left-" + observer2.id, 0.2, { x: "0" });
      gsap.to(".card-right-" + observer2.id, 0.2, { x: "0" });
      gsap.to(".card-name-span-" + observer2.id, 0.2, {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 0,
      });

      let revomeImg2 = setTimeout(() => {
        dispatch(toggleActive({ id: observer2.id, active: false }))
      }, 200);
      dispatch(setObserver2(null));

      dispatch(addError())

      return () => clearTimeout(revomeImg1, revomeImg2);
    };

    if (observer1 !== null && observer2 !== null) {
      if (observer1.name === observer2.name) {
        dispatch(setObserver1(null));
        dispatch(setObserver2(null));
      } else {
        let close = setTimeout(resetItems, 500);

        return () => clearTimeout(close);
      }
    }
  }, [observer1, observer2, dispatch]);

  const mouseMoveAnim = (e) => {
    const clamp = (min, value, max) => {
      return Math.max(min, Math.min(value, max));
    };
    const position = e.currentTarget.getBoundingClientRect();

    const xPos = ((clamp(position.left, e.clientX, position.right) - position.left) / position.width)  - 0.5;
    
    const yPos = ((clamp(position.top, e.clientY, position.bottom) - position.top) / position.width)  - 0.5;

    gsap.to(e.currentTarget, {
      duration: 0.1,
      rotationY: 30 * xPos,
      rotationX: -30 * yPos,
      ease: "power1.inOut",
      x: 10 * xPos,
      y: 10 * yPos,
      // transformPerspective: 900,
      transformOrigin: "center",
    });
  };

  const leaveAnim = (e) => {
    gsap.to(e.currentTarget, {
      delay: 0.1,
      duration: 0.4,
      rotationY: 0,
      rotationX: 0,
      x: 0,
      y: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <div className="cardsList">
      {cardsList.map((elem, i) => {
        return (
          <div className="card" key={i} onClick={() => handleSelect(elem)}>
            <div className="card-img">
              {elem.active && (
                <img
                  className="card-bg"
                  src={elem.urlBg}
                  alt={elem.name}
                  onMouseOver={mouseMoveAnim}
                  onMouseMove={mouseMoveAnim}
                  onMouseLeave={leaveAnim}
                />
              )}
              <img
                className={`card-left ${"card-left-" + elem.id}`}
                src={left}
                alt="nerv-left"
              />
              <img
                className={`card-right ${"card-right-" + elem.id}`}
                src={right}
                alt="nerv-right"
              />
            </div>
            <p className="card-name">
              <span className={`card-name-span ${"card-name-span-" + elem.id}`}>
              {elem.active && elem.name}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardsList;

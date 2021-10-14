import React from "react";
import left from "../assets/left.png";
import right from "../assets/right.png";
import gsap from "gsap";

const CardsList = ({ cardsList, handleSelect }) => {
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
          <div className="card" key={i} onClick={(elem) => handleSelect(elem)}>
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

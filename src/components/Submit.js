import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import gsap from "gsap";
import Confetti from "react-confetti";

const Submit = ({ errors, time, setIsFinished, isFinished, gameIsActive }) => {
  const [name, setName] = useState("");
  const [runConfetti, setRunConfetti] = useState(false);
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  useEffect(() => {
    const getSize = () => {
      return setSize({ x: window.innerWidth, y: window.innerHeight });
    };
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length !== 0 && isFinished) {
      const scoresRef = firebase.database().ref("scores");
      const score = {
        name: name,
        time: time,
        errors: errors,
      };
      scoresRef.push(score);

      gsap.to(".submit-bg", 2, {
        opacity: 0,
        ease: "power1.out",
        autoAlpha: 0,
        onComplete: () => {
          setRunConfetti(false);
        },
      });
      gameIsActive();
      setIsFinished(false);
    }
  };

  const handleCancel = () => {
    gsap.to(".submit-bg", 2, {
      opacity: 0,
      ease: "power1.out",
      autoAlpha: 0,
      onComplete: () => {
        setRunConfetti(false);
      },
    });
    gameIsActive();
    setIsFinished(false);
  }

  useEffect(() => {
    if (isFinished) {
      const submitrev = gsap.timeline();
      submitrev
        .to(".submit-bg", 1, {
          opacity: 1,
          ease: "power1.out",
          visibility: "inherit",
          autoAlpha: 0,
          onComplete: setRunConfetti(true),
        })
        .from(".submit-title", 1, {
          y: "140%",
          ease: "power4.out",
          skewY: 5,
        })
        .from(".submit-item", 1, {
          y: "50%",
          opacity: 0,
          ease: "power1.out",
          skewY: 2.5,
          stagger: {
            amount: 1,
          },
        });
        gsap.from(".cancel", 1, {
          y: "50%",
          opacity: 0,
          ease: "power1.out",
          skewY: 2.5,
          delay: 1,
        });
      return () => submitrev.kill();
    }
  }, [isFinished]);

  useEffect(() => {
    if (name.length >= 3 && name.length <= 16) {
      gsap.to(".submit-check", 0.5, {
        x: "0",
        opacity: 1,
        cursor: "pointer",
      });
    } else {
      gsap.to(".submit-check", 0.5, {
        x: "-50%",
        opacity: 0,
        cursor: "auto",
      });
    }
  }, [name]);

  return (
    <div className="submit-bg">
      <div className="confetti">
        {runConfetti && (
          <Confetti
            width={size.x}
            height={size.y}
            colors={["#cccccc", "#999999", "#666666", "#333333"]}
            numberOfPieces={50}
          />
        )}
      </div>
      <p className="cancel" onClick={handleCancel}>CANCEL</p>
      <div className="submit-cont">
        <h2 className="submit-margin">
          <a className="submit-title" target="_blank" href="https://www.youtube.com/watch?v=oyFQVZ2h0V8" rel="noreferrer">CONGRATULATIONS!</a>
          {/* <span className="submit-title">CONGRATULATIONS!</span> */}
        </h2>
        <div className="contBar-info submit-margin">
          <p className="aling-names submit-item">TIME:</p>
          <p className="digi mainTime submit-item">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            <span className="digi-nm">:</span>
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            <span className="digi mili-sec">
              <span className="digi-nm">:</span>
              {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
          </p>
          <p className="aling-names submit-item">ERRORS:</p>
          <p className="digi mili-sec submit-item errorsInfo">{errors}</p>
        </div>
        <form
          className="submit-margin submit-form submit-item"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            minLength="3"
            maxLength="16"
            className="submit-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" value=">" className={`submit-check `} />
        </form>
      </div>
    </div>
  );
};

export default Submit;

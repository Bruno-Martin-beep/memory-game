import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Scorelist = () => {
  const [scoresList, setScoresList] = useState([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch(".score-child", {
      scroller: ".game",
      batchMax: 4,
      start: "top 96%",
      end: "top top",
      onEnter: (batch) =>
        gsap.to(batch, {
          y: "0",
          opacity: 1,
          ease: "power1.out",
          skewY: -10,
          duration: 1,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          y: "50%",
          opacity: 0,
          ease: "power1.out",
          skewY: 0,
          duration: 1,
        }),
      markers: true,
    });
  }, [scoresList]);

  useEffect(() => {
    const scoresRef = firebase.database().ref("scores");
    scoresRef.on("value", (snapshot) => {
      const scores = snapshot.val();

      const scoreList = [];

      for (let id in scores) {
        scoreList.push(scores[id]);
      }

      scoreList.sort((a, b) => a.time - b.time);

      scoreList.forEach((elem, index) => (elem.rank = index + 1));

      setScoresList(scoreList);
    });
  }, []);

  return (
    <div className="scores-cont">
      <h3 className="epil score-name">SCORES</h3>
      <div className="scores">
        <p className="scores-title score-child">RANK</p>
        <p className="scores-title score-child">TIME</p>
        <p className="scores-title score-child">NAME</p>
        <p className="scores-title score-child">ERRORS</p>
        {scoresList.map((elem) => {
          return (
            <React.Fragment key={elem.rank + elem.time}>
              <p className="digi scores-item score-child">{elem.rank}º</p>
              <p className="digi scoreTime scores-item score-child">
                {("0" + Math.floor((elem.time / 60000) % 60)).slice(-2)}
                <span className="digi-nm">:</span>
                {("0" + Math.floor((elem.time / 1000) % 60)).slice(-2)}
                <span className="digi score-mili-sec">
                  <span className="digi-nm">:</span>
                  {("0" + ((elem.time / 10) % 100)).slice(-2)}
                </span>
              </p>
              <p className="scores-item score-child">{elem.name}</p>
              <p className="digi scores-item score-child">{elem.errors}</p>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Scorelist;
